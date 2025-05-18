#!/usr/bin/nodejs
common      = require("./lib/common.js");
console.log("Common lib loaded");
camerabox   = require("./lib/camerabox.js");
console.log("Camerabox loaded");
environment = require("./lib/environment.js");
console.log("Environment loaded");
image       = require("./lib/image.js");
console.log("Image loaded");
photon      = require("./lib/photon.js");
console.log("Photon loaded");
shader      = require("./lib/shader.js");
console.log("Shader loaded");
primitives  = {"box" : require("./primitives/box.js"), "sphere" : require("./primitives/sphere.js"), "light_source" : require("./primitives/light_source.js")};
console.log("Primitives loaded");

module.exports = {common, camerabox, environment, image, photon, shader, primitives};
