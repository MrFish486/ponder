#!/usr/bin/nodejs
class photon {
	constructor (pos, vel) {
		this.pos = pos;
		this.vel = vel;
	}
	move (environment) {
		let index = environment.overlaps(this.pos[0] + this.vel[0], this.pos[1] + this.vel[1], this.pos[2] * this.vel[2]);
		if (index == -1) {
			console.log("photon move from " + this.pos[0] + "," + this.pos[1] + "," + this.pos[2]);
			this.pos[0] += this.vel[0];
			this.pos[1] += this.vel[1];
			this.pos[2] += this.vel[2];
			console.log("photon move to " + this.pos[0] + "," + this.pos[1] + "," + this.pos[2]);
		} else {
			let res = environment.objects[index].shader.sample(this.vel);
			this.vel = res;
			console.log("photon bounce");
		}
	}
}

module.exports = {photon};
