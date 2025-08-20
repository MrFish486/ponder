#!/usr/bin/nodejs
class environment {
	constructor (camera, objects, photons, bounding_box) {
		this.camera = camera
		this.objects = objects;
		this.photons = photons;
		this.bounding_box = bounding_box;
	}
	overlaps (pos) {
		for (let i = 0; i < this.objects.length; i ++) {
			if (this.objects[i].overlaps(pos)) {
				return i;
			}
		}
		return -1;
	}
	remove_dead_photons () {
		for (let i = 0; i < this.photons.length; i ++) {
			if (!this.bounding_box.overlaps(this.photons[i].pos)) {
				this.photons.splice(this.photons.indexOf(this.photons[i]), 1);
			}
		}
	}
	render (iterations) {
		for (let I = 0; I < iterations; I ++) {
			if (this.photons.length == 0) {
				break;
			}
			console.log(`${this.photons.length} photons remain.`);
			for (let l = 0; l < this.photons.length; l ++) {
				this.photons[l].move(this);
				this.camera.tick(this.photons[l].pos);
			}
			this.remove_dead_photons();
		}
	}
}

module.exports = {environment};
