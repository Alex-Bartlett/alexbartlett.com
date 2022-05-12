//Secret santa attempt 3

//Please, this code is horrific. Don't take any inspiration from it, I was still learning
//JavaScript at time of creation.
//Blur filter https://codepen.io/darkwing/pen/DbKtx thanks to David Walsh
function SplitCSVToArray(input) {
	return input.split(',')
}

//Check that array is > 1

function EnterSecretSantaNames() {
	const container = document.getElementById('results')
	container.innerHTML = "";

	const input = document.getElementById('input_playerList').value
	let players = SplitCSVToArray(input)
	if (players.length > 1) {
		//Hide the warning message if not already displayed
		HideWarning()
		SecretSanta(players).forEach((elem) => {
			const buyer = document.createElement('span')
			const buyerContent = document.createTextNode(`${elem.buyer} is buying for `);
			const receiver = document.createElement('span');
			const receiverContent = document.createTextNode(elem.receiver);
			buyer.className = "secretSantaOutput";
			receiver.className = "secretSantaOutput spoiler"
			
			buyer.appendChild(buyerContent);
			receiver.appendChild(receiverContent);
			container.appendChild(buyer);
			container.appendChild(receiver);
			container.appendChild(document.createElement('br'));
		})
	} else {
		//Warn user that they must have at least 2 names
		ShowWarning()
	}
}

function ShowWarning() {
	const warning = document.getElementById('text_warning')
	warning.style.display = 'block'
}

function HideWarning() {
	const warning = document.getElementById('text_warning')
	warning.style.display = 'none'
}

function SecretSanta(players) {
	players = shuffle(players)
	let results = []
	for (let i = 1; i < players.length; i++) {
		results.push({ buyer: players[i - 1], receiver: players[i] })
	}
	results.push({ buyer: players[players.length - 1], receiver: players[0] })

	return results
}

function shuffle(array) {
	var m = array.length,
		t,
		i
	while (m) {
		i = Math.floor(Math.random() * m--)
		t = array[m]
		array[m] = array[i]
		array[i] = t
	}
	return array
}
