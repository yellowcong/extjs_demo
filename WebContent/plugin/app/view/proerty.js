Ext.define("AM.view.proerty",{
	extend:'Ext.grid.property.Grid',
	title: '字段属性',
	//定义xtype属性
	alias: 'widget.proList',
    width: 300,
    //自定义渲染的函数
    customRenderers :{
    	'boy':function(value){
    		return value?'是':'否'
    	},
    	'emial-width':function(value){
    		return value;
    	}
    },
    source: {
    	 //默认数据
        'boy':false,
        //设定我们的宽度
        'emial-width':'100'
    }	
})