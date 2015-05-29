Ext.onReady(function(){
	//定义我们的模板
	
	Ext.create("Ext.form.Panel",{
		title:"展示字段",
		width:270,
		height:100,
		renderTo:"box",
		frame:true,
		items:[
			{
				xtype:"displayfield",
				name:"xxx",
				labelWidth:50,
				value:"狂飙のyellowcong",
				fieldLabel:"xx"
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