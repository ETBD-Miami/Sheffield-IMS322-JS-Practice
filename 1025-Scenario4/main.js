// Set the myList variable to the currently empty list element
let myList = document.getElementById("my-list")

function makeList(v) {
    // We're going to use a for loop to add as many list items as needed to match the input quantity
    for (let i=0; i<v; i++) {
        let item = document.createElement("LI");                // Make a new <li> element that will go inside our list
        let textnode = document.createTextNode("Item " + (i+1));   // Create a text node, we're adding 1 to i just so the first item starts at 1 instead of 0
        item.appendChild(textnode);                             // Append the text node to the <li> item
        myList.appendChild(item);                               // Append the list item to our list
    }
}

// More information about appending list items here: https://www.w3schools.com/jsref/met_node_appendchild.asp