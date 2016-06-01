//having each set of ingredients in a separate iife was a requirement of this exercise- 
//but for proof of concept I'm practicing making my code much more DRY by putting all of them into one. 


var sandwich = (function(sandwich){

  var ingredients = {
    //bread
    wheat: 1.10,
    sourdough: 1.52,
    croissant: 0.97,
    //meat
    turkey: 2.50,
    chickenSalad: 2.98,
    ham: 2.20, 
    //cheese
    cheddar: 1.10,
    pepperJack: 1.52,
    pimento: 0.97,
    //veggies
    beanSprouts: 1.10,
    tomatoes: 1.52,
    lettuce: 0.97,
    //condiments
    mustard: 0.10,
    mayonaisse: 0.08,
    barbecueSauce: 0.49,
  }


  //function that runs when any checkbox is clicked. uses the event listeners being different for each set of boxes to activate/deactivate the clearing functionality within each form  group. 
  sandwich.addIngredient = function(event) {
    // console.log("event", event.target );

    whatYouClicked = event.target.value;
    console.log("what you clicked", whatYouClicked);
     
    if (whatYouClicked === "clear") {
      sandwich.clearIngredient(event);
    } else {
      //if you click an ingredient that isn't 'none', this if statement makes sure the 'none' checkbox- within that event listener only- is unclicked.
  
      Array.from(event.currentTarget.getElementsByClassName("clear")).map(function(clearbox) {
        if (clearbox.checked) {
          clearbox.checked = false;
        }
      });
    //grabs the dollar amount from the ingredient object and sends it to add or subtract along with the event that will tell if your click is a check or an uncheck.
    dollarsToAppend = ingredients[whatYouClicked];
    console.log("dollars to add or subtract", dollarsToAppend);

    sandwich.addorSubtract(event, dollarsToAppend);
    }
   
  };


  //function that runs when 'clear' button is clicked as determined by above. 
  sandwich.clearIngredient = function(event) {
    //makes an array from the checkboxes that are not the 'none' checkbox and loops through them.
    Array.from(event.currentTarget.getElementsByClassName("uncheckable")).map(function(checkbox) {
      //if any other checkboxes are checked, this statement unchecks it, grabs the dollar amount it's associated with, and sends it directly to the subtract function. 
      if (checkbox.checked) {
        // console.log("this box is checked", checkbox);
        checkbox.checked =false;
        // console.log("checkbox value", checkbox.value );
        var subtractMe = checkbox.value;
        var dollarsToSubtract = ingredients[subtractMe];
        // console.log("dollars to subtract", dollarsToSubtract );
        sandwich.subtractFromTotal(dollarsToSubtract.toFixed(2));
      } else {
        // console.log("this box is not checked", checkbox );
      }
    });
  }

  return sandwich;
}(sandwich || {}))
