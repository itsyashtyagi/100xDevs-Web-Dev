class Rectangle {
  width = 0;
  height = 0;
  color = "red";
  static type = "the green type";

  constructor(width, height, color) {
    this.width = width;
    this.color = color;
    this.height = height;
  }

  area() {
    const area = this.height * this.width;
    return area;
  }

  paint() {
    console.log(`The color of the rectangle is ${this.color}`);
  }
}

const rect = new Rectangle(12, 5, "green");
console.log(rect.area());
rect.paint();
console.log(Rectangle.type);
