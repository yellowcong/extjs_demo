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
	/*	data:[
		{name:"财务部",id:"0001"},
		{name:"人事部",id:"0002"},
		{name:"后勤部",id:"0003"},
		{name:"销售部",id:"0004"},
		{name:"研发部",id:"0005"}
		]*/
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
				//远程的 remote
				queryMode:"local",
				//设定存储的数据
				store:deps,
				//设定传递到后台的数据
				valueField:"id",
				//设定显示的字段
				displayField:"name",
				//设定必须是下拉列表中的数据，不能自己写
				forceSelection:true,
				//提示补全,我们输入前面的数据后，他就会自动补全
				typeAhead:true,
				//设定默认选中
				value:"002",
				listConfig:{
					emptyText:"没有数据",
					maxHeight:200,
				}
			}
		]
		
	})
	
});