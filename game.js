function gameStart() {

  var theName = document.getElementById("playername").value;
  var theSelect = document.getElementById("playerclass");
  var theClass = theSelect.options[theSelect.selectedIndex].text;

  if (theName == "") {
    alert("Please enter a name.");
  }
  else {
    localStorage.setItem("playername", theName);
    localStorage.setItem("playerclass", theClass);

    setUpGame();
  }
}

function setUpGame() {
  
}
