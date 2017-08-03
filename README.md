# rollupIssue
Demonstrate an issue with rollup

### Installation
Clone this repository and run the command :

```
npm install
```

### Build the bundle
To create the bundle run the command :

```
npm run build
```

### Issue
With several configurations in the rollup.config.js file, if one build fails then no bundle files is created.
In this repository, we create a bundle for the library and a bundle for the tests. The creation of bundle file for tests "dist/tests.js" fails but the creation of bundle file "dist/bundle.js" succeeds. But in output the file "dist/bundle.js" doesn't exist