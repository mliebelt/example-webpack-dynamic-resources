# Using Inline Resources

This example demonstrates how to build and use inline resources by using the `url-loader`.

I don't think that the output has any value for the resources.

The examples then are:

* Have the library colacated to the HTML source file.
* Have the library in a different directory to the HTML sources, and loaded by a relative link.

## Summary

The approach works well, and may be best, if you have not too many / too big resources. It may be not the right approach, if you have 100s of resources, so that the resulting file will be huge.