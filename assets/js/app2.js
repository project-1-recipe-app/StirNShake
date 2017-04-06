// //random recipe
//  $.ajax({
//   url: "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/random?limitLicense=false&number=1&tags=vegetarian%2Cdessert",
//   method: "GET",
//   headers: {
//     'X-Mashape-Key': 'hEdGclV7jVmshkmKjchqulNrCcgzp1XKHiCjsnzIfe0SKhnTRf',
//  	'Accept': 'application/json'   
//  	}

// })


//   .done(function(response) {
//   	var array = response.recipes[0].analyzedInstructions[0].steps
//   	for (var i=0; i<array.length; i++)
//     console.log(response.recipes[0].analyzedInstructions[0].steps[i].step);

//   });

var ingredientItm = "";
//search recipes
 $.ajax({
  url: "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/informationBulk?ids=432&includeNutrition=false",
  method: "GET",
  headers: {
    'X-Mashape-Key': 'hEdGclV7jVmshkmKjchqulNrCcgzp1XKHiCjsnzIfe0SKhnTRf',
 	'Accept': 'application/json'   
 	}

})

  .done(function(response) {

  	//display image and title
  	var imguRL = response[0].image;
  	var title = response[0].title;

  	$(".card-image").html("<img src='" + imguRL + "'>");
  	$(".card-content").html("<h6>" + "<center>" + title + "</cemter>" + "</h6>");
  	var lstStep = response[0].analyzedInstructions[0].steps;


  	//list instructions
  	for (var i=0; i<lstStep.length; i++){
   $("#instructions").append("<tr>" + "<td>" + "<input type='checkbox' id= 'step" + [i] + "'/><label for='step" + [i] + "'>" + lstStep[i].step + "<br>");
  
}

	//list ingredients

	//list grocery list items
	var ingredientLst = response[0].extendedIngredients;
	for (var i=0; i<ingredientLst.length; i++){

 	$("#ingredients").append("<tr>" + "<td>" + "<input type='checkbox' id= 'checkItem" + [i] + "'/><label for='checkItem" + [i] + "'>" + ingredientLst[i].originalString + "</label>" +"</td>");
  }


	//list grocery list items
	var groceryLst = response[0].extendedIngredients;
	for (var i=0; i<groceryLst.length; i++){

 	$("#groceries").append("<tr>" + "<td>" + "<input type='checkbox' id= 'checkItem" + [i] + "'/><label for='checkItem" + [i] + "'>" + groceryLst[i].name + "</label>" +"</td>");
  }
}
  );

