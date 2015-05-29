//定义过滤
Ext.define("AM.utils.filters",{
	alias: 'widget.filters',
	ftype: 'filters',
        encode: false, 
        local: true, 
        filters: [{
        		//过滤boolean类型数据
                type: 'boolean',
                dataIndex: 'visible'
            }
     ]
})
