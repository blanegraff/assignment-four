/// <reference path="../typings/tsd.d.ts" />

// setup your IIFE (Immediately Invoked Function Expression)
(function() {

    "use strict";
    // Load the navbar dynamically via jQuery and Ajax
    var header = $('#mainHeader').load("partials/nav.html", function() {
        var bodyid = $('body').attr('id');
        switch (bodyid.toString()) {
            case "index":
                $('#indexLink').attr("class", "active");
                break;
            case "projects":
                $('#projectsLink').attr("class", "active");
                break;
            case "contact":
                $('#contactLink').attr("class", "active");
                break;
        }
    });


    console.log("App Started..."); 
    
    var replaceFirstParagraph = function() {
        console.log("inside replaceFirstParagraph anonymous function");
        var firstParagraph;

        firstParagraph = document.getElementById("firstParagraph");

        firstParagraph.innerHTML = "My name is Brittany Lanegraff and I am currently in the Interactive Web Design & Development program at Georgian College. My strength is in design, but I hope to learn and develop my skills in programming. I come from a photography and illustration background which I am sure will be a great asset to assist me in styling and designing websites. I love the process of putting all the elements together that are required for a fully functional and beautiful website, it is very rewarding and enjoyable. I hope to be able to succeed in having a great career in the web design and development field.";
    };
    
//     Javascript CSS Styles
document.getElementById("firstParagraph").style.width = "1000px";
document.getElementById("firstParagraph").style.textAlign = "center";
document.getElementById("firstParagraph").style.fontSize = "18px";
document.getElementById("firstParagraph").style.padding = "20px";
document.getElementById("firstParagraph").style.paddingLeft = "100px";
document.getElementById("firstParagraph").style.color = "black";
document.getElementById("firstParagraph").style.letterSpacing = "1px";
document.getElementById("firstParagraph").style.lineHeight = "30px";

    // call the replaceFirstParagraph function
    replaceFirstParagraph();
    
})();

