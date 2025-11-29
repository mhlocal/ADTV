document.querySelectorAll('a, button, [data-tv-focus]').forEach(el => {
  if (!el.hasAttribute('tabindex')) el.setAttribute('tabindex', '0')
});

window.addEventListener('keydown', function(e) {
  switch(e.key) {
    case 'ArrowUp':
    case 'ArrowDown':
    case 'ArrowLeft':
    case 'ArrowRight':
      break;
    case 'Enter':
      const el = document.activeElement;
      if (el) el.click();
      break;
    case 'MediaPlayPause':
      const player = document.querySelector('video');
      if (player) {
        if (player.paused) player.play(); else player.pause();
      }
      break;
  }
});
