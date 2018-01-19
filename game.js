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

  var menuscreen = document.getElementById("menuscreen");
  menuscreen.style.visibility = "hidden";
  menuscreen.style.height = "0px";

  var mainscreen = document.getElementById("mainscreen")
  mainscreen.style.visibility = "visible";
  mainscreen.style.height = "84.5%";

  selectRoom(0);
}

function selectRoom(roomIndex) {

  if (roomIndex == 99)
  {
    var menuscreen = document.getElementById("menuscreen");
    menuscreen.style.visibility = "visible";
    menuscreen.style.height = "84.5%";

    var mainscreen = document.getElementById("mainscreen")
    mainscreen.style.visibility = "hidden";
    mainscreen.style.height = "0px";
  }
  else if (roomIndex == 11) {

    document.getElementById("roomTitle").innerHTML = roomArray[roomIndex].title;

    if (localStorage.getItem("playerclass") == "Knight") {

      document.getElementById("roomText").innerHTML = "<br />You swing your sword down on the head of the executioner, killing him instantly.<br /><br />" +
      "The torturers assistant stabs you, and you take three damage.<br /><br />" +
      "You pull your sword out of the executioners head and swing it round, slicing the assistant in half.<br /><br />" +
      "<br /><br /><br /><br /><br /><br />" +
      "What do you want to do?";
    }
    else if (localStorage.getItem("playerclass") == "Mage") {

      document.getElementById("roomText").innerHTML = "<br />You cast a firebolt at the tortures assistant, taking him out and dealing damage to the executioner.<br /><br />" +
      "You retreat back to restore some mana as the executioner attempts to put the flames out.<br /><br />" +
      "You cast firebolt again on the executioner, turning him into a pile of ash.<br /><br />" +
      "<br /><br /><br /><br /><br /><br />" +
      "What do you want to do?";
    }
    else {

      document.getElementById("roomText").innerHTML = "<br />You claim the executioners soul and imbue it ito the torturers assistant, causing his head to explode.<br /><br />" +
      "The executioner motions towards you in a zombie-like fashion.<br /><br />" +
      "The executioner slowly swings his axe at you, and you take two damage. You steal his axe and bisect him cleanly in half.<br /><br />" +
      "<br /><br /><br /><br /><br /><br />" +
      "What do you want to do?";
    }

    document.getElementById("roomChoices").innerHTML = "";

    for (var i = 0; i < roomArray[roomIndex].choices.length; i++)
    {
      var theButton = "<button value='" + i + "' style='width: 250px; margin: 15px 0px 10px 50px;' onClick=selectRoom(" +
          (roomArray[roomIndex].choices[i].index) + ")>" + roomArray[roomIndex].choices[i].text + "</button><br />";
      document.getElementById("roomChoices").innerHTML += theButton;
    }
  }
  else
  {
    document.getElementById("roomTitle").innerHTML = roomArray[roomIndex].title;

    document.getElementById("roomText").innerHTML = roomArray[roomIndex].text;

    document.getElementById("roomChoices").innerHTML = "";

    for (var i = 0; i < roomArray[roomIndex].choices.length; i++)
    {
      var theButton = "<button value='" + i + "' style='width: 250px; margin: 15px 0px 10px 50px;' onClick=selectRoom(" +
          (roomArray[roomIndex].choices[i].index) + ")>" + roomArray[roomIndex].choices[i].text + "</button><br />";
      document.getElementById("roomChoices").innerHTML += theButton;
    }
  }
}
