Ext.onReady(function(){
	//定义我们的模板
	
	Ext.create("Ext.form.Panel",{
		title:"表单的panel",
		width:500,
		height:400,
		bodyPadding : 10,
		renderTo:"box",
		//隐藏
		hideCollapseTool:false,
		//面板中的类容
		html:"xxxx",
		//添加html 静态文件， 替代html
		 autoLoad:"xx.html",
		//允许收缩   两个参数结合使用
	    collapsible :true,
	    //设定收起的动画， 为false ,就没有动画了
	    animCollapse : false,
		//设定为可关闭，
		 closable:true,
		 //设定销毁  [destroy|hide]
		  closeAction:'destroy',  //destory 就是销毁
		 //关闭滚动条 , 默认为 false
		 autoScroll:true,//自动滚动条
		 //修改背景样式
		 bodyStyle: {
		    background: '#ffc'
		},	
		frame:true,
		//top bar
		//头部按钮
		tbar: [
		  { xtype: 'button', text: '添加',iconCls:'table_add'},
		  { xtype: 'button', text: '编辑',iconCls:'table_editor'},
		  { xtype: 'button', text: '查找',iconCls:'table_find'},
		  { xtype: 'button', text: '删除',iconCls:'table_delete'},
		],
		//botton bar
		//底部按钮
		bbar: [
		  { xtype: 'button', text: '更新',iconCls:'table_refresh'},
		  { xtype: 'button', text: '保存',iconCls:'table_save'},
		],
		//底部的分页 作用 啥
		dockedItems: [{
		    xtype: 'toolbar',
		    dock: 'bottom',
		    ui: 'footer',
		    items: [
		        { xtype: 'component', flex: 1 },
		        { xtype: 'button', text: '清空',
		        	handler:function(b){
		        		//删除panel中的所有对象
		        		b.up("panel").removeAll(true);//自动销毁
		        	}
		        }
		    ]
		    //添加分页
		},{xtype:'pagingtoolbar',
				//通过Id 查询我们的 store 数据
				store:Ext.data.StoreManager.lookup("s_user"),
				//底部显示
				dock:'bottom',
				displayInfo:true,
				} 
		],
		//添加功能栏目
		tools:[
		{
			    type:'refresh',
			    qtip: '刷新'
			},{
			    type:'help',
			    qtip: '帮助'
			},{
			id:'next',
			//添加一个处理 方法
		    handler: function(event, toolEl, panel){
		    	panel.up("panel").insert(0,{
		    			xtype:'panel',
		    			width:100,
		    			height:100,
		    			bodyStyle: {
						    background: 'red'
						}
		    		}) 
		    }
		}
		]
	})
	
});