


var BodyView = new Backbone.View.extend({
    el: "body",

    events: {
        "click a": "SideBarView",
        "click b": "MainView"

    },
    SideBarView: function(event){
        event.preventDefault();
        event.target;

        this.polo();
    },
    MainView: function(event){
        event.preventDefault();

        this.polo();
    },
    initialize: function() {
        Backbone.history.start();
    }

});



var BodyView = _.extend({}, Backbone.Events),
    SideBarView = _.extend({}, Backbone.Events),
    MainView = _.extend({}, Backbone.Events),
    log = console.log;

BodyView.on("Marco", function(){console.log ("What do you want to play?")})


console.log(BodyView);















