class Circle {

  constructor(radius) {
    this._radius = radius
    this._PI = Math.PI
  }

  set diameter(diameter) {
    this._radius = diameter / 2;
  }

  set area(area) {
    this._radius = Math.sqrt(area / this._PI)
  }
 
  set circumference(circumference) {
    this._radius = (circumference / this._PI)/2
  }

  get radius() {
    return this._radius;
  }

  get circumference() {
    return this._PI * (this._radius * 2)
  }

  get diameter() {
    return this._radius * 2;
  }

  get area() {
    return this._PI * (this._radius ** 2)
  }
}