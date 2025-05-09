#!/usr/bin/nodejs
class sphere {
	constructor (center, radius, shader) {
		this.center = center;
		this.radius = radius;
	}
	overlaps (pos) {
		return require("../lib/common.js").distance(this.center, pos) <= this.radius;
	}
}

module.exports = {sphere};
