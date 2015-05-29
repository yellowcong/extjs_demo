
//定义控制
Ext.define("AM.controller.UserController",{
	//继承于Ext.app.Controller
	extend:"Ext.app.Controller",
	//定义 操作，这个就是我们经常接触到的控制操作
	init:function(){
		this.control({
			
			//选中选择
			"userslist button[id='btn_select']":{
				click:function(btn){
					console.log("选择数据");
					//获取选择面板
					var grid = btn.ownerCt.ownerCt;
					//获取到选择模式
					var sel = grid.getSelectionModel();
					
					//查看类
					//Ext.selection.Model
					
					
					//取消 0 节点的选择
//					sel.deselect(0);
					
					
					//判断是否选择
//					var flag = sel.isSelected(0);
//					//反悔boolean值
//					console.log(flag);
					
					//设定制定的行
					//是一个范围的
					sel.selectRange(1,3,false);
					
					
					//获取最后选择的一个数据
//					var obj  = sel.getLastSelected();
//					//返回一个row对象
//					console.log(obj);
//					console.log(obj.raw.name);
					
					
				}
			},
			
			"userslist":{
				//itemclick事件，这个是cellmodel中的重要监听方法
				itemclick:function(View,  record,  item,  index,  e,  options ){
					//获取选择模式,通过View来获取
					var sel = View.getSelectionModel();
					//通过 json获取
					//alert(Ext.JSON.encode(sm.getCurrentPosition()));
					//获取选中对象
					var obj = sel.getCurrentPosition();
					//Object { view: Object, record: Object, row: 0, column: 6, columnHeader: Object }
//					console.log(obj);
					//获取行和列
					console.log(obj.row+","+obj.column);
					//默认选中
//					sel.selectByPosition({"row":0,"column":2});
				}
			}
		});
	},
	
	//需要 声明 views store model
	//定义界面层
	views:[
		"List"
	],
	//定义Store中的类
	stores:[
		"Users"
	],
	//定义模型类
	models:[
		"User"
	]
});

