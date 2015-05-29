  
    var columnStore9 =  Ext.create('Ext.data.JsonStore', {
    	fields: ['name', 'data1','data2','data3','data4'],
	    data: [
	    	{name:"一月月考",data1:85,data2:76,data3:94},
	    	{name:"二月月考",data1:96,data2:72,data3:87},
	    	{name:"三月月考",data1:70,data2:66,data3:68},
	    	{name:"四月月考",data1:50,data2:88,data3:56},
	    	{name:"五月月考",data1:80,data2:88,data3:36},
	    	{name:"六月月考",data1:40,data2:68,data3:96},
	    	{name:"七月月考",data1:60,data2:88,data3:86},
	    	{name:"八月月考",data1:70,data2:88,data3:96},
	    	{name:"九月月考",data1:80,data2:98,data3:66},
	    	{name:"十月月考",data1:90,data2:78,data3:76},
	    	{name:"十一月月考",data1:90,data2:78,data3:76},
	    	{name:"十二月月考",data1:90,data2:78,data3:76}
	    ]
	});
  var b9 = Ext.create('Ext.Window', {
        width: 800,
        height: 600,
        hidden: false,
        shadow: false,
        maximizable: true,
        style: 'overflow: hidden;',
        title: 'Radar Chart',
        renderTo: Ext.getBody(),
        layout: 'fit',
        tbar: [{
            text: '装载数据',
            handler: function() {
                columnStore9.loadData( [
			    	{name:"一月月考",data1:75,data2:86,data3:74},
			    	{name:"二月月考",data1:96,data2:82,data3:87},
			    	{name:"三月月考",data1:70,data2:96,data3:68},
			    	{name:"四月月考",data1:50,data2:78,data3:56},
			    	{name:"五月月考",data1:90,data2:88,data3:36},
			    	{name:"六月月考",data1:80,data2:68,data3:96},
			    	{name:"七月月考",data1:60,data2:88,data3:86},
			    	{name:"八月月考",data1:70,data2:98,data3:86},
			    	{name:"九月月考",data1:88,data2:98,data3:66},
			    	{name:"十月月考",data1:70,data2:88,data3:96},
			    	{name:"十一月月考",data1:90,data2:78,data3:76},
			    	{name:"十二月月考",data1:90,data2:98,data3:76}
			    ]);
            }
        }, {
            enableToggle: true,
            pressed: true,
            text: 'Animate',
            toggleHandler: function(btn, pressed) {
                var chart = Ext.getCmp('chartCmp');
                chart.animate = pressed ? { easing: 'ease', duration: 500 } : false;
            }
        }],
        items: {
            id: 'chartCmp',
            xtype: 'chart',
            style: 'background:#fff',
            theme: 'Category2',
            animate: true,
            store: columnStore9,
            insetPadding: 20,
            legend: {
                position: 'right'//图例
            },
            axes: [{//轴
                type: 'Radial',
                position: 'radial',
                label: {
                    display: true
                }
            }],
            series: [{
            	
            	//雷达图
                type: 'radar',
                xField: 'name',
                yField: 'data1',
                showInLegend: true,//展示在图例
                showMarkers: true,
                markerConfig: {
                    radius: 5,
                    size: 5
                },
                style: {
                    'stroke-width': 2,
                    //fill: 'yellow'//没有填充
                    fill:'none'
                }
            },{
                type: 'radar',
                xField: 'name',
                yField: 'data2',
                showInLegend: true,
                showMarkers: true,
                markerConfig: {
                    radius: 5,
                    size: 5
                },
                style: {
                    'stroke-width': 2,
                    fill: 'none'
                }
            },{
                type: 'radar',
                xField: 'name',
                yField: 'data3',
                showMarkers: true,
                showInLegend: true,
                markerConfig: {
                    radius: 5,
                    size: 5
                },
                style: {
                    'stroke-width': 2,
                    fill: 'none'
                }
            }]
        }
    }); 