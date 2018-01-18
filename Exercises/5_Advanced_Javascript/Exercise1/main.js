var weaponsArray = [
	'Broadsword',
	'Crossbow',
	'Magic staff'
];

function OnLoad()
{
	for (var i = 0; i <= 2; i++)
	{
		var weapon = "<option id='weapon'" + i + "value='0'>" + weaponsArray[i] + "</option>"

		var mySelect = document.getElementById("weapons");

		mySelect.innerHTML += weapon;
	}
}

function SelectWeapon()
{
	var display = document.getElementById("currentWeapon");
	var mySelect = document.getElementById("weapons");
	var selectedOption = mySelect.options[mySelect.selectedIndex].text;

	display.innerHTML = selectedOption;
}
