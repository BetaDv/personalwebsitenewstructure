const path = require('path');

module.exports = {
	mode: 'none',
	entry: './index.js',
	output: {
		path: path.join(__dirname, '_site'),
		publicPath: '/',
		filename: 'bundle.js',
	},
	target: 'node',
};
