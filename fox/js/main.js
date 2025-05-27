;(function () {
    'use strict';

    var wowAnimation = function() {
        var wow = new WOW({
            animateClass: 'animated',
            offset: 150,
            callback: function(box) {
                console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
            }
        });
        wow.init();
    };

    // Aspetta che jQuery sia definito e che il DOM sia pronto
    if (typeof jQuery !== "undefined") {
        jQuery(function($) {
            wowAnimation();
        });
    } else {
        console.error("jQuery non è stato caricato correttamente.");
    }

})();

