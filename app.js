// app
var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
var h = Math.max((document.documentElement.clientHeight, window.innerHeight) -60 || 0);
let r = 0;
let g = 0;
let b = 0;
let a = 1;// document.getElementById("opacity").value / 100;
let strokewidth = 10;
let active = true;
function setup() {
	createCanvas(w, (h));
	background(color(255, 255, 255));
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
	strokewidth = value;
	document.getElementById("example").style.width = value + "px";
	document.getElementById("example").style.height = value + "px";
}
function changeRed(value) {
	r = value;
	document.getElementById("example").style.backgroundColor = 'rgba(' +r+ '%,' +g+ '%,' +b+ '%, ' +a+ ')';
}
function changeGreen(value) {
	g = value;
	document.getElementById("example").style.backgroundColor = 'rgba(' +r+ '%,' +g+ '%,' +b+ '%, ' +a+ ')';
}
function changeBlue(value) {
	console.log('redchangef', value);
	b = value;
	document.getElementById("example").style.backgroundColor = 'rgba(' +r+ '%,' +g+ '%,' +b+ '%, ' +a+ ')';
}
function changeOpacity(value) {
	a = value / 100;
	document.getElementById("example").style.backgroundColor = 'rgba(' +r+ '%,' +g+ '%,' +b+ '%, ' +a+ ')';
}
function lines() {
	if (mouseIsPressed && active && mouseY < (h)) {
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


let img;
function draw() {
	// circles();
	lines();

  if (img) {
  	//console.log('img is defined', img);
  	//console.log('imgwidth', img.width);
  	//console.log('imgheight', img.height);
    
	// img.onload = () => {
	    
	//     console.log('imgloaded')
	// };
  } else {
  	//console.log('image not defined')
  }
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
	background(color(255, 255, 255));
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


function showimagelb() {
	document.getElementById('imagelb').className= "lightbox show";
	active = false;
}
function hideimagelb() {
	document.getElementById('imagelb').className= "lightbox";
	active = true;
}

download_img = function(el) {
	console.log('save')
  // get image URI from canvas object
  var imageURI = document.getElementById('defaultCanvas0').toDataURL("image/jpg");
  el.href = imageURI;
};


document.addEventListener('DOMContentLoaded', (event) => {
  //the event occurred
  console.log('ready');
	console.log('fileinput', document.getElementById('imageInput'));
	if (window.File && window.FileReader && window.FileList && window.Blob) {
	  document.getElementById('imageInput').addEventListener('change', handleFileSelect, false);
	} else {
	  alert('The File APIs are not fully supported in this browser.');
	}
})


function handleFileSelect(evt) {
	console.log('handling file select');
  var f = evt.target.files[0]; // FileList object
	console.log('f',f);
	console.log('evt.target',evt.target.value);
	var base64String = getBase64(evt.target.files[0]);

	console.log('base64String',base64String);
}

function getBase64(file) {
    var reader = new FileReader();
    reader.readAsDataURL(file);
	reader.onload = function () {
	    // console.log('reader.result',reader.result);
	    // document.getElementById('testimg').src = reader.result;
	    /*var loadedimage = new Image();
		loadedimage.src = reader.result;
		console.log('image',loadedimage);
		loadedimage.onload = () => {
		 	//img = image;
		 	console.log('lets go');
		 	image(loadedimage, 0, 0, 500, 500);
		};*/

		loadImage(reader.result, img => {
			// console.log(img);
			var newHeight;
			var newWidth;
			var heightDiff = (w / img.width);
			var widthDiff = (h / img.height);
			console.log('heightDiff',heightDiff);
			console.log('widthDiff',widthDiff);
			var xpos = 0;
			var ypos = 0;
			if (document.getElementById('layout1').checked) {
				// fill
				if (heightDiff < 1 && widthDiff < 1) {
					console.log("bigger on all sides");
					if (heightDiff < widthDiff) {
						console.log("heightDiff < widthDiff")
						newHeight = h;
						newWidth = (h / img.height) * img.width;

					} else {
						console.log("heightDiff > widthDiff")
						newHeight = (w / img.width) * img.height;
						newWidth = w;

					}
				} 
				if (heightDiff > 1 && widthDiff < 1) {
					console.log("width bigger, height smaller")
					newHeight = (w / img.width) * img.height;
					newWidth = w;
				} 
				if (heightDiff < 1 && widthDiff > 1) {
					// bigger on height
					console.log("height bigger, width smaller")
					newHeight = h;
					newWidth = (h / img.height) * img.width;
				} 

				if (heightDiff > 1 && widthDiff > 1) {
					console.log("smaller on all sides")
					if (heightDiff < widthDiff) {
						newHeight = h;
						newWidth = (h / img.height) * img.width;
					} else {
						newHeight = (w / img.width) * img.height;
						newWidth = w;
					}
				} 

				console.log('relative width', (w / img.width));
				console.log('screenwidth', w);
				console.log('img.width', img.width);
				console.log('screenheight', h);
				console.log('img.height', img.height);
				console.log('newHeight', newHeight);
			} else {
				// center
				console.log('center');
				if (heightDiff < 1 && widthDiff < 1) {
					console.log("bigger on all sides");
					if (heightDiff < widthDiff) {
						console.log("heightDiff < widthDiff")
						newHeight =  (w / img.width) * img.height;
						newWidth = w;

					} else {
						console.log("heightDiff > widthDiff")
						newHeight = h;
						newWidth =  (h / img.height) * img.width;

					}
				}

				if (heightDiff > 1 && widthDiff < 1) {
					console.log("width bigger, height smaller")
					newHeight = h;
					newWidth =  (h / img.height) * img.width;
				} 
				if (heightDiff < 1 && widthDiff > 1) {
					// bigger on height
					console.log("height bigger, width smaller")
					newHeight =  (w / img.width) * img.height;
					newWidth = w;
				} 

				if (heightDiff > 1 && widthDiff > 1) {
					console.log("smaller on all sides")
					if (heightDiff < widthDiff) {
						console.log('heightDiff < widthDiff');
						newHeight =  (w / img.width) * img.height;
						newWidth = w;
					} else {
						console.log('heightDiff > widthDiff')
						newHeight = h;
						newWidth = (h / img.height) * img.width;
					}
				} 
			}

			xpos = (w - newWidth) / 2;
			ypos = (h  - newHeight) / 2;

			image(img, xpos, ypos, newWidth, newHeight);
			
			document.getElementById('imagelb').className= "lightbox";
			active = true;
		 });
	    return reader.result
	};
    reader.onerror = function (error) {
    	alert('You broke it: ', error);
    };
}


