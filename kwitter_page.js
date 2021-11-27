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
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    Username = localStorage.getItem("Username");
    Room_Name = localStorage.getItem("room_name");
    function send(){
          msg = document.getElementById("message").value;
      firebase.database().ref(Room_Name).push({
            name: Username,
            message: msg,
            like: 0
      });
      document.getElementById("message").value = "";
    }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;    
         console.log(firebase_message_id);
         console.log(message_data);
         Name = message_data['name'];
         message =message_data['message'];
         like = message_data['like'];
         name_with_tag = "<h4>"+Name+"<img class='user_trick' src='tick.png'></h4>;"
         message_with_tag = "<h4 class='message_h4' id="+message+"</h4>";
      like_button = "<button class='btn btn-warning' id="+firebase_message_id+"value ="+like+ "onclick='updateLike(this.id)'>;"  
          span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like:"+like+"</span></button><hr>";
           row = name_with_tag + message_with_tag + like_button + span_with_tag;
           document.getElementById("output").innerHTML += row;
} });  }); }
getData();
function updateLike(message_id)
{
      console.log("clicked on like button -" + message_id);
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      updated_likes = Number(likes)+ 1;
      console.log(updated_likes);
      firebase.database().ref(room_name).child(message_id).update({
             like : updated_likes 
      })
}
function logout1()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace("index.html");
}