//折线图
Ext.onReady(function(){
  //定义数据集合
  //Store 和JsonStore类似，两个可以通用
  var columnStore1 =  Ext.create('Ext.data.JsonStore', {
    	fields: ['name', 'data'],
	    data: [
	    	{name:"0~10岁",data:20},
	    	{name:"11~18岁",data:60},
	    	{name:"19~24岁",data:30}
	    ]
	});
  var b2 = Ext.create('Ext.Window', {
  		//window的狂傲
        width: 800,
        height: 600,
        //是否隐藏
        hidden: false,
        closeAction:'hide',
        //可以最大化
        maximizable: true,
        title: '柱形图展示图表',
        //fit布局
        layout: 'fit',
        //顶部按钮
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
            
            //chart类型
            xtype: 'chart',
            //北京
            style: 'background:#fff',
            //动画
            animate: true,
            shadow: true,
            //存储
            store: columnStore1,
            
            //x,y 轴的设定
            axes: [{
            	//y轴
            	//数字类型
                type: 'Numeric',
                //在左边显示
                position: 'left',
                //显示字段
                fields: ['data'],
                // y轴名称
                title: '人数',
                //设定导航
                grid: true,
                minimum: 0
            }, {
            	//y轴
            	//列别
                type: 'Category',
                position: 'bottom',
                fields: ['name'],
                title: '年龄段'
            }],
            //数据设定
            series: [{
                type: 'column',
                axis: 'left',
                //高亮操作
                highlight: true,
                //控制柱形图label
                 label: { 
                  display: 'insideEnd',
                  'text-anchor': 'middle',
                    field: 'data',
                    renderer: Ext.util.Format.numberRenderer('0'),
                    orientation: 'vertical',
                    color: '#333'
                },
                //设定 x,,y的字段
                xField: 'name',
                yField: 'data',
                //提示
                tips: {
                  trackMouse: true,
                  width: 140,
                  height: 28,
                  renderer: function(storeItem,item) {
                    	this.setTitle(storeItem.get('name') + ': ' 
                    	+ storeItem.get('data') + ' 名');                  	
                  }
                },
                //渲染不同的列显示的颜色
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
            }]
        }
    });

//调用window
b2.show();
	
});





