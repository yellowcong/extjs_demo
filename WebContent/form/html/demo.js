Ext.onReady(function(){
	//定义我们的模板
	
	Ext.create("Ext.form.Panel",{
		title:"html富文本编辑器",
		width:500,
		height:400,
		renderTo:"box",
		frame:true,
		items:[
		
			//htmleditor 付文本编辑器
			{	xtype:"htmleditor",
				name:"content",
				height:500,
				//设定字体样式
				fontFamilies:["宋体","黑体","楷体"],
				//添加默认的链接
				defaultLinkValue :'http://www.uspcat.com'
			}
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