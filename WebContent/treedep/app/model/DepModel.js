/**
 * id 部门主键
 * name 部门名称
 * info 信息
 * order 排序字段
 * manager 部门管理人
 * nodeType 节点类型
 * leaf 是否是节点数据
 */
//定义Dep模板
Ext.define("AM.model.DepModel",{
	
	extend:"Ext.data.Model",
	fields:[
		//序号
		{name:"id",type:"string"},
		//公司名称
		{name:"name",type:"string"},
		//公司信息
		{name:"info",type:"string"},
		//排序
		{name:"order",type:"string"},
		//节点类型
		{name:"nodeType",type:"string"},
		//管理
		{name:"manager",type:"string"},
		//是否是叶子 从节点
		{name:"leaf",type:"string"},
	]
})