// Pluie de caractères en arrière-plan. Désactivée si l'utilisateur préfère réduire les animations.
(() => {
  const c = document.getElementById('rain');
  if (!c || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const x = c.getContext('2d');
  const chars = '01アイウエオカキクケコ{}<>/;$#';
  let cols, drops;
  function size() {
    c.width = innerWidth;
    c.height = innerHeight;
    cols = Math.floor(c.width / 16);
    drops = Array.from({ length: cols }, () => Math.random() * -50);
  }
  size();
  addEventListener('resize', size);
  setInterval(() => {
    x.fillStyle = 'rgba(5,6,13,.12)';
    x.fillRect(0, 0, c.width, c.height);
    x.fillStyle = '#39ff14';
    x.font = '16px monospace';
    drops.forEach((y, i) => {
      x.fillText(chars[(Math.random() * chars.length) | 0], i * 16, y * 16);
      drops[i] = y * 16 > c.height && Math.random() > 0.975 ? 0 : y + 1;
    });
  }, 60);
})();
