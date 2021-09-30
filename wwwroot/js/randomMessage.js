
(function () {
    const phrases1 = ["There once was", "Never before have I seen", "Unbeknown to me, there is", "Today I found out that my neighbour is"];
    const nouns = ["an elephant", "a serial killer", "a clock", "an escaped prisoner", "an Avon salesman", "a bartender", "a King", "a Princess", "a secret agent", "a frog", "a harsh critic", "a poor excuse of a man","a bank.", "a zoo.", "a house.", "a shed.", "a bridge.", "a helicopter.", "a prison.", "a treehouse.", "a television programme.", "a glass bottle.", "a pirate."];
    const phrases3 = ["who owned", "that fell off", "that couldn't understand the concept of", "that tried to rob", "that succesfully became", "who unfortunately tripped over", "that never spoke to", "who was attacked by","that escaped"];
    const phrases5 = ["You don't hear stories like that these days.", "It was the talk of the town.", "What a disaster that turned out to be!", "I was shocked to hear that news!", "But that's no surprise.", "But thats just the start!", "It's a short story, sorry.", "You're probably not interested.", "Please leave a like and subscribe if you enjoyed!", "Follow @alexbartlett7710 for more stories!"]

    let msg = [];

    for (let i=0; i<5; i++){

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
    finishedMsg = msg.join(" ");
    //Display the message
    document.getElementById("message").textContent = finishedMsg;
}())