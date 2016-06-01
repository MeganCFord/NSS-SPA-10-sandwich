//this IIFE runs, but I'm not using it because I've refactored my code to run off of ingredients.js only. 



 var sandwich = (function(sandwich) {

  var meats = { 
    turkey: 2.50,
    chickenSalad: 2.98,
    ham: 2.20
    }
  
   sandwich.setMeat = function(event) {
    // console.log("event", event.target );

    whatYouClicked = event.target.value;
    // console.log("what you clicked", whatYouClicked);
     
    //runs a different function for 'no condiments' to clear all other items/subtract if needed, when clicked.
    if (whatYouClicked === "noMeat") {
      console.log("clicked no meat");
      sandwich.clearMeats(event);
    } else {

      //if you click an ingredient that isn't 'none', this if statement makes sure the 'none' checkbox is unclicked.
      if (document.getElementById("noMeat").checked) {
        document.getElementById("noMeat").checked = false;
      };

      dollarsToAppend = meats[whatYouClicked];
      // console.log("dollars to add", dollarsToAppend);
      sandwich.addorSubtract(event, dollarsToAppend);
    }
    
  };

  sandwich.clearMeats = function(event) {
    Array.from(event.currentTarget.getElementsByClassName("uncheckable")).map(function(checkbox) {
      if (checkbox.checked) {
        // console.log("this box is checked", checkbox);
        checkbox.checked = false;
        // console.log("checkbox value", checkbox.value );
        var subtractMe = checkbox.value;
        var dollarsToSubtract = meats[subtractMe];
        // console.log("dollars to subtract", dollarsToSubtract );
        sandwich.subtractFromTotal(dollarsToSubtract.toFixed(2));
      } else {
        // console.log("this box is not checked", checkbox );
      }
    });
  }

  sandwich.getMeat = function(){
    return dollarsToAppend;
  }

  return sandwich;
 }(sandwich || {}))
