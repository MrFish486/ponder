#!/usr/bin/nodejs
class photon {
	constructor (pos, vel) {
		this.pos = pos;
		this.vel = vel;
	}
	move (environment) {
		if (environment.overlaps(this.pos[0] + this.vel[0], this.pos[1] + this.vel[1], this.pos[2] * this.vel[2]) != -1) {
			this.pos[0] += this.vel[0];
			this.pos[1] += this.vel[1];
			this.pos[2] += this.vel[2];
		} else {
			this.vel += environment.overlaps(this.pos[0] + this.vel[0], this.pos[1] + this.vel[1], this.pos[2] * this.vel[2]).shader.sample(this.vel);
		}
	}
}

module.exports = {photon};
