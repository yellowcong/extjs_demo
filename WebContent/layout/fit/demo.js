Ext.onReady(function(){
	//定义我们的模板
	
	//注意Ext.Panel 的大小写
	Ext.create("Ext.Panel",{
		title:"fit布局",
		width:500,
		height:400,
		bodyPadding : 10,
		renderTo:"box",
		frame:true,
		//fit布局
		layout: 'fit',
		//配置里面的布局
		items:[
			//第一额pannel讲所有面板沾满
			{xtype:"panel",
			title:"嵌套布局-1",
			},
			//第二个，就没有显示了
			{xtype:"panel",
			title:"嵌套布局-2",
			},
		]
	})
	
});