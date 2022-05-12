function Type(name, highAttack, lowAttack, highDefence, lowDefence, resistances) {
	this.name = name;
	this.highAttack = highAttack;
	this.lowAttack = lowAttack;
	this.highDefence = highDefence;
	this.lowDefence = lowDefence;
	this.resistances = this.resistances;
}
/** The id of the element to create typeChart in*/
const elementId = "typeChart";

const typeOrder = [
	"Normal",
	"Fire",
	"Water",
	"Grass",
	"Electric",
	"Ice",
	"Fighting",
	"Poison",
	"Ground",
	"Flying",
	"Psychic",
	"Bug",
	"Rock",
	"Ghost",
	"Dragon",
	"Dark",
	"Steel",
	"Fairy"
]
/*
0 = immune
1 = not very effective
2 = effective
3 = super effective
*/
const typeTable = [
	[2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 0, 2, 2, 1, 2],
	[2, 1, 1, 3, 2, 3, 2, 2, 2, 2, 2, 3, 1, 2, 1, 2, 3, 2],
	[2, 3, 1, 1, 2, 2, 2, 2, 3, 2, 2, 2, 3, 2, 1, 2, 2, 2],
	[2, 1, 3, 1, 2, 2, 2, 1, 3, 1, 2, 1, 3, 2, 1, 2, 1, 2],
	[2, 2, 3, 1, 1, 2, 2, 2, 0, 3, 2, 2, 2, 2, 1, 2, 2, 2],
	[2, 1, 1, 3, 2, 1, 2, 2, 3, 3, 2, 2, 2, 2, 3, 2, 1, 2],
	[3, 2, 2, 2, 2, 3, 2, 1, 2, 1, 1, 1, 3, 0, 2, 3, 3, 1],
	[2, 2, 2, 3, 2, 2, 2, 1, 1, 2, 2, 2, 1, 1, 2, 2, 0, 3],
	[2, 3, 2, 1, 3, 2, 2, 3, 2, 0, 2, 1, 3, 2, 2, 2, 3, 2],
	[2, 2, 2, 3, 1, 2, 3, 2, 2, 2, 2, 3, 1, 2, 2, 2, 1, 2],
	[2, 2, 2, 2, 2, 2, 3, 3, 2, 2, 1, 2, 2, 2, 2, 0, 1, 2],
	[2, 1, 2, 3, 2, 2, 1, 1, 2, 1, 3, 2, 2, 1, 2, 3, 1, 1],
	[2, 3, 2, 2, 2, 3, 1, 2, 1, 3, 2, 3, 2, 2, 2, 2, 1, 2],
	[0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 2, 2, 3, 2, 1, 2, 2],
	[2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 2, 1, 0],
	[2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 3, 2, 2, 3, 2, 1, 2, 1],
	[2, 1, 1, 2, 1, 3, 2, 2, 2, 2, 2, 2, 3, 2, 2, 2, 1, 3],
	[2, 1, 2, 2, 2, 2, 3, 1, 2, 2, 2, 2, 2, 2, 3, 3, 1, 2]
];

function formatTypeData(value) {
	switch (value) {
		case 0:
			return "0";
		case 1:
			return "&#189\;";
		case 2:
			return "";
		case 3:
			return "2";
		default:
			return "ERR";
	}
}

function formatTypeColour(value) {
	switch (value) {
		case 0:
			return "#000000";
		case 1:
			return "#f00000";
		case 2:
			return "#7d7d7d";
		case 3:
			return "#00f000";
	}
}

function createTable() {
	const parent = document.getElementById(elementId);
	const tbl = document.createElement("table");
	tbl.className = "typetable";
	const defenderRow = tbl.insertRow();
	defenderRow.insertCell().className = "typetable-top-blank";

	for (let k = 0; k < typeOrder.length; k++) {
		const td = defenderRow.insertCell();
		td.appendChild(document.createTextNode(typeOrder[k]));
		td.className = "typetable-top type-" + typeOrder[k].toLowerCase();
	}

	for (let i = 0; i < typeTable.length; i++) {
		const tr = tbl.insertRow();
		const attacker = tr.insertCell();
		attacker.appendChild(document.createTextNode(typeOrder[i]));
		attacker.className = "typetable-left type-" + typeOrder[i].toLowerCase();
		for (let j = 0; j < typeTable[i].length; j++) {
			const td = tr.insertCell();
			td.style.backgroundColor = formatTypeColour(typeTable[i][j]);
			td.innerHTML = formatTypeData(typeTable[i][j]);
		}
	}
	parent.appendChild(tbl);
}

