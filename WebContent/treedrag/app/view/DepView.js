//定义Tree模型对象
Ext.define("AM.view.DepView",{
	extend:"Ext.tree.Panel",
	//定义xtype depTree
	alias: 'widget.depTree',
	title : '部门树形',
	width : 250,
	height: 300,
	//边距  顺时针方向 
	padding : '5 3 3 10',
	//隐藏根节点, 这个有点用
 	rootVisible:false,
 	//中间对象，剪切板对象
 	config:{
 		//添加这个属性，当一个中间对象，添加节点对象
 		copyNodes:""
 	},
	//设定动画
	//animatte:true,
 	
 	viewConfig:{
 		
	 	//添加拖拽插件,
 		plugins:{
 			ptype:"treeviewdragdrop",
 			//不能添加到子叶中
 			appendOnly:true
 		},
 		listeners:{
 			//这个drop方法同我们的表格拖拽有所不同
 			drop: function(node, data,overModel,  dropPosition, options) {
 				//Object { copy: undefined, event: Object, view: Object, ddel: Object, item: <tr#treeview-1013-record-0201.x-grid-row.x-grid-tree-node-leaf.x-grid-data-row.x-grid-row-selected>, records: Array[1], fromPosition: Array[2] }
 				console.log(data);
 				
 				//获取到我们移动的对象
 				console.log(data.records[0].raw);
 				
 				//获取我们移动到的对象
 				console.log(overModel.raw);
 				
 				//然后我们可以更新数据到数据库
// 				Ext.Ajax.request({});
 				
 			},
 			
 			//这个方法不实用，使用的时候，需要讲appendOnly:true 关闭
 			//放下之前出发的事情
 			beforedrop:function( node,  data,  overModel,  dropPosition,  dropFunction,  options){
 				//Object { raw: Object, modified: Object, data: Object, hasListeners: Object, events: Object, stores: Array[2], internalId: "01", id: "Ext.data.Store.ImplicitModel-Dep-01", nextSibling: Object, previousSibling: null, 等 9 项… }
 				console.log(overModel);
 				//如果子类是叶子， 取消是叶子，这样就可以文件夹显示了
 				var flag = overModel.raw.leaf;
 				console.log(flag);
 				if(flag){
 					overModel.set("leaf",false);
 				}
 			}
 		}
 	},
 	columns:[
		{
			//配置列模式
			xtype:'treecolumn', 
			text:'text',
			writh:150,
			dataIndex:'text'
		},{
			text:'info',
			dataIndex:'id'
		}
	],
	//添加工具栏
	dockedItems:[
		{
		xtype:'toolbar',
		//设定显示的位置
		dock:'left', //默认为top
		//定义样式 Extjs提供的，不好看，还不如原来的
//		ui:"footer",
		items:[
			//可以添加标签
			{xtype:"button",text:'添加',iconCls:'table_add',id:"add"},
			{xtype:"button",text:'删除',iconCls:'table_delete',id:"delete"},
			{xtype:"button",text:'更新',iconCls:'table_refresh',id:"update"},
			{xtype:"button",text:'查找',iconCls:'table_find',id:"find"},
			{xtype:"button",text:'复制',iconCls:'table_editor',id:"cut"},
			{xtype:"button",text:'粘贴',iconCls:'table_editor',id:"parst"}
		]
		},{
			//toolbar 会在 上面显示 工具栏
			xtype:"toolbar",
			items:[
				//展开数据
				{xtype:"button",text:'展开所有',id:"expland"},
				{xtype:"button",text:'关闭所有',id:"closeall"}
			]
		
		}
	],
	//这个是store, 妈的，我居然忘了改了
    store:'Dep'
	/*root:{

		text:"公司部门",
		id:"0",
		//是否是叶子 -- 就是说是否是子类
		leaf:false,
		//子类
		children:[{
			//技术 部门下面有  研发部和实施部
			text:'技术部门',
			id : '01',
			leaf:false,
			//不会级联选择，所以我们获取子节点添加
			checked:false,
			children:[{
				text:'研发部',
				id : '0101',
				//设定选中
				checked:true,
				leaf:true	
				
			},{
				text:'实施部',
				id : '0102',
				checked:true,
				leaf:true		
			}]
		},{
			
			//后勤部门有人事部和行政部
			text:'后勤部门',
			id : '02',
			leaf:false,
			checked:false,
			children:[{
				text:'人事部',
				id : '0201',
				checked:false,
				leaf:true		
			},{
				text:'行政部',
				id : '0202',
				checked:false,
				leaf:true		
			}]
		}]
	}*/
});