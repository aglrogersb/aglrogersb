function CreatePlayer()
{
  document.getElementById("name").innerHTML = document.getElementById("playername").value;
  document.getElementById("colour").style.backgroundColor = document.getElementById("playercolour").value;
  document.getElementById("health").innerHTML = document.getElementById("playerhealth").value;

  var option = document.getElementById("playerweapon").value;

  if (option == 1)
  {
    document.getElementById("weapon").innerHTML = "Crossbow of much hurting";
  }
  else if (option == 2)
  {
    document.getElementById("weapon").innerHTML = "Broadsword of so slicing";
  }
  else
  {
    document.getElementById("weapon").innerHTML = "Wand of amaze magics";
  }

  /* I tried to make a switch statement, and I'm pretty sure it should work.
     But for some reason it doesn't and I don't know why. */

  /*var output;

  switch (option) {
    case 1:
      output = "Crossbow of much hurting";
      break;
    case 2:
      output = "Broadsword of so slicing";
      break;
    case 3:
      output = "Wand of amaze magics";
      break;
  }

  document.getElementById("weapon").innerHTML = output;*/

}
