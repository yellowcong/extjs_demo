Ext.onReady(function(){
	//定义我们的模板
	
	//注意Ext.Panel 的大小写
	Ext.create("Ext.Panel",{
		title:"column布局",
		width:1000,
		height:400,
		bodyPadding : 10,
		renderTo:"box",
		frame:true,
		//fit布局
		layout: 'column',
		//配置里面的布局
		items:[
		
			//columnWidth .xx 表示的是百分比的多少
			{xtype:"panel",
			title:"嵌套布局-1",
			 columnWidth: .25,
			 html:"第一个"
			},
			{xtype:"panel",
			title:"嵌套布局-2",
			//.xx表示的是百分比
			 columnWidth: .50,
			 html:"yellow",
			},
			{xtype:"panel",
			title:"嵌套布局-2",
			 columnWidth: .10,
			 html:"yellow",
			},
			{xtype:"panel",
			title:"嵌套布局-2",
			 width: 250,
			 html:"yellow",
			},
		]
	})
	
});