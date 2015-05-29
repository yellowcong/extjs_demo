Ext.onReady(function(){
	Ext.QuickTips.init();
	Ext.Loader.setConfig({
		enabled:true
	});
	Ext.application({
		name : 'AM',
		appFolder : "app",
		launch:function(){
	        Ext.create('Ext.container.Viewport', {
	        	padding : "15 15 15 15",
	            items: {
	            	width: 750,
	            	height: 530,
	            	xtype: 'mainlayout'
	            }
	        });
		},
		controllers:[
			'DeptController'
		]
	});
})
