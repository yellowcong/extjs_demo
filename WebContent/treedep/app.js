//定义controll层
Ext.onReady(function(){
	//初始化
	Ext.QuickTips.init();
	
	//设定Loader
	Ext.Loader.setConfig({
		enable:true
	});
	
	//初始化Application
	Ext.application({
		//应用的名字，需要和App 定义的需要同意
		name:'AM',
		//应用的目录
		appFolder:'app',
		//当前页面加载完成时，执行的函数
		launch:function(){
			Ext.create("Ext.container.Viewport",{
				//自动布局
				layout:"fit",
				items:[{
					//初始化面板
					//这个xtype 是我们自己定义的 view中的别名
					width:800,
					heigth:700,
					xtype:'mainlayout',
				}
				]
			});
		},
		//控制的
		//定义控制层，这个书写一定要注意，不要拼错了，蛋疼啊，刚刚拼错了
		//controllers
		controllers:[
			//控制层
			'DepController'
		]
	});
});