


var button1 = document.getElementById('button1');
var button2 = document.getElementById('button2');
var button3 = document.getElementById('button3');
var sleutel = {
	sleutel : false,
	sleutel2 : false
}


function Start() {
	title.style.visibility = "hidden";
	description.style.visibility = "hidden";
	inventoryItem.style.visibility = "hidden";

	document.getElementById("button2").setAttribute("onclick", "begin();")
	document.getElementById("button2").innerHTML = "START";
	document.getElementById("button1").style.visibility = "hidden";
	document.getElementById("button3").style.visibility = "hidden";
	document.body.style.backgroundImage = "url(img/ruimte.jpeg)";
	document.getElementById("inventoryItem").style.visibility = "hidden"
	sleutel.sleutel = false;

;

}

function begin() {
	title.style.visibility = "visible";
	description.style.visibility = "visible";
	inventoryItem.style.visibility = "visible";

title.innerHTML = "LEVEL 1: 'NEERGESTORT' "	
document.getElementById("description").innerHTML = "Je bent neergestort in een bos op een andere planeet met je ruimteschip. <br> Op deze planeet zijn er allemaal wezens die je moet vermoorden. <br>Je mag 1 van de 3 wapens kiezen die er zijn <br> Welk wapen kies je?";

document.getElementById("button1").innerHTML = "Mes";
document.getElementById("button1").setAttribute("onclick", "Mes();")
document.getElementById("button1").style.visibility = "visible";

document.getElementById("button2").innerHTML = "Bommen";
document.getElementById("button2").setAttribute("onclick", "Bommen();")


document.getElementById("button3").innerHTML = "Pistool"
document.getElementById("button3").setAttribute("onclick", "Pistool();")
document.getElementById("button3").style.visibility = "visible";

document.body.style.backgroundImage = "url(img/bos.jpg)";
document.getElementById("inventoryItem").style.visibility = "hidden"

;
}






			function Mes() {
			alert ("je koos voor het Mes.");
			title.innerHTML = "LEVEL 2: 'HET MES'"
			document.getElementById("description").innerHTML = "maar wat ga je er nu mee doen?<br><br>1) Zoek wezens en dood ze. <br>  <br> 2) Ren voor je leven."

			document.getElementById("button1").innerHTML = "wezens zoeken";
			document.getElementById("button1").setAttribute("onclick", "wezens();")

			document.getElementById("button3").innerHTML = "Rennen";
			document.getElementById("button3").setAttribute("onclick", "Rennen();")


			document.getElementById("button2").style.visibility = "hidden";
			document.body.style.backgroundImage = "url(img/mes.jpg)";
;

}

function wezens(){
		title.innerHTML = "LEVEL 3: GAME OVER!"
	document.getElementById("description").innerHTML = "Je zocht naar de wezens <br> je hebt ze gevonden, maar.....<br> <br>  de wezens kregen je alsnog te pakken. <br> Helaas.. je bent <br><br> GAME OVER!!"
	document.getElementById("button1").style.visibility = "hidden"
	document.getElementById("button2").style.visibility = "hidden"
	document.getElementById("button3").style.visibility = "hidden"
	document.body.style.backgroundImage = "url(img/wezen.jpg)";

}

















