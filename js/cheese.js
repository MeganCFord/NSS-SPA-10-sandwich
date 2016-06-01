//this IIFE runs, but I'm not using it because I've refactored my code to run off of ingredients.js only. 




 var sandwich = (function(sandwich) {

  var cheeses = { 
    cheddar: 1.10,
    pepperJack: 1.52,
    pimento: 0.97,
    noCheese: 0
    };
  
  //grabs the name of the thing you clicked and converts it to a number amount using the cheese object.
  sandwich.setCheese = function(event) {
    // console.log("event", event.target );

    whatYouClicked = event.target.value;
    // console.log("what you clicked", whatYouClicked);
     
    if (whatYouClicked ==="noCheese") {
      sandwich.clearCheese(event);
    } else {
      //if you click an ingredient that isn't 'none', this if statement makes sure the 'none' checkbox is unclicked.
      if (document.getElementById("noCheese").checked) {
        document.getElementById("noCheese").checked = false;
      };
      //grabs the dollar amount from the ingredient object and sends it to add or subtract along with the event that will tell if your click is a check or an uncheck.
    dollarsToAppend = cheeses[whatYouClicked];
    // console.log("dollars to add", dollarsToAppend);

    sandwich.addorSubtract(event, dollarsToAppend);
    }
   
  };
  

  //function that runs if you click 'no Bread'.
  sandwich.clearCheese = function(event) {
    //makes an array from the checkboxes that are not the 'none' checkbox and loops through them.
    Array.from(event.currentTarget.getElementsByClassName("uncheckable")).map(function(checkbox) {

      //if any other checkboxes are checked, this statement unchecks it, grabs the dollar amount it's associated with, and sends it directly to the subtract function. 
      if (checkbox.checked) {
        // console.log("this box is checked", checkbox);
        checkbox.checked =false;
        // console.log("checkbox value", checkbox.value );
        var subtractMe = checkbox.value;
        var dollarsToSubtract = cheeses[subtractMe];
        // console.log("dollars to subtract", dollarsToSubtract );
        sandwich.subtractFromTotal(dollarsToSubtract.toFixed(2));
      } else {
        // console.log("this box is not checked", checkbox );
      }
    });
  }


  //again, not really using this but it's part of the instructions... probably means I'm not following the instructions.
  sandwich.getCheese = function(){
    return dollarstoAppend;
  }

  return sandwich;
 }(sandwich || {}))
