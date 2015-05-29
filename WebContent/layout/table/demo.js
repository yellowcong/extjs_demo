Ext.onReady(function(){
	//定义我们的模板
	
	//注意Ext.Panel 的大小写
	Ext.create("Ext.Panel",{
		title:"table布局",
		width:500,
		height:400,
		bodyPadding : 10,
		renderTo:"box",
		frame:true,
		//fit布局
		layout: {
	    	type:'table',
	    	columns:4//四列
	    },
		//设定表格的默认配置
	    defaults:{
		    width: 100,
		    height: 100,
		    frame:true
	    },
		//配置里面的布局
		items:[
		
			//columnWidth .xx 表示的是百分比的多少
			{xtype:"panel",
			title:"嵌套布局-1",
			 html:"第一个",
			 width:300,
			  colspan: 3//跨三列
			},
			{xtype:"panel",
			title:"嵌套布局-2",
			//需要设定高度
			height:200,
			//跨两行
			 rowspan:2,
			//.xx表示的是百分比
			 html:"yellow",
			
			},
			{xtype:"panel",
			title:"嵌套布局-2",
			 html:"yellow",
			},
			{xtype:"panel",
			title:"嵌套布局-2",
			 html:"yellow",
			},
			{xtype:"panel",
			title:"嵌套布局-2",
			 html:"yellow",
			},
		]
	})
	
});