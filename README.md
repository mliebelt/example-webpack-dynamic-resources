# In a Nutshell

This example library tries to show the problem (and hopefully later the solution) how to create a library with Webpack, that has inlined CSS, that references static resources like images. I raised the question how to do that originally on [Stackoverflow](https://stackoverflow.com/questions/62159936/using-webpack-and-publicpath-for-static-resources) and got the recommendation to provide a repository to show the problem. The original problem came from [PgnViewerJS](https://github.com/mliebelt/PgnViewerJS) which was lately migrated to Webpack.

To show this, there are some example directories available, to show the problem.

To regenerate it, you have to do the following:

* Go to one of the modules.
* Do the steps
  * `npm install`
  * `npm run-script build`
  * `npm run-script examples`: populates the examples directories
  * `npm run-script run1` to run the exam1 http-server
  * Go to the URL, and use your browser developer tools to see if the resources are loaded and where they come from.
  
## Modules

I have copied the content completely, because the library that I produce does not change. The modules I have created have the following meaning:

* `inline-resources`: The resources are contained in the library file (compare the size).
* `file-resources`: Working solution that holds the assets as files in a directory that may be specified at runtime.
* `public-path-resources`: Not working examples that tries to use the variable `__webpack_public_path__` instead.
