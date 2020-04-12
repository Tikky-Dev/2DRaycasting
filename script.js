let boundarys = [];
let ray;
let particle;

// moving without a mouse \/
let xoff=0;
let yoff=10000;
// moving without a mouse /\

let toggle = false;

function setup(){
  createCanvas(windowWidth, windowHeight * 0.95);
  for (let i = 0; i < 7; i++) {
    let x1 = random(width);
    let y1 = random(height);
    let x2 = random(width);
    let y2 = random(height);
    boundarys[i] = new Boundary(x1,y1, x2,y2);
  }
// creating room walls
  boundarys.push(new Boundary(0,0,width,0));
  boundarys.push(new Boundary(width,0,width,height));
  boundarys.push(new Boundary(width,height,0,height));
  boundarys.push(new Boundary(0,height,0,0));

  particle = new Particle();

  // creating button switch to tgggle on and off mouse control
  let button = createButton("Toggle mouse control");
  button.mousePressed(mouseToggle);
}

function mouseToggle(){
  if(toggle == false){
    toggle = true;
  }else {
    toggle = false;
  }
}

function draw(){
  background(0);
  for (let boundary of boundarys) {
    boundary.show();
  }

  if (toggle == true) {
    particle.update(mouseX, mouseY);//moving with a mouse
  }else {
    particle.update(noise(xoff) * width, noise(yoff) * height);//moving without a mouse
  }

  particle.show();
  particle.pointsAt(boundarys);

  xoff += 0.001;
  yoff += 0.001;
}
