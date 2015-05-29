//定义控制
Ext.define("AM.controller.DepController",{
	//继承于Ext.app.Controller
	extend:"Ext.app.Controller",
	//定义 操作，这个就是我们经常接触到的控制操作
	init:function(){
		this.control({
			
			"depTree":{
				checkchange:function(node,checked,options){
					//获取是否是 节点
					console.log("leaf:"+node.raw.leaf);	
					console.log("checked:"+checked);

					//查看是否点击
					//当不是节点的情况
					if(node.raw.leaf == false){
						console.log("选中:"+checked);
						//选中
						if(checked){
							//打开节点
							node.expand();
							//遍历孩子
							node.eachChild(function(n){
								//通过节点设定数据
								n.set("checked",true);
							})
						}else{
							//打开节点
							node.expand();
							//遍历孩子
							node.eachChild(function(n){
								//通过节点设定数据
								n.set("checked",false);
							})
							
						}
						
					}
				},
				
				itemclick:function(tree,record,item,index,e,options){
					//Object { raw: Object, modified: Object, data: Object, hasListeners: Object, events: Object, stores: Array[2], internalId: "0101", id: "Ext.data.Store.ImplicitModel-ext-ge…", nextSibling: Object, previousSibling: null, 等 8 项… }
//					console.log(record);
					//获取记录
					console.log(record.get('id'));
				}
				
			},
			//添加剪切事件
			"depTree button[id='cut']":{
				click:function(btn,event){
					//获取树
					var tree = btn.ownerCt.ownerCt;
					//获取选中的对象
					var checkeds = tree.getChecked();
					
					//当添加了数据的情况
					if(checkeds.length >0){
						//添加复制的节点
						tree.setCopyNodes(Ext.clone(checkeds));
						//复制的数据长度	
						console.log(checkeds.length);
						//更新节点数据
						for(var i=0;i<checkeds.length;i++){
							//设定取笑选中
							checkeds[i].set("checked",false);
						}
					}else{
						Ext.MessageBox.alert("系统提示","没有选择节点");
					
					}
				}
			},
			//粘贴事件
			"depTree button[id='parst']":{
				click:function(btn,event){
					//获取树
					var tree = btn.ownerCt.ownerCt;
					//获取选中的数据
					var node = tree.getChecked();
					
					if(node.length == 1){
						var parentNode = node[0];
						var childNodes =  tree.getCopyNodes();
						
						//当有数据的时候就会添加数据
						if(childNodes.length>0){
							for(i=0;i<childNodes.length;i++){
								var n = childNodes[i].data;
								//修改id
								n['id'] = n['id']+'1';
								//添加到子节点中
								parentNode.appendChild(n);
							}
						}
						
					}else{
						Ext.MessageBox.alert("系统信息","粘贴失败")
					}
				}
			},
			//删除事件
			"depTree button[id=delete]":{
			
				click:function(btn,event){
					var tree = btn.ownerCt.ownerCt;
					//获取选中的节点
					var nodes = tree.getChecked();
					
					if(nodes.length >0){
						for(var i = 0;i<nodes.length;i++){
							//移除节点
							nodes[i].remove(true);
							//然后同过ajax的方法来删除所有数据
						}						
					}else{
						Ext.MessageBox.alert("系统信息","选择节点");
					}
				}
			},
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

