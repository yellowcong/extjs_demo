Ext.onReady(function(){
	//定义我们的模板
	
	//注意Ext.Panel 的大小写
	//直接渲染到浏览器中
	Ext.create("Ext.container.Viewport",{
		renderTo:"box",
		//边界布局
	   	frame:true,
	   	layout:'border',
	   	defaults: {
	   		//设定展开
		    collapsible: true,
		    split: true,
		    bodyStyle: 'padding:15px'
		},
		//配置里面的布局
		items:[
		
			//columnWidth .xx 表示的是百分比的多少
			{xtype:"panel",
			title:"顶部",
			 html:"第一个",
			 region: 'north',
			 cmargins: '5 0 0 0'
			},
			{
		    title: '左面west',
		    region:'west',
		    margins: '5 0 0 0',
		    cmargins: '5 5 0 0',
		    width: 175,
		    minSize: 100,
		    maxSize: 250
		},{
		    title: '中间Content',
		    //中间不能 伸缩操作
		    collapsible: false,
		    region:'center',
		    //设定边距
		    margins: '5 0 0 0'
		},{
		    title: '右面east',
		    width: 175,
		    region:'east',
		    margins: '5 0 5 5'
		},{xtype:"panel",
			title:"底部",
			  region:'south',
			 html:"yellow",
			 height: 150,
		    minSize: 75,
		    maxSize: 250,
		    cmargins: '5 0 0 0'
			}
		]
	})
	
});