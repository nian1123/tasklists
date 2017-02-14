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
	var listTemplate = "<section class='list'  title='.roundedTwo'>  <form class='list-content hidden' >"
						+"<input type='checkbox' class='"
						+ ischeck+"'  name='check'  /><input type='text' class='task-text' readOnly='true' value='"
						+ data+"'/><div class='detail-text'>"
						+ data+"</div></form><div class='operation'>"
						+"<img class='eaditImg "+ showEadit+"' src='img/eadit.png'>"
						+"<img class='closeImg "+ showClose+"' src='img/close.png'>"
						+"</div></section>";
	$('#tasks-lists').append(listTemplate);

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
	$('form.list-content').css({
		"width":"100%"
	});
	$('.task-text').css({
		"width":"88%",
		"margin":"0 43px 0 20px",
		"cursor":"pointer",
		"line-height":"39px",
		"font-size":"16px",
		"border":"none",
		"background":"transparent",
	});
	
	$(".detail-text").css({
		"width":"88%",
		"margin":"0 43px 0 20px",
		"display":"none",
	
		"cursor":"pointer",
		"min-height":"41px",
	});
	
	$('.operation').css({"position":"relative"});
	$('img').css({
		// "padding": "0 5px",
		"width":"20px",
		"height":"20px"
	})
	$('.eaditImg,.closeImg').css({
		"position":"absolute",
		"top": "12px",
		"right": "2px",
		
	})
	
	$('input.checked').attr('checked',true);
	transfStyle(check);	
};
