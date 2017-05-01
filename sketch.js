var stats;
var outerRadius;
var tubeRadius;
var x;
var y;
var z;
var t;
var c;
var angleX;
var angleY;
var angleZ;
var img;

start();

function preload(){
  img = loadImage('kittens.jpg');
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  x = windowWidth * 0.5;
  y = windowHeight * 0.5;
  noStroke();
  init();
}

function draw(){
  stats.begin();

  background(0);
  translate(-width * 0.5, -height * 0.5, 0);

  push();

  translate(x, y, z);
  rotateX(radians(angleX));
  rotateY(radians(angleY));
  rotateZ(radians(angleZ));

  var dirY = (mouseY / height - 0.5) * 2;
  var dirX = (mouseX / width - 0.5) * 2;
  directionalLight(250, 250, 250, dirX, -dirY, 0.25);

  pointLight(255, 255, 255, mouseX, mouseY, 0);
  specularMaterial(c[0], c[1], c[2]);

  torus(outerRadius, tubeRadius);

  pop();
  
  x += 5 * Math.cos(t);
  z += 1 * Math.sin(t);
  t += 0.01;

  stats.end();
}

function init() {
  addStats();
  addGui();
}

function start() {
  outerRadius = 200;
  tubeRadius = 60;
  x = 0;
  y = 0;
  z = 0;
  t = 0;
  c = [255, 255, 255, 255];
  angleX = 0;
  angleY = 0;
  angleZ = 0;
}

function addStats() {
  stats = new Stats();
  stats.setMode(0);
  document.body.appendChild(stats.domElement);  
}

function addGui() {
  var gui = new dat.GUI();
  gui.add(window, 'outerRadius', 10, 1000);
  gui.add(window, 'tubeRadius', 10, 100);
  gui.add(window, 'angleX', 0, 360);
  gui.add(window, 'angleY', 0, 360);
  gui.add(window, 'angleZ', 0, 360);
  gui.addColor(window, 'c');
}