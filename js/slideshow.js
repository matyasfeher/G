var i = 0; 			// Start Point
var images = [];	// Images Array
var time = 4000;	// Time Between Switch
	 
// Image List
images[0] = "./img/1.jpg";
images[1] = "./img/2.jpg";
images[2] = "./img/3.jpg";
images[3] = "./img/4.jpg";
images[4] = "./img/5.jpg";
images[5] = "./img/6.jpg";
images[6] = "./img/7.jpg";
images[7] = "./img/8.jpg";
images[8] = "./img/9.jpg";
images[9] = "./img/10.jpg";
images[10] = "./img/11.jpg";
images[11] = "./img/12.jpg";
images[12] = "./img/13.jpg";
images[13] = "./img/14.jpg";
images[14] = "./img/15.jpg";
images[15] = "./img/16.jpg";
images[16] = "./img/17.jpg";
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
