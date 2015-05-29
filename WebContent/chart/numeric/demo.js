//折线图
Ext.onReady(function(){
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
var num = Ext.create("Ext.Window",{
	width:600,
	height:500,
	title:'年龄身高分布图',
	shadow:false,
	maximizable:true,
	layout:'fit',
	items:[{
		xtype:'chart',
		//控制背景颜色
		style:'background:#fff',
		animate :true,//运行动画
		shadow : true,
		//皮肤
		theme:"Category1",
		//存储的数据
		store:dataStore,
		//xy 轴配置
        axes:[{
        	//纵轴
        	type:'Numeric',
        	//放置到左边,设定 轴的 位置 
        	position:'left',
        	//引导线的长度设置
        	dashSize:5,
        	//设定纵轴 名称
        	title:'身高分布(CM)',
        	//显示的数据索引
        	fields:['data'],
        	//设定主单位 轴的个数
        	majorTickSteps:5,
        	//设定纵轴个格 长度
        	minorTickSteps:9,
        	//纵轴引导线样式
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
        	//横轴  Category 分类轴
        	type:'Category',
        	//展示位置
        	position:'bottom',
        	//字段 显示
        	fields:['name'],
        	//标题
        	title:'年龄段',
        	//引导线
        	grid:true
        }],
        
        //数据配置
        series:[{
        	//数据显示样式  line 线形
        	type:'line',
        	//展示对其方式
        	axis:'left',
        	//x，y的字段
	       	xField: 'name',
	        yField: 'data',
	        
	        //高粱效果
	        highlight:true,
	        
        	//鼠标选中效果
	        tips:{
			  trackMouse: true,
			  //提示的界面框大小
			  width: 140,
			  height: 28,
			  //返回的数据
			  renderer: function(storeItem, item) {
			    this.setTitle(storeItem.get('name') + ': ' +
			    storeItem.get('data') + 'CM');
			  }
	        }
        }]
	}]
});


//调用window
num.show();
	
});





