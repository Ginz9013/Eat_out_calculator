document.getElementById('calculator').onclick = function(){
  // Breakfast
  var breakfast = document.getElementById('breakfast').value;

  var bCost = document.getElementById('b-cost').value;

  // Lunch
  var lunch = document.getElementById('lunch').value;

  var lCost = document.getElementById('l-cost').value;

  // Dinner
  var dinner = document.getElementById('dinner').value;

  var dCost = document.getElementById('d-cost').value;

  // Drink
  var drink = document.getElementById('drink').value;

  var drinkCost = document.getElementById('drink-cost').value;


  // One week total
  document.getElementById('week').textContent = breakfast * bCost + lunch * lCost + dinner * dCost + drink * drinkCost;

  // One month total
  document.getElementById('month').textContent = (breakfast * bCost + lunch * lCost + dinner * dCost + drink * drinkCost) * 5;
}