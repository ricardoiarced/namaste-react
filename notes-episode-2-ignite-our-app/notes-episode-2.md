# Namaste React - Episode 2

## Table of contents

- [Theory](#theory)
    - [Arrow functions](#arrow-functions)

## Theory

### Arrow functions

**Arrow function benefits:**

1. Aesthetics: When having to return just one thing, you can simplify a lot the function.

2. Binding with this keyword: When you use the this keyword inside a method and you return it, and then you call the object with the method attached to it, you will get the Window object (The global object). We can say that it is bound to the surrounding scope where the function expression is. It is referring to the window object.

**Example:**
```js
const me = {
    name: 'Ricardo',
    hello() => {
        return this;
    }
}

me.hello(); // Window object {}
```
We can use them in callback functions

### What do you need to do before pushing your code to production?

Basically you will need to do bundling, code splitting, chunking, image optimization, removing comments, minifying the code, compressing the code; you'll need to do a lot of things.

**When you create a react app it has all the superpowers, so, it is already ignited, it creates schedule for you, it gives you a basic react app which is already production ready.**

### What is NPM?

Npm is not node package manager but anything else, NPM does not have a full form. NPM manages packages behind the scenes but does not stand for Node Package Manager. NPM is a standard repository for all the packages, any package you need to include in your project you can use NPM. All the packages are hosted there.

### What can we do to get NPM into our project?

We type in the terminal: npm init
So, now we can start configuring some things about our project, and once we have finished, we can see that a new file has been added to our project, and it is called 'package.json.'

### What is a package.json file?

Is basically a configuration for NPM

### Why do we need a package.json file?

NPM will manage all the packages that we'll install in our system, and sometimes these packages are also known as dependencies, so dependencies and packages are kind of the same thing. NPM will take care of the versions of all the packages inside our package.json file.

### What is the most important package that we need to install in our project?

It is a bundler. When we have js, CSS and HTML files our whole code needs to be bundle together, it needs to be cashed, it needs to be minified, it needs to be compressed, it needs to be clean before we can send the project to production. A bundler helps to do all those things.

When we use the create react app behind the scenes uses webpack.