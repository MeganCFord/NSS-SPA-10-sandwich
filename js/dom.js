 
// variables and event listeners for each set of checkboxes. This format allows the 'clear' buttons for each set to work properly. 


var breadImAdding = document.getElementById("breadSelects");
breadImAdding.addEventListener("change", sandwich.addIngredient);

var meatImAdding = document.getElementById("meatSelects");
meatImAdding.addEventListener("change", sandwich.addIngredient);

var cheeseImAdding = document.getElementById("cheeseSelects");
cheeseImAdding.addEventListener("change", sandwich.addIngredient);

var condimentsImAdding = document.getElementById("condimentSelects");
condimentsImAdding.addEventListener("change", sandwich.addIngredient);

var vegetablesImAdding = document.getElementById("vegetableSelects");
vegetablesImAdding.addEventListener("change", sandwich.addIngredient);

//to use the individual ingredient type iifes, simply change 'setingredient' to 'setVegetable', 'setMeat', etc.

// variable for final output div. 
var finalOrderDiv = document.getElementById("finalOrder");



