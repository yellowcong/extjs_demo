/**
 * 定义我们的
 */
//定义数据类     
Ext.define("AM.store.DepStore",{
	extend:"Ext.data.TreeStore",
	//模型对象
	model:"AM.model.DepModel",
	proxy:{
		type:"ajax",
		//访问地址
		url:"",
		//读写都是json
		writer:{
			type:"json"
		},
		reader:{
			type:"json"
		}
	},
	//自动加载数据
	autoLoad:true,
	
});