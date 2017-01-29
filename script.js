// alert("hello World")
// sayHello(myName)

// var myName = Hayley
// var perfectSqaure = 9;
// var isSunday = true;

// function sayHello(myName){
// 	alert("Hello " + myName)
// }

var animal = document.getElementsByClassName("animal")
var bestAnimal = document.getElementById ("best-animal")

function getBestAnimal(){
	// get the users favorite animal
	// store the favorite animal as a variable
	var fave = prompt("What is your favorite animal?")
	console.log(fave)
	// change the best-animal to match the users input
	var bestAnimal = 
	document.getElementById ("best-animal")
	bestAnimal.textContent = fave; 
}
getBestAnimal()

// If the value of fave is empty
If (fave == ''){
// do something
bestAnimal.textContent = "Sloth"
// if user does not enter animal
} else {
 // change the best animal to match the users input 
var bestAnimal = 
document.getElementById ("best-animal")
bestAnimal.textContent = fave; 
}
