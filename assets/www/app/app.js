Ext.regApplication({
    name: 'App',
    defaultUrl: 'Home/index',
    launch: function() {
        this.launched = true;
        this.viewport = new App.views.Viewport(); 
    },
    
});