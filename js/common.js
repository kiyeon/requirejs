define(["jquery"], function($) {
    "use strict";

    function helloWorld() {
        $("#hello").text("Hello World")
        $("#hello").click(function() {
            $(this).toggleClass("color");
        });
    }

    return {
        helloWorld:helloWorld
    };
});