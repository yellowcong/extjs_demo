
//定义控制
Ext.define("AM.controller.UserController",{
	//继承于Ext.app.Controller
	extend:"Ext.app.Controller",
	//定义 操作，这个就是我们经常接触到的控制操作
	init:function(){
		this.control({
			//里面定义按钮的操作方法
			//userslist 是面板对象
			//通过id找到我们的button
			//后面定义的是一个操作集合
			"userslist button[id='btn_delete']":{
				click:function(btn){
					//反悔对象Object { xtype: "button", text: "删除", id: "btn_delete", iconCls: "table_delete", initialConfig: Object, events: Object, componentLayout: Object, componentCls: "x-btn", protoEl: null, renderData: Object, 等 35 项… }
//					console.log(obj);
//					console.log(obj.text);
					
					//获取选择面板
					var grid = btn.ownerCt.ownerCt;
					
					//获取所有 对象 store
					var stors = grid.getStore();
					
					//获取被选择的对象
			      	var data_select = grid.getSelectionModel().getSelection();
			      	
			      	//判断数据是否选中
			      	if(data_select.length ==0){
			      	
			      		Ext.MessageBox.alert("警告","请选择元素")
			      	}else{
			      		
			      		//获取添加的数据
			      		var names = [];
			      		Ext.each(data_select,function(date){
			      			names.push(date.raw.name);
			      		});
			      		console.log(names.join(","));
			      		
			      		//发送请求，然后删除数据
			      		Ext.Ajax.request({
			      			//获取参数
			      			url:"person.jsp",
			      			method:"POST",
			      			timeout:3000,
			      			params:{names:names.join(",")},
			      			success:function(response,opts){
			      				//我们直接删除数据
					      		Ext.each(data_select,function(date){
					      			//删除数据
					      			stors.remove(date);
					      		});
			      			}
			      			
			      		});
			      	}
				}
			}
		});
	},
	
	//需要 声明 views store model
	//定义界面层
	views:[
		"List"
	],
	//定义Store中的类
	stores:[
		"Users"
	],
	//定义模型类
	models:[
		"User"
	]
});

