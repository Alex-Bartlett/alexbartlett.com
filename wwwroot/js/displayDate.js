const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const suffices = ["st", "nd", "rd", "th"];

const today = new Date();
let numberDate = today.getDate().toString();
let suffix;

switch (numberDate[numberDate.length - 1]) {
    case "1":
        suffix = suffices[0];
        break;
    case "2":
        suffix = suffices[1];
        break;
    case "3":
        suffix = suffices[2];
        break;
    default:
        suffix = suffices[3];
        break;
}
//Maybe add toString here on numberDate?
const date = numberDate + suffix;

const msg = `Today is ${days[today.getDay() - 1]}, ${date} ${months[today.getMonth()]}, ${today.getFullYear()}`;




setInterval(showTime, 1000)

document.getElementById("date").textContent = msg;

function showTime() {
    let time = new Date();
    let hours = formatTime(time.getHours().toString());
    let minutes = formatTime(time.getMinutes().toString());
    let seconds = formatTime(time.getSeconds().toString());

    let content = `${hours}:${minutes}:${seconds}`;

    document.getElementById("time").textContent = content;
};


//Returns given number in 2 digit format, unless number already exceeds 2 digits.
//Example: num = 5 returns 05 and num = 45 returns 45.
function formatTime(num){
    if(num.length < 2){
        num = "0"+num;
    }
    return num;
}
showTime();
