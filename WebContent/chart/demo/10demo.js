  var columnStore11 =  Ext.create('Ext.data.JsonStore', {
    	fields: ['name', 'data'],
	    data: [
	    	{name:"0~10岁",data:20},
	    	{name:"11~18岁",data:60},
	    	{name:"19~24岁",data:30}
	    ]
	});
    var b11 = Ext.create('Ext.Window', {
        width: 800,
        height: 600,
        hidden: false,
        maximizable: true,
        title: 'Pie Renderer Chart',
        renderTo: Ext.getBody(),
        layout: 'fit',
        tbar: [{
            text: 'Reload Data',
            handler: function() {
                columnStore11.loadData([
			    	{name:"0~10岁",data:40},
			    	{name:"11~18岁",data:20},
			    	{name:"19~24岁",data:40}
			    ]);
            }
        }],
        items: {
            id: 'chartCmp',
            xtype: 'chart',
            style: 'background:#fff',
            animate: true,
            shadow: true,
            store: columnStore11,
            series: [{
                type: 'pie',
                animate: true,
                angleField: 'data', //角度
                lengthField: 'data', //字段切点长度
                highlight: {
                  segment: {
                    margin: 20
                  }
                },
                label: {
                    field: 'name',   //文本标注
                    display: 'rotate', //旋转标签 (also middle, out).
                    font: '14px Arial',
                    contrast: true
                },                                
                style: {
                    'stroke-width': 1,
                    'stroke': '#fff'
                },
                //add renderer
                renderer: function(sprite, record, attr, index, store) {//格式化重要函数
                    var value = (record.get('data') >> 0) % 9;
                    var color = [ "#94ae0a", "#115fa6","#a61120", "#ff8809", "#ffd13e", "#a61187", "#24ad9a", "#7c7474", "#a66111"][value];
                    return Ext.apply(attr, {
                        fill: color
                    });
                }
            }]
        }
    });