Ext.onReady(function(){
	
	Ext.create("Ext.form.Panel",{
	
		title:"表单基本数据学习",
		//边距
		bodyStle:"padding: 5 5 5 5",
		//渲染
		frame:true,
		//定义宽高
		height:500,
		width:300,
		//查找Id
		id:"my_form",
		//渲染到那一个地方
		renderTo:"box",
		//默认类型textfield
		defaultType:"textfield",
		defaults:{
			//或给label对象添加 字符串
			labelSeparator :":",
			//字段 label 宽度
			labelWidth : 70,
			//宽度
			width : 200,
			//空格是否允许
			allowBlank: false,
			//msg的配置
			msgTarget : 'side',
			//label 在那一边 对其
			labelAlign:'left'
			
		},
		//添加表单的字段
		items:[
			{
				fieldLabel:"触发器字段",
				xtype:"triggerfield",
				name:"username",
				//表单id
				id:"t_name",
				//是否更具文字的长度来进行伸缩操作
				grow:false,
				//点击就会全选操作
				selectOnFocus:true,
				//定义触发事件
				onTriggerClick:function(obj){
					console.log(obj);
				}
			}
			
		]
	});
	
});