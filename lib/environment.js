#!/usr/bin/nodejs
class environment {
	constructor (objects, photons, bounding_box) {
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
}

module.exports = {environment};
