Ext.onReady(function(){
	//定义类
	Ext.define("Department",{
		extend:"Ext.data.Model",
		fields:[
			{name:"name",type:"string"},
			{name:"id",type:"string"},
			//添加一个字段来存储样式的 class
			{name:"style"}
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
				//默认是 靠 左边的
				labelAlign:"left",
				//这个items 中的width 指的是 右边框架的宽度
				width:230,
				//设定存储的数据
				store:deps,
				//设定传递到后台的数据
				valueField:"id",
				//设定显示的字段
				displayField:"name",
				//设定多选
				multiSelect:true,
				//查询的时候，一定要是远程的
				//远程的 remote
				queryMode:"remote",
				//最小数据查询
				minChars:1,
				//请求超时
				queryDelay:400,
				queryParam:"dep_name",
				//配置了这个就是查询模式了，输入数据后显示插叙你的数据
//				triggerAction:true,
				listConfig:{
					emptyText:"没有数据",
					maxHeight:200,
					getInnerTpl :function(){
						//我们添加 class的名称
						return "<div class='select'>{name}.{id}</div>";
					},
					//设定默认分页大小
					pageSize:4,
				}
			}
		]
		
	})
	
});