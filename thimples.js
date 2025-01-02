document.getElementById('playButton').addEventListener('click', function() {
    // Reset all cups to the initial light gray color
    const cups = document.querySelectorAll('.cup');
    cups.forEach(cup => {
        cup.style.backgroundColor = 'lightgray';
    });

    // Show the progress bar
    const progressBar = document.getElementById('progressBar');
    const progressContainer = document.querySelector('.progress-container');
    progressContainer.style.display = 'block';
    let width = 0;

    // Progress bar animation (3 seconds)
    const interval = setInterval(() => {
        if (width >= 100) {
            clearInterval(interval);
            // After the progress bar reaches 100%, randomly select and change a cup color
            const randomIndex = Math.floor(Math.random() * cups.length);
            const randomCup = cups[randomIndex];
            randomCup.style.backgroundColor = 'black';
            // Hide the progress bar after selection
            progressContainer.style.display = 'none';
        } else {
            width++;
            progressBar.style.width = width + '%';
        }
    }, 30); // 30ms interval for smooth progress bar fill
});