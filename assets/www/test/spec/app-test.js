var Application = Ext.regApplication({
    name: 'App',
        launch: function() {
		  
            //include the tests in the test.html head
            jasmine.getEnv().addReporter(new jasmine.TrivialReporter());
            jasmine.getEnv().execute();
			 this.viewport = new App.views.Viewport();
        }
});
