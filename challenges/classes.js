// 1. Copy and paste your prototype in here and refactor into class syntax.
class CuboidShaper {
  constructor(length, width, height) {
    this.length = length;
    this.width = width;
    this.height = height;
  }
  // I created prototype for calculating the volume of a cuboid here

  volume() {
    return this.length * this.width * this.height;
  }

  // I created prototype for calculating the surface area of a cuboid here
  surfaceArea() {
    return (
      2 *
      (this.length * this.width +
        this.length * this.height +
        this.width * this.height)
    );
  }
}

// I instantiated a Cuboid here
const Cuboid2 = new CuboidShaper(4, 5, 5);
console.log(Cuboid2);

console.log(Cuboid2.volume());
console.log(Cuboid2.surfaceArea());

// Test your volume and surfaceArea methods by uncommenting the logs below:
// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.
class cube extends CuboidShaper {
  constructor(length, width, height) {
    super(length, width, height);
  }
  // I created method for volume of a cube
  cubeVolume() {
    return this.length * this.length * this.length;
  }
//   I created method for surface area of a cube
cubeSurfaceArea (){
    return 6 * (this.length * this.length)
}
}
const cube1 = new cube(5, 6, 7);
console.log(cube1.cubeVolume());
console.log(cube1.cubeSurfaceArea());

