Ext.onReady(function(){
	//定义我们的模板
	
	Ext.create("Ext.form.Panel",{
		title:"hidelable字段",
		width:270,
		height:100,
		renderTo:"box",
		frame:true,
		defaults:{
			msgTarget:'side',
			labelAlign:'left'
		},
		items:[{
			xtype:'fieldcontainer',
			layout:{
				type:'hbox',
				align:'middle'
			},
			//合并lable
			combineLabels:true,
			//错误信息合并
			combineErrors:true,
			//设定字段的默认操作
			fieldDefaults:{
				//默认字段会隐藏lebel
				hideLabel:true,
				//允许空字段
				allowBlank:false
			},
			defaultType:'textfield',
			items:[{
				xtype:'label',
				forId:'name',
				text:'姓名'
			},{
				fieldLabel:'name',
				name:'name',
				inputId:'name'
			},{
				xtype:'label',
				forId:'phone',
				text:'电话'
			},{
				fieldLabel:'phone',
				name:'phone',
				inputId:'phone'
			}]
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