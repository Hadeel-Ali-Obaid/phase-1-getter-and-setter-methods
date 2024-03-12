// Add your Circle class here
class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  get diameter() {
    return this.radius * 2;
  }
  get circumference() {
    return this.diameter * Math.PI;
  }
  get area() {
    return this.radius * this.radius * Math.PI;
  }
  set area(newArea) {
    if (newArea > 0) {
      this.radius = Math.sqrt(newArea / Math.PI);
    } else {
      console.warn("Area cannot be less than 0");
    }
  }
  set circumference(newCircumference) {
    if (newCircumference > 0) {
    this.diameter = newCircumference / Math.PI;
} else {
    console.warn("Circumference cannot be less than 0");
  }
  }
  set diameter(newDiameter) {
    if (newDiameter > 0) {
    this.radius = newDiameter / 2;
} else {
    console.warn("Diameter cannot be less than 0");
  }
  }
}
