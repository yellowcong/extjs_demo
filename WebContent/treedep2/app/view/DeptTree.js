Ext.define("AM.view.DeptTree",{
	extend:'Ext.tree.Panel',
	alias:'widget.depTree',
	rootVisible:false,//不展示ROOT
	displayField:'text',
	animate:false,
	store:'DeptStore4Tree'
})