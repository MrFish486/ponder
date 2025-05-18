#!/usr/bin/nodejs
class image {
	constructor (width, height, fill) {
		if (fill > 255 || fill < 0) {
			throw("Fill out of bounds");
			return;
		}
		fill = fill || 0;
		var data = [];
		for (let x = 0; x < width; x ++) {
			data.push([]);
			for (let y = 0; y < height; y ++) {
				data[x].push(fill);
			}
		}
		this.data = data;
		this.width = width;
		this.height = height;
	}
	set (x, y) {
		if (x > this.width || x < 0 || y > this.height || y < 0) {
			throw("Tried to set out of bounds");
			return -1;
		} else {
			if (this.data[x][y] != 255) {
				this.data[x][y] ++;
			}
		}
	}
}

module.exports = {image};
