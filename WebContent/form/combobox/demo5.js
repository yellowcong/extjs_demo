Ext.onReady(function(){
	//定义我们的模板
	Ext.create("Ext.panel.Panel",{
		title:"时间日期",
		width:270,
		height:100,
		renderTo:"box",
		frame:true,
		items:[
		{
			fieldLabel:"时间字段",
			xtype:"timefield",
			labelAlign:"left",
			labelWidth:70,
			width:200,
			msgTarget:'side',
			//设定时间的选中区间
			minValue:'9:00',
			maxValue:'17:00',
			//设定错误提示 ｛0｝是错误的占位符
			minText:"时间要大于{0}",
			maxText:"时间要小于{0}",
			//设定事件跨度,分钟为单位
			increment:60,  //间隔一小时
			//时间格式修改
			format:"h时m分",
			invalidText:"时间格式错误",
			//设定下拉 选择的长度
			pickerMaxHeight:100,
			
		}
		]
		
	})
	
});