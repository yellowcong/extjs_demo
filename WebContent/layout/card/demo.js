Ext.onReady(function(){
	var navigate = function(panel, direction,btn){
	    //获取到布局Card
	    var layout = panel.getLayout();
	    //调用Layout 中的 next()方法
	    //这个是动态函数的调用，  这样就可以接收 next 和prev
	    //相当于 layout.next();
	    layout[direction]();
	    
	    //next(),prev()
	    //card的关键函数next( ) : Ext.Component,prev( ) : Ext.Component
	    //getNext( ) : Ext.Component,getPrev( ) : Ext.Component
	    //layout.getPrev() 获取上一个， 如果存在 ， 设定是否禁用
	    //Ext.getCmp 通过id来获取对象
	    Ext.getCmp('move-prev').setDisabled(!layout.getPrev());
	    Ext.getCmp('move-next').setDisabled(!layout.getNext());
	};
	
	//注意Ext.Panel 的大小写
	Ext.create("Ext.Panel",{
		title:"card布局",
		width:500,
		height:400,
		bodyPadding : 10,
		renderTo:"box",
		frame:true,
		//fit布局
		layout: 'card',
		
		//默认展示的子节点索引 ,显示第一个索引
		activeItem:0,
		//配置里面的布局
		items:[
			{xtype:"panel",
			title:"嵌套布局-1",
			html:"第一个面板中的数据"
			},
			{xtype:"panel",
			title:"嵌套布局-2",
			html:"二个面板中的数据"
			},
			{xtype:"panel",
			title:"嵌套布局-3",
			html:"第三个面板中的数据"
			}
		],
		
		//定义底部的 button 上一页和下一页
		 bbar: [
		 	{
	            id: 'move-prev',
	            text: '上一页',
	            handler: function(btn) {
	            	//获取到上一层 对象 
	            	var panel = btn.up("panel");
	            	//Panel 对象
//	            	console.log(panel);
	            	panel.index = panel.index-1;
	            	panel.setTitle(panel.titleInfo+"("+panel.index+"/"+panel.items.length+")");
	                navigate(panel, "prev");
	            },
	            //默认设定第一个不能用
	            disabled: true
	        },
	        '->',
	        {
	            id: 'move-next',
	            text: '下一页',
	            handler: function(btn) {
	            	var panel = btn.up("panel");
	            	panel.index = panel.index+1;
	                panel.setTitle(panel.titleInfo+"("+panel.index+"/"+panel.items.length+")");	            	
	                navigate(panel, "next");
	            }
	        } ]
	})
	
});