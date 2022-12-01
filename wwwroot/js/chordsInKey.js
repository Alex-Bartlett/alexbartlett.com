const notes = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
const scales = [
    ["majorNatural", "Natural Major"],
    ["minorNatural", "Natural Minor"],
];
const scaleStepsCollection = {
    majorNatural: [2, 2, 1, 2, 2, 2, 1],
    minorNatural: [2, 1, 2, 2, 1, 2, 2],
};
// Triads noted as 0 = major, 1 = minor, 2 = diminished, 3 = augmented
const scaleTriadsCollection = {
    majorNatural: [0, 1, 1, 0, 0, 1, 2],
    minorNatural: [1, 2, 0, 1, 1, 0, 0],
};

function GenerateNoteBtns() {
    const noteBtns = document.getElementById("notes");
    notes.forEach(note => {
        const newBtn = document.createElement("button");
        newBtn.textContent = note;
        newBtn.type = 'button';
        newBtn.addEventListener("click", (event) => {
            CalculateChords(note);
        });
        noteBtns.appendChild(newBtn);
    });
}

function GenerateScaleBtns() {
    const scaleBtns = document.getElementById("scalesForm");
    scales.forEach((scale, index) => {
        const newBtn = document.createElement("input");
        newBtn.type = "radio";
        newBtn.name = "scales";
        newBtn.value, (newBtn.id = scale[0]);
        newBtn.defaultChecked = index === 0 ? true : false; // Set the first item to be checked by default

        const newLbl = document.createElement("label");
        newLbl.setAttribute("for", scale[0]);
        newLbl.textContent = scale[1];

        scaleBtns.appendChild(newBtn);
        scaleBtns.appendChild(newLbl);
    });
}

function GetChords(key, scale) {
    if (!(scale in scaleStepsCollection && scale in scaleTriadsCollection)) {
        return -1;
    }
    const scaleSteps = scaleStepsCollection[scale];
    let chords = [];
    let curNote = key;
    let noteIndex = notes.indexOf(key);

    scaleSteps.forEach((nextStep, stepIndex) => {
        const triad = scaleTriadsCollection[scale][stepIndex];
        chords.push(ChordToString(curNote, triad, stepIndex + 1));
        noteIndex += nextStep;
        curNote = notes[noteIndex % notes.length];
    });

    return chords;
}

function ChordToString(note, triadType, numeral) {
    let prefix = GetRomanNumeral(numeral);
    let triad = "";
    switch (triadType) {
        case 0:
            prefix = prefix.toUpperCase();
        case 1:
            triad = "m";
            break;
        case 2:
            triad = "dim";
            prefix += "<sup>o</sup>"
            break;
        case 4:
            triad = "aug";
            prefix += "<sup>+</sup>"
            break;
    }

    return `<span class='serif'>${prefix}</span>\t` + note + triad;
}

// Direct conversion of roman numerals, up to 7
function GetRomanNumeral(num) {
    let result = '';
    switch (num) {
        case 1:
            result = 'i';
            break;
        case 2:
            result = 'ii';
            break;
        case 3:
            result = 'iii';
            break;
        case 4:
            result = 'iv'
            break;
        case 5:
            result = 'v';
            break;
        case 6:
            result = 'vi';
            break;
        case 7:
            result = 'vii';
            break;
        default:
            result = '?';
            break;
    }
    return result;
}

function GetSelectedScale() {
    const radios = document.getElementsByName("scales");
    let selectedValue = 'none';
    radios.forEach((elem) => {
        if (elem.checked) {
            selectedValue = elem.id;
        }
    })
    return selectedValue;
}

function CalculateChords(key) {
    const scale = GetSelectedScale();
    const chords = GetChords(key, scale);
    DisplayChords(chords);
}

function DisplayChords(chords) {
    DeleteChordList();
    let list = document.createElement("ul");
    list.id = "scaleList";
    list = AddItemsToList(list, chords);
    document.getElementById("results").appendChild(list);
}

function DeleteChordList() {
    const list = document.getElementById("scaleList");
    if (list != null) {
        list.remove();
    }
}

function AddItemsToList(list, items) {
    if (items != -1) { //Check chords were found successfully
        items.forEach((item) => {
            const elem = document.createElement("li");
            elem.innerHTML = item;
            list.appendChild(elem);
        });
    }

    return list;
}

function LoadPage() {
    GenerateNoteBtns();
    GenerateScaleBtns();
}

// Run
LoadPage();