#!/usr/bin/nodejs
class light_source {
	constructor (pos, stren, env) {
		let photonlib = require("../lib/photon.js");
		for (let i = 0; i < stren; i ++) {
			let photon = new photonlib.photon(pos, [Math.random(), Math.random(), Math.random()])
			env.photons.push(photon);
		}
	}
}

module.exports = {light_source};
