var dataStore = Ext.create("Ext.data.Store",{
	fields:[
		'name','data'
	],
	data:[
		{name:'0~10岁',data:120},
		{name:'11~18岁',data:170},
		{name:'19~24岁',data:175}
	]
});
var b1 = Ext.create("Ext.Window",{
	width:600,
	height:500,
	title:'年龄身高分布图',
	shadow:false,
	maximizable:true,
	layout:'fit',
	items:[{
		xtype:'chart',
		style:'background:#fff',//控制背景颜色
		animate :true,//运行动画
		shadow : true,
		theme:"Category1",//皮肤
		store:dataStore,
        axes:[{
        	type:'Numeric',
        	position:'left',//放置到左边
        	dashSize:5,//引导线的宽度设置
        	title:'身高分布(CM)',
        	fields:['data'],//显示的数据索引
        	majorTickSteps:5,
        	minorTickSteps:6,
        	grid:{
        		odd:{//奇数行
        			opacity:1,//不透明
        			'stroke-width':0.5//表格线宽
        		},
        		even:{//偶数行
        			opacity:1,//不透明
        			stroke:'#DDD',
        			'stroke-width':0.5//表格线宽
        		}
        	}
        },{
        	type:'Category',
        	position:'bottom',
        	fields:['name'],
        	title:'年龄段',
        	grid:true
        }],//轴
        series:[{
        	type:'line',
        	axis:'left',
	       	xField: 'name',
	        yField: 'data',
	        highlight:true,
	        tips:{
			  trackMouse: true,
			  width: 140,
			  height: 28,
			  renderer: function(storeItem, item) {
			    this.setTitle(storeItem.get('name') + ': ' +
			    storeItem.get('data') + 'CM');
			  }
	        }
        }]//序列
	}]
});







