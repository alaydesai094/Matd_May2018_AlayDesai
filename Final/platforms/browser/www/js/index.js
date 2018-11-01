document.addEventListener("deviceready", connectToDatabase);


var db = null; 
db = window.openDatabase("superdb", "1.0", "Database for SuperHeros Rescue Agency app", 2 * 1024 * 1024);

function connectToDatabase() {
  console.log("device is ready - connecting to database");
  // 2. open the database. The code is depends on your platform!
  if (window.cordova.platformId === 'browser') {
    console.log("browser detected...");
    // For browsers, use this syntax:
    //  (nameOfDb, version number, description, db size)
    // By default, set version to 1.0, and size to 2MB
    db = window.openDatabase("superdb", "1.0", "Database for SuperHeros Rescue Agency app");
  }
  else {
    alert("mobile device detected");
    console.log("mobile device detected!");
    var databaseDetails = {"name":"superdb.db", "location":"default"}
    db = window.sqlitePlugin.openDatabase(databaseDetails);
    console.log("done opening db");
	alert("done opening db");

	
  }

  if (!db) {
    alert("databse not opened!");
    return false;
  }

}


// ERROR MESSAGES
function onReadyTransaction( ){
		console.log( 'Transaction completed' );
		alert("Transaction completed");
	}
	function onSuccessExecuteSql( tx, results ){
		console.log( 'Execute SQL completed' );
	alert( "Execute SQL completed" );
	 document.querySelector('#status').innerHTML = msg;
	}
	function onError( err ){
		console.log( err )
	}



// CREATE DB
db.transaction(
		function(query){
		query.executeSql(
				"CREATE TABLE IF NOT EXISTS heros (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, isAvailable INTEGER)",
				[],
				onSuccessExecuteSql,
				onError
			)
		},
		onError,
		onReadyTransaction
	)





document.getElementById("inhero").addEventListener("click", inserthero);
document.getElementById("showhero").addEventListener("click", showhero);
document.getElementById("rescue").addEventListener("click", rescue);

	var name = document.getElementById("name").value;
	var isav = document.getElementById("isav").value;
	var msg ="inserted successfully"

function inserthero() {
  // debug:
  console.log("insert button pressed!");
  alert("insert button pressed!");
	
db.transaction(
		function(query){
			query.executeSql( "INSERT INTO heros(name,isAvailable) VALUES(?)",
			[name,isav],
			onSuccessExecuteSql,
			onError )
		},
		onError,
		onReadyTransaction
	)
	
	
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


