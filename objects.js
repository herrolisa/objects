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
}
buildPerson(plainPerson,"Lisa",27);
console.log(plainPerson);
console.log(plainPerson.name);
console.log(plainPerson.age);

// Display values of objects that are inside an array
var arrayOfObjects = [
  {
    id: 0,
    date: "Monday Jan 25 2015 2:01 PM",
    total: "279.38"
  },
  {
    id: 1,
    date: "Monday Jan 27 2015 11:31 AM",
    total: "79.80"
  },
  {
    id: 2,
    date: "Monday Feb 1 2015 7:56 AM",
    total: "15.62"
  },
  {
    id: 3,
    date: "Monday Feb 1 2015 9:43 AM",
    total: "19.83"
  },
  {
    id: 4,
    date: "Monday Feb 1 2015 11:08 PM",
    total: "56.69"
  },
  {
    id: 5,
    date: "Monday Feb 13 2015 10:22 AM",
    total: "137.92"
  },
  {
    id: 6,
    date: "Monday Feb 14 2015 6:54 PM",
    total: "938.65"
  },
  {
    id: 7,
    date: "Monday Feb 14 2015 7:17 PM",
    total: "43.77"
  },
  {
    id: 8,
    date: "Monday Feb 14 2015 7:18 PM",
    total: "28.54"
  },
  {
    id: 9,
    date: "Monday Feb 14 2015 7:18 PM",
    total: "194.33"
  }
];

function printProcessedOrders(orders){
	for (var i = 0; i < arrayOfObjects.length; i++) {
		console.log("=====");
		console.log("id: " + orders[i].id);
		console.log("purchase date: " + orders[i].date);
		console.log("purchase total: " + orders[i].total);
	}
}
printProcessedOrders(arrayOfObjects);

// Addition with an object
var newObj = {
	a: 50,
	b: 25,
	result: "This is result"
};

function thisFunc(obj){
	obj.result = obj.a + obj.b;
	return obj.result;
}

thisFunc(newObj);
console.log(newObj.result);

// Print sum function and add as new key-value
function printMessage(obj){
	obj.output = obj.a + " + " + obj.b + " = " + obj.result;
	console.log(obj.output);
}
printMessage(newObj);

// Putting stuff in plainBox
function newFunc(obj){
	for (var i = 0; i < 10; i++) {
		var ranNum = Math.floor((Math.random() * 10) + 1);
		obj.contents.push(ranNum);
	}
}
var insertContents = newFunc(plainBox);
console.log(plainBox.contents);

// Detecting transmission
function transmission(obj){
	if (obj.automaticTransmission){
		return "You have an automatic transmission";
	}
	else{
		return "You can drive stick? Awesome!";
	}
}
var carType = transmission(stockCar);
console.log(carType);

// Who's driving this thing?!
function whosDriving(x,y){
	stockCar.driver = y;
	return x;
}
whosDriving(stockCar,plainPerson);
console.log(stockCar);


// var passengerList = ['Jon', 'Jason', 'Tony', 'Joe', 'Jesse', 'Nigel', 'Kelli', 'Marifel', 'Victor'];
// var passengersAges = [19, 12, 21, 22, 16, 9, 19, 20, 15];
// function carPassenger(stockCar,passengerList,passengersAges){
// 	for (var i = 0; i < passengerList.length; i++) {
//         var eachPass = passengerList[i];
//         var eachAge = passengersAges[i];
//         stockCar.passengers.push({"name": eachPass , "age": eachAge});
// 	}
// }
// carPassenger(stockCar,passengerList,passengersAges);
// console.log(stockCar);

var passengerList = ['Jon', 'Jason', 'Tony', 'Joe', 'Jesse', 'Nigel', 'Kelli', 'Marifel', 'Victor'];
var passengersAges = [19, 12, 21, 22, 16, 9, 19, 20, 15];
function carPassenger(car, names, ages){
	// lopp through passengers & ages to get value
	for (var i = 0; i < names.length; i++) {
		//console.log(names[i], ages[i]);
		//build a blank person
		var person={};
		//console.log(person);
		//pass one blank person, one name, and one age to build person
		buildPerson(person,names[i],ages[i]);
		//push new perspn into passengers array
		car.passengers.push(person);
	}
}
carPassenger(stockCar,passengerList,passengersAges);
console.log(stockCar);

// Display passengers
function ridingDirty(stockCar){
	for (var i = 0; i < stockCar.passengers.length; i++) {
		console.log(stockCar.passengers[i].name + ", " + "age " + stockCar.passengers[i].age + ", " + "is riding dirty!");
	}
}

ridingDirty(stockCar);