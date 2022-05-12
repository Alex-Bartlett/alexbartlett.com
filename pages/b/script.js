/**
 * 
 * @param {string} text The text to be processed
 */
function AddBs(text) {
    const list = text.split(' ');

    for (i = 0; i < list.length; i++) {
        let str = list[i];
        if (str.length >= 1) {
            console.log(str);
            str = "🅱" + str.substring(1);
            list[i] = str;
        }
    }

    const result = list.join(' ');

    return result;
}

function submitForm() {
    const output = document.getElementById("output");
    const text = document.forms["form"]["text"].value;
    if (text.length > 0) {
        output.innerHTML = AddBs(text);
        output.hidden = false;
    } else {
        alert("You can't submit an empty text field!");
        output.hidden = true;
    }
}

/*
Tell me boy. What is the point in this rubbish? An absolute waste of time. I am disappointed with the amount of time you have spent working on what is quite simply a disposal of your precious life. Precious - hah! Who am I kidding, what more could I expect of you. This is some of your best work! You however, are far from my best work. Your mother should've swallowed you.
*/