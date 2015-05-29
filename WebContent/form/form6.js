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
		dockedItems:[{
			//添加一个 工具栏
			xtype:'toolbar',
			dock:'top',
			items:[{
				//设定全部选中
				text:'选择全部',
				handler:function(btn){
//				  	var formObj = Ext.getCmp("my_form");
				  	//获取到表格
				  	var formObj = btn.ownerCt.ownerCt;
				  	var basic = formObj.getForm();
				  	//获取所有字段
				  	var fields = basic.getFields();
				  	
				  	fields.each(function(field){
				  		if("tech" == field.getName()){
				  			//设定数据为true 就讲所有数据选中
				  			field.setValue(true)
				  		}
				  	})
				}
			},{
				//设定全部选中
				text:'取消选择',
				handler:function(btn){
//				  	var formObj = Ext.getCmp("my_form");
				  	var formObj = btn.ownerCt.ownerCt;
				  	var basic = formObj.getForm();
				  	var fields = basic.getFields();
				  	fields.each(function(field){
				  		if("tech" == field.getName()){
				  			field.setValue(false)
				  		}
				  	})
				}}]
		}],
		//添加表单的字段
		items:[
			{
				fieldLabel:"默认表单",
				name:"username",
				//表单id
				id:"t_name",
				//是否更具文字的长度来进行伸缩操作
				grow:false,
				//点击就会全选操作
				selectOnFocus:true,
			},{
				fieldLabel:"密码",
				name:"pws",
				inputType:'password',
			},{
				fieldLabel:"只读字段",
				xtype:"textfield",
				//去掉微调框
				hideTrigger : false,
				value:"只读字段",
//				readOnly:true,
				//设定只读字段样式
				//readOnlyCls:"",
				//这个属性，直接不启动，就 看着像只读字段了
				//这个方法更加的方便
				disabled:true
			},
			{
				fieldLabel:"数字",
				xtype:"numberfield",
				//设定不允许 为负数，默认为ture
			},{
				fieldLabel:"步长修改",
				xtype:"numberfield",
				//去掉微调框
				hideTrigger : false,
				emptyText:"修改为3",
				step:3,
			},{
				fieldLabel:"去掉微调",
				xtype:"numberfield",
				//不允许小数,当我们点击完成，就会自动去除小数
				allowDecimals:false,
				//去掉微调框
				hideTrigger : true
			},
			{
				fieldLabel:"小数舍入",
				xtype:"numberfield",
				//去掉微调框
				hideTrigger : true,
				//设定输入的区间
				minValue:10,
				maxValue:100,
				//默认数据
				emptyText:"输入小数",
				//保留三位小数
				decimalPrecision:3
			
			},
			{
				fieldLabel:"输入限定",
				xtype:"numberfield",
				//去掉微调框
				hideTrigger : true,
				emptyText:"输入0 1",
				//我们只能输入的数据 0 1
				baseChars:"01"
			},
			{
				//文本框
				fieldLabel:"文本框",
				xtype:"textareafield",
				width:250,
				height:80,
				//点击就会全选操作
				selectOnFocus:true,
			},{
				fieldLabel:'性别',
				xtype:"radiogroup",
				columns:2,
				items:[{
				//radio类型数据
				xtype:"radiofield",
				boxLabel:"男",
				//输入的值
				inputValue:"mail",
				name:"sex",
				//默认选中
				checked:true,
			},{
				xtype:"radiofield",
				boxLabel:"女",
				inputValue:"mail",
				name:"sex",
			}]
			},
			{
				fieldLabel:'技术',
				xtype:"checkboxgroup",
				//设定显示两页
				columns:2,
				items:[{
				//多选框
				xtype:"checkboxfield",
				//字段名称
				name:"tech",
				//设定label
				boxLabel:"Java",
				//输入的数据
				inputValue:"java",
				//设定默认选中
				checked:true
			},{
				//多选框
				xtype:"checkboxfield",
				name:"tech",
				boxLabel:"Ruby",
				inputValue:"ruby",
			},{
				//多选框
				xtype:"checkboxfield",
				name:"tech",
				boxLabel:"Python",
				inputValue:"python",
			}]
			},
			
		]
	});
	
});