function Bommen() {
	title.innerHTML = "LEVEL 2:'BOMMEN'"
	document.getElementById("description").innerHTML = "Je hebt de bom gekozen, hiermee moet je je gaan verdedigen.<br> maar dann, plots zie je een groep wezens naar je toekomen.<br> je hebt 3 keuzes <br> 1) Je rent keihard weg. <br> 2) Je gooit de bom op de groep wezens en ren dan snel weg. <br> 3) Je blijft staan waar je staat en hoopt dat ze niks doen."
	document.getElementById("button1").setAttribute("onclick", "Rennen();")
	document.getElementById("button1").innerHTML = "Rennen"

	document.getElementById("button2").setAttribute("onclick", "Gooien();")
	document.getElementById("button2").innerHTML = "Gooien"

	document.getElementById("button3").setAttribute("onclick", "Staan();")
	document.getElementById("button3").innerHTML = "Staan"
	document.body.style.backgroundImage = "url(img/bommen.jfif)";
	document.getElementById("inventoryItem").style.visibility = "hidden"


}
		function Rennen(){
		title.innerHTML = "LEVEL 3: 'REN VOOR JE LEVEN!'"
		document.getElementById("description").innerHTML = "Je bent voor je leven aan het rennen <br> maar dan vind je een oude kist. <br> Je wilt weten wat er in die kist zit <br> maar daarvoor heb je de sleutel nodig.<br> <br> Ga in 1 van deze kamers opzoek naar de sleutel <br> MAAR PAS OP! MAAR 1 KAMER IS DE GOEDE, DE REST OVERLEEF JE NIET!"
		document.body.style.backgroundImage = "url(img/kist.jfif)";

		document.getElementById("button1").innerHTML = "Kamer 1"
		document.getElementById("button1").setAttribute("onclick", "kamer1();")
		document.getElementById("button1").style.visibility = "visible"
		
		document.getElementById("button2").style.visibility = "visible"
		document.getElementById("button2").innerHTML = "Kamer 2"
		document.getElementById("button2").setAttribute("onclick", "kamer2();")



		document.getElementById("button3").setAttribute("onclick", "kist();")
		document.getElementById("button3").innerHTML = "kist"
		document.getElementById("button3").style.visibility = "visible"


		document.getElementById("inventoryItem").style.visibility = "hidden"


		}
			function kamer1(){
			document.body.style.backgroundImage = "url(img/deur.gif)";
			title.innerHTML = "WRONG ROOM!"
			document.getElementById("description").innerHTML =  "je hebt de verkeerde kamer gekozen <br> je zit hier opgesloten en kan nooit meer weg <br> je verhongert...<br> GAME OVER!"
			document.getElementById("button1").style.visibility = "hidden"
			document.getElementById("button2").style.visibility = "hidden"
			document.getElementById("button3").style.visibility = "hidden"

			}
			function kamer2(){
			title.innerHTML = "JE HEBT DE SLEUTEL!"
			document.getElementById("description").innerHTML = "je hebt de sleutel gevonden! <br> Ga nu opzoek naar de kist om hem te openen."


			document.body.style.backgroundImage = "url(img/sleutel.jpg)";
			document.getElementById("button1").style.visibility = "hidden"

			document.getElementById("button2").setAttribute("onclick", "Rennen();")
			document.getElementById("button2").innerHTML = "Terug"

			document.getElementById("button3").style.visibility = "hidden"
			sleutel.sleutel = true;
			
			}
			function kist(){
			if (sleutel.sleutel == false){
				title.innerHTML = "GA DE SLEUTEL ZOEKEN!"
				document.body.style.backgroundImage = "url(img/sleutel.jpg)";
				document.getElementById("description").innerHTML = "je hebt nog geen sleutel gevonden om de kist open te maken <br> ga opzoek naar de sleutel om de kist open te maken <br> SUCCES!";
				document.getElementById("button1").style.visibility = "hidden"
				
				document.getElementById("button3").style.visibility = "hidden"

				document.getElementById("button2").setAttribute("onclick", "Rennen();")
				document.getElementById("button2").style.visibility = "visible"
				document.getElementById("button2").innerHTML = "Terug";
			}
			else if(sleutel.sleutel == true){
				title.innerHTML = "JE HEBT GEWONNEN! JE HEBT DE KIST KUNNEN OPENEN"
				document.body.style.backgroundImage = "url(img/inhoud.jpg)";
				document.getElementById("description").innerHTML = "GOEDZO! JE HEBT DE INHOUD VAN DE KIST, JE HEBT GEWONNEN!";
				document.getElementById("button1").style.visibility = "hidden"
				document.getElementById("button3").style.visibility = "hidden"
				document.getElementById("button2").style.visibility = "visible"
				document.getElementById("button2").innerHTML = "Opnieuw"
				document.getElementById("button2").setAttribute("onclick", "Start();")

			}


			}


function Gooien() {
	document.getElementById("button1").style.visibility = "hidden"
	document.getElementById("button2").style.visibility = "hidden"
	document.getElementById("button3").style.visibility = "hidden"
	title.innerHTML = "GAME OVER!"
	document.getElementById("description").innerHTML = "Je gooide de bom maar blies jezelf ook op..." 
	document.body.style.backgroundImage = "url(img/bom.jpg)";
	document.getElementById("inventoryItem").style.visibility = "hidden";

}


















function Pistool() {
	title.innerHTML = "LEVEL 2: PISTOOL"
	document.getElementById("description").innerHTML = "Je hebt het pistool gekozen, hiermee moet je je gaan verdedigen.<br> maar dann, plots zie je een groep wezens naar je toekomen.<br> je hebt 3 keuzes <br> 1)Je rent keihard weg. <br> 2)Je probeert te schieten op de wezens en ren dan snel weg. <br> 3)Je blijft staan waar je staat en hoopt dat ze niks doen."
	document.getElementById("button1").setAttribute("onclick", "Rennen();")
	document.getElementById("button1").innerHTML = "Rennen"

	document.getElementById("button2").setAttribute("onclick", "schieten();")
	document.getElementById("button2").innerHTML = "schieten"

	document.getElementById("button3").setAttribute("onclick", "Staan();")
	document.getElementById("button3").innerHTML = "Staan"
	document.body.style.backgroundImage = "url(img/pistol.jpg)";
	document.getElementById("inventoryItem").style.visibility = "hidden"
}
function Staan() {
	title.innerHTML = "LEVEL 3: GAME OVER!"
	document.getElementById("description").innerHTML = "Je bleef staan, maar de wezens kregen je te pakken. <br> Helaas.. je bent <br><br> GAME OVER!!"
	document.getElementById("button1").style.visibility = "hidden"
	document.getElementById("button2").style.visibility = "hidden"
	document.getElementById("button3").style.visibility = "hidden"
	document.body.style.backgroundImage = "url(img/wezen.jpg)";


}
function schieten(){
	title.innerHTML = "LEVEL 3: GAME OVER!"
	document.getElementById("description").innerHTML = "Je schoot naar de wezens, maar de wezens kregen je alsnog te pakken. <br> Helaas.. je bent <br><br> GAME OVER!!"
	document.getElementById("button1").style.visibility = "hidden"
	document.getElementById("button2").style.visibility = "hidden"
	document.getElementById("button3").style.visibility = "hidden"
	document.body.style.backgroundImage = "url(img/wezen.jpg)";

}



Start();