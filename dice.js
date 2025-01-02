function rollDice() {
    // Show the loading bar
    document.getElementById('dcc-loading-container').style.display = 'block';

    // Set the loading bar width to 0% initially
    document.getElementById('dcc-loading-bar').style.width = '0%';

    // Wait for 3 seconds to simulate loading
    setTimeout(function() {
      // Roll two dice after 3 seconds
      const dice1 = Math.floor(Math.random() * 6) + 1;
      const dice2 = Math.floor(Math.random() * 6) + 1;

      // Update the dice values (without rotation for now)
      const dice1Element = document.getElementById('dcc-dice1');
      const dice2Element = document.getElementById('dcc-dice2');

      // Update the text of the dice
      dice1Element.textContent = dice1;
      dice2Element.textContent = dice2;

      // Calculate and display the sum
      const sum = dice1 + dice2;
      document.getElementById('dcc-result').textContent = `Sum: ${sum}`;

      // Hide the loading bar after the dice are rolled
      document.getElementById('dcc-loading-container').style.display = 'none';

      // Apply the rotation effect after a brief delay
      setTimeout(function() {
        dice1Element.style.animation = 'rotateDice 0.5s ease-in-out';
        dice2Element.style.animation = 'rotateDice 0.5s ease-in-out';

        // Reset animation after it ends so it can be triggered again
        setTimeout(function() {
          dice1Element.style.animation = '';
          dice2Element.style.animation = '';
        }, 500); // Matches the duration of the animation
      }, 100); // Brief delay before rotation (to make sure values change first)
      
    }, 3000); // 3000 milliseconds = 3 seconds
  }