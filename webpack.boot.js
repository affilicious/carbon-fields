var path = require('path');
var webpack = require('webpack');

module.exports = {
	// These are the "entry points" to our application.
	// This means they will be the "root" imports that are included in JS bundle.
	entry: [
		'babel-polyfill',
		'./assets/react/registrar.js',
		'./assets/react/bootstrap.js'
	],

	// Setup the output.
	output: {
		// The output directory.
		path: 'assets/',

		// This is the JS bundle containing code from the entry points.
		filename: 'carbon.bootstrap.js',
	},

	// Setup the transformation of the modules.
	module: {
		loaders: [
			// Process JS with Babel.
			{
				test: /\.js$/,
				loader: 'babel',
				query: {
					// Enable caching results for faster rebuilds.
					cacheDirectory: true
				}
			}
		]
	},

	// Add aliases to allow easier importing of the modules.
	resolve: {
		root: __dirname,
		alias: {
			'lib': 'assets/react/lib',
			'containers': 'assets/react/containers',
			'sidebars': 'assets/react/sidebars',
			'fields': 'assets/react/fields',
			'store': 'assets/react/store.js'
		}
	},

	// Some of our dependencies are already loaded by WordPress.
	// So let's use them.
	externals: {
		'jquery': 'jQuery'
	},

	// Setup the source maps.
	devtool: 'cheap-module-eval-source-map',

	// Setup the plugins.
	plugins: [
		// Use the vendor DLL file.
		new webpack.DllReferencePlugin({
			context: __dirname,
			sourceType: 'this',
			manifest: require('./assets/carbon.vendor.json'),
		}),

		// Use the app DLL file.
		new webpack.DllReferencePlugin({
			context: __dirname,
			sourceType: 'this',
			manifest: require('./assets/carbon.app.json'),
		})
	],
};
