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
	//设定动画
	//animatte:true,
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
			{xtype:"button",text:'查找',iconCls:'table_find',id:"find"}
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