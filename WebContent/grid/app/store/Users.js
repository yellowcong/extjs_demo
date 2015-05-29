//定义User  的集合类
var users = [{name:"yellowcong",age:20,phone:"18645171561",email:"717350389@qq.com"},
		{name:"zhangxx",age:12,phone:"18645171561",email:"717350389@qq.com"},
		{name:"xiaophai",age:2,phone:"18645171561",email:"717350389@qq.com"},
		{name:"狂飙のyellowcong",age:111,phone:"18645171561",email:"717350389@qq.com"}];
		
//创建 
//storeId , 谢了storeId 就可以通过StoreManage管理
//AM是App 的名称
//store 是包名称
//Users是 类名称
Ext.define("AM.store.Users",{
	extend:"Ext.data.Store",
	//设定storeId的值
	storeId:"s_user",
	//这个Store中的Model 填的是全名 
	//在List 的界面层中使用的是store:类名
	model:"AM.model.User",
	//定义自己的数据，也可以通过代理，来获取数据
	data:users,
	autoLoad: true
});