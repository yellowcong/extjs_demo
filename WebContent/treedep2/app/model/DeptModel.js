/**
 * ClassName 部门的实体
 * text : 部门的名称
 * id : id主键
 * info : 信息
 * orderIndex : 排序字段
 * manager : 部门的经理
 * nodeType : 节点类型
 * leaf :  是否叶子
 */
Ext.define("AM.model.DeptModel",{
	extend:'Ext.data.Model',
	fields:[
		{name:'text',type:'string'},
		{name:'id',type:'string'},
		{name:'info',type:'string'},
		{name:'orderIndex',type:'int'},
		{name:'manager',type:'string'},
		{name:'nodeType',type:'string'},
		{name:'leaf',type:'string'}
	]
});