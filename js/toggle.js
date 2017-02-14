function transfStyle(check) {
	
	$('.checked').nextAll().css({
		"color":"#8f8f8f",
		"text-decoration":"line-through",
	})
	$('.notcheck').nextAll().css({
		"color":"#222",
		"text-decoration":"none" 
	})
	$('img.show').css({
		"display":"inline-block"
	})
	$('img.hidden').css({
		"display":"none"
	})
}
function textToggle(){
	$('form.hidden').children('div.detail-text').css({
		"display":"none",
	});
	$('form.hidden').children('input.task-text').css({
		"display":"inline-block",
	});
	$('form.show').children('div.detail-text').css({
		"display":"inline-block",
	});
	$('form.show').children('input.task-text').css({
		"display":"none",
	})
}


