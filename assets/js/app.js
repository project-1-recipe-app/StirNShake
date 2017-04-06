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

  // ajaxRequest(userSearch);

  });

