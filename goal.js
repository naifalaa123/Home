document.getElementById("gl-checkBtn").addEventListener("click", function() {
    // Disable the button and show the loading bar
    document.getElementById("gl-checkBtn").disabled = true;
    document.getElementById("gl-result").style.display = "none";
    document.getElementById("gl-loadingBarContainer").style.display = "block";
    document.getElementById("gl-loadingBar").style.width = "0%";

    // Animate the loading bar over 3 seconds
    let progress = 0;
    const loadingBar = document.getElementById("gl-loadingBar");

    const interval = setInterval(function() {
        progress += 2;
        loadingBar.style.width = progress + "%";
        
        if (progress >= 100) {
            clearInterval(interval);
            // After 3 seconds, hide the loading bar and show the result
            setTimeout(function() {
                const result = checkGoal();
                document.getElementById("gl-result").textContent = result;
                document.getElementById("gl-result").style.display = "block";
                document.getElementById("gl-loadingBarContainer").style.display = "none";
                // Enable the button again
                document.getElementById("gl-checkBtn").disabled = false;
            }, 200);
        }
    }, 60); // Update the loading bar every 60 milliseconds
});

// Function to randomly return "Goal" or "No Goal"
function checkGoal() {
    const outcomes = ["Goal", "No Goal"];
    const randomIndex = Math.floor(Math.random() * outcomes.length);
    return outcomes[randomIndex];
}