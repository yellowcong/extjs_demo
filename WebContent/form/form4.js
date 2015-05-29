Ext.onReady(function(){
	Ext.QuickTips.init();
	
	//定义部门对象
	Ext.define("Department",{
	
		extend:"Ext.data.Model",
		fields:[
			//部门名称
		{name:"name",type:"string"},
		//部门id
		{name:"id",type:"string"}
		]
	});
	//本地的数据
	var deps = Ext.create("Ext.data.Store",{
		model:"Department",
		data:[
			{name:"财务部",id:"001"},
			{name:"研发部",id:"002"},
			{name:"销售部",id:"003"},
			{name:"人力资源部",id:"004"},
			{name:"法务部",id:"005"},
		]
	});
	
	//创建Pannel
	Ext.create("Ext.form.Panel",{
		title:"下拉列表框",
		//边距
		bodyStle:"padding: 5 5 5 5",
		height:100,
		width:270,
		//渲染
		frame :true,
		renderTo:"box",
		//设定默认的配置
		defaults:{
			//或给label对象添加 字符串
			labelSeparator :":",
			//字段 label 宽度
			labelWidth : 70,
			//宽度
			width : 200,
			//空格是否允许
			allowBlank: false,
			//msg的配置
			msgTarget : 'side',
			//label 在那一边 对其
			labelAlign:'left'
		},items:[
			{
				//设定格式为 combobox的字段
				xtype:"combobox",
				//列表中的显示配置
				listConfig:{
					//配置
					emptyText:"没有配置数据",
					maxHeight:200
				},
				fieldLabel:"部门",
				name:"emp",
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
				value:"002"
			}
		]
	})
	
	
});