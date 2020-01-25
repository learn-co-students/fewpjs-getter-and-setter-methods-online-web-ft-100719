class Circle {
  constructor(radius) {
    this._radius = radius;
  }

  get radius() {
    return this._radius;
  }

  set radius(radius) {
    this._radius = radius;
  }

  get diameter() {
    return this._radius * 2;
  }

  get circumference() {
    return this.diameter * 3.1416;
  }

  get area() {
    return this._radius ** 2 * 3.1416;
  }

  set diameter(diameter) {
    this._radius = diameter / 2;
  }

  set circumference(circumference) {
    this._radius = circumference / (2 * 3.1416);
  }
}