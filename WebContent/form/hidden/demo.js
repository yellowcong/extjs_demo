Ext.onReady(function(){
	//定义我们的模板
	
	Ext.create("Ext.form.Panel",{
		title:"隐藏字段",
		width:270,
		height:100,
		renderTo:"box",
		frame:true,
		items:[
			{
				xtype:"textfield",
				fieldLabel:"用户名",
				labelWidth:70,
				width:200,
				name:"username",
				labelAlign:"left",
			},
			{
				//隐藏字段
				xtype:"hiddenfield",
				//字段名称，传到服务器
				name:"username",
				value:"yellowcong"
			}
		],
		buttons:[
			{text:"提交",handler :function(btn){
				var formObj = btn.ownerCt.ownerCt;
				//获取表格
				var form = formObj.getForm();
				//获取所有的数据
				console.log(form.getValues());
				
			}}
		]
		
	})
	
});