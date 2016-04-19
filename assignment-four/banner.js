
(function () {
"use strict";
      console.log("App Started...");


      var x = 75;
      var y = 75;
      var WIDTH = 468;
      var HEIGHT = 60;
      var dx, dy = 0;
      var intervalID = 0;
      var linkText = "Checkout My Projects!";
      var canvas, ctx;
      var step, steps = 0, delay = 20;
      var linkX = 40;
      var linkY = 15;
      var linkHeight = 20;
      var linkWidth = 20;
      var inLink = false;


      function init() {
            canvas = document.getElementById("canvas");
            ctx = canvas.getContext("2d");
            dx = 3;
            dy = 3;
            x = 10;
            y = 120;

            draw();
      }

      function startdraw() {
            init();
            clearInterval(intervalID);
            intervalID = setInterval(draw, 20);
      }

      function abort() {
            clearInterval(intervalID);
            ctx.clearRect(0, 0, 300, 300);
            init();
      }

      function on_mousemove(ev) {
            var x, y;

            // Get the mouse position relative to the canvas element.
            if (ev.layerX || ev.layerX == 0) { //for firefox
                  x = ev.layerX;
                  y = ev.layerY;
            }
            x -= canvas.offsetLeft;
            y -= canvas.offsetTop;

            // is the mouse over the link?
            if (x >= linkX && x <= (linkX + linkWidth) && y <= linkY && y >= (linkY - linkHeight)) {
                  document.body.style.cursor = "pointer";
                  inLink = true;
            }
            else {
                  document.body.style.cursor = "";
                  inLink = false;
            }
      }

      //if the link has been clicked, go to link
      function on_click(e) {
            if (inLink) {
                  window.location = 'projects.html';
            }
      }

      function draw() {
            ctx.clearRect(0, 0, 300, 300);
            ctx.fillStyle = 'white';
            ctx.beginPath();
            ctx.arc(x, y, 10, 0, Math.PI * 2, true);
            ctx.fill();

            ctx.clearRect(0, 0, 100, 100);
            ctx.fillStyle = 'white';
            ctx.beginPath();
            ctx.arc(x, y, 10, 10, Math.PI * 4, true);
            ctx.fill();

            ctx.font = '10px sans-serif white';
            ctx.fillStyle = "white";
            ctx.fillText(linkText, linkX, linkY);
            linkWidth = ctx.measureText(linkText).width;
            canvas.addEventListener("mousemove", on_mousemove, false);
            canvas.addEventListener("click", on_click, false);

            x += dx;
            y += dy;
            if (x > WIDTH || x < 0) {
                  x -= 2 * dx;
                  dx = -dx;
            }
            if (y > HEIGHT || y < 0) {
                  y -= 2 * dy;
                  dy = -dy;
            }
      }

      onload = "init()";
      startdraw();

})();