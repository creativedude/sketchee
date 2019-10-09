// app
var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
function setup() {
	createCanvas(w, h);
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

let r = 124;
let g = 124;
let b = 124;
let a = 0.5;
let strokewidth = 10;
function lines() {

	r = r + Math.round((Math.random() * 10) - 5);
	g = g + Math.round((Math.random() * 10) - 5);
	b = b + Math.round((Math.random() * 10) - 5);
	//a = a + Math.round((Math.random() * 0.1) - 0.05);
	if (r < 0) {
		r=0;
	}
	if (g < 0) {
		g=0;
	}
	if (b < 0) {
		b=0;
	}
	if (a < 0) {
		a=0;
	}
	if (mouseIsPressed) {

		console.log(r, g, b, a);
		if (!prevposx) {
			prevposx = mouseX;
		}
		if (!prevposy) {
			prevposy = mouseY;
		}
		stroke('rgba(' +r+ '%,' +g+ '%,' +b+ '%, ' +a+ ')');
		strokeWeight(40);
		line(prevposx, prevposy, mouseX, mouseY);

		prevposx = mouseX;
		prevposy = mouseY;
	} else {
		prevposx = null;
		prevposy = null;

		r = (Math.random() * 100);
		g = (Math.random() * 100);
		b = (Math.random() * 100);
		//a = (Math.random() * 0.1);
	}
	
}

function draw() {
	circles();
	// lines();
}