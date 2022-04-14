
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
      var firebaseConfig = {
      apiKey: "AIzaSyAGYXy6viEq2E4-xY651Wm7TCxzbUWnRvg",
      authDomain: "proejct---kwitter.firebaseapp.com",
      databaseURL: "https://proejct---kwitter-default-rtdb.firebaseio.com",
      projectId: "proejct---kwitter",
      storageBucket: "proejct---kwitter.appspot.com",
      messagingSenderId: "222352550782",
      appId: "1:222352550782:web:83488fb626a60b0466a12f"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + " !";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room_names- -"+ Room_names);
      row = "<div class = 'room_name' onclick = 'redirectToRoomName(this.id)' id = '"+Room_names+"'>#"+Room_names+"</div> <hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function addRoom()
{
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose:"adding user name"
  });

  localStorage.setItem("room_name", room_name);

  window.location = "kwitter_page.html";
}

function redirectToRoomName(name)
{
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html"
}
