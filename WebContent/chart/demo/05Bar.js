
  
  var columnStore6 =  Ext.create('Ext.data.JsonStore', {
    	fields: ['name', 'data'],
	    data: [
	    	{name:"0~10岁",data:122},
	    	{name:"11~18岁",data:163},
	    	{name:"19~24岁",data:234},
	    	{name:"15~35岁",data:737},
	    	{name:"36~42岁",data:453},
	    	{name:"43~60岁",data:540}
	    ]
	});
var b5 = Ext.create('Ext.Window', {
        width: 800,
        height: 600,
        hidden: false,
        maximizable: true,
        title: 'Bar Renderer',
        renderTo: Ext.getBody(),
        layout: 'fit',
        tbar: [{
            text: '重新装载数据',
            handler: function() {
                columnStore6.loadData( [
			    	{name:"0~10岁",data:221},
			    	{name:"11~18岁",data:363},
			    	{name:"19~24岁",data:135},
			    	{name:"15~35岁",data:432},
			    	{name:"36~42岁",data:756},
			    	{name:"43~60岁",data:649}
			    ]);
            }
        }],
        items: {
            xtype: 'chart',
            animate: true,
            style: 'background:#fff',
            shadow: false,//阴影
            store: columnStore6,
            axes: [{
                type: 'Numeric',
                position: 'bottom',
                fields: ['data'],
                label: {
                   renderer: Ext.util.Format.numberRenderer('0,0')
                },
                title: '人数',
                minimum: 0
            }, {
                type: 'Category',
                position: 'left',
                fields: ['name'],
                title: '年龄分布'
            }],
            series: [{
            	//设定类型
                type: 'bar',
                axis: 'bottom',
                label: {
                    display: 'insideEnd',
                    field: 'data1',
                    renderer: Ext.util.Format.numberRenderer('0'),
                    orientation: 'horizontal',
                    color: '#333',
                    'text-anchor': 'middle',
                    contrast: true
                },
                xField: 'name',
                yField: ['data'],
                renderer: function(sprite, record, attr, index, store) {
                    var fieldValue = Math.random() * 20 + 10;
                    var value = (record.get('data') >> 0) % 5;
                    var color = ['rgb(213, 70, 121)', 
                                 'rgb(44, 153, 201)', 
                                 'rgb(146, 6, 157)', 
                                 'rgb(49, 149, 0)', 
                                 'rgb(249, 153, 0)'][value];
                    return Ext.apply(attr, {
                        fill: color
                    });
                }
            }]
        }
    });