#!/usr/bin/nodejs
distance = (pos1, pos2) => {
	var dx = pos1[0] - pos2[0];
	var dy = pos1[1] - pos2[1];
	var dz = pos1[2] - pos2[2];
	return Math.sqrt(dx * dx + dy * dy + dz * dz);
}

module.exports = {distance};
