//创建表单对象

Ext.onReady(function(){
	Ext.define("User",{
		
		extend:"Ext.data.Model",
		fields:[
			{name:"username",type:"string"},
			{name:"psw",type:"string"},
		]
		
	});
	var user = Ext.create("User",{username:"yellowcong@qq.com",psw:"123123"});
	//扩展vtype
	//密码需要以 123 中的一个数字开始 
	var passRegStr = /[123]/i;
	Ext.apply(Ext.form.field.VTypes,{
		//定义password 的正则表达式规则
		passReg:function(val,field){
			//验证是否通过
			return passRegStr.test(val);
		},
		//错误数据提示
		passRegText:"密码格式错误",
		//只能输入的数据，只能输入 123
		//vtype passReg+Mask
		passRegMask:/[123]/i,
		
	});
	
	Ext.create("Ext.form.Panel",{
		title:"Form学习",
		//边距
		bodyStle:"padding: 5 5 5 5",
		//渲染
		frame:true,
		//定义宽高
		height:120,
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
		//添加表单的字段
		items:[
			{
				fieldLabel:"用户名",
				name:"username",
				//表单id
				id:"t_name",
				//是否更具文字的长度来进行伸缩操作
				grow:false,
				//点击就会全选操作
				selectOnFocus:true,
				//正则表达式，// 需要加上/ 抱起来
				regex:/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/,
				regexText:"邮箱格式不正确",
			},{
				fieldLabel:"密码",
				name:"psw",
				//表单id
				id:"t_psw",
				//是否更具文字的长度来进行伸缩操作
				grow:false,
				//点击就会全选操作
				selectOnFocus:true,
				//设定输入类型为 password ,不然就会有问题
				inputType:'password',
				
				//错误提示
				regexText:"输入不正确",
				//验证自己定义
				vtype:"passReg"
			}
		],
		
		//定义按钮
		buttons:[
			//text 表单的名称
			//handler 设定操作方法
			{text:"登陆",handler :function(btn){
//				console.log(btn);
				//获取到表单对象
				//通过id获取表单
//				var formObj = Ext.getCmp("my_form");
				//通过获取上一级
				//获取表单
				//返回 Ext.form.PanelView对象
				var formObj = btn.ownerCt.ownerCt;
//				console.log(formObj);
//				console.log(formObj);
				
				//返回 Ext.form.Basic 对象 
				var  form = formObj.getForm();
//				console.log(form);
				//通过表单获取数据
				var result = form.findField("username");
				//判断数据是否为空
				if(result == null){
					Ext.MessageBox.alert("系统提示","非法输入");
					return ;
				}
				var val = result.getValue();
				console.log(val);
			}},{
				text:"重置",handler:function(btn){
					//获取表单对象
					var formObj = btn.ownerCt.ownerCt;
					//获取表单
					var form = formObj.getForm();
					//表单的重置方法
					form.reset();
				}
			},{
				text:"加载",
				handler:function(btn){
					
					var formObj = btn.ownerCt.ownerCt;
					var form = formObj.getForm();
					//加载数据
					form.loadRecord(user);
				}
			}
			
		],
		
	});
});
