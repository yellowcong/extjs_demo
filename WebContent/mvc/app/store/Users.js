var users = [{name:"yellowcong",age:20,email:"717350389@qq.com"},
		{name:"zhangxx",age:12,email:"717350389@qq.com"},
		{name:"xiaophai",age:2,email:"717350389@qq.com"},
		{name:"狂飙のyellowcong",age:111,email:"717350389@qq.com"}];
//User��ݼ���
Ext.define('AM.store.Users', {
	extend: 'Ext.data.Store',
	model: 'AM.model.User',
	storeId: 's_user',
	data:users,
	autoLoad: true //�ܹؼ�
});