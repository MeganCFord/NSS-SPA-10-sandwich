//this IIFE runs, but I'm not using it because I've refactored my code to run off of ingredients.js only. 



 var sandwich = (function(sandwich) {



  var breads = { 
    wheat: 1.10,
    sourdough: 1.52,
    croissant: 0.97,
    noBread: 0
    };

    


  //grabs the name of the thing you clicked and converts it to a number amount using the bread object.
  sandwich.setBread = function(event) {
    // console.log("event", event.target );

    whatYouClicked = event.target.value;
    // console.log("what you clicked", whatYouClicked);
     
    if (whatYouClicked ==="none") {
      sandwich.clearBread(event);
    } else {
      //if you click an ingredient that isn't 'none', this if statement makes sure the 'none' checkbox is unclicked.
      if (document.getElementById("noBread").checked) {
        document.getElementById("noBread").checked = false;
      };
      //grabs the dollar amount from the ingredient object and sends it to add or subtract along with the event that will tell if your click is a check or an uncheck.
    dollarsToAppend = breads[whatYouClicked];
    // console.log("dollars to add", dollarsToAppend);

    sandwich.addorSubtract(event, dollarsToAppend);
    }
   
  };
  

  //function that runs if you click 'no Bread'.
  sandwich.clearBread = function(event) {
    //makes an array from the checkboxes that are not the 'none' checkbox and loops through them.
    Array.from(event.currentTarget.getElementsByClassName("uncheckable")).map(function(checkbox) {

      //if any other checkboxes are checked, this statement unchecks it, grabs the dollar amount it's associated with, and sends it directly to the subtract function. 
      if (checkbox.checked) {
        // console.log("this box is checked", checkbox);
        checkbox.checked =false;
        // console.log("checkbox value", checkbox.value );
        var subtractMe = checkbox.value;
        var dollarsToSubtract = breads[subtractMe];
        // console.log("dollars to subtract", dollarsToSubtract );
        sandwich.subtractFromTotal(dollarsToSubtract.toFixed(2));
      } else {
        // console.log("this box is not checked", checkbox );
      }
    });
  }
  
  //part of the requirements, but I'm not using this function because I start the process of adding the bread price to the total directly from the setter function.
  sandwich.getBread = function(){
    return dollarsToAppend;
  }

  return sandwich;
 }(sandwich || {}))



// ok so I want the target.child.value to set as the breads{}
