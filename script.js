const dead = "<img src= youdied.jpg>";

alert("Beantwoord alle vragen met de antwoorden tussen de aanhalingstekens.");
alert("Je bent op vakantie maar raakt verdwaald in een gevaarlijk bos waar moordenaars rondlopen. Je hebt een rugzak bij je met daarin een tent en eten voor 1 dag.");
alert("Het is 23:00 en zoekt een goede plek om te overnachten.");

var sleep = prompt("Je komt een verlaten hut tegen midden in het bos. Ga je in de 'hut' overnachten of ga je ergens in het bos je 'tent' opzetten?");

if (sleep.toLowerCase() == "hut") {
	alert("De deur stond gewoon open en je kan veilig naar binnen.");
	alert("Je hebt erg honger dus gaat opzoek naar wat eten.");
	alert("Je vind ingeblikt eten in de kast staan maar het is over de datum.");
	var food = prompt("Wil je het 'ingeblikt' voer eten om je eigen eten te besparen of eet je je 'eigen' eten?");

		if (food.toLowerCase() == "eigen") {
			alert("Je hebt je eten op en gaat slapen.");
			alert("Midden in de nacht word je wakker vanwege een geluid vlak buiten de hut.");
			alert("Je zoekt direct in de hut naar een wapen.");
			alert("Je vind twee verschillende voorwerpen. Een mes en een volautomatisch geweer.");
			var weapon = prompt("Kies je voor het 'mes' of voor het 'geweer'?");

				if (weapon.toLowerCase() == "mes") {
					alert("Net wanneer je het mes pakt breekt er iemand door de voordeur.");
					alert("Hij heeft een hakbijl beet en probeert je er mee te slaan.");
					alert("Je ontwijkt zijn bijl en haalt uit met het mes.");
					alert("Je snijd in één keer zijn strot open en hij bloed dood.");
					alert("Er ligt nu een lichaam in je hut waar je vanaf wilt.");
					var body = prompt("");

				}


				else {
					alert("Net wanneer je het geweer pakt breekt er iemand door de voordeur.");
					alert("Hij heeft een hakbijl beet en probeert je er mee te slaan.");
					alert("Je probeert te schieten met het geweer maar er zaten geen kogels in.");
					alert("De man haalt nog een keer uit en snijdt met de bijl je halsslagader open.");
					document.write(dead);
				}
		}


		else {
			alert("Je krijgt voedselvergiftiging en hebt geen medicijnen bij je.");
			document.write(dead);
		}

}


else {
	alert("Je vind een goede plek om je tent neer te zetten en gaat slapen.");
	alert("Wat je alleen niet wist is dat er beren in het bos rondlopen en word midden in de nacht aangevallen door een beer in je slaap.");
	document.write(dead);
}
