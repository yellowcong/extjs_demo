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
					{name:"index",type:"int",sortable:true},
					{name:"email",type:"string",sortable:true},
					{name:"phone",type:"string",sortable:true},
					//设定一个boolean的数据类型,是否是学生  booleancolumn
					{name:"isStudent",type:"string",sortable:true},
					//日期数据  用户创建日期  datecolumn
					{name:"createDate",type:"string",sortable:true},
					//成绩 这个有一个对应的   numbercolumn 
					//不要写int, 会导致精度丢失
					{name:"score",type:"string",sortable:true},
					//性别  红男绿女
					{name:"sex",type:"string",sortable:true}
	]
});