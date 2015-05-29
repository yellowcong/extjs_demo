  //定义数据集合
  var columnStore2 =  Ext.create('Ext.data.JsonStore', {
    	fields: ['name', 'data1','data2','data3','data4'],
	    data: [
	    	{name:"一月月考",data1:85,data2:76,data3:94,data4:80},
	    	{name:"二月月考",data1:96,data2:72,data3:87,data4:63},
	    	{name:"三月月考",data1:70,data2:66,data3:68,data4:78},
	    	{name:"四月月考",data1:90,data2:78,data3:76,data4:90}
	    ]
	});
var b3 = Ext.create('Ext.Window', {
        width: 800,
        height: 600,
        hidden: false,
        maximizable: true,
        closeAction:'hide',
        title: 'Line Chart',
        renderTo: Ext.getBody(),
        layout: 'fit',
        tbar: [{
            text: '产看另外一个人的成绩',
            handler: function() {
                columnStore2.loadData([
			    	{name:"一月月考",data1:75,data2:86,data3:84,data4:90},
			    	{name:"二月月考",data1:86,data2:62,data3:87,data4:93},
			    	{name:"三月月考",data1:80,data2:96,data3:68,data4:98},
			    	{name:"四月月考",data1:60,data2:98,data3:76,data4:60}
			    ]);
            }
        }],
        items: {
            xtype: 'chart',
            style: 'background:#fff',
            animate: true,
            store: columnStore2,
            shadow: true,//阴影
//          mask: 'horizontal',//创建遮罩
//			listeners: {//配合遮罩用的隐藏
//	            select: {
//	                fn: function(me, selection) {
//	                    //me.setZoom(selection);
//	                    me.mask.hide();
//	                }
//	            }
//	        },            
            theme: 'Category1',
            legend: {
                position: 'right'
            },
            axes: [{//轴
                type: 'Numeric',
                minimum: 0,
                position: 'left',
                fields: ['data1', 'data2', 'data3', 'data4'],
                title: '分数',
                minorTickSteps: 1,//内部去也的跨度
                grid: {
                    odd: {
                        opacity: 1,
                        fill: '#ddd',
                        stroke: '#bbb',
                        'stroke-width': 0.5
                    }
                }
            }, {
                type: 'Category',
                position: 'bottom',
                fields: ['name'],
                title: '历次考试'
            }],
            series: [{//序列1
                type: 'line',
                highlight: {
                    size: 7,
                    radius: 7
                },
                axis: 'left',
                xField: 'name',
                yField: 'data1',//展示在图例上的
                title  :'语文',
                markerConfig: {//标记配置
                    type: 'cross',//交叉
                    size: 4,
                    radius: 4,
                    'stroke-width': 0
                }
            },{//序列2
                type: 'line',
                highlight: {
                    size: 7,
                    radius: 7
                },
                axis: 'left',
                xField: 'name',
                yField: 'data2',
                title  :'数学',
                markerConfig: {
                    type: 'cross',
                    size: 4,
                    radius: 4,
                    'stroke-width': 0
                }
            }, {
                type: 'line',
                highlight: {
                    size: 7,
                    radius: 7
                },
                axis: 'left',//位置
                smooth: true,
                xField: 'name',
                yField: 'data3',
                title  :'英语',
                markerConfig: {
                    type: 'cross',
                    size: 4,
                    radius: 4,
                    'stroke-width': 0
                }
            }, {
                type: 'line',
                highlight: {
                    size: 7,
                    radius: 7
                },
                axis: 'left',
                smooth: true,
                fill: true,//填充颜色
                xField: 'name',
                yField: 'data4',
                title  :'计算机',
                markerConfig: {
                    type: 'circle',//圈
                    size: 4,
                    radius: 4,
                    'stroke-width': 0
                }
            }]
        }
    });