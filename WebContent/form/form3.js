Ext.onReady(function(){
	
	Ext.create("Ext.form.Panel",{
		title:"表单深入",
		//渲染
		frame:true,
		//定义宽高
		height:300,
		width:400,
		//查找Id
		id:"my_form",
		//渲染到那一个地方
		renderTo:"box",
		//默认类型textfield
		//设定默认的textfield 的总体显示样式
		defaultType:"textfield",
		defaults:{
			//或给label对象添加 字符串
			labelSeparator :":",
			//字段 label 宽度
			labelWidth : 50,
			//宽度
			width : 200,
			//空格是否允许
			allowBlank: false,
			//msg的配置
			msgTarget : 'side',
			//label 在那一边 对其
			labelAlign:'left'
			
		},
		items:[
			{
				fieldLabel:"标题",
				name:"title",
				//表单id
				id:"t_tilte",
				//是否更具文字的长度来进行伸缩操作
				grow:false,
				//点击就会全选操作
				selectOnFocus:true,
			},{
				fieldLabel:"内容",
				name:"content",
				xtype:"textareafield",
				width:300,
				height:200,
			}
		],
		buttons:[
			{text:"发布",handler:function(btn){
				var formObj = btn.ownerCt.ownerCt;
				var form = formObj.getForm();
				//获取所有数据
				//Object { title: "我是标题", content: "xxx" }
				console.log(form.getValues());
				
			}}
		]
		
		
	});
	
});