export default class Point {
  constructor(index, x, y) {
    this.x = x;
    this.y = y;
    this.fixedY = y;
    this.speed = 0.08;
    this.current = index;
    this.max = Math.random() * 80 + 100;
  }

  update = () => {
    this.current += this.speed;
    this.y = this.fixedY + Math.sin(this.current) * this.max;
  };
}
