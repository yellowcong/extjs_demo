Ext.onReady(function(){
	//定义我们的模板
	
	//注意Ext.Panel 的大小写
	Ext.create("Ext.Panel",{
		title:"accordion布局",
		width:500,
		height:400,
		bodyPadding : 10,
		renderTo:"box",
		frame:true,
		//fit布局
		layout: 'accordion',
		
		 layoutConfig: {
		 	//折叠
	        titleCollapse: false,
	        //设定动画
	        animate: true,
	        activeOnTop: true
	    },
		//配置里面的布局
		items:[
			//手风琴，这些都是菜单
			{xtype:"panel",
			title:"嵌套布局-1",
			html: '面板1'
			},
			{xtype:"panel",
			title:"嵌套布局-2",
			html: '面板2'
			},
			{xtype:"panel",
			title:"嵌套布局-2",
			html: '面板3'
			},
		]
	})
	
});