// Set the variable dogPic to the HTML element with the id "dog-pic" (the div that contains the image)
let dogPic = document.getElementById("dog-pic")

function viewToggle() {
    // First, check to see if the dogPic element display property is set to "none"
    if (dogPic.style.display === "none") {
        // If it is, then change the display property to "block"
        dogPic.style.display = "block"
    } 
    // Otherwise, if it is currently visible, then set the display property to "none"
    else dogPic.style.display = "none"
}