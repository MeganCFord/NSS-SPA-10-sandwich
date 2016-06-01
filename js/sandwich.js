

 var sandwich = (function(sandwich) {

  var whatYouClicked = "";

  var dollarsToAdd = "";

  var total = 0;

  

  //decides whether to add or subtract the checked dollar amount from the total based on whether the change resulted in a select or a deselect. All ingredient setters call this same function since they've been converted to pure dollars in their respective iifes. 
  
  sandwich.addorSubtract = function(event, dollarsToAppend) {
    if (event.target.checked === true) {
      // console.log("event target is checked",event );
      sandwich.addToTotal(dollarsToAppend);
    }else if (event.target.checked === false) {
      // console.log("event target is not checked",event );
      sandwich.subtractFromTotal(dollarsToAppend);
    }
  } 

  sandwich.addToTotal = function(addition) {
    total += addition;
    // console.log("total after addition", total );
    sandwich.printTotal(total);
  }

  sandwich.subtractFromTotal = function(subtraction) {
    total -= subtraction;
    // console.log("total after subtraction", total);
    sandwich.printTotal(total);
  }

   sandwich.printTotal = function(total) {
    finalOrderDiv.innerHTML = `<p>Your Total is $${total.toFixed(2)}.</p>`;
  }



  return sandwich;
 }(sandwich || {}))
