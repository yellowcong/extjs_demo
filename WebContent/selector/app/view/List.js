// 界面层

Ext.define("AM.view.List", {
			// 设定继承对象 ,面板对象
			extend : "Ext.grid.Panel",
			title : "MVC",
			// 面板渲染
			frame : true,
			//定义别名 widget 前面这个是固定的
			//访问的时候 只需要userslist
			alias:"widget.userslist",
			width : 780,
			height : 400,
			//自动填充   列宽
			forceFit:true,
			
			//注意写法
			features:[
				//第一种创建 方法
				/*Ext.create("Ext.grid.feature.RowBody",{
				    getAdditionalData: function(data, idx, record, orig) {
				        var headerCt = this.view.headerCt,
				            colspan  = headerCt.getColumnCount();
				        return {
				            rowBody: record.get('email'),
				            rowBodyCls: this.rowBodyCls,
				            rowBodyColspan: colspan
				        };
				    }
				})*/
				 
				{
					//第二种创建方法 ，基于配置
					ftype: 'rowbody',
					//获取数据，设定到 下一栏目
			        getAdditionalData: function(data, idx, record, orig) {
				        var headerCt = this.view.headerCt,
				            colspan  = headerCt.getColumnCount();
				        return {
				            rowBody: record.get('email'),
				            rowBodyCls: this.rowBodyCls,
				            rowBodyColspan: colspan
				        };
				    }
				},{
					//设定求和，平均值操作	
					ftype:"summary"},
					
					{
					ftype:'grouping',
					//分组 别名
					groupByText : "性别分组",
					groupHeaderTpl : "性别{name}  一共{rows.length}人",
					showGroupsText : "展示分组"
						
					}
				
			],
			//栏目名称
			columns:[
				//创建角标
				Ext.create("Ext.grid.RowNumberer",{text:"id"}),
				//text 是显示名称
				//dataIndex 是我我们获取数据名称
				//width 设定每栏宽度
				//field 设定数据类型
				{text:"姓名",dataIndex:"name",width:100},
				{text:"年龄",dataIndex:"age",width:50,
					//求平均值
					summaryType:'average',
					summaryRenderer:function(value,summaryData, dataIndex) {
//							alert(value);
				           return Ext.util.Format.number(value,"00.0")
				     }	
				},
				{text:"邮箱",dataIndex:"email",
					field:{
						//设定文本
						xtype:"textfield",
						//不能有空格
						allowBlank:false
					}
				},
				{text:"联系电话",dataIndex:"phone"},
				//添加一个图标配置
				{
					text:"操作",
					//设定xtype 类型
					xtype:'actioncolumn',
					//配置图标地址
					//讲图标放在view目录下面，不要放到别的地方了，不然不好找
					icon:'app/view/icon/png/delete.png',
					//设定宽度
					width:50,
					id:"user_delete"
					//将这个Handler 写入到controller层中
//					handler:function(grid,raw,col){
//						console.log(grid);
//						//行 是从0 开始的
//						console.log(raw);
//						//列 这个是从1开始的 
//						console.log(col);
//					}
				},
				//模板列
				{
					text:"描述",
					xtype:"templatecolumn",
					//引用模板
					tpl:"{name}的邮箱是{email}",
				},
				//boolean列
				{
					text:"学生",
					dataIndex:"isStudent",
					xtype : "booleancolumn",
					//设定显示
					trueText:'是',
					falseText:'不是'
				},
				//日期列表createDate
				{
				
					text:"日期",
					dataIndex:"createDate",
					//日期xtype 组建
					xtype : "datecolumn",
					//格式化日期输出
					//format:'Y年m月d日 h时m分s秒'
					format:'Y年m月d日'
				},
				{
					text:"成绩",
					dataIndex:"score",
					xtype:'numbercolumn',
					//保留一位小叔
					format:"0.0"
				},{
					text:"性别",
					dataIndex:"sex",
					//渲染 模板渲染操作
					renderer:function(value){
						if(value == "女"){
							//返回红色的 女 字体
							return "<font color='green'>"+value+"</font>"
						}else{
							//返回绿色的字体
							return "<font color='red'>"+value+"</font>"
						}
					}
				}
			],
			//工具栏
			tbar : [{xtype : 'button',text : "添加",iconCls : 'table_add'	},
			        {xtype : 'button',text : "删除",id:"btn_delete",iconCls : 'table_delete'	},
					{xtype : 'button',text : "修改",iconCls : 'table_editor'}, 
					{xtype : 'button',id:"btn_select",text : "选择",iconCls : 'table_refresh'}, 
					{xtype : 'button',text : "查询",iconCls : 'table_find'},
					{xtype : 'button',text : "帮助",iconCls : 'table_help'}, 
					{xtype : 'button',text : "保存",iconCls : 'table_save'}]
			,
			//添加下面的分页工具
			dockedItems:[
			    //分页工具栏 
				{xtype:'pagingtoolbar',
				//通过Id 查询我们的 store 数据
				store:"Users",
				//底部显示
				dock:'bottom',
				displayInfo:true
				} 
			],
			//设定点击修改
			plugins:[
				Ext.create("Ext.grid.plugin.CellEditing",{
					//设定单机一次	
					clicksToEdit:1
				})
			],
			//多选框模式
			selType:'checkboxmodel',
			//行选择
//			selType:'rowmodel',
			//单元格显示，我们只能获取到一个单元格
//			selType:"cellmodel",
			//多选模式
//			multiSelect:true,
			//多选，需要使用Ctrl +点击鼠标
			multiSelect:true,
			enableKeyNav :true,
			//设定Users  自动到包中查找 store中
			store:"Users",
			
			//设定继承
			initComponent:function(){
				this.callParent(arguments);
			}

		});