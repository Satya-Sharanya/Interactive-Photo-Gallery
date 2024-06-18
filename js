function upDate(previewPic) {
	/*  changed the url for the background image of the div with the id = "image" 
    to the source file of the preview image
    
     Changed the text  of the div with the id = "image" 
    to the alt text of the preview image 
    */
	document.getElementById('image').style.backgroundImage = "url('" + previewPic.src + "')";
	document.getElementById('image').innerHTML = previewPic.alt;
	console.log("Image updated on mouseover/focus");
}

function unDo() {
 /* Updated the url for the background image of the div with the id = "image" 
    back to the orginal-image.  used the css code to see what that original URL was
    
   Changed the text  of the div with the id = "image" 
    back to the original text.  used the html code to see what that original text was
    */
	document.getElementById('image').innerHTML = "Hover over an image below to display here.";
	document.getElementById('image').style.backgroundImage = "url('')";
	console.log("Image reverted on mouseout/blur");
}

window.onload = function() {
	addTabFocus();
	console.log("onload event triggered");
};

function addTabFocus() {
	var images = document.querySelectorAll('.preview');
	for (var i = 0; i < images.length; i++) {
		images[i].setAttribute('tabindex', '0');
	}
	console.log("Tabindex added to images for keyboard accessibility");
}
