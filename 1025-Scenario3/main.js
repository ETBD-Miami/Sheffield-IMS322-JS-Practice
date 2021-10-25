function fontSize(v) {
    
    // The local variable v is the incoming value from the slider
    // We're using this simple math to scale the range from 0–100 to 1–5 
    let scaled = (v/25) + 1

    // We're going to use em units to change the font size, so we're using string concatenation
    // to stick "em" to the end of the scaled value
    let fSize = scaled + "em"

    // Get the text element
    let myText = document.getElementById("my-text")

    // Set the font size of the text element to the new scaled value
    myText.style.fontSize = fSize
}