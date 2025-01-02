function changeApple() {
    // Reset the apples and loading bar
    const apples = document.querySelectorAll('.apl-apple');
    const loadingBar = document.getElementById('apl-loading-bar');

    apples.forEach(apple => {
        apple.classList.remove('apl-scary-face');
        apple.textContent = '🍎';
    });

    loadingBar.style.width = '0%'; // Reset loading bar to 0%

    // Incrementally fill the loading bar over 3 seconds (3000ms)
    let progress = 0;
    const interval = setInterval(() => {
        progress += 1;
        loadingBar.style.width = `${progress}%`;
        if (progress === 100) {
            clearInterval(interval); // Stop the interval once the bar is full
            chooseRandomApple(apples); // Once bar is full, change an apple
        }
    }, 30); // Increment the loading bar every 30ms

}

function chooseRandomApple(apples) {
    // After loading, choose a random apple and change it to a scary face
    const randomIndex = Math.floor(Math.random() * apples.length);
    apples[randomIndex].classList.add('apl-scary-face');
    apples[randomIndex].textContent = '😈'; // Scary face emoji
}