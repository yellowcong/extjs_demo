Ext.onReady(function(){
	//定义我们的模板
	
	Ext.create("Ext.form.Panel",{
		title:"文件上传",
		width:270,
		height:100,
		renderTo:"box",
		frame:true,
		items:[
			{
				xtype:"filefield",
				fieldLabel:"头像",
				labelWidth:70,
				width:200,
				name:"img",
				labelAlign:"left",
				//设定占的百分比
				anchor:"98%",
				//设定选择按钮的字样
				buttonText:"选择"
			},
		],
		buttons:[
			{text:"提交",handler :function(btn){
				var formObj = btn.ownerCt.ownerCt;
				//获取表格
				var form = formObj.getForm();
				
				//上传表单
				form.submit({
					url:"",
					waitMsg:"文件上传中",
					success:function(){
					}
					
				});
			}}
		]
		
	})
	
});