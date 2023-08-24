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

Is basically a configuration file for NPM where it keeps track of what versions of our packages are installed into our system.

### Why do we need a package.json file?

NPM will manage all the packages that we'll install in our system, and sometimes these packages are also known as dependencies, so dependencies and packages are kind of the same thing. NPM will take care of the versions of all the packages inside our package.json file.

### What is the most important package that we need to install in our project?

It is a bundler. When we have js, CSS and HTML files our whole code needs to be bundle together, it needs to be cashed, it needs to be minified, it needs to be compressed, it needs to be clean before we can send the project to production. A bundler helps to do all those things.

When we use the create react app behind the scenes uses webpack.

### What kind of dependencies an app can have?

1. Dev dependencies: Are required for fevelopment phase. When we are developing our app, then we required those development dependencies.

2. Normal dependencies: Are used in production, and are required for your application to run properly.

### How can we install parcel in our project as a dev dependency?

**By typing: npm install -D parcel**

### What is the diference between the caret (^) and tilde (~) symbol inside of our package.json file?

```json
{
      "devDependencies": {
    "parcel": "^2.9.3"
  }
}
```

If it were to be released another version of Parcel tomorrow, let's say 2.9.4, Parcel would get updated automatically to that version which is the new minor version (second digit of version) but major version updates will not be automatically installed to avoid compatibility issues (The third digit is refering to major versions).

```json
{
      "devDependencies": {
    "parcel": "~2.9.3"
  }
}
```

If we have a tilde instead of a caret, parcel only would get updated just for patch versions which is the third digit of the version. If in the future is a new version like 3.0.0 it couldn't be updated.

### What is safe to put? The caret or the tilde symbol?

It is safe to put the caret symbol because it is ok to update minor versions but not major versions, to avoid compatibility issues. It might break your app if you install a major version because it comes with a lot of changes.

### What is the package-lock.json?

When we installed Parcel, now in our project we have a file called package-lock.json. And package-lock.json keeps track of all dependencies exact versions that have been installed. So it logs the version that was installed first and keeps a record of it.

### You might have heard of why your project is running locally but not in production?

We have inside the package-lock.json file something like this:

```json
    "node_modules/@parcel/bundler-default": {
          "version": "2.9.3",
          "resolved": "https://registry.npmjs.org/@parcel/bundler-default/-/bundler-default-2.9.3.tgz",
          "integrity": "sha512-JjJK8dq39/UO/MWI/4SCbB1t/qgpQRFnFDetAAAezQ8oN++b24u1fkMDa/xqQGjbuPmGeTds5zxGgYs7id7PYg==",
          "dev": true,
          "dependencies": {
            "@parcel/diagnostic": "2.9.3",
            "@parcel/graph": "2.9.3",
            "@parcel/hash": "2.9.3",
            "@parcel/plugin": "2.9.3",
            "@parcel/utils": "2.9.3",
            "nullthrows": "^1.1.1"
          },
          "engines": {
            "node": ">= 12.0.0",
            "parcel": "^2.9.3"
          },
}
```
The integrity property keeps a hash inside the package-lock.json to verify what you have at the moment in your machine will be the same version that you'll deploy to production.

### What contains the node_modules folder?

It contains all the code that we fetched from our NPM when we installed dependencies (Could be one or more). In this case we installed Parcel.

### Why when we installed Parcel into our project, inside node_modules we have more folders than just Parcel?

It is because Parcel as a project (it is a project because we installed it) now needs its own dependencies, and those dependencies can have their own dependencies, **and this is known as transitive dependencies**, so the dependencies that are listed in our package.json (in our case is only Parcel) has their own dependencies, and those are indirect dependencies that our direct dependencies need to work as the do.

### When we install Parcel how many package.json files do we have now?

A lot of them, Parcel has its own package.json file and its dependencies as well.

### Should we put the node_modules folder to production or Github?

The answer is no. The best practice is to put the folder inside a .gitignore file. This is because since we will have our package.json and package-lock.json files, we can regenerate our node_modules folder by typing: npm install.

### Should we put the package.json and the package-lock.json files into Github?

The answer is yes. It is beacuse they maintain a node or a snapshot of what dependencies our project needs.

### command to ignite our app with Parcel?

npx parcel index.html