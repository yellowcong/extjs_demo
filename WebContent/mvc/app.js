Ext.onReady(function(){
	Ext.QuickTips.init();
	Ext.Loader.setConfig({
		enabled:true
	});
	Ext.application({
		name : 'AM',//Ӧ�õ�����
		appFolder : "app",//Ӧ�õ�Ŀ¼
		launch:function(){//��ǰҳ��������ִ�еĺ���
	        Ext.create('Ext.container.Viewport', { //�򵥴���һ����ͼ
	        	layout:'auto',//�Զ���䲼��
	            items: {
	            	xtype: 'userlist',
	                title: 'Users',
	                html : 'List of users will go here'
	            }
	        });
		},
		controllers:[
			'Users'
		]
	});
})