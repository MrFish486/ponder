#!/usr/bin/nodejs
class camerabox {
	constructor (corner1, corner2, image) {
		this.corner1 = corner1;
		this.corner2 = corner2;
		this.shader = shader;
	}
	tick (pos) {
		if (pos[0] > this.corner1[0] && pos[1] > this.corner1[1] && pos[2] > this.corner1[2] && pos[0] < this.corner2[0] && pos[1] < this.corner2[1] && pos[2] < this.corner2[2]) {
			this.image.set(pos[0] - this.corner1[0], pos[1] - this.corner1[1]);
		}
	}
}

module.exports = {camerabox};
