"use strict";

/*
   New Perspectives on HTML5, CSS3 and JavaScript 6th Edition
   Tutorial 12
   Case Problem 1

   Author: Brian McLaughlin
   Date:6/29

   Filename: na_styler.js

   Functions
   =========
   
   setStyles()
      Sets up the style sheets and the style sheet switcher.
      
   randInt(size)
      Returns a random integer from 0 up to size-1.

*/
window.addEventListener("load", setStyles);

function setStyles() {
	var styleNum = randInt(5);
	var fancySheets = document.createElement("link");
	fancySheets.setAttribute("id", "fancySheet");
	fancySheets.setAttribute("rel", "stylesheet");
	fancySheets.setAttribute("href", "na_style_" + styleNum + ".css");
	document.head.appendChild(fancySheets);
	
	var figBox = document.createElement("figure");
	figBox.setAttribute("id","styleThumbs");
	document.getElementById("box").appendChild(figBox);
	
	for (var i = 0; i < 5; i++){
        var sheetImg = document.createElement("img");
        sheetImg.setAttribute("src", "na_small_" + i + ".png");
        sheetImg.setAttribute("alt","na_style_" + i + ".css");
        
        sheetImg.addEventListener("click", function(e) {    
            fancySheets.href = e.target.alt;
         });
        figBox.appendChild(sheetImg);
    }
	var thumbStyles= document.createElement("style");
	document.head.appendChild(thumbStyles);
	document.styleSheets[document.styleSheets.length-1].insertRule(
	"figure#styleThumbs { \
		position:absolute; \
		left:0px; \
		bottom: 0px; \
	}",0);
	document.styleSheets[document.styleSheets.length-1].insertRule(
	"figure#styleThumbs img { \
		outline:1px solid black; \
		cursor: pointer; \
		opactiy: 0.75; \
	}",1);
	document.styleSheets[document.styleSheets.length-1].insertRule(
	"figure#styleThumbs img:hover {\
		outline: 1px solid red; \
		opactiy:1.0\
	}",2);
}
function randInt(size) {
   return Math.floor(size*Math.random());
}













