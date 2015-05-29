Ext.onReady(function(){
	//定义我们的模板
	
	Ext.create("Ext.form.Panel",{
		title:"label字段",
		width:270,
		height:100,
		renderTo:"box",
		frame:true,
		items:[
			{
				xtype:"label",
				name:"xxx",
				labelWidth:50,
				text:"展示",
				//设定这个lable是 绑定显示
				forId:"username",
				overCls:"select"
			},
			{
				xtype:"textfield",
				name:"username",
				inputId:"username",
				//隐藏Label
				hideLabel:true
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