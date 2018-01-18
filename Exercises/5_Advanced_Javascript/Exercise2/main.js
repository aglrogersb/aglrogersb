function StorePlayerData()
{
	var theName = document.getElementById("playername").value;
	localStorage.setItem("playername", theName);

	var theHealth = document.getElementById("playerhealth").value;
	localStorage.setItem("playerhealth", theHealth);

	var theColour = document.getElementById("playercolour").value;
	localStorage.setItem("playercolour", theColour);


}
