function showModal(planName, price, features, walletAddress) {
    document.getElementById('modalHeader').innerText = planName;
    document.getElementById('modalPrice').innerText = price;
    document.getElementById('modalFeatures').innerText = features;
    document.getElementById('walletAddress').innerText = walletAddress;
    document.getElementById('modal').style.display = 'flex';
  }


  async function copyToClipboard() {
    const walletAddress = document.getElementById('walletAddress').innerText;
  
    // Check if Clipboard API is supported
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(walletAddress);
        showSuccessMessage();
      } catch (err) {
        console.error('Error copying text: ', err);
        alert('Clipboard access denied. Try again!');
      }
    } else {
      // Fallback: For older browsers that don't support the Clipboard API
      const textArea = document.createElement('textarea');
      textArea.value = walletAddress;
      document.body.appendChild(textArea);
      textArea.select();
      const successful = document.execCommand('copy');
      document.body.removeChild(textArea);
  
      if (successful) {
        showSuccessMessage();
      } else {
        alert('Clipboard copy failed. Try again!');
      }
    }
  }
  
  function showSuccessMessage() {
    const successMessage = document.getElementById('successMessage');
    successMessage.style.display = 'block';
    setTimeout(() => {
      successMessage.style.display = 'none';
    }, 3000);
  }
  





  // Close the modal when clicking outside of the modal content
  window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  }