Ext.onReady(function(){
	//注意Ext.Panel 的大小写
	Ext.create("Ext.Panel",{
		width: 400,
	    height: 230,
	    renderTo:Ext.getBody(),
	    title: "Vbox布局的面板",
		layout: {
			//类型 还有 hbox
		    type: 'vbox',
		    align : 'stretch',
		    pack  : 'start'
		},
		items: [
			//设定 flex 所占权重  1+2 = 3 1/3
		    {html:'panel 1', flex:1},
		    //height 是默认 设定高度
		    {html:'panel 2', height:150},
		    //设定 flex 所占权重  1+2 = 3 2/3
		    {html:'panel 3', flex:2}
		]
	})
	
});