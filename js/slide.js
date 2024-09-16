var images = ["quinoa-405538.jpg", "sacha.jpg", "quinoa-20.jpg"];

var imageNumber = 0;
var imageLength = images.length - 1;

function changeImage(x) {
    imageNumber += x;
    
    if (imageNumber > imageLength) {
        imageNumber = 0;
    }
    if (imageNumber < 0) {
        imageNumber = imageLength;
    }
    
    document.getElementById("slideshow").src = images[imageNumber];
    
    return false;
}




function autoRun() {
    setInterval("changeImage(1)", 8000);
}