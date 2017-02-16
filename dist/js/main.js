document.body.onload = task;

var taskList = [];
var wholeData = '';


function task(){
	init();
	inputtask();
	loadList(taskList);
	listenEnvent();
}
	// taskList =[
	// 	{
			// "id":0
	// 		"content":"text0",
	// 		"ischecked":"false"
	// 	},
	// 	{
			// "id":1
	// 		"content":"text1",
	// 		"ischecked":"true"
	// 	},
	// 	{
			// "id":2
	// 		"content":"text2",
	// 		"ischecked":"false"
	// 	}
	// ]

function init() {
	//初始化taskList數組，storage裏面的數據放入taskList中
	if (store.get('tasks')) {
		taskList = store.get('tasks');
	}
	$("#taskInput").focus();

	// store.clear();
}

function inputtask() {
	$('.input-list').on('submit',function(e){
		e.preventDefault(); 		//阻止表单submit的自动跳转行为
		var value = $(this).find("input[name='taskInput']").val();
		if (value !=""){
			showList(value);
			taskList.push({
				"content":value,
				"ischecked":"false"
			});
			store.set('tasks', taskList);
		}
		//清空input裏的值
		$(this).find("input[name='taskInput']").val('');
		//調用事件監聽函數
		listenEnvent();
	});

}
