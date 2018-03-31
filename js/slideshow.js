var i = 0; 			// Start Point
var images = [];	// Images Array
var time = 4000;	// Time Between Switch
	 
// Image List
images[0] = "./img/1.png";
images[1] = "./img/2.png";
images[2] = "./img/3.png";
images[3] = "./img/4.png";
images[4] = "./img/5.png";
images[5] = "./img/6.png";
images[6] = "./img/7.png";
images[7] = "./img/8.png";
images[8] = "./img/9.png";
images[9] = "./img/10.png";
images[10] = "./img/11.png";
images[11] = "./img/12.png";
images[12] = "./img/13.png";
images[13] = "./img/14.png";
images[14] = "./img/15.png";
images[15] = "./img/16.png";
images[16] = "./img/17.png";
// Change Image
function changeImg(){
	document.slide.src = images[i];

	// Check If Index Is Under Max
	if(i < images.length - 1){
	  // Add 1 to Index
	  i++; 
	} else { 
		// Reset Back To O
		i = 0;
	}

	// Run function every x seconds
	setTimeout("changeImg()", time);
}

// Run function when page loads
window.onload=changeImg;
