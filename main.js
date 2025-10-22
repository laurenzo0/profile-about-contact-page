     // --- Time (ms) implementation --
  const timeEl = document.querySelector('[data-testid="test-user-time"]');

  function setNowMs() {
    timeEl.textContent = String(Date.now());
  }
  setNowMs();
  // update every 1000ms to keep it fresh
  setInterval(setNowMs, 1000);

 