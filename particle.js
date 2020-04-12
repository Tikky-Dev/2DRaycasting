class Particle {
  constructor() {
    this.position = createVector(width/2, height/2);
    this.rays = [];
    for(let angle = 0; angle < 360; angle+=1){
      this.rays.push(new Ray(this.position, radians(angle)));
    }
  }

  update(x, y){
    this.position.set(x, y);
  }

  pointsAt(boundarys){
    for (let ray of this.rays) {
    let closest = null;
    let record = Infinity;
      for(let boundary of boundarys){
        let point = ray.cast(boundary);
        if (point) {
          let distance = p5.Vector.dist(this.position, point);
          if(distance < record){
              record = distance;
              closest = point;
          }
        }
      }
      if(closest){
        line(this.position.x, this.position.y, closest.x, closest.y);
      }
    }

  }

  show(){
    fill(255);
    ellipse(this.position.x, this.position.y , 8);
    for (let ray of this.rays) {
      ray.show();
    }
  }
}
