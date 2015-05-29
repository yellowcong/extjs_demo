//定义Tree模型对象
Ext.define("AM.view.MainLayout",{
	extend:"Ext.panel.Panel",
	//设定xtype : mainlayout
	alias: 'widget.mainlayout',
	defaults:{
		//中间收起来的按钮
		split:true,
		bodyStyle:"padding 1px"
	},
	//border布局
	layout:'border',
	items:[
		//侧面数据
		{title:"部门树形",
		//所处地方
		region:"west",
		xtype:'panel',
		margins:'5 2 5 5',
		width:200,
		//可以被这得的操作
		collapsible:true,
		layout:'fit',
		id:"dep_tree",
		//放树形
		items:[{
		}],	},{
			title:"数据表格",
			region:"center",
			xtype:'panel',
			margins:'5 2 5 0',
			id:"dep_table",
			layout:'fit',
			items:[{
				id:"dep_list",
				xtype:"depList"
			}],	
		}
		]
});