document.addEventListener("deviceready", connectToDatabase);


var db = null;

function connectToDatabase() {
  console.log("device is ready - connecting to database");
  // 2. open the database. The code is depends on your platform!
  if (window.cordova.platformId === 'browser') {
    console.log("browser detected...");
    // For browsers, use this syntax:
    //  (nameOfDb, version number, description, db size)
    // By default, set version to 1.0, and size to 2MB
    db = window.openDatabase("superhero", "1.0", "Database for SuperHeros Rescue Agency app");
  }
  else {
    alert("mobile device detected");
    console.log("mobile device detected!");
    var databaseDetails = {"name":"superhero.db", "location":"default"}
    db = window.sqlitePlugin.openDatabase(databaseDetails);
    console.log("done opening db");
	alert("done opening db");

	
  }

  if (!db) {
    alert("databse not opened!");
    return false;
  }

}


document.getElementById("inhero").addEventListener("click", inserthero);
document.getElementById("showhero").addEventListener("click", showhero);
document.getElementById("rescue").addEventListener("click", rescue);

function inserthero() {
  // debug:
  console.log("insert button pressed!");
  alert("insert button pressed!");
}

function showhero() {
  //debug:
  console.log("show button pressed!");
  alert("show button pressed!");
}

function rescue() {
  //debug:
  console.log("rescue button pressed!");
  alert("Rescue button pressed!");
}


