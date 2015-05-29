/** This file acts as a placeholder for all dependencies concatenated, automatically generated when build  */
Ext.define('MyDesktop.ChartApp', {
    extend: 'Ext.ux.desktop.Module',
    requires: [
        'Ext.form.field.HtmlEditor'
    ],
    id:'chartApp',
    init : function(){
        this.launcher = {
            text: 'chartApp',
            iconCls:'chartApp',
            handler : this.createWindow,
            scope: this
        }
    },
    createWindow : function(){
        var desktop = this.app.getDesktop();
        var win = desktop.getWindow('chartApp');
        if(!win){
            win = desktop.createWindow({
                id: 'chartApp',
                title:'chartApp',
                width:600,
                height:400,
                iconCls: 'notepad',
                animCollapse:false,
                border: false,
                hideMode: 'offsets',
                layout: 'fit',
                items: [
                    {
                        xtype: 'htmleditor',
                        id: 'notepad-editor',
                        value: [
                            '<b>这是一个报表</b>',
                            '自定义功能成功啦!'
                        ].join('')
                    }
                ]
            });
        }
        win.show();
        return win;
    }
});
