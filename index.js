//Oppgave 1----------------------------------------------------------------------------------------

// function toFahrenheit() {
//     var celsius = document.getElementById("celsius").value;
//     var fahrenheit = (celsius * 1.8) + 32;
//     document.getElementById("result").innerHTML = fahrenheit + "°F";
// }

// function toCelsius() {
//     var fahrenheit = document.getElementById("fahrenheit").value;
//     var celsius = (fahrenheit - 32) / 1.8;
//     document.getElementById("result").innerHTML = celsius + "°C";
// }

//Oppgave 2----------------------------------------------------------------------------------------

// function generateNumbers() {
//     var num1 = Math.floor(Math.random() * 11);
//     var num2 = Math.floor(Math.random() * 11);
//     return [num1, num2];
// }

// function compareNumbers() {
//     var nums = generateNumbers();
//     var num1 = nums[0];
//     var num2 = nums[1];
//     var resultElement = document.getElementById("result");

//     if (num1 < num2) {
//         resultElement.innerHTML = num1 + " er mindre enn " + num2;
//     } else if (num1 > num2) {
//         resultElement.innerHTML = num1 + " er større enn " + num2;
//     } else {
//         resultElement.innerHTML = num1 + " er lik " + num2;
//     }
// }

//Oppgave 3----------------------------------------------------------------------------------------

// function checkPalindrome() {
//     var inputText = document.getElementById("inputText").value;
//     var resultElement = document.getElementById("result");

//     var reversedText = inputText.split("").reverse().join("");

//     if (inputText === reversedText) {
//         resultElement.innerHTML = "Teksten er en palindrom";
//     } else {
//         resultElement.innerHTML = "Teksten er ikke en palindrom";
//     }
// }

//Oppgave 4----------------------------------------------------------------------------------------

// function changeColor(color) {
//     var div1 = document.getElementById("div1");
//     var div2 = document.getElementById("div2");
//     var div3 = document.getElementById("div3");

//     if (color === "red") {
//         div1.style.backgroundColor = "red";
//         div2.style.backgroundColor = "white";
//     } else if (color === "blue") {
//         div1.style.backgroundColor = "white";
//         div2.style.backgroundColor = "blue";
//     } else {
//         var randomColor = getRandomColor();
//         div3.style.backgroundColor = randomColor;
//     }
// }

// function getRandomColor() {
//     var letters = "0123456789ABCDEF";
//     var color = "#";
//     for (var i = 0; i < 6; i++) {
//         color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
// }

//-------------------------------------------------------------------------------------------------