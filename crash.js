// Function to generate the random number
function generateRandomNumber() {
    let number;

    // Disable the Start button during loading
    const startButton = document.getElementById('startButton');
    startButton.disabled = true;

    // Show the loading bar and message
    document.getElementById('loading').style.display = 'block';
    document.getElementById('result').innerText = 'Checking Plane ...';
    document.getElementById('loadingBar').style.width = '0%';
    document.querySelector('.loading-bar-container').style.display = 'block';

    // Weighted distribution based on the given percentages:
    const randomValue = Math.random();

    if (randomValue < 0.75) {
        // 75% chance for numbers between 0.1 and 3
        number = (Math.random() * 2.9) + 0.1;  // Random number between 0.1 and 3
    } else if (randomValue < 0.95) {
        // 20% chance for numbers between 3 and 5
        number = (Math.random() * 2) + 3;  // Random number between 3 and 5
    } else if (randomValue < 0.96) {
        // 1% chance for numbers between 5 and 11
        number = (Math.random() * 6) + 5;  // Random number between 5 and 11
    } else if (randomValue < 0.99) {
        // 3% chance for numbers between 11 and 20
        number = (Math.random() * 9) + 11;  // Random number between 11 and 20
    } else {
        // 1% chance for numbers between 20 and 30
        number = (Math.random() * 10) + 20;  // Random number between 20 and 30
    }

    // Animate the loading bar
    let progress = 0;
    let interval = setInterval(() => {
        progress += 1;
        document.getElementById('loadingBar').style.width = `${progress}%`;
        if (progress >= 100) {
            clearInterval(interval);
        }
    }, 30); // Increase the width every 30ms

    // Make the airplane fly at the same time as the loading bar
    const airplane = document.getElementById('airplane');
    const explosion = document.getElementById('explosion');
    airplane.style.display = 'block'; // Make the airplane visible
    airplane.style.animation = 'airplaneFly 3s linear forwards'; // Start airplane animation
    explosion.style.display = 'none'; // Hide explosion initially

    // Delay the result for 3 seconds using setTimeout
    setTimeout(() => {
        // Re-enable the Start button after 3 seconds
        startButton.disabled = false;
        
        document.getElementById('loading').style.display = 'none';
        document.getElementById('result').innerText = `Take your winnings brfore: ${number.toFixed(2)}`;

        // Show the explosion after the airplane reaches the end
        explosion.style.display = 'block'; // Show explosion
        airplane.style.display = 'none';  // Hide the airplane after explosion

        // Trigger explosion effect after the airplane finishes flying
        setTimeout(() => {
            explosion.style.animation = 'explosionEffect 1s ease forwards'; // Trigger explosion animation
        }, 300); // Wait 300ms to trigger explosion after airplane finishes
    }, 3000); // 3 seconds delay before showing the number
}

// Add event listener to the start button
document.getElementById('startButton').addEventListener('click', generateRandomNumber);