// app
var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
let r = 0;
let g = 0;
let b = 0;
let a = 1;// document.getElementById("opacity").value / 100;
let strokewidth = 10;
let active = true;
console.log('asd',r)
function setup() {
	createCanvas(w, (h-60));
}
let size = 0;
function circles() {

	increase = false;
	if (mouseIsPressed) {
    	ellipse(mouseX, mouseY, size, size);
    	increase = true;
	 } else {
	 	increase = false
	    ellipse(mouseX, mouseY, size, size);
	 }
  	if (increase) {
  		size++;
  	} else {
  		if (size > 0){
  		  	size--;
  		 }
  	}
  	console.log(size);
}

let prevposx = null;
let prevposy = null;
// document.addEventListener('mousemove', onMouseUpdate, false);
// document.addEventListener('mouseenter', onMouseUpdate, false);
// function onMouseUpdate(e) {
//   prevposx = e.pageX;
//   prevposy = e.pageY;
// }
function changeStroke(value) {
	console.log('strokechangef', value);
	strokewidth = value;
	document.getElementById("example").style.width = value + "px";
	document.getElementById("example").style.height = value + "px";
}
function changeRed(value) {
	console.log('redchangef', value);
	r = value;
	document.getElementById("example").style.backgroundColor = 'rgba(' +r+ '%,' +g+ '%,' +b+ '%, ' +a+ ')';
}
function changeGreen(value) {
	console.log('redchangef', value);
	g = value;
	document.getElementById("example").style.backgroundColor = 'rgba(' +r+ '%,' +g+ '%,' +b+ '%, ' +a+ ')';
}
function changeBlue(value) {
	console.log('redchangef', value);
	b = value;
	document.getElementById("example").style.backgroundColor = 'rgba(' +r+ '%,' +g+ '%,' +b+ '%, ' +a+ ')';
}
function changeOpacity(value) {
	console.log('redchangef', value);
	a = value / 100;
	document.getElementById("example").style.backgroundColor = 'rgba(' +r+ '%,' +g+ '%,' +b+ '%, ' +a+ ')';
}
function lines() {

	if (mouseIsPressed && active) {

		console.log(r, g, b, a);
		if (!prevposx) {
			prevposx = mouseX;
		}
		if (!prevposy) {
			prevposy = mouseY;
		}
		stroke('rgba(' +r+ '%,' +g+ '%,' +b+ '%, ' +a+ ')');
		strokeWeight(strokewidth);
		line(prevposx, prevposy, mouseX, mouseY);

		prevposx = mouseX;
		prevposy = mouseY;
	} else {
		prevposx = null;
		prevposy = null;
		//a = (Math.random() * 0.1);
	}
	
}

function draw() {
	// circles();
	lines();
}
function openSettings() {
	console.log('openbtns');
	document.getElementById("body").className = "settingsmode";
	active = false;
}
function closeSettings() {
	console.log('openbtns');
	document.getElementById("body").className = "";
	active = true;
}
function clearCanvas() {
	console.log('clearing');
	clear();
	hideClearLb();
}
function showClearLb() {
	document.getElementById('clearlb').className= "lightbox show";
	active = false;
}
function hideClearLb() {
	document.getElementById('clearlb').className= "lightbox";
	active = true;
}