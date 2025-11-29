const canvas = document.getElementById('neural-bg');
const ctx = canvas.getContext('2d');

let w, h;
function resize() {
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
}
resize();
window.addEventListener('resize', resize);

const nodes = Array.from({ length: 40 }).map(() => ({
  x: Math.random() * w,
  y: Math.random() * h,
  vx: (Math.random() - 0.5) * 0.8,
  vy: (Math.random() - 0.5) * 0.8
}));

function animate() {
  ctx.clearRect(0, 0, w, h);
  ctx.fillStyle = 'rgba(10,10,15,0.4)';
  ctx.fillRect(0, 0, w, h);
  ctx.strokeStyle = 'rgba(0,255,255,0.08)';

  nodes.forEach((n, i) => {
    n.x += n.vx;
    n.y += n.vy;

    if (n.x < 0 || n.x > w) n.vx *= -1;
    if (n.y < 0 || n.y > h) n.vy *= -1;

    for (let j = i + 1; j < nodes.length; j++) {
      const m = nodes[j];
      const dx = n.x - m.x;
      const dy = n.y - m.y;
      const dist = Math.hypot(dx, dy);
      if (dist < 150) {
        ctx.beginPath();
        ctx.moveTo(n.x, n.y);
        ctx.lineTo(m.x, m.y);
        ctx.stroke();
      }
    }
  });

  requestAnimationFrame(animate);
}

animate();
// Show success message after submission
document.querySelector('.join-form').addEventListener('submit', e => {
  setTimeout(() => {
    document.getElementById('successMsg').style.display = 'block';
  }, 1000);
});
