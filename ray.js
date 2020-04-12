class Ray {
  constructor(position, angle) {
    this.position = position;
    this.direction = p5.Vector.fromAngle(angle);
  }

  setDirection(x, y){
    this.direction.x = x - this.position.x;
    this.direction.y = y - this.position.y;
    this.direction.normalize();

  }

  show(){
    stroke(255, 255, 204);
    push();
    translate(this.position.x, this.position.y);
    line(0,0, this.direction.x * 10, this.direction.y * 10);
    pop();
  }

  cast(boundary){
    let x1 = boundary.a.x;
    let y1 = boundary.a.y;
    let x2 = boundary.b.x;
    let y2 = boundary.b.y;

    let x3 = this.position.x;
    let y3 = this.position.y;
    let x4 = this.position.x + this.direction.x;
    let y4 = this.position.y + this.direction.y;

    let denominator = ((x1 - x2) * (y3 - y4)) - ((y1 - y2) * (x3 - x4));
    if(denominator == 0 ){
      return;
    }

    let tNumerator = ((x1 - x3) * (y3 - y4)) - ((y1 - y3) * (x3 - x4));
    let t = tNumerator / denominator;

    let uNumerator = ((x1 - x2) * (y1 - y3)) - ((y1 - y2) * (x1 - x3));
    let u = - uNumerator / denominator;

    if (t > 0 && t < 1 && u > 0) {
      let pt = createVector();
      pt.x = (x1  + t * (x2 - x1));
      pt.y = (y1  + t * (y2 - y1));
      return pt;
    }else {
      return;
    }
  }
}
