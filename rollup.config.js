export default [{
	entry: "main.js",
	format: "cjs",
	plugins: [],
	dest: "dist/bundle.js"
}, {
	entry: "tests/unit/test.js",
	format: "cjs",
	plugins: [
		{
			resolveId(id){
				throw new Error("Unexpected exception");
			}		
		}
	],
	external: id => /bundle/.test(id),
	dest: "dist/tests.js"
}];