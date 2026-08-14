let particles = [];
let hueBase;
const N = 900;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100, 100);
  for (let i = 0; i < N; i++) {
    particles.push({ x: random(width), y: random(height) });
  }
  background(13, 13, 20);
  hueBase = random(360);
}

function draw() {
  noStroke();
  for (let pt of particles) {
    let angle = noise(pt.x * 0.0018, pt.y * 0.0018) * TWO_PI * 2;
    pt.x += cos(angle) * 1.4;
    pt.y += sin(angle) * 1.4;
    let h = (hueBase + dist(pt.x, pt.y, width / 2, height / 2) * 0.15) % 360;
    fill(h, 70, 95, 12);
    circle(pt.x, pt.y, 1.6);
    if (pt.x < 0 || pt.x > width || pt.y < 0 || pt.y > height) {
      pt.x = random(width);
      pt.y = random(height);
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
