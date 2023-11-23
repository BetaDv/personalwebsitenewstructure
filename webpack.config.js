const path = require('path');

module.exports = {
	mode: 'none',
	entry: './index.js',
	output: {
		path: path.join(__dirname, 'dist'),
		publicPath: '/assets',
		filename: 'index.js',
	},
	target: 'node',
};
