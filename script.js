// Wait for the DOM to fully load before running the script
document.addEventListener("DOMContentLoaded", function() {
    
    // Log a message to the console to prove JS is connected
    console.log("Welcome to the Cloud Computing Lab website! JavaScript is running.");

    // Add interactivity to the button on the Contact page (if it exists)
    const helloButton = document.getElementById("hello-btn");
    
    if (helloButton) {
        helloButton.addEventListener("click", function() {
            alert("Hello from our group! Thanks for checking out our Cloud Computing project.");
        });
    }
});