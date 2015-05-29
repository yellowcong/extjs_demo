Ext.onReady(function(){
	//定义我们的模板
	
	//注意Ext.tab.Panel  
	Ext.create("Ext.tab.Panel",{
		title:"tab布局",
		width:500,
		height:400,
		bodyPadding : 10,
		renderTo:"box",
		frame:true,
		//fit布局
		layout: 'fit',
		 buttons:[{
	    	text:'增加选项卡',
	    	handler:function(btn){
	    		//获取到我们的panel
	    		var panel = btn.up("tabpanel");
	    		//获取 长度
	    		var index = panel.items.length+1;
	    		
	    		//添加栏目 
	    		var tabPage = panel.add({
	    			title: '第'+index+'个选项卡',
	    			html:'我新添加的tab',
	    			closable:true
	    		});
	    		panel.setActiveTab(tabPage);//启用激活他
	    	}
	    }],
		//配置里面的布局
		items: [{
        	title: '第一个选项卡',
        	html:"第一个选项中的html",
        	//配置可以关闭
        	closable:true
        	
	    }, {
	        title: '第二个选项卡',
	       	html:"第二个选项中的html"
	    }],
	})
	
});