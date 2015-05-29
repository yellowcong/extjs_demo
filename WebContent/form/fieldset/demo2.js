Ext.onReady(function(){
	//定义我们的模板
	
	Ext.create("Ext.form.Panel",{
		title:"fieldset字段",
		width:300,
		height:250,
		renderTo:"box",
		frame:true,
		items:[
			{	
				xtype:"fieldset",
				columnWidth: 0.5,
				title:"组合",
				//设定列宽
				//可以展示伸缩的按钮
				collapsible:true,
				//设定fieldset 中的默认数据类型
				defaultType:"textfield",
				//默认收起
				collapsed:true,
				defaults:{
					//默认宽度
					anchor:'100%'
				},
				//设定布局
				layout:'anchor',
				items:[
					{
		            fieldLabel: '用户名',
		            name: 'field1'
		        },
					{
					fieldLabel:"密码",
					name:"field2"
					}
				]
				
			},
			{	
				xtype:"fieldset",
				columnWidth: 0.5,
				title:"组合",
				//设定列宽
				//可以展示伸缩的按钮
				collapsible:true,
				//启用复选框 ,复选框模式
				checkboxToggle:true,
				//设定fieldset 中的默认数据类型
				defaultType:"textfield",
				defaults:{
					//默认宽度
					anchor:'100%'
				},
				//设定布局
				layout:'anchor',
				items:[
					{
		            fieldLabel: '用户名',
		            name: 'field1'
		        },
					{
					fieldLabel:"密码",
					name:"field2"
					}
				]
				
			},
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