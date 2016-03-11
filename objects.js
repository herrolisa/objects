// Plain object and adding properties
var plainBox = {};

plainBox.color = "black";
plainBox.size = 4;
plainBox.contents = [];

console.log(plainBox);

// An object with properties declared line by line
var stockCar = {
	model: "Ford",
	year: 2006,
	automaticTransmission: false,
	driver: null,
	passengers: [],
};

// Add new property inside a function
var	plainPerson ={};
function buildPerson(person,nameString,age){
	person.name = nameString;
	person.age = age;
	return person;
}
buildPerson(plainPerson,"Lisa",27);
console.log(plainPerson);
console.log(plainPerson.name);
console.log(plainPerson.age);