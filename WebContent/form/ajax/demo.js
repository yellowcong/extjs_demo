Ext.onReady(function(){
	//定义我们的模板
	
	Ext.create("Ext.form.Panel",{
		title:"展示字段",
		width:270,
		height:350,
		renderTo:"box",
		frame:true,
		items:[
			{
				xtype:"textfield",
				fieldLabel:"用户名",
				name:"xxx",
				labelWidth:50,
				labelAlign:"left",
				value:"狂飙のyellowcong",
			},
			{
				xtype:"numberfield",
				fieldLabel:"年龄",
				name:"age",
				labelWidth:50,
				labelAlign:"left",
				//去掉微调框
				hideTrigger : true,
				allowDecimals:false,
				minValue:0,
				maxValue:150,

			},{
				xtype:"textareafield",
				fieldLabel:"数据",
				name:"content",
				labelWidth:50,
				width:300,
				height:200,
				labelAlign:"left",
				//去掉微调框
				hideTrigger : true,
				allowDecimals:false,
				minValue:0,
				maxValue:150,

			}
		],
		buttons:[
			{text:"提交",handler :function(btn){
				var formObj = btn.ownerCt.ownerCt;
				//获取表格
				var form = formObj.getForm();
				//获取所有的数据
//				console.log(form.getValues());
				
				form.submit({
					//送到本地
					url:"",
						waitMsg:"文件上传中",
						success:function(){
					}

				});
			}}
		]
		
	})
	
});