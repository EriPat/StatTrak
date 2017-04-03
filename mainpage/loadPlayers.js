var score = 0;
var score2 = 0;
var players;

function add(x, number) {
  score += x;
  if(x != 3){
    document.getElementById("score").innerHTML = "Score: " + score;
  }
  else{
    document.getElementById("score").innerHTML = "Score: " + score;
  }
    var currScore = parseInt(document.getElementById(number).innerHTML);
    currScore += x;
    document.getElementById(number).innerHTML = currScore;
}

function add2(x, number) {
  score2 += x;
  if(x != 3){
    document.getElementById("score2").innerHTML = "Score: " + score2;
  }
  else{
    document.getElementById("score2").innerHTML = "Score: " + score2;
  }
    var currScore = parseInt(document.getElementById(number).innerHTML);
    currScore += x;
    document.getElementById(number).innerHTML = currScore;
}

function clearScore() {
  score = 0;
  document.getElementById("score").innerHTML = "Score: " + score;
}

function loadPlayers() {
  var teamCode = document.getElementById("teamCode").value;
  if(teamCode == ""){
    alert("Please enter a team code.");
    exit();
  }
  var socket = io.connect('http://localhost:8080');
  socket.emit('getPlayers', teamCode, function(data){
    var result = data;
    players = result;
    console.log(players);
    addToScreen(players);
    socket.close();
  });
  //socket.close();
  document.getElementById("teamCode").value = "";
}

function addToScreen(players){
  var number = 0;
  for(var i = 0; i < 5; i++){
    document.getElementById("players").innerHTML += "<div class='col-md-3'><h2>" + players[i].name.first + " " + players[i].name.last + "</h2></div><div class='col-md-3'><h2>" + players[i].number + "</h2></div><div class='col-md-2'><input type='checkbox'><input type='checkbox'><input type='checkbox'><input type='checkbox'><input type='checkbox'></div><div class='col-md-2 btn-group'><button class='btn btn-success btn-lg' id='counter1' onclick='add(1,"+ players[i].number +")'>+1</button><button class='btn btn-success btn-lg' id='counter1' onclick='add(2,"+ players[i].number +")'>+2</button><button class='btn btn-success btn-lg' id='counter1' onclick='add(3,"+ players[i].number +")'>+3</button></div><div class='col-md-2'><h2 id='" + players[i].number + "'>0</h2></div>";
  }
  document.getElementById("save").innerHTML += "<button class='btn btn-success btn-lg' id='logo'>Save Stats</button>";
}

function loadPlayers2() {
  var teamCode = document.getElementById("teamCode2").value;
  if(teamCode == ""){
    alert("Please enter a team code.");
    exit();
  }
  var socket = io.connect('http://localhost:8080');
  socket.emit('getPlayers', teamCode, function(data){
    var result = data;
    players = result;
    console.log(players);
    addToScreen2(players);
    socket.close();
  });
  //socket.close();
  document.getElementById("teamCode2").value = "";
}

function addToScreen2(players){
  var number = 0;
  for(var i = 0; i < 5; i++){
    document.getElementById("players2").innerHTML += "<div class='col-md-3'><h2>" + players[i].name.first + " " + players[i].name.last + "</h2></div><div class='col-md-3'><h2>" + players[i].number + "</h2></div><div class='col-md-2'><input type='checkbox'><input type='checkbox'><input type='checkbox'><input type='checkbox'><input type='checkbox'></div><div class='col-md-2 btn-group'><button class='btn btn-success btn-lg' id='counter1' onclick='add2(1,"+ players[i].number +")'>+1</button><button class='btn btn-success btn-lg' id='counter1' onclick='add2(2,"+ players[i].number +")'>+2</button><button class='btn btn-success btn-lg' id='counter1' onclick='add2(3,"+ players[i].number +")'>+3</button></div><div class='col-md-2'><h2 id='" + players[i].number + "'>0</h2></div>";
  }
  document.getElementById("save").innerHTML += "<button class='btn btn-success btn-lg' id='logo'>Save Stats</button>";
}

function myFunction() {
    var x = document.getElementById('one');
    var y = document.getElementById('two');
    if (x.style.display === 'none') {
        x.style.display = 'block';
        y.style.display = 'none';
    } else {
        x.style.display = 'none';
        y.style.display = 'block';
    }
}
