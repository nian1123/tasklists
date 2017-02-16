function listenEnvent(){
	$(document).click(function(e){
	    $('form.list-content').removeClass('show').addClass('hidden');
		textToggle();
	})
	//展开细节
	$('input.task-text').click(function(event){
	    event.stopPropagation();
	    $('form.list-content').removeClass('show').addClass('hidden');
		$(this).parent().removeClass('hidden').addClass('show');
		textToggle();
		//设置只有一行文字时的行距与input一样
		var line = $(this).next('div.detail-text').innerHeight();
		if(line  == 41) {
			$(this).next('div.detail-text').css({
				"line-height":"39px"
			})
		}
	})

	$('div.detail-text').click(function(event){
	    event.stopPropagation();
	    $('form.list-content').removeClass('show').addClass('hidden');
		$(this).parent().removeClass('show').addClass('hidden');
		textToggle();
	})
	
	//复选框选中之后
	$("input[type='checkbox']").click(function(){
		var num = $("input[type='checkbox']").index($(this));
		//设置‘选择完成’之后的样式
		if ($(this).is(':checked')) {
			$(this).removeClass('notcheck').addClass('checked'),
			$(this).parent('.list-content').next('.operation').children('img.eaditImg').removeClass('show').addClass('hidden');
			$(this).parent('.list-content').next('.operation').children('img.closeImg').removeClass('hidden').addClass('show');
			//将ischeck值写入taskList数组
			taskList[num].ischecked = "true";
		} else {
			$(this).removeClass('checked').addClass('notcheck'),
			$(this).parent('.list-content').next('.operation').children('img.eaditImg').removeClass('hidden').addClass('show');
			$(this).parent('.list-content').next('.operation').children('img.closeImg').removeClass('show').addClass('hidden');
			taskList[num].ischecked = "false";
		}
		transfStyle(taskList[num].ischecked);
		store.set('tasks',taskList);
	})	

	//删除任务
	$('img.closeImg').click(function(){
		var num = $("img.closeImg").index($(this));
		$(this).parents('section.list').remove();
		if(num >-1){
			taskList.splice(num,1); 
		}
		store.set('tasks',taskList);
	})

	$('img.eaditImg').click(function(){

		var num = $("img.eaditImg").index($(this));
		var $input = $(this).parent().prev().children('input.task-text');
		var value = taskList[num].content;
		$input.removeAttr('readonly');
		$input.focus().val(value);
	})

	
	//input输入框的回车事件
	$('input.task-text').keypress(function(e){
		e.preventDefault();
		var num = $("input.task-text").index($(this));
		$(this).attr('readonly','true').attr('value',$(this).val());
		taskList[num].content = $(this).val();
		store.set('tasks',taskList);
	})
	$('input.task-text').blur(function(){
		$('input.task-text').keypress();
	})
}
