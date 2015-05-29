Ext.define("AM.util.GridDoActionUtil",{
	/**
	 * 树形维护表格的插入操作
	 * @param {} grid
	 * @param {} modelObj
	 * @param {} treeObj
	 */
	doInsert:function(grid,modelObj,treeObj){
		if(!(grid && modelObj)){
			alert("参数传递不正确");
			return;
		}
		//得到表格数据集合
		var store = grid.getStore();
		//得到目前表格的数据集合长度
		var storeCount = store.getCount();
		//得到编辑插件
		var edit = grid.editing;
		//得到数据模型
		var model = store.model;
		if(storeCount == 0){//证明添加的节点是ROOT
			//初始化一个模型的类
			var deptObj = new model(modelObj);
			edit.cancelEdit();//取消其他插件的编辑活动
			store.insert(0,deptObj);
			edit.startEditByPosition({
				row:0,
				column:1
			});
			if(treeObj){//我们需要树形操作
				var rootNode = treeObj.getStore().getRootNode();
				rootNode.appendChild({
					id:modelObj["id"],
					text:modelObj["text"],
					leaf:modelObj["leaf"]
				});
			}
		}else{
			//得到被选择的数据集合
			var checkedRecords = grid.getSelectionModel().getSelection();
			if(checkedRecords.length == 1){
				var parentRecord = checkedRecords[0];
				modelObj['nodeType'] = 'GENERAL';
				edit.cancelEdit();//取消其他插件的编辑活动
				var deptObj = new model(modelObj);
				store.insert(0,deptObj);
				edit.startEditByPosition({
					row:0,
					column:1
				});
			}else{
				alert("请选择1个父级部门,您现在选择的是["+checkedRecords.length+"]个");
			}
		}
	}
});

