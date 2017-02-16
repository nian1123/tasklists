function loadList(tasks) {
	if (tasks.length) {
		for (var i = 0; i < tasks.length; i++) {
			showList(tasks[i].content,tasks[i].ischecked);
		}
	}
	
}
function showList(data,check) {
	
	//判斷當前任務是否标记为完成
	if(check == "true") {
		ischeck = "checked";  //复选框为选上
		showEadit = "hidden"; //图片不显示
		showClose = "show";		//图片显示
	} else {
		ischeck = "notcheck";
		showEadit = "show";
		showClose = "hidden";	
	}
	//插入代碼段
	var listTemplate = "<section class='list row'  title='.roundedTwo'>  <form class='col-sm-12 list-content hidden ' >"
						+"<input type='checkbox' class='checkbox "
						+ ischeck+"'  name='check'  /><input type='text' class='form-control task-text' readOnly='true' value='"
						+ data+"'/><div class='detail-text'>"
						+ data+"</div></form><div class='operation'>"
						+"<img class='eaditImg "+ showEadit+"' src='dist/img/eadit.png'>"
						+"<img class='closeImg "+ showClose+"' src='dist/img/close.png'>"
						+"</div></section>";
	$('#tasks-lists').prepend(listTemplate);

	$('.list').hover(function(){
		$(this).css({"background":"#f4f4f4"})
	},function(){
		$(this).css({"background":"#fff"})
	});
	$('section.list').css({
		"background":"#fff",
		"display": "flex",
		"flex-flow": "row nowrap",
		"justify-content": "space-between",
		"border-bottom":"1px solid #ededed",
		"cursor":"pointer",
		"font-size":"16px",

	});
	$('.checkbox').css({
		"position": "absolute",
		"top": "14.5px",
		"right": "none",
		"bottom": "none",
		"left": "20px",
	})
	$('form.list-content').css({
		"width":"100%"
	});
	$('.task-text').css({
		"width":"95%",
		"margin-left":"20px",
		"padding":"1px 20px",
		"cursor":"pointer",
		"line-height":"39px",
		"font-size":"16px",
		"border":"none",
		"background":"transparent",
	});
	
	$(".detail-text").css({
		"width":"95%",
		"margin-left":"20px",
		"display":"none",
		"padding":"0 20px",
		"cursor":"pointer",
		"min-height":"41px",
	});
	
	$('.operation').css({"position":"relative"});
	$('img').css({
		// "padding": "0 5px",
		"width":"26px",
		"height":"26px"
	})
	$('.eaditImg,.closeImg').css({
		"position":"absolute",
		"top": "11px",
		"right": "2px",
		"padding":"3px"
	})
	
	$('input.checked').attr('checked',true);
	transfStyle(check);	
};
