// Function to generate a random hex color code
const randomHexColorCode = function() {
    // Generate a random number, convert it to hexadecimal, and return the first 6 characters as a hex color code
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    return '#' + n.slice(0, 6); // Return the hex color code
};

// Variable to store the interval ID for the color change interval
let inetvalid;

// Function to start changing the background color every 1 second
const startchangcolor = function() {
    // Check if an interval is already running
    if (!inetvalid) {
        // Start a new interval if one is not already running, and call changeBGcolor every 1000 milliseconds (1 second)
        inetvalid = setInterval(changeBGcolor, 1000);
        alert("Color changing started"); // Log the action for debugging purposes
    }

    // Inner function to change the background color of the webpage
    function changeBGcolor() {
        // Change the body's background color to a randomly generated hex color code
        document.body.style.backgroundColor = randomHexColorCode();
    }
};

// Function to stop changing the background color
const stopchangcolor = function() {
    // Check if an interval is running
    if (inetvalid) {
        clearInterval(inetvalid); // Clear the interval to stop the background color from changing
        inetvalid = null; // Reset the interval ID to null so the interval can be restarted if needed
        alert("Color changing stopped"); // Log the action for debugging purposes
    }
};

// Attach event listeners to the start and stop buttons
// When the start button is clicked, it will trigger the startchangcolor function
document.querySelector('#start').addEventListener('click', startchangcolor);

// When the stop button is clicked, it will trigger the stopchangcolor function
document.querySelector('#stop').addEventListener('click', stopchangcolor);
