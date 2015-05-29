/**
 * 部门管理控制器
 */
//定义控制
Ext.define("AM.controller.DepController",{
	//继承于Ext.app.Controller
	extend:"Ext.app.Controller",
	//定义 操作，这个就是我们经常接触到的控制操作
	init:function(){
		this.control({
		});
	},
	
	//需要 声明 views store model
	//定义界面层
	views:[
//		"DepList",
		"DeptList",
		"MainLayout",
	],
	//定义Store中的类
	stores:[
		//部门store
		"DepStore"
	],
	//定义模型类
	models:[
		//部门模型
		"DepModel"
	]
});

