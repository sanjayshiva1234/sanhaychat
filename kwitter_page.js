var firebaseConfig = {
      apiKey: "AIzaSyD7z9JKNCVSwpmSdTRk83-Q3TfWUatfM7o",
      authDomain: "kwitter-4ce1a.firebaseapp.com",
      databaseURL: "https://kwitter-4ce1a-default-rtdb.firebaseio.com",
      projectId: "kwitter-4ce1a",
      storageBucket: "kwitter-4ce1a.appspot.com",
      messagingSenderId: "654025091284",
      appId: "1:654025091284:web:b4cdd07fa194559a683341"
    };
    
    // Initialize Firebase\\/\/\/\/\/\/\/\\/\/\/\\/\/\/\/\/
firebase.initializeApp(firebaseConfig);

room_name = localStorage.getItem("room_name");
user_name = localStorage.getItem("user_name");

function send(){
  msg = document.getElementById("msg").value;
  firebase.database().ref(room_name).push({
        message : msg,
     likes : 0,
     Name : user_name 
  });

document.getElementById("msg").value = "";  

  }



function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();


function logout(){
      localStorage.removeItem("user_name");
       localStorage.removeItem("room_name");
        window.location ="index.html";
}

