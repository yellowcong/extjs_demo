Ext.onReady(function(){
	//-------------------------------------
	Ext.define("person",{
		extend:'Ext.data.Model',
		fields:[
			{name:'userName',type:'auto'},
			{name:'password',type:'auto'}
		]
	});
	var p = new person({userName:'yunfengcheng2008@126.com',password:"123456"});
	//-------------------------------------
	var passTest = /[123]/i
	Ext.apply(Ext.form.field.VTypes,{
		myPass :function(val,field){
			return passTest.test(val);
		},
		myPassText:"密码格式错误",
		myPassMask:/[123]/i
	});
	//-------------------------------------
	var textForm = Ext.create("Ext.form.Panel",{
		title : "form中文本框实例",
		bodyStyle :'padding:5 5 5 5',
		frame : true,
		height : 120,
		width : 300,
		id:'my_form',
		renderTo:'formDemo',
		defaultType:'textfield',
		defaults:{
			labelSeparator :": ",
			labelWidth : 50,
			width : 200,
			allowBlank: false,
			msgTarget : 'side',
			labelAlign:'left'
		},
		items:[{
			fieldLabel : "Name",
			name:'userName',
			id:'userName',
			selectOnFocus : true,
			regex:/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/,
			regexText:"请用邮箱来注册",
			grow:false//是否在这个表单字段规定长度内自动根据文字的内容进行伸缩
		},{
			fieldLabel : "Pass",
			name:'password',
			id:'password',
			inputType:'password',
			vtype:'myPass'
		}],
		buttons: [
		  {text:'登陆系统',handler:function(b){
		  	//我没想通过base来得到数值,那我们就要先得到base 
		  	//那么base我们有什么办法来的到呢?
		  	//很简单 通过 Ext.form.Basic(findField( String id ) : void)
		  	//那么Ext.form.Basic如何得到呢?
		  	//很简单Ext.form.Panel (getForm( ))
		  	//Ext.form.Panel如何得到呢?
		  	//很简单 1>通过ID来的
		  	var formObj = Ext.getCmp("my_form");
		  	var basic = formObj.getForm();
		  	var nameField = basic.findField("userName");
		  	var nameValue = nameField.getValue();
		  	alert(nameValue);
		  }},{
		  	text:'重置',handler:function(b){
			  	var formObj = Ext.getCmp("my_form");
			  	var basic = formObj.getForm();
			  	basic.reset();
		  	}
		  },{
		  	text:'装在数据',handler:function(b){
			  	var formObj = Ext.getCmp("my_form");
			  	var basic = formObj.getForm();
			  	basic.loadRecord(p);
		  	}		  	
		  }
		]		
	})
});






