#!/usr/bin/nodejs
class photon {
	constructor (pos, vel) {
		this.pos = pos;
		this.vel = vel;
	}
	move (environment) {
		let index = environment.overlaps(this.pos[0] + this.vel[0], this.pos[1] + this.vel[1], this.pos[2] * this.vel[2]);
		if (index == -1) {
			this.pos[0] += this.vel[0];
			this.pos[1] += this.vel[1];
			this.pos[2] += this.vel[2];
		} else {
			let res = environment.objects[index].shader.sample(this.vel);
			this.vel = res;
		}
	}
}

module.exports = {photon};
