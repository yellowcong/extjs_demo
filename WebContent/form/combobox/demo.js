Ext.onReady(function(){
	//定义我们的模板
	Ext.create("Ext.panel.Panel",{
		title:"日期选择器",
		width:270,
		height:100,
		renderTo:"box",
		frame:true,
		items:[
		{
			fieldLabel:"日期字段",
			xtype:"datefield",
			labelAlign:"left",
			labelWidth:70,
			width:200,
			msgTarget:'side',
			
			//限定时间区间
			minValue:"04/01/2013",
			maxValue:"27/05/2015",
			
			//不能选择的时间
			//星期天和星期天不能选
			//设定哪一个星期不能选择
			disabledDays:[0,6],
			
			//设定具体日期不能选
			disabledDates:['15年05月06日'],
			disabledDatesText:"这个日期，你不能选",
			//格式化输出
			format:"m月d日",
		}
		]
		
	})
	
});