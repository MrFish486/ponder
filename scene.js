const imports = require("./imports.js");

var output = new imports.image.image(100, 100);
var shader = new imports.shader.shader(1);
var cube = new imports.primitives.box.box([0, 0, 0], [10, 10, 10], shader);
var cam = new imports.camerabox.camerabox([-10,0,0], [-9,10,10], output);
var bounding_box = new imports.primitives.box.box([-100, -100, -100], [100, 100, 100]);
var env = new imports.environment.environment(cam, [cube], [], bounding_box);
var light = new imports.primitives.light_source.light_source([15, 15, 15], 10000, env);

env.render(1000000);

console.log(output);
