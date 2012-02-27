App.views.Viewport = Ext.extend(Ext.Panel, {
    fullscreen: true,
    layout: 'card',
    cardSwitchAnimation: 'slide',
    scroll: 'vertical',
	styleHtmlContent: true,
	style: 'background: #d8e2ef',
    dockedItems: [
        {
            xtype: 'toolbar',
            title: 'MvcTouch',
            items: [
    			{

       				 text: 'Back',
       				 itemId: 'backBtn',
      				  ui: 'back',
   			    }
			],
        },
    ],
});