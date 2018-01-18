function MakeTextSmaller()
{
	document.getElementById("textSize").style.fontSize = "8px";
}

function ReplaceText()
{
	document.getElementById("placeholderText").innerHTML = "My new text!";
}

function TurnLightOn()
{
	document.getElementById("lightBulb").src = "img/bulb-on.png";
}

function TurnLightOff()
{
	document.getElementById("lightBulb").src = "img/bulb-off.png";
}
