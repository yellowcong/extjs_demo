Ext.onReady(function(){
	//定义我们的模板
	
	//注意Ext.Panel 的大小写
	Ext.create("Ext.Panel",{
		title:"absolute布局",
		width:500,
		height:400,
		bodyPadding : 10,
		renderTo:"box",
		frame:true,
		//fit布局
		layout: 'absolute',
		//配置里面的布局
		items:[
			{xtype:"panel",
			title:"嵌套布局-1",
			x:200,
			y:100,
			html:"绝对布局",
			width:200,
			height:100
			},
		]
	})
	
});