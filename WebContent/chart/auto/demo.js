Ext.onReady(function(){
	//定义我们的模板
	
	//注意Ext.Panel 的大小写
	Ext.create("Ext.Panel",{
		title:"表单的panel",
		width:500,
		height:400,
		bodyPadding : 10,
		renderTo:"box",
		frame:true,
		layout: 'auto',
		
		//配置里面的布局
		items:[
			{xtype:"panel",
			title:"嵌套布局-1",
			height:100,
			width:"90%"
			},
			{xtype:"panel",
			title:"嵌套布局-1",
			height:100,
			width:"90%"
			},
			{xtype:"panel",
			title:"嵌套布局-1",
			height:100,
			width:"90%"
			},
		]
	})
	
});