const notes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
const scales = [
    ['majorNatural', 'Natural Major'],
    ['minorNatural', 'Natural Minor']
];
const scaleStepsCollection = {
    majorNatural: [2, 2, 1, 2, 2, 2, 1],
    minorNatural: [2, 1, 2, 2, 1, 2, 2]
};
// Triads noted as 0 = major, 1 = minor, 2 = diminished, 3 = augmented
const scaleTriadsCollection = {
    majorNatural: [0, 1, 1, 0, 0, 1, 2],
    minorNatural: [1, 2, 0, 1, 1, 0, 0]
};

function GenerateNoteBtns() {
    const noteBtns = document.getElementById("notes");
    notes.forEach((note, num) => {
        const newBtn = document.createElement("button");
        newBtn.textContent = note;
        newBtn.value = num;
        noteBtns.appendChild(newBtn);
    })
};

function GenerateScaleBtns() {
    const scaleBtns = document.getElementById("scalesForm");
    scales.forEach((scale, index) => {
        const newBtn = document.createElement("input");
        newBtn.type = 'radio';
        newBtn.name = 'scales';
        newBtn.value, newBtn.id = scale[0];
        newBtn.defaultChecked = index === 0 ? true : false; // Set the first item to be checked by default

        const newLbl = document.createElement("label");
        newLbl.setAttribute('for', scale[0]);
        newLbl.textContent = scale[1];

        scaleBtns.appendChild(newBtn);
        scaleBtns.appendChild(newLbl);
    })
}

function GetChords(key, scale) {
    if (!(scale in scaleStepsCollection && scale in scaleTriadsCollection)) {
        console.log("Scale not found in config");
        return -1;
    };
    const scaleSteps = scaleStepsCollection[scale];
    let chords = [];
    let curNote = key;
    let noteIndex = notes.indexOf(key);

    scaleSteps.forEach((nextStep, stepIndex) => {
        const triad = scaleTriadsCollection[scale][stepIndex];
        chords.push(ChordToString(curNote, triad));
        noteIndex += nextStep;
        curNote = notes[(noteIndex) % notes.length];
    })

    return chords;
}

function ChordToString(note, triadType) {
    let triad = '';
    switch (triadType) {
        case 1:
            triad = 'm';
            break;
        case 2:
            triad = 'dim';
            break;
        case 4:
            triad = 'aug';
            break;
    }

    return note + triad;
}

function LoadPage() {
    GenerateNoteBtns();
    GenerateScaleBtns();
    console.log("hello");
    console.log(GetChords("F#", "majorNatural"));
}



// Run
LoadPage();