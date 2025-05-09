#!/usr/bin/nodejs
class light_source {
	constructor (pos, stren, env) {
		for (let i = 0; i < stren; i ++) {
			env.photons.push(new require("./lib/photon.js").photon(pos, [Math.random(), Math.random(), Math.random()]));
		}
	}
}

module.exports = {light_source};
