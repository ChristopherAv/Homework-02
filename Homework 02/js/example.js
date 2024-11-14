var listItems = document.getElementsByTagName('li');                   // All <li> elements

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
var heading = document.querySelector('h2');                        // h2 element
var headingText = heading.firstChild.nodeValue;                    // h2 text
var totalItems = listItems.length;                                 // No. of <li> elements
var newHeading =  headingText + '<span>' + totalItems + '</span>'; // Content


/*  WRITE YOUR CODE BELOW */


// Part1. Hint: Use the listItems object to iterate through the elements of the list

const words = ['fresh figs', 'kale', 'honey'];

for (let i = 0; i < totalItems; i++) {
    
    const itemText = listItems[i].textContent;

    for (let j = 0; j < words.length; j++) {
      
        if (itemText === words[j]) {
           
            listItems[i].className = 'cool'; 
        }
    }
}

// Part2. Hint: Use the heading and newHeading to show the number of items in the shopping list

heading.innerHTML = newHeading;


