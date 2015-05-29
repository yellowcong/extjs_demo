/**
 * ClassName 部门管理控制器
 */
Ext.define("AM.controller.DeptController",{
	extend:'Ext.app.Controller',
	init: function(){
		this.control({
			//设定列表添加按钮的事件
			'deptlist button[id=add]':{
				click:function(addButton){
					//得到数据表格的对象
					var grid  = addButton.ownerCt.ownerCt;
    				var modelObj = {
				        text: '',
		       			id: '01',
		       			info :'',
		       			orderIndex:0,
		       			manager:'',
		       			nodeType:'ROOT',
		       			leaf : true
				    };
				    //得到tree
				    var tree = addButton.ownerCt.ownerCt.ownerCt.ownerCt
				    	.child('#west-tree').child("#dept-tree");
					Ext.create("AM.util.GridDoActionUtil").doInsert(grid,modelObj,tree);
					
				}
			}
		})
	},
	views:[
		'DeptTree',
		'DeptList',
		'MainLayout'
	],
	stores:[
		'DeptStore4Tree',
		'DeptStore'
	],
	models:[
		'DeptModel'
	]
});