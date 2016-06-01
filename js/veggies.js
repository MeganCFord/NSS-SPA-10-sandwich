//this IIFE runs, but I'm not using it because I've refactored my code to run off of ingredients.js only. 



 var sandwich = (function(sandwich) {

  var veggies = { 
    beanSprouts: 1.10,
    tomatoes: 1.52,
    lettuce: 0.97,
    noVeggies: 0
    }
  
  //function that runs when you click inside the veggies formgroup. 
  
  sandwich.setVegetable = function(event) {
    // console.log("event", event.target );

    whatYouClicked = event.target.value;
    // console.log("what you clicked", whatYouClicked);

    if (whatYouClicked ==="noVeggies") {
      // console.log("clicked no veggies");
      sandwich.clearVeggies(event);
    }else {
      //if you click an ingredient that isn't 'none', this if statement makes sure the 'none' checkbox is unclicked.
      if (document.getElementById("noVeggies").checked) {
        document.getElementById("noVeggies").checked = false;
      };
    //grabs the dollar amount from the ingredient object and sends it to add or subtract along with the event that will tell if your click is a check or an uncheck.   
    dollarsToAppend = veggies[whatYouClicked];
    // console.log("dollars to add", dollarsToAppend);

    sandwich.addorSubtract(event, dollarsToAppend);
   }
  };

  //function that runs if you click 'no veggies'.
  sandwich.clearVeggies = function(event) {
    //makes an array from the checkboxes that are not the 'none' checkbox and loops through them.
    Array.from(event.currentTarget.getElementsByClassName("uncheckable")).map(function(checkbox) {

      //if any other checkboxes are checked, this statement unchecks it, grabs the dollar amount it's associated with, and sends it directly to the subtract function. 
      if (checkbox.checked) {
        // console.log("this box is checked", checkbox);
        checkbox.checked =false;
        // console.log("checkbox value", checkbox.value );
        var subtractMe = checkbox.value;
        var dollarsToSubtract = veggies[subtractMe];
        // console.log("dollars to subtract", dollarsToSubtract );
        sandwich.subtractFromTotal(dollarsToSubtract.toFixed(2));
      } else {
        // console.log("this box is not checked", checkbox );
      }
    });
  }

  sandwich.getVegetable = function(){
    console.log("nope");
  }

  return sandwich;
 }(sandwich || {}))
