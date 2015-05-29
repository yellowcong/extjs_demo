//定义User 对象模型
/*//也可以通过define 来定义

Ext.regModel("AM.model.User",{
	fields:[{name:"name",type:"string",sortable:true},
					{name:"age",type:"int",sortable:true},
					{name:"email",type:"string",sortable:true},
					{name:"phone",type:"string",sortable:true},
	]
})*/

//通过define来定义我们的user
Ext.define("AM.model.User",{
	extend: 'Ext.data.Model',
	fields:[{name:"name",type:"string",sortable:true},
					{name:"age",type:"int",sortable:true},
					{name:"email",type:"string",sortable:true},
					{name:"phone",type:"string",sortable:true},
	]
});