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

// Initial Values

// At the initial load, get a snapshot of the current data.
database.ref().on("value", function(snapshot) {

    // If any errors are experienced, log them to console.
}, function(errorObject) {
  console.log("The read failed: " + errorObject.code);
});

$("#search-button").on("click", function() {

  event.preventDefault();

  var userSearch = $("#user-search").val();

  ajaxRequest(userSearch);

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
        success: function(data) { console.dir((data.source)); },
        error: function(err) { alert(err); },
        beforeSend: function(xhr) {
        xhr.setRequestHeader("X-Mashape-Authorization", 'WnxRwgqF8MmshjsrUerbW11n3hPNp1lQY2njsnmA5ZOUeauxan'); // Enter here your Mashape key
      }
    });
       // // After the data comes back from the API
       //  .done(function(response) {
       //  // Storing an array of results in the results variable
       //  var results = response.data;
        console.log(output);
       //  });
  }

