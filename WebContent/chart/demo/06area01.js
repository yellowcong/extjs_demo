 //Ext.onReady(function () {
 var columnStore7 =  Ext.create('Ext.data.JsonStore', {
    	fields: ['name', 'data1','data2','data3','data4'],
	    data: [
	    	{name:"一月月考",data1:85,data2:76,data3:94,data4:80},
	    	{name:"二月月考",data1:96,data2:72,data3:87,data4:63},
	    	{name:"三月月考",data1:70,data2:66,data3:68,data4:78},
	    	{name:"四月月考",data1:90,data2:78,data3:76,data4:90}
	    ]
	});
  var b6 = Ext.create('Ext.Window', {
        width: 800,
        height: 600,
        hidden: false,
        shadow: false,
        maximizable: true,
        title: 'Area Chart',
        renderTo: Ext.getBody(),
        layout: 'fit',
        tbar: [{
            text: '切换数据',
            handler: function() {
                columnStore7.loadData([
			    	{name:"一月月考",data1:75,data2:86,data3:84,data4:90},
			    	{name:"二月月考",data1:86,data2:62,data3:87,data4:93},
			    	{name:"三月月考",data1:80,data2:96,data3:68,data4:98},
			    	{name:"四月月考",data1:60,data2:98,data3:76,data4:60}
			    ]);
            }
        }, {
            enableToggle: true,
            pressed: true,
            text: '动画开启|关闭',
            toggleHandler: function(btn, pressed) {
                var chart = Ext.getCmp('chartCmp');
                chart.animate = pressed?{easing: 'ease', duration: 500 }:false;
            }
        }],
        items: {
            id: 'chartCmp',
            xtype: 'chart',
            style: 'background:#fff',
            animate: true,
            store: columnStore7,
            //配置
            legend: {
                position: 'bottom'
            },
            axes: [{
                type: 'Numeric',
                grid: true,
                position: 'left',//位置
                fields: ['data1', 'data2', 'data3', 'data4'],
                title: '分数分布',
                grid: {
                    odd: {
                        opacity: 1,
                        fill: '#ddd',
                        stroke: '#bbb',
                        'stroke-width': 1
                    }
                },
                minimum: 0,
                adjustMinimumByMajorUnit: 0
            }, {
                type: 'Category',
                position: 'bottom',
                fields: ['name'],
                title: '每月考试',
                grid: true,
                label: {
                	//设定旋转   
                    rotate: {
                        degrees: 315
                    }
                }
            }],
            series: [{
            	
            	//面积类型
                type: 'area',
                highlight: false,
                axis: 'left',
                xField: 'name',
                yField: ['data1', 'data2', 'data3', 'data4'],
                style: {
                    opacity: 0.93
                }
            }]
        }
    }); 
 //})