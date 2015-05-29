Ext.onReady(function(){
	//定义我们的模板
	
	Ext.create("Ext.form.Panel",{
		title:"fieldset字段",
		width:300,
		height:200,
		renderTo:"box",
		frame:true,
		items:[
			{	
				xtype:'fieldset',
		        columnWidth: 0.5,
		        title: 'Fieldset 1',
		        collapsible: true,
		        defaultType: 'textfield',
		        defaults: {anchor: '100%'},
		        layout: 'anchor',
		        items :[{
		            fieldLabel: '用户名',
		            name: 'field1'
		        }, {
		            fieldLabel: '密码',
		            name: 'field2'
		        }],
			}],      
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