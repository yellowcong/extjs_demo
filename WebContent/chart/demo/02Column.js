  //定义数据集合
  var columnStore1 =  Ext.create('Ext.data.JsonStore', {
    	fields: ['name', 'data'],
	    data: [
	    	{name:"0~10岁",data:20},
	    	{name:"11~18岁",data:60},
	    	{name:"19~24岁",data:30}
	    ]
	});
  var b2 = Ext.create('Ext.Window', {
        width: 800,
        height: 600,
        hidden: false,
        closeAction:'hide',
        maximizable: true,
        title: '柱形图展示图表',
        layout: 'fit',
        tbar: [{
            text: '改变数据',
            handler: function() {
                columnStore1.loadData([
			    	{name:"0~10岁",data:50},
			    	{name:"11~18岁",data:30},
			    	{name:"19~24岁",data:20}
			    ]);
            }
        }],
        items: {
            id: 'chartCmp',
            xtype: 'chart',
            style: 'background:#fff',
            animate: true,
            shadow: true,
            store: columnStore1,
            axes: [{//轴
                type: 'Numeric',
                position: 'left',
                fields: ['data'],
                title: '人数',
                grid: true,
                minimum: 0
            }, {
                type: 'Category',
                position: 'bottom',
                fields: ['name'],
                title: '年龄段'
            }],//序列
            series: [{
                type: 'column',
                axis: 'left',
                highlight: true,
                tips: {//提示
                  trackMouse: true,
                  width: 140,
                  height: 28,
                  renderer: function(storeItem,item) {
                    	this.setTitle(storeItem.get('name') + ': ' 
                    	+ storeItem.get('data') + ' 名');                  	
                  }
                },
                //格式化
	            renderer: function(sprite, record, attr, index, store){
	                    var fieldValue = Math.random() * 20 + 10;
	                    var value = (record.get('data') >> 0) % 3;
	                    var color = ['rgb(213, 70, 121)', 
	                                 'rgb(44, 153, 201)', 
	                                 'rgb(146, 6, 157)', 
	                                 'rgb(49, 149, 0)', 
	                                 'rgb(249, 153, 0)'][value];
	                    return Ext.apply(attr, {
	                        fill: color
	                    });
	            } ,                 
                label: { //控制柱形图label
                  display: 'insideEnd',
                  'text-anchor': 'middle',
                    field: 'data',
                    renderer: Ext.util.Format.numberRenderer('0'),
                    orientation: 'vertical',
                    color: '#333'
                },
                xField: 'name',
                yField: 'data'
            }]
        }
    });