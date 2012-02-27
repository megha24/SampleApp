App.views.HomePlay = Ext.extend(Ext.Panel, {
    html: '<h2>Play</h2> <p>Would you like to play?</p>',
    scroll: 'vertical',
    styleHtmlContent: true,
    style: 'background: #d8efed',
});
Ext.reg('HomePlay', App.views.HomePlay);