Ext.onReady(function(){
	//定义我们的模板
	
	//注意Ext.Panel 的大小写
	Ext.create("Ext.Panel",{
		title:"anchor布局",
		width:500,
		height:400,
		bodyPadding : 10,
		renderTo:"box",
		frame:true,
		//anchor布局
		layout: 'anchor',
		//配置里面的布局
		items:[
			{xtype:"panel",
			title:"嵌套布局-1",
			html:"百分比",
			anchor:"90% 40%"
			},
			{xtype:"panel",
			title:"嵌套布局-2",
			html:"基于百分比",
			anchor:"50% 20%"
			},
			{xtype:"panel",
			title:"嵌套布局-3",
			html:"偏移量定义",
			anchor:"-10 -100"
			}
		]
	})
	
});