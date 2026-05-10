const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');

let t = 0;

function frame() {
  t += 1;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#101820';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  const x = 480 + Math.cos(t / 45) * 180;
  const y = 270 + Math.sin(t / 35) * 120;

  ctx.fillStyle = '#ffd166';
  ctx.beginPath();
  ctx.arc(x, y, 34, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = '#8ecae6';
  ctx.font = '24px system-ui, sans-serif';
  ctx.fillText('format: godot', 40, 56);
  ctx.fillText('engine_version: 4.3.0', 40, 90);
  ctx.fillText('web_threads: false', 40, 124);

  requestAnimationFrame(frame);
}

frame();
