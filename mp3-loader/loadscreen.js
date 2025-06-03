(function () {
  const loader = document.createElement('div');
  loader.id = 'loader';
  loader.innerHTML = `
    <style>
      #loader {
        position: fixed;
        top: 0; left: 0;
        width: 100%; height: 100%;
        background: #111;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        z-index: 9999;
        font-family: sans-serif;
      }
      #progressBarContainer {
        width: 80%;
        background: #333;
        border-radius: 10px;
        overflow: hidden;
        height: 20px;
        margin-top: 20px;
      }
      #progressBar {
        height: 100%;
        width: 0%;
        background: limegreen;
        transition: width 0.3s ease;
      }
    </style>
    <h1>Loading...</h1>
    <div id="progressBarContainer">
      <div id="progressBar"></div>
    </div>
  `;

  document.body.style.overflow = 'hidden';
  document.body.appendChild(loader);

  const progressBar = loader.querySelector('#progressBar');

  document.onreadystatechange = () => {
    if (document.readyState === 'interactive') {
      progressBar.style.width = '40%';
    } else if (document.readyState === 'complete') {
      progressBar.style.width = '90%';
    }
  };

  window.addEventListener('load', () => {
    // Simulate a 3-second loading delay AFTER page is fully loaded
    progressBar.style.width = '100%';
    setTimeout(() => {
      loader.remove();
      document.body.style.overflow = 'auto';
    }, 3000); // <-- adjust delay here if needed
  });
})();
