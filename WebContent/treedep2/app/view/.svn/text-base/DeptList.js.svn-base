/**
 * ClassName 部门管理数据列表视图
 */
Ext.define("AM.view.DeptList",{
	extend:'Ext.grid.Panel',
	alias:'widget.deptlist',
	store:'DeptStore',
	width:540,
	height:400,
	selModel:{
		selType:'checkboxmodel'
	},
	border:0,
	multiSelect: true,
	frame:true,
	tbar:[
		{xtype:'button',text:'添加',id:'add',iconCls:'table_add'},
		{xtype:'button',text:'删除',id:'delete',iconCls:'table_remove'},
		{xtype:'button',text:'保存',id:'save',iconCls:'table_save'}
	],
	dockedItems:[{
		xtype:'pagingtoolbar',
		store:'DeptStore',
		dock:'bottom',
		displayInfo:true
	}],
    enableKeyNav:true,
	columnLines: true,
	columns:[
		{text:'部门名称',dataIndex:'text',width:100,
			field:{
				xtype:'textfield',
				allowBlank:false
			}
		},
		{text:'部门经理',dataIndex:'manager',width:100,
			field:{
				xtype:'textfield',
				allowBlank:false
			}		
		},
		{text:'顺序排序',dataIndex:'orderIndex',width:100},
		{text:'只能简介',dataIndex:'info',width:100}
	],
	initComponent:function(){
		this.editing = Ext.create("Ext.grid.plugin.CellEditing");
		this.plugins = [this.editing];
		this.callParent(arguments)
	}
});





