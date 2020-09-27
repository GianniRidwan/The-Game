const dead = "<img src= youdied.jpg>";
const error = "Voer alleen de woorden in tussen de aanhalingstekens!";

alert("Beantwoord alle vragen met de antwoorden tussen de aanhalingstekens.");
alert("Je bent op vakantie maar raakt verdwaald in een gevaarlijk bos waar moordenaars rondlopen. Je hebt een rugzak bij je met daarin een tent, eten voor 1 dag en een waterfilter.");
alert("Het is 23:00 en zoekt een goede plek om te overnachten.");

var sleep = prompt("Je komt een verlaten hut tegen midden in het bos. Ga je in de 'hut' overnachten of ga je ergens in het bos je 'tent' opzetten?");

if (sleep.toLowerCase() != "tent") {
	alert("De deur stond gewoon open en je kan veilig naar binnen.");
	alert("Je hebt erg honger, dus gaat opzoek naar wat eten en verkent de hut.");
	alert("De hut is voorzien van zonnepanelen en er staat een enorme vriezer die leeg is in de hut. Ook vind je een lege jerrycan van 10 liter.");
	alert("Je vindt ingeblikt eten in een kast, maar het is over de datum.");
	var food = prompt("Wil je het 'ingeblikt' voer eten om je eigen eten te besparen of eet je je 'eigen' eten?");

		if (food.toLowerCase() == "eigen") {
			alert("Je hebt je eten op en gaat slapen.");
			alert("Midden in de nacht word je wakker vanwege een geluid vlak buiten de hut.");
			alert("Je zoekt direct in de hut naar een wapen.");
			alert("Je vindt twee verschillende voorwerpen. Een mes en een volautomatisch geweer.");
			var weapon = prompt("Kies je voor het 'mes' of voor het 'geweer'?");

				if (weapon.toLowerCase() == "mes") {
					alert("Net wanneer je het mes pakt breekt er iemand door de voordeur.");
					alert("Hij heeft een hakbijl beet en probeert je er mee te slaan.");
					alert("Je ontwijkt zijn bijl en haalt uit met het mes.");
					alert("Je snijdt in één keer zijn strot open en hij bloed dood.");
					alert("Er ligt nu een lichaam in je hut waar je vanaf wilt.");
					var body = prompt("'Begraaf' je het lichaam buiten je hut of leg je hem in de 'vriezer'?");

						if (body.toLowerCase() == "vriezer") {
							alert("Je legt het lichaam in de vriezer");
						}
						else  {
							alert("Je begraaft het lichaam buiten je hut.");
						}
						
							alert("Je begint ondertussen honger en dorst te krijgen. De hut is niet voorzien van water. Je gaat nu dus opzoek naar water en eten. Je neemt je geweer mee.");
							var water = prompt("Neem je je 'waterfilter' mee of de 'jerrycan'?");

								if (water.toLowerCase() == "waterfilter") {
									alert("Je neemt de waterfilter mee en gaat opzoek naar eten en drinken.");
								}
								else {
									alert("Je neemt de jerrycan mee en gaat opzoek naar eten en drinken.");
								}
									alert("Na een tijd in het bos zoeken kom je een meer tegen.")

									if (water.toLowerCase() == "waterfilter") {
										alert("Je drinkt wat water met het waterfilter en gaat verder opzoek naar eten.");
									}
									else {
										alert("Je vult de jerrycan met water en keert terug naar je hut. Daarna ga je weer opzoek naar eten.");
									}
										alert("Tijdens het zoeken van eten kom je een andere hut tegen. Je gaat naar binnen en kijkt of er iets bruikbaars ligt.");
										alert("In de hut vindt je een kluis met een notitie waar een rekensom opstaat. De uitkomst van de som is de combinatie van de kluis.");
										var code = prompt("Wat is 956 x 7 : 28 x 9?");

										if (code == 2151) {
											alert("De kluis is open en er liggen patronen in voor je geweer.");
											var ammo = prompt("Hoeveel patronen stop je in je magazijn?");

											if (ammo <= 30) {
												alert("Je vult je magazijn met de patronen.");
											}
											else {
												alert("Zoveel patronen passen er niet in een magazijn. De rest laat je liggen.");
											}
												alert("Je gaat weer verder opzoek naar eten maar kan niks vinden. Je loopt weer richting je hut.");
												alert("Terwijl je richting je hut loopt hoor je beweging in de bosjes waar je langs loopt.");
												var check = prompt("Ga je het 'checken' of 'loop' je weg?");

													if (check.toLowerCase() == "loop") {
														alert("Je loopt verder naar je hut.");
														
														if (water.toLowerCase() == "jerrycan") {
															alert("Je gooit wat water van de jerrycan in een pan om het te koken zodat je het daarna kan drinken.");
														}
															alert("In je hut vind je een kaart. Er staan 2 routes op. 1 weg leidt naar een autoweg en de andere leidt naar een boswachtershut die verder in het bos staat.");
															var road = prompt("Ga je richting de 'autoweg' of ga je naar de 'boswachtershut'?");

																if (road.toLowerCase() == "autoweg") {
																	alert("Je volgt de kaart door het bos heen en komt uiteindelijk bij de autoweg.");
																	alert("Na ongeveer een half uur lopen op de autoweg hoor je in de verte een auto aankomen rijden.");
																	var car = prompt("Als de auto dichtbij komt 'vraag' je dan netjes om mee te rijden of 'bedreig' je de bestuurder?");

																	if (car.toLowerCase() == "vraag") {
																		alert("De bestuurder is erg vriendelijk en biedt je een rit naar het dichtsbijzijnde politiebureau aan.");
																		document.write("U heeft het overleefd.");
																	}
																	else {
																		alert("De bestuurder twijfeld geen moment en rijdt je met vol gas aan.");
																		document.write(dead);
																	}



																}

																else {
																	alert("Je volgt de kaart door het bos heen maar omdat je teveel op de kaart kijkt en te weinig voor je, val je in een valkuil en word je gespietst door houten speren.");
																	document.write(dead);
																}



													}
													else {
														alert("Je gaat het checken en wanneer je dichtbij komt springt er een moordenaar uit het bosje en grijpt gelijk naar je wapen. Hij overmeesterd je en schiet je met je eigen geweer.");
														document.write(dead);
													}



										}
										else {
											alert("De kluis gaat in een zelfdestruct mode en blaast zichzelf met jou op.");
											document.write(dead);
										}


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

 