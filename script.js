// INCREMENTING VARIABLES & RANDOM VALUES

// 1. Saving elements as variables cleans up your code.
var numOutput = document.getElementById("display");
var minus50btn = document.getElementById("minus50");
var minus10btn = document.getElementById("minus10");
var minus1btn = document.getElementById("minus1");
var plus1btn = document.getElementById("plus1");
var plus10btn = document.getElementById("plus10");
var plus50btn = document.getElementById("plus50");
//
var rand1btn = document.getElementById("rand1");
var rand1out = document.getElementById("rand1-out");
//
var rand2btn = document.getElementById("rand2");
var rand2out = document.getElementById("rand2-out");
//
var rand3btn = document.getElementById("rand3");
var rand3out = document.getElementById("rand3-out");
//
var rand4btn = document.getElementById("rand4");
var rand4out = document.getElementById("rand4-out");
var randBack = document.getElementById("random-rgb");
//
let randSize = document.getElementById("random-size");
// Global variable (Global Scopes)
let num = 0;
// 2. Incrementing. The ++, --, +=, and -= operators are used to update variables without losing what was there before
minus50btn.addEventListener("click", minus50);
minus10btn.addEventListener("click", minus10);
minus1btn.addEventListener("click", minus1);
plus1btn.addEventListener("click", plus1);
plus10btn.addEventListener("click", plus10);
plus50btn.addEventListener("click", plus50);

//

function minus50() {
  num = num - 50;
  numOutput.innerHTML = num;
}

function minus10() {
  num = num - 10;
  numOutput.innerHTML = num;
}

function minus1() {
  num = num - 1;
  numOutput.innerHTML = num;
}

function plus1() {
  // All 3 ways work and do the same thing
  num = num + 1;
  // num++;
  // num += 1;
  numOutput.innerHTML = num;
}

function plus10() {
  num = num + 10;
  numOutput.innerHTML = num;
}

function plus50() {
  num = num + 50;
  numOutput.innerHTML = num;
}

// 3. The += operator also works to update strings. Also, the "change" event can remove the need for buttons!

var stringOutEl = document.getElementById("strOut");
var stringInEl = document.getElementById("strIn");

var story = "once upon a time, ";

// Change event:runs when `enter` is pressed
// or when mouse clicks outside input
stringInEl.addEventListener("change", updateStory);

function updateStory() {
  // Input: read the word, store as varible
  var word = stringInEl.value;
  stringInEl.value = "";
  // process: add word to the story
  story += word + " ";
  console.log(story);
  // output: display the story
  stringOutEl.innerHTML = story;
}
// 4. Math.random() is used to bring RNG (random number generator) to your applications.
rand1btn.addEventListener("click", random1);
rand2btn.addEventListener("click", random2);
rand3btn.addEventListener("click", random3);
rand4btn.addEventListener("click", random4);

function random1() {
  var rand = Math.random();
  // rounds to 3 decimal place
  rand = rand.toFixed(3);
  rand1out.innerHTML = rand;
}

function random2() {
  var rand = Math.random();
  rand = rand * 100; // decimal 0-0.999...
  rand = Math.floor(rand); // integer  0-90

  rand2out.innerHTML = rand;
}

function random3() {
  var rand = Math.random();
  rand = rand * 10 - 5;
  rand = Math.floor(rand);
  rand3out.innerHTML = rand;
}

function random4() {
  var minInput = parseInt(document.getElementById("rand-in1").value, 10);
  var maxInput = parseInt(document.getElementById("rand-in2").value, 10);

  var randomNumber =
    Math.floor(Math.random() * (maxInput - minInput + 1)) + minInput;
  document.getElementById("rand4-out").textContent = randomNumber;
}
{
  document.getElementById("rand4-out").innerHTML = rand4;
}

randBack.addEventListener("click", randomRgb);

function randomRgb() {
  var randomRed = Math.floor(Math.random() * 256);
  var randomGreen = Math.floor(Math.random() * 256);
  var randomBlue = Math.floor(Math.random() * 256);

  var randomColor =
    "rgb(" + randomRed + "," + randomGreen + "," + randomBlue + ")";

  document.getElementById("HTML").style.background = randomColor;
}

document.getElementById("reset").addEventListener("click", reset);

function reset() {
  num = 0;
  numOutput.innerHTML = num;

  story = "once upon a time, ";
  stringOutEl.innerHTML = story;
  stringInEl.value = "";

  rand1out.innerHTML = "----------";
  rand2out.innerHTML = "----------";
  rand3out.innerHTML = "----------";
  document.getElementById("rand4-out").innerHTML = "----------";

  document.getElementById("HTML").style.background = "#9ae4c8";
}

randSize.addEventListener("click", randomSize);

function randomSize() {
  let randomFont = Math.floor(Math.random() * 75);
  document.getElementById("body").style.fontSize = randomFont + "px";
}
// Check your understanding
// 1. Complete the rest of the incrementing buttons.
// 2. Complete the random __ to __ button.
// 4. Complete the Random Color button. This should change the html background to a random rgb color.  Hint:  `rgb(34, 245, 128)` is a value rgb color, where the numbers each range from 0 to 255. You will need three random numbers, then you will need to create a string using those numbers.
// 3. Complete the Random Size button. This button should change the font size of all text in the body to a value between 0 and 75
// Your job is to make the values random in the above code snippet.

// 4. Code the reset button. This will reset all variables back to initial values and clear out all input fields and reset span boxes back to dashes. It's like refresing the page without actually refreshing the page.

// DO NOW

let x = 8;
let y = 7;
let z = "kale";

x = y + 7;
y--;
z = "is";
x += y;
y -= x;
y--;
z -= "so";
z = "poopy";

console.log(x);
console.log(y);
console.log(z);
