<<<<<<< HEAD
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
=======



searchByQuery();
function searchByQuery(){

  var pulledSrch = location.search.split("");
  console.log(pulledSrch.splice(0,3).join(""));
  var searchRecipe = pulledSrch.join("");
// // //Seacrh by Query
  var ingredientItm = "";
  console.log(searchRecipe)
  var queryURL1 = "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search?query=" + searchRecipe + "&instructionsRequired=true&extendedIngredients=true&instructions=true";
//search recipes
 $.ajax({
  url: queryURL1,
  method: "GET",
  headers: {
  'X-Mashape-Key': '2wfnmNyju2mshMtxvhjQLtmgC549p1UkpmNjsnc7dKbPWPNsgM',
  'Accept': 'application/json'   
  }
>>>>>>> 7e2a51afd206c0dd35e5d3f333615c2376d21f7d

})

  .done(function(response) {

<<<<<<< HEAD
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
=======
    var resultList = response.results;
    var baseURL = response.baseUri;
  
    

    for (var i=0; i<resultList.length; i++){
       var imgUrl = response.results[i].image;
       var title = response.results[i].title
       var recipeId = response.results[i].id;
       console.log(recipeId);
       var imgResult = "<div class='card option-card'><div class='card-image imgdiv'><a href='recipe.html?recipeId=" + recipeId + "'><img class='recipe-option-img' id='recipe-option-img" + [i] + "' src='" + baseURL + imgUrl + "'><p class=title>" + title + "</p></div>";

      
      $("#results-list").append(imgResult);
    }
      

      

  })
}







 








>>>>>>> 7e2a51afd206c0dd35e5d3f333615c2376d21f7d