/** Convert type as table index to string using typeOrder */
function TypeToString(typeIndex) {
	if (typeIndex > typeOrder.length || typeIndex < 0) {
		console.log(`Error: Index ${typeIndex} exceeds typeOrder length`);
		return null;
	}
	else {
		return typeOrder[typeIndex];
	}
}

/** Convert type as string to table index using typeOrder */
function TypeToInt(type) {
	const index = typeOrder.findIndex(elem => elem === type);
	if (index == -1) {
		console.log(`Error: Unrecognised type: ${type}`);
		return null;
	}
	else if (index == null || index == undefined) {
		console.log(`Error: Unknown error occured whilst trying to locate type ${type} in typeOrder`);
		return null;
	}
	else {
		console.log(index);
		return index;
	}
}

/** Return array (string) of types that match target response when type (string) is attacking
@param target For recognised values see typeTable comment */
function SearchTableAttack(type, target) {
	const typeIndex = TypeToInt(type); //Convert type from string to int
	const matches = [];
	//Iterate through 2D array. Outside = attacker, inside = defender
	for (let defIndex = 0; defIndex < typeTable[typeIndex].length; defIndex++) {
		if (typeTable[typeIndex][defIndex] === target) {
			//If current item matches target, convert defender to string and add to array
			matches.push(TypeToString(defIndex));
		}
	}
	return matches;
}

/** Return array (string) of types that match target response when type (string) is defending
 * @param target For recognised values see typeTable comment
*/
function SearchTableDefence(type, target) {
	const typeIndex = TypeToInt(type);
	const matches = [];
	for (let atkIndex = 0; atkIndex < typeTable.length; atkIndex++) {
		if (typeTable[atkIndex][typeIndex] === target) {
			matches.push(TypeToString(atkIndex));
		}
	}
	return matches;
}

/** Return array of types that given type is super effective towards 
 * @param type Attacker's type (string)
*/
function GetHighAttacks(type) {
	return SearchTableAttack(type, 3);
}

/** Return array of types that given type is less effective towards 
 * @param type Attacker's type (string)
*/
function GetLowAttacks(type) {
	return SearchTableAttack(type, 1);
}

/** Return array of types that are immune to given type 
 * @param type Attacker's type (string)
*/
function GetImmuneAttacks(type) {
	return SearchTableAttack(type, 0);
}

/** Return array of types that given type takes less damage to */
function GetHighDefences(type) {
	return SearchTableDefence(type, 1);
}

function GetLowDefences(type) {
	return SearchTableDefence(type, 3);
}

function GetImmuneDefences(type) {
	return SearchTableDefence(type, 0);
}

/**Get the type data for given type
 * @param type Type to query (string)
 * @returns An array in the order [hiAtk, loAtk, noAtk, hiDef, loDef, immune]
 */
function GetDataFor(type){
	return [GetHighAttacks(type), GetLowAttacks(type), GetImmuneAttacks(type), GetHighDefences(type), GetLowDefences(type), GetImmuneDefences(type)];
}

function ClearChildren(elem){
	while (elem.firstChild) {
		elem.removeChild(elem.firstChild)
	}
}

/**Given a list of types, wipe & append list elements to supplied list
 * @param types Array of types to be added
 * @param elem List to append list items to
 */
function AppendTypes(types, elem){	
	ClearChildren(elem);
	types.forEach(type => {
		const li = document.createElement("li");
		li.innerHTML = type;
		elem.appendChild(li);
	});
}

function SetHighAttacks(type){
	AppendTypes(GetHighAttacks(type), document.getElementById("hiAtk"));
}

function SetLowAttacks(type){
	AppendTypes(GetLowAttacks(type), document.getElementById("loAtk"));
}

function SetImmuneAttacks(type){
	AppendTypes(GetImmuneAttacks(type), document.getElementById("noAtk"));
}

function SetHighDefences(type){
	AppendTypes(GetHighDefences(type), document.getElementById("hiDef"));
}

function SetLowDefences(type){
	AppendTypes(GetLowDefences(type), document.getElementById("loDef"));
}

function SetImmuneDefences(type){
	AppendTypes(GetImmuneDefences(type), document.getElementById("immune"));
}

function SetSelectedType(type){
	document.getElementById("selectedType").innerHTML = type;
}

function UpdateTypes(type) {
	SetSelectedType(type);
	SetHighAttacks(type);
	SetLowAttacks(type);
	SetImmuneAttacks(type);
	SetHighDefences(type);
	SetLowDefences(type);
	SetImmuneDefences(type);
}

function Init() {
	if (document.getElementById(elementId) != null) {
		createTable();
	}
}

Init();