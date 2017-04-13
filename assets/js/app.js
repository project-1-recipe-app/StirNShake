  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCFNeU7jLPaySON8mWYQbvnZhxhjE5RoJs",
    authDomain: "recipe-search-91605.firebaseapp.com",
    databaseURL: "https://recipe-search-91605.firebaseio.com",
    projectId: "recipe-search-91605",
    storageBucket: "recipe-search-91605.appspot.com",
    messagingSenderId: "80708300083"
  };

  firebase.initializeApp(config);

// Create a variable to reference the database
var database = firebase.database();

// At the initial load, get a snapshot of the current data.

  // This callback will be triggered exactly 3 times, unless there are
  // fewer than 3 searches stored in the Database. It will also get fired
  // for every new search that gets added to the data set.
  // limitToLast(3).

 // Firebase watcher + initial loader HINT: This code behaves similarly to .on("value")
    database.ref().limitToLast(3).on("child_added", function(childSnapshot) {

      console.log(childSnapshot.val().search);

      var recent = $("<h6>"),
          newDiv = $("<div class='col m4 s4'>");

      newDiv.append(recent);

      recent.text(childSnapshot.val().search);

      $("#searchDisplay").append(newDiv);

}, function(errorObject) {
  // If any errors are experienced, log them to console.
  console.log("The read failed: " + errorObject.code);
});

// ON CLICK EVENT WHEN USER SEARCHES FOR A RECIPE
$("#search-button").on("click", function() {

  event.preventDefault();

  // Creates local variable for holding user's search
  var userSearch = $("#user-search").val().trim();

  $("#searchDisplay").html("");

  // Uploads user search to the database
  database.ref().push({
    search: userSearch
  });


  ajaxRequest(userSearch);

  window.location.replace("results.html?q=" + userSearch);


<<<<<<< HEAD
=======
  });


function ajaxRequest(userSearch) {
      // Constructing a URL to search Spoonacular for requested recipe
      var queryURL = "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search";

      // Performing our AJAX GET request
      var output = $.ajax({
        url: queryURL, // The URL to the API. You can get this in the API page of the API you intend to consume
        type: 'GET', // The HTTP Method
        data: {
          query: userSearch,
          number: 1,
          instructionsRequired: true,
          limitLicense: true
        }, // Additional parameters here
        dataType: 'json',
        success: function(data) { 

          alert(JSON.stringify(data));


        },
        error: function(err) { console.log(err); },
        beforeSend: function(xhr) {
        xhr.setRequestHeader("X-Mashape-Authorization", "hEdGclV7jVmshkmKjchqulNrCcgzp1XKHiCjsnzIfe0SKhnTRf"); // Enter here your Mashape key
      }
    });
       // // After the data comes back from the API
       //  .done(function(response) {
       //  // Storing an array of results in the results variable
       //  var results = response.data;
       //  });
  }

 



>>>>>>> 7e2a51afd206c0dd35e5d3f333615c2376d21f7d
  });