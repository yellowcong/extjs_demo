Ext.onReady(function(){
	//定义类
	Ext.define("Department",{
		extend:"Ext.data.Model",
		fields:[
			{name:"name",type:"string"},
			{name:"id",type:"string"}
		]
	});
	//创建数据集合
	var deps = Ext.create("Ext.data.Store",{
		model:"Department",
		//使用远程数据
		proxy:{
				type:'ajax',
				//请求dep.jsp
				url:"dep.jsp"
		},
		//对于请求的时候，数据刷不出来，我们可以加入autoload
		autoLoad: true,
	});
	
	//定义我们的模板
	Ext.create("Ext.panel.Panel",{
		title:"下拉框学习",
		width:270,
		height:100,
		renderTo:"box",
		frame:true,
		items:[
			{
				fieldLabel:"部门",
				labelWidth : 40,
				xtype:"combobox",
				//设定存储的数据
				store:deps,
				//设定传递到后台的数据
				valueField:"id",
				//设定显示的字段
				displayField:"name",
				multiSelect:true,
				//查询的时候，一定要是远程的
				//远程的 remote
				queryMode:"remote",
				//最小数据查询
				minChars:1,
				//请求超时
				queryDelay:400,
				queryParam:"dep_name",
				triggerAction:true,
				listConfig:{
					emptyText:"没有数据",
					maxHeight:200,
				}
			}
		]
		
	})
	
});