export default {
	input: "main.js",
	plugins: [
		{
			resolveId: function (id, importer) {
				let modulePath = /foo/.test(id) ? "./foo.js" : undefined;
				if (modulePath)
					return "./foo.js";
				
				// if no path was found, null must be returned to keep the plugin chain!
				return null;
			}
		}
	],
	output: {
		file: "dist/bundle.js",
		format: "cjs"
	}
};