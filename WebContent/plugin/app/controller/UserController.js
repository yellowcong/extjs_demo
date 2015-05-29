
//定义控制
Ext.define("AM.controller.UserController",{
	//继承于Ext.app.Controller
	extend:"Ext.app.Controller",
	//定义 操作，这个就是我们经常接触到的控制操作
	init:function(){
		this.control({
			"userslist":{
				//添加编辑事件
				edit:function(editor,e,options){
					//Object { grid: Object, view: Object, store: Object, record: Object, field: "email", value: "717350389@qq.com", row: <tr#gridview-1022-record-ext-record-3.x-grid-row.x-grid-data-row.x-grid-row-selected.x-grid-row-focused>, column: Object, rowIdx: 2, colIdx: 4, 等 1 项… }
//					console.log(e);
					//获取更改的数据
//					console.log(e.value);

					//通过commit提交数据，这个方法不建议是使用，和数据库交互比较频繁
					//这个是Store 中的数据存储格式，比较的重要
//					console.log(e.record);
  				    //提交数据，只会显示 前端数据，去掉更新的小红点
//					e.record.commit();
					//发送到服务
//					Ext.Ajax.request({});
				}
				
			},
			"userslist button[id=btn_save]":{
				click:function(btn){
					//获取grid
					var grid = btn.ownerCt.ownerCt;					
					//获取所有数据
					var store = grid.getStore();
					//数据与后台同步
					store.sync();
					var records = store.getUpdatedRecords();
					//提交更新，会通过Post  讲数据提交到我们给的URL中
					Ext.Array.each(records,function(model){
						//我们的数据没有设定
						model.commit();
					});	
//					Ext.MessageBox.alert("系统信息","保存成功");
				}
			}
		});
	},
	
	//需要 声明 views store model
	//定义界面层
	views:[
		"List",
		"proerty"
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

