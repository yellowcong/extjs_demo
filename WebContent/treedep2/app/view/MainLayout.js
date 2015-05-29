/**
 * ClassName ���Ź���Mian����
 */
Ext.define("AM.view.MainLayout",{
	extend:'Ext.panel.Panel',
	alias:'widget.mainlayout',
	defaults:{
		split:true,
		bodyStyle:'padding:1px'
	},
	layout:'border',
	items:[{
		title:'部门树形',
		region:'west',
		iconCls:'dept_tree',
		xtype:'panel',
		margins:'5 2 5 5',
		width: 200,
		collapsible:true,//可以被折叠
		id:'west-tree',
		layout:'fit',
		items:[{
			xtype:'depTree',
			id:'dept-tree'
		}]
	},{
		title:'部门数据表格',
		iconCls:'dept_table',
		region:'center',
		xtype:'panel',
		id:'center-grid',
		margins:'5 5 5 0',
		layout:'fit',
		items:[{
			id:'dept-grid',
			xtype:'deptlist'
		}]
	}]
});