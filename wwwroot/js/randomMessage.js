
(function () {
    const phrases1 = ["There once was", "Never before have I seen", "Unbeknown to me, there is", "Today I found out that my neighbour is"];
    const nouns = ["an elephant", "a serial killer", "a clock", "an escaped prisoner", "an Avon salesman", "a bartender", "a King", "a Princess", "a secret agent", "a frog", "a harsh critic", "a poor excuse of a man","a bank", "a zoo", "a house", "a shed", "a bridge", "a helicopter", "a prison", "a treehouse", "a television programme", "a glass bottle", "a pirate", "a lonely man", "a volcano", "a historical artifact"];
    const phrases3 = ["who clearly hated", "that just knew how to please", "that did some bad things to", "who owned", "that fell off", "that couldn't understand the concept of", "that tried to rob", "that succesfully became", "who unfortunately tripped over", "that never spoke to", "who was attacked by","that escaped"];
	const punctuation = [".", ".", ".", ".","!","!", "?"];
    const phrases5 = ["Put that in your prayers tonight.", "Bet you'll be coming back for more!", "You don't hear stories like that these days.", "It was the talk of the town.", "What a disaster that turned out to be!", "I was shocked to hear that news!", "But that's no surprise.", "But thats just the start!", "It's a short story, sorry.", "You're probably not interested.", "Please leave a like and subscribe if you enjoyed!", "I bet you feel satisfied now."]

    let msg = [];

    for (let i=0; i<6; i++){

        //Set the current list according to index
        let currentList;
        switch (i){
            case 0:
                currentList = phrases1;
                break;
            case 1:
                currentList = nouns;
                break;
            case 2:
                currentList = phrases3;
                break;
            case 3:
                currentList = nouns;
                break;
			case 4:
				currentList = punctuation;
				break;
            case 5:
                currentList = phrases5;
                break;
            default:
                currentList = ["Error"]; //In case anything goes wrong
        }
        //Get a random phrase from the list
        const phrase = currentList[Math.floor(Math.random()*currentList.length)];
        //Add phrase to the message
        msg.push(phrase);
    }

    //Join the array together into a string
    let finishedMsg = msg.join(" ");

	let separated = finishedMsg.split("");
	//Remove spaces before punctuation
	separated.forEach((word, index) => {
		if (punctuation.includes(word) && separated[index-1] == " "){
			separated.splice(index-1, 1);
		}
	})
	//Rejoin message
	finishedMsg = separated.join("");


    //Display the message
    document.getElementById("message").textContent = finishedMsg;
}())