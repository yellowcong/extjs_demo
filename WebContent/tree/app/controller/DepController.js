//定义控制
Ext.define("AM.controller.DepController",{
	//继承于Ext.app.Controller
	extend:"Ext.app.Controller",
	//定义 操作，这个就是我们经常接触到的控制操作
	init:function(){
		this.control({
			//绑定事件
			"depTree button[id='expland']":{
				click:function(btn,event){
					//返回数据
					//Object { xtype: "button", text: "保存", iconCls: "table_save", id: "save", initialConfig: Object, events: Object, componentLayout: Object, componentCls: "x-btn", protoEl: null, renderData: Object, 等 35 项… }
//					console.log(btn);
					
					//获取tree组建
					var tree = btn.ownerCt.ownerCt;
					//展开所有数据
					tree.expandAll();
				}
			}
			,
			"depTree button[id='closeall']":{
				click:function(btn,event){
					//返回数据
					//Object { xtype: "button", text: "保存", iconCls: "table_save", id: "save", initialConfig: Object, events: Object, componentLayout: Object, componentCls: "x-btn", protoEl: null, renderData: Object, 等 35 项… }
//					console.log(btn);
					
					//获取tree组建
					var tree = btn.ownerCt.ownerCt;
					
					//关闭所有的数据
					tree.collapseAll();
				}
			},
			//这中通过左边点击 ，添加数据的方法， 使用不是很多
			"depTree button[id='add']":{
				click:function(btn,event){
					//返回数据
					//Object { xtype: "button", text: "保存", iconCls: "table_save", id: "save", initialConfig: Object, events: Object, componentLayout: Object, componentCls: "x-btn", protoEl: null, renderData: Object, 等 35 项… }
//					console.log(btn);
					
					//获取tree组建
					var tree = btn.ownerCt.ownerCt;
					//Object { enableAnimations: true, xtype: "depTree", title: "MVC集合", initialConfig: Object, events: Object, autoGenId: true, id: "depTree-1010", componentLayout: Object, componentCls: "x-panel", protoEl: null, 等 54 项… }
//					console.log(tree);
					
					var checkeds = tree.getChecked();
					console.log(checkeds.length);
					if(checkeds.length == 1){
						//打印获取的选中节点
						//Object { raw: Object, modified: Object, data: Object, hasListeners: Object, events: Object, stores: Array[2], internalId: "01", id: "Ext.data.Store.ImplicitModel-ext-ge…", nextSibling: Object, previousSibling: null, 等 9 项… }
						console.log(checkeds[0]);
						var node = checkeds[0];
						
						//我们需要判断是否是父节点
						var flag = node.raw.leaf;
						console.log(flag);
						if(!flag){
								node.appendChild({
									text:'技术发部',
									id : '0104',
									//设定选中
									checked:true,
									leaf:true	
								});
						}else{
							Ext.MessageBox.alert("系统信息","不要选择子部门");
						}
					}else if(checkeds.length >1){
						Ext.MessageBox.alert("系统信息","部门选定过多");
					}else{
						Ext.MessageBox.alert("系统信息","部门未选定");
					}
				}
			},
			"depTree":{
			
				itemclick:function(tree,record,item,index,e,options){
					//Object { raw: Object, modified: Object, data: Object, hasListeners: Object, events: Object, stores: Array[2], internalId: "0101", id: "Ext.data.Store.ImplicitModel-ext-ge…", nextSibling: Object, previousSibling: null, 等 8 项… }
//					console.log(record);
					//获取记录
					console.log(record.get('id'));
				}
			}
		});
	},
	
	//需要 声明 views store model
	//定义界面层
	views:[
		"DepView"
	],
	//定义Store中的类
	stores:[
		"Dep"
	],
	//定义模型类
	models:[
	]
});

