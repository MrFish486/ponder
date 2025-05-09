#!/usr/bin/nodejs
class box {
	constructor (corner1, corner2, shader) {
		this.corner1 = corner1;
		this.corner2 = corner2;
		this.shader = shader;
	}
	overlaps (pos) {
		return (pos[0] > this.corner1[0] && pos[1] > this.corner1[1] && pos[2] > this.corner1[2] && pos[0] < this.corner2[0] && pos[1] < this.corner2[1] && pos[2] < this.corner2[2]);
	}
}

module.exports = {box};
