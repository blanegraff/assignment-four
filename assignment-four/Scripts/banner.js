/// <reference path="../typings/tsd.d.ts" />
 
 "use strict";
(function () {

    console.log("App Started...");
    
    //CreateJS Section ++++++++++++++++++++++++++++++++++++

    //global variables
    var screenWidth = 468;
    var screenHeight = 60;

    // reference to canvas element
    var canvas = document.getElementById("canvas");
    canvas.setAttribute("width", screenWidth.toString());
    canvas.setAttribute("height", screenHeight.toString());

    // create a stage container object
    var stage = new createjs.Stage(canvas);

    var helloLabel = null;
    var helloLabelMove = 5;

    var button = null;
    var buttonMove = 5;
    var buttonIsGrowing = true;

    function init() {
        console.log("Initialization");
        // enable mouseover effects for all buttons
        stage.enableMouseOver(20);

        // set frame rate to 60 fps
        createjs.Ticker.framerate = 60;
        // listen for frame changes and call the animationLoop function
        createjs.Ticker.on("tick", animationLoop);

        // call the main function
        main();
    }

    // runs every frame
    function animationLoop() {

        helloLabel.rotation += 5;
        button.rotation += 5;
        helloLabel.x += helloLabelMove;
        button.x += buttonMove;

        if (buttonIsGrowing) {
            if (button.scaleX < 1) {
                button.scaleX *= 1.1;
                button.scaleY *= 1.1;
            }
            else {
                buttonIsGrowing = false;
            }
        } else {
            if(button.scaleX >= 0.1) {
                button.scaleX *= 0.9;
                button.scaleY *= 0.9;
            }
            else {
                buttonIsGrowing = true;
            }
        }

        if ((helloLabel.x >= screenWidth) || (helloLabel.x <= 0)) {
            helloLabelMove *= -1;
            buttonMove *= -1;
        }

        // refresh the stage object
        stage.update();
    }

    // this is where all the magic happens
    function main() {
        helloLabel = new createjs.Text("Hello World!", "30px Consolas", "#000000");
        helloLabel.regX = helloLabel.getMeasuredWidth() * 0.5;
        helloLabel.regY = helloLabel.getMeasuredHeight() * 0.5;
        helloLabel.x = screenWidth * 0.5;
        helloLabel.y = screenHeight * 0.5;
        stage.addChild(helloLabel);

        button.on("click", function() {
            if(helloLabel.text === "Clicked!") {
                helloLabel.text = "Hello World!";
            } else {
                helloLabel.text = "Clicked!";
            }
            
            helloLabel.regX = helloLabel.getMeasuredWidth() * 0.5;
            helloLabel.regY = helloLabel.getMeasuredHeight() * 0.5;
        });

        button.on('mouseover', function() {
            button.alpha = 0.5;
        })

        button.on('mouseout', function() {
            button.alpha = 1;
        })
    }

    window.onload = init;


})();