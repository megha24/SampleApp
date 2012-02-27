App.views.HomeIndex = Ext.extend(Ext.Panel, {
    html: '<a href="#Home/about" class="menu-item">About</a></br>'+
    '</br><a href="#Home/play" class="menu-item">Play</a></br>'+
    '</br><a href="#Home/scores" class="menu-item">High Scores</a></br>',
    	
});
Ext.reg('HomeIndex', App.views.HomeIndex);