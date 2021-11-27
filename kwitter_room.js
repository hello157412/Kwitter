
const firebaseConfig = {
      apiKey: "AIzaSyBnj3hc_ktwJZFxyb8XWW2M8poiJ2nSOPI",
      authDomain: "twiter-5b0f9.firebaseapp.com",
      databaseURL: "https://twiter-5b0f9-default-rtdb.firebaseio.com",
      projectId: "twiter-5b0f9",
      storageBucket: "twiter-5b0f9.appspot.com",
      messagingSenderId: "352582598444",
      appId: "1:352582598444:web:756b3a75841cd97c0b7689",
      measurementId: "G-CQF307J15F"
    };
    
    // Initialize FirebaseHouse
    firebase.initializeApp(firebaseConfig);
    username = localStorage.getItem("Username");
   document.getElementById("Name").innerHTML = "Welcome " + username + "!";
   function addroom(){
         room_name = document.getElementById("addroom").value;
         firebase.database().ref("/").child(room_name).update({
            purpose: "adding room"
        });
        localStorage.setItem("room_name", room_name);
        window.location = "kwitter_page.html";
   }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      row = "<div class='room_name' id="+Room_names+" onclick='redirecttoroomname(this.id)'>#"+Room_names+"</div> <hr>";
      document.getElementById("output").innerHTML += row;

      //End code
      });});}
getData();

function redirecttoroomname(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location = "kwitter_page.html"
}

function logout()
{
      localStorage.removeItem("Username");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}