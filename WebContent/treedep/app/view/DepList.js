/**
 * 定义列表,
 * 注意定义列表的时候，我们需要几层的对象是
 * grid
 */
 
Ext.define("AM.view.DepList",{
	//我们不是列表，所以看清楚pannel
	extend:"Ext.grid.Panel",
	//设定别名
	alias:"widget.depList'",
	//设定我们的数据源
	store:"DepStore",
	width:540,
	height:400,
	//选择模式 
	selModel:{
		selType:'checkboxmodel'
	},
	multiSelect:true,
	//自动渲染
	frame:true,
	//允许鼠标
	enableKeyNav:true,
	//竖线显示
	columnLines:true,
	//配置列
	columns:[
		//Ext.create("Ext.grid.RowNumberer",{text:"id"}),
		{text:"部门名称",dataIndex:"name",width:100},
		{text:"部门详情",dataIndex:"info",width:100},
		{text:"排序",dataIndex:"order",width:100},
		{text:"部门经理",dataIndex:"manager",width:100},
		{text:"节点类型",dataIndex:"nodeType",width:100},
		{text:"叶子",dataIndex:"leaf",width:100},
	],
	//初始化
	initComponent:function(){
			this.callParent(arguments);
	}
		
});