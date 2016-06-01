//this IIFE runs, but I'm not using it because I've refactored my code to run off of ingredients.js only. 



 var sandwich = (function(sandwich) {

  var condiments = { 
    mustard: 0.10,
    mayonaisse: 0.08,
    barbecueSauce: 0.49,
    noCondiments: 0
    };
  
  //grabs the name of the thing you clicked and converts it to a number amount using the ingredient object.
  sandwich.setCondiment = function(event) {
    // console.log("event", event.target );

    whatYouClicked = event.target.value;
    // console.log("what you clicked", whatYouClicked);
     
    //runs a different function for 'no condiments' to clear all other items/subtract if needed, when clicked.
    if (whatYouClicked === "noCondiments") {
      console.log("clicked no condiments");
      sandwich.clearCondiments(event);
    } else {

      //if you click an ingredient that isn't 'none', this if statement makes sure the 'none' checkbox is unclicked.
      if (document.getElementById("noCondiments").checked) {
        document.getElementById("noCondiments").checked = false;
      };

      dollarsToAppend = condiments[whatYouClicked];
      // console.log("dollars to add", dollarsToAppend);
      sandwich.addorSubtract(event, dollarsToAppend);
    }
    
  };

  sandwich.clearCondiments = function(event) {
    Array.from(event.currentTarget.getElementsByClassName("uncheckable")).map(function(checkbox) {
      if (checkbox.checked) {
        // console.log("this box is checked", checkbox);
        checkbox.checked = false;
        // console.log("checkbox value", checkbox.value );
        var subtractMe = checkbox.value;
        var dollarsToSubtract = condiments[subtractMe];
        // console.log("dollars to subtract", dollarsToSubtract );
        sandwich.subtractFromTotal(dollarsToSubtract.toFixed(2));
      } else {
        // console.log("this box is not checked", checkbox );
      }
    });
  }


  sandwich.getCondiment = function(){
    return dollarsToAppend;
  }

  return sandwich;
 }(sandwich || {}))
