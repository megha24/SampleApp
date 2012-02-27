describe("HomeController", function() {
  var controller;

  beforeEach(function() {
	controller = Ext.ControllerManager.get('Home');
  });
	
  it("should set HomeIndex as the active view", function() {
		Ext.reg('HomeIndex', Ext.Panel);
		controller.index();
		expect(App.viewport.getActiveItem().xtype).toEqual('HomeIndex');
		
  });

});