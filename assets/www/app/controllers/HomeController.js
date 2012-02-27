Ext.regController('Home', {
 
    // index action
    index: function(){
    Ext.Msg.alert('Test', "Home's index action was called!");
   	 if ( ! this.indexView)
    	{
        	this.indexView = this.render
        	({
            xtype: 'HomeIndex',
        	});
    	}
    	this.application.viewport.setActiveItem(this.indexView);
    	
    	 var backBtn = this.application.viewport.query('#backBtn')[0];
    	 backBtn.hide();
    },
    
    // about action
	about: function()
	{
	Ext.Msg.alert('Test', "Home's about action was called!");
    	if ( ! this.aboutView)
    	{
        	this.aboutView = this.render({
            	xtype: 'HomeAbout',
        	});
   		 }
   		 this.application.viewport.setActiveItem(this.aboutView);
   		 var backBtn = this.application.viewport.query('#backBtn')[0];
 		 backBtn.show();
		backBtn.setHandler(function(){
   		  Ext.redirect('Home/index');
		});	
	},
	
	//play action
	play: function(){
	Ext.Msg.alert('Test', "Home's play action was called!");
	if ( ! this.playView)
    	{
        	this.playView = this.render({
            	xtype: 'HomePlay',
        	});
   		 }
   		 this.application.viewport.setActiveItem(this.playView);
   		 var backBtn = this.application.viewport.query('#backBtn')[0];
 		 backBtn.show();
		backBtn.setHandler(function(){
   		  Ext.redirect('Home/index');
		});	
	},
	
		//play action
	scores: function(){
Ext.Msg.alert('Test', "Home's scores action was called!");
	},
	
});