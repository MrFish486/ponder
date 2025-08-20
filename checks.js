const imports = require("./imports.js");

let cube = new imports.primitives.box.box([-10,-10,-10], [10,10,10]);

console.log(cube.overlaps([-9,-9,-9]));
