;(function(sopa){

    "use strict";

    function Sopa(name){
        this.name = name;
    }

    Sopa.prototype = {
        setName: function(name){
            this.name = name;
        }
    }

    sopa.Sopa = Sopa;

})(typeof module === "object" ? module.exports : window);