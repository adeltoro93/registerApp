var objPeople = [
  {
    username: "alex",
    password: "reno93931"
  }
]


function registerUser() {
    var registerUser = document.getElementById("newUsername").value
    var registerPassword = document.getElementById("newPassword").value
    var newUser = {
      username: registerUser,
      password: registerPassword
    }

    for(i = 0; i < objPeople.length; i++) {
      if(registerUser == objPeople[i].username) {
        alert("That username is already taken")
        return
      } else if (registerPassword.length < 8) {
        alert("That password is too short")
        return
      }
    }
    objPeople.push(newUser)
    alert("welcome " + newUser.username)
}

function getInfo() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

    for(i = 0; i < objPeople.length; i++) {
      if(username == objPeople[i].username && password == objPeople[i].password) {
        alert("welcome back " + username + " glad to see you again!")
        return
      }
    }
}
