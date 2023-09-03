# Namaste React - Episode 2

## Table of contents

- [Theory](#theory)
    - [Arrow functions](#arrow-functions)
    - [What is 'NPM'](#what-is-npm)
    - [What is 'Parcel/Webpack'? Why do we need one of those?](#what-is-parcelwebpack-why-do-we-need-one-of-those)
    - [What is '.parcel-cache'](#what-is-parcel-cache)
    - [What is 'npx'?](#what-is-npx)
    - [what is difference between 'dependencies' vs 'devDependencies'](#what-is-difference-between-dependencies-vs-devdependencies)
    - [What is Tree Shaking?](#what-is-tree-shaking)
    - [What is Hot Module Replacement?](#what-is-hot-module-replacement)
    - [5 favourite superpowers of Parcel](#list-down-your-favorite-5-superpowers-of-parcel-and-describe-any-3-of-them-in-your-own-words)
    - [What is '.gitignote'? What should we add and not add into it?](#what-is-gitignore-what-should-we-add-and-not-add-into-it)
    - [What is the difference between 'package.json' and 'package-lock.json'?](#what-is-the-difference-between-packagejson-and-package-lockjson)
    - [Why should I not modify 'package-lock.json'?](#why-should-i-not-modify-package-lockjson)
    - [What is 'node_modules'? Is it a good idea to push that on git?](#what-is-node_modules-is-it-a-good-idea-to-push-that-on-git)
    - [What is the 'dist' folder?](#what-is-the-dist-folder)
    - [What is 'browserlists'](#what-is-browserlists)
- [Notes from episode 02 - Ignite Our App](#notes-from-episode-02---ignite-our-app)
    - [What do you need to do before pushing your code to production?](#what-do-you-need-to-do-before-pushing-your-code-to-production)
    - [What can we do to get NPM into our project?](#what-can-we-do-to-get-npm-into-our-project)
    - [What is a package.json file?](#what-is-a-packagejson-file)
    - [Why do we need a package.json file?](#why-do-we-need-a-packagejson-file)
    - [What is the most important package that we need to install in our project?](#what-is-the-most-important-package-that-we-need-to-install-in-our-project)
    - [What kind of dependencies an app can have?](#what-kind-of-dependencies-an-app-can-have)
    - [How can we install parcel in our project as a dev dependency?](#how-can-we-install-parcel-in-our-project-as-a-dev-dependency)
    - [What is the diference between the caret (^) and tilde (~) symbol inside of our package.json file?](#what-is-the-difference-between-the-caret--and-tilde--symbol-inside-of-our-packagejson-file)
    - [What is safe to put? The caret or the tilde symbol?](#what-is-safe-to-put-the-caret-or-the-tilde-symbol)
    - [What is the package-lock.json?](#what-is-the-package-lockjson)
    - [You might have heard of why your project is running locally but not in production?](#you-might-have-heard-of-why-your-project-is-running-locally-but-not-in-production)
    - [What contains the node_modules folder?](#what-contains-the-node_modules-folder)
    - [Why when we installed Parcel into our project, inside node_modules we have more folders than just Parcel?](#why-when-we-installed-parcel-into-our-project-inside-node_modules-we-have-more-folders-than-just-parcel)
    - [When we install Parcel how many package.json files do we have now?](#when-we-install-parcel-how-many-packagejson-files-do-we-have-now)
    - [Should we put the node_modules folder to production or Github?](#should-we-put-the-node_modules-folder-to-production-or-github)
    - [Should we put the package.json and the package-lock.json files into Github?](#should-we-put-the-packagejson-and-the-package-lockjson-files-into-github)
    - [command to ignite our app with Parcel?](#command-to-ignite-our-app-with-parcel)
    - [What is npx?](#what-is-npx-notes)
    - [It is a good way to bring React into our project through CDN links? Why?](#it-is-a-good-way-to-bring-react-into-our-project-through-cdn-links-why)
    - [What means the path at the end of the import?](#what-means-the-path-at-the-end-of-the-import)
    - [will we be able to use React once we imported our modules to our app and initialized Parcel?](#will-we-be-able-to-use-react-once-we-imported-our-modules-to-our-app-and-initialized-parcel)
    - [What parcel does?](#what-parcel-does)
    - [What happens if we execute npx parcel build index.html and we haven't modified anything in our package.json?](#what-happens-if-we-execute-npx-parcel-build-indexhtml-and-we-havent-modified-anything-in-our-packagejson)
    - [What happens when we execute npx parcel build index.html (a build production ready app)?](#what-happens-when-we-execute-npx-parcel-build-indexhtml-a-build-production-ready-app)
    - [Do we need to put our dist and .parcel-cache folders into our github repository? What will happen with our server when it is time to deploy our app? Is it going to has our build for production if we don't include those folders?](#do-we-need-to-put-our-dist-and-parcel-cache-folders-into-our-github-repository-what-will-happen-with-our-server-when-it-is-time-to-deploy-our-app-is-it-going-to-has-our-build-for-production-if-we-dont-include-those-folders)
    - [How can we make compatible our app for old versions of browsers?](#how-can-we-make-compatible-our-app-for-old-versions-of-browsers)
- [Useful resources](#useful-resources)

## Theory

### Arrow functions

**Arrow function benefits:**

1. Aesthetics: When having to return just one thing, you can simplify a lot the function.

2. Binding with this keyword: When you use the this keyword inside a method and you return it, and then you call the object with the method attached to it, you will get the Window object (The global object). We can say that it is bound to the surrounding scope where the function expression is. It is referring to the window object.

We can use them in callback functions

**Where we shouldn't use them?**

1. We shouldn't be using arrow functions inside objects as methods. specially if we use the 'this' keyword inside of the function.

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

Another example:

**Example:**
```js
const me = {
    name: 'Ricardo',
    hello: function() {
        return this;
    },
    arrowHello: () => {
      return this;
    }
}
me.hello(); // me object
me.arrowHello(); // Window object
```

The previous example is the same as having:

**Example:**
```js
const me = {
    name: 'Ricardo',
    hello: function() {
        return this;
    },
    arrowHello: this,
}
me.hello(); // me object
me.arrowHello(); // Window object
```

2. Functions added to a prototype.

**Example:**

```js
function Person(n) {
  this.name = n
}
```

**We can add methods to the prototype object like this:**

```js
Person.prototype.hello = function() {
  return this;
}

Person.prototype.arrowHello = () => {
  return this;
}
```

**And if we create an object based on what we've done:**
```js
const me = new Person('Ricardo');
me.hello(); // Person {name: 'Ricardo'}
me.arrowHello(); // Window {}
```

So, for the function we got our Person object and for our arrow function we got the window object. **What is this happening?**

This is happening because of the same reason as the object method. The arrow function doesn't create its own execution context, so, it uses the this keyword outside its scope.

3. Constructor dunctions.

**Example:**

```js
const Person = () => {

}
const me = new Person();
```

We will get an error like this: Uncaught TypeError: Person is not a constructor.

4. Event handlers (Callback functions with their own this keyword).

```js
const button = document.querySelector("#myButton");
button.addEventListener("click", () => {
  // 'this' won't refer to the button element here
  console.log(this);
});

```

So, we will get the Window object every time we click the button. And that's because of the behavior of the arrow function with the this keyword. If we were to use a function, the result would be our button. Since we're using an addEventListener function, it automatically binds the this keyword to the element we attached it to. But the arrow function as an event handler is looking for the outer scope keyword and that's the Window object.

**How can we get advantage of this behavior?**

On callback functions

**example:**

```js
const me = {
  name: 'Ricardo',
  hello() {
    setTimeout(() => {
      console.log(this.name);
    }, 100)
  }
}
me.hello();
```
So this is telling us that if we call the hello method, after 100 milliseconds log the this.name variable. After 100 milliseconds we will get Ricardo printed in the console. So, what's happening? Well since we're calling the hello function, it executes the arrow function inside the setTimeout method, and since the arrow function doesn't have a binding for the this keyword, it will go to the outer scope to set the binding of the this keyword for the arrow function. In this case Ricardo will be printed to the console.



### What is 'NPM'?

Npm is not node package manager but anything else, NPM does not have a full form. NPM manages packages behind the scenes but does not stand for Node Package Manager. NPM is a standard repository for all the packages, any package you need to include in your project you can use NPM. All the packages are hosted there. In their official website it says that it is a recursive bacronymic abbreviation for 'npm is not an acronym'


### What is 'Parcel/Webpack'? Why do we need one of those?

Parcel/Webpack is a bundler that optimizes our app during development and for production also.

- Dev server: Parcel includes a development server.
- HTTPS: If you run Parcel with the --https flag, it will generate you a certificate. For example, you may need to use a certain hostname for authentication cookies, or debug mixed content issues.
- Hot reloading: Whenever you make a change, Parcel automatically updates your code in the browser.
- HMR (Hot Module Replacement): Parcel updates modules in the browser at the same time it is executing without refreshing the page. So, that way the application state can be held as you change small things in your code. For example if you make changes on CSS, those changes are applied via HMR.
If you're not using a framework like React or Vue that supports HMR, you can use this piece of code for example in JavaScript to be able to use HMR.

```js
if (module.hot) {
  module.hot.accept();
}
```
You will be using the module.hot API to use the HMR functionality.

- Development target: When we are using the dev server, only a single target can be built at once. By default, Parcel uses a development target that supports modern browsers. This means that transpilation (The process of converting the code to other versions of the same language) of modern JavaScript versions for older browsers is disabled. So if we need to test in a older browser, you can provide the --target CLI option to choose which of your targets to build.

- Lazy mode: If we are in development and our app is huge and has many pages it can be frustrating sometimes the need to wait until the build is ready and the server starts up. You can tell Parcel by executing the --lazy flag that you want it to defer building files until they are requested in the browser, so, you can reduce the build times. The server will start immediately and when you navigate to a page from your app Parcel will be building the files necessary for that page only.

- Caching: Parcel caches everything. If you restart the dev server, Parcel will only rebuild the files you make changes on since the last time it ran. Parcel tracks all of the files, configurations, plugins, and dev dependencies that are inside your build, and thoroughly invalidates the cache when something changes. For example if you change a configuration file, all source files that rely on that configuration will be rebuilt.

- API proxy: Parcel has a built-in API proxy, which can help simulate your production environment. You can specify paths that should be proxied to another server maybe your real API server or a local testing server. You can use a .proxyrc file.

```json
{
  "/api": {
    "target": "http://localhost:8000/",
    "pathRewrite": {
      "^/api": ""
    }
   }
}
```

This example would cause (http://localhost:1234/api/endpoint) to be proxied to (http://localhost:8000/endpoint).

- File watcher: This helps the caching making it very fast. So, whenever a change is made, Parcel watches every file in your project root including node_modules, and based on events and metadata from these files, Parcel knows which files need to be rebuilt. The watcher is written in C++;

- Auto install: When you use a language or plugin that isn't included by default, Parcel will automatically install the necessary dependencies into your project for you. For example, if you include a .sass file, Parcel will install the @parcel/transformer-sass plugin. You will see a message in the terminal, and the new dependency will be added to the devDependencies in your package.json

- Diagnostics: Parcel will give you beautiful diagnostics when you make an error in your code.

- Parcel's JavaScript compiler, CSS transformer, and source maps implementation are written in Rust for maximum performance.

**Automatic production optimization**

- Tree shaking: Parcel removes everything that's not used in your code by analyzing the imports and exports of each module, and supports both ES modules and CommonJS. This is also called dead code elimination.

- Minification: Parcel includes minifiers for JavaScript, CSS, HTML, and SVG to reduce the file size of your output bundles by removing whitespace, renaming variables to shorter names, and many other optimizations. You just need to run:

```
parcel build index.html
```

And your app will be optimized.

- Image optimization: Parcel optimizes, converts, and resizes your images but you need to pass query parameters for the format and size you need when referencing the image file in your HTML, CSS, JavaScript.

The query parameters you can use are:
  
  - width - The width to resize the image to
  - height - The height to resize the image to
  - quality - The image quality percentage you want, for example ?**quality=75**
  - as - File format to convert the image to, for example: **?as=webp**

Image formats:
  
  - jpeg/jpg
  - png
  - webp
  - avif

- Compression: Parcel can compress your app before deploy using Gzip and Brotli. This way reduces the time needed to transfer scripts to the server is reduced (over the network).

- Code Splitting: When multiple parts of your application depend on the same common modules, they are automatically deduplicated into separate bundles. This allows commonly used dependencies to be loaded in parallel with your application code and cached separately by the browser. Therefore resulting in smaller initial bundle sizes and faster load times.

- Content hashing: Parcel automatically includes content hashes in the names of all output files. This enables long-term browser caching, because the output is guaranteed not to change unless the name does.

- Bundle manifests: Parcel uses a manifest in each entry bundle to avoid the cascading invalidation problem in many cases. This manifest includes a mapping of stable bundle ids to final content hashed filenames. When one bundle needs to reference another, it uses the bundle id rather than the content hashed name improving the cache hit rate across deployments.

- Transpilation: Parcel transpiles your JavaScript and CSS for your target browsers automatically! You just need to declare a browserslist in your package.json, and if you need more advanced custom transforms, Parcel also supports babel to do it automatically.

- Differential bundling: When you use 

```html
<script type="module">
```

Parcel automatically generates a nonmodule fallback for old browsers as well, depending on your browser targets.

- Workers: Parcel has built in support for web workers, service workers, and worklets, which allow moving work to a different thread.

  - Web workers: They allow you to run arbitrary CPU-heavy work in a background thread to avoid blocking the user interface.

  - Service workers: Run in the background and provide features like offline caching, background sync, and push notifications.

  - worklets: Let you hook into low level aspects of the rendering process or audio processing pipeline in the browser.

- Libraries: Parcel can build libraries for multiple targets at once (ES module, legace CommonJS module, and a TypeScript definition file).

### What is '.parcel-cache'?

It is the folder that stores binary files when parcel caches something in our app, ensuring faster builds the next time you make a change and save the file.

### What is 'npx'?

It is a tool for executing packages. You can execute packages installed locally and you can execute packages which weren't previously installed.

### What is difference between 'dependencies' vs 'devDependencies'?

Dependencies are only required to run, devDependencies only to develop, e.g.: unit tests, CoffeeScript to JavaScript transpilation, minification, etc. PeerDependencies is referred to the fact that we can have multiple versions of the dependency and it's simply installed inside the node_modules of the dependency.

### What is Tree Shaking?

When Parcel removes unnecessary code that's not being used to run the app, and it does that automatically for you.

### What is Hot Module Replacement?

When Parcel updates modules in the browser at the same time it is executing without reloading the page. So, that way the application state can be preserved as you change small things in your code (CSS changes for example).

### List down your favorite 5 superpowers of Parcel and describe any 3 of them in your own words

- Hot Module Replacement: Whenever a change you make to your code Parcel will apply the change in the browser without reloading the page.

- Tree Shaking: Parcel removes code that is not being used in your app.

- Caching: Parcel does caching for you to have faster builds in your app and at the same time is tracking all your files so when you restart the server it builds the files you made changes on the last time it ran.

- Minification

- Code Splitting

### What is '.gitignore'? What should we add and not add into it?

.gitignore is a folder that tells Git what folders you don't want to push to your repository. We should add everything that can be reinstalled or recovered just by hitting npm install and in the case of Parcel you will need to execute the command

```
npx parcel index.html
```

or 

```
npx parcel build index.html
```

to get the dist and the .parcel-cache folders.

### What is the difference between 'package.json' and 'package-lock.json'?

package.json is a metadata file that contains information about your project, including its name, version, description, main file, scripts, dependencies, and more. While package-lock.json is an automatically generated file that keeps track of the exact versions of all dependencies and sub-dependencies installed in the project. It ensures that the project uses the same versions of dependencies across different environments.

### Why should I not modify 'package-lock.json'?

Because it keeps track of all tree of version dependencies, and if you were to modify it, may lead to dependency conflicts or unexpected behavior. It considered a bad practice.

### What is 'node_modules'? Is it a good idea to push that on git?

It is a folder where modules and packages are installed when we use the npm to manage our project's dependencies. And is not a good idea because we can recover that folder by executing npm install, so, the npm will install the dependencies listed inside the package.json file.

### What is the 'dist' folder?

Is the folder that is generated when we execute either this command of Parcel:

```
npx parcel index.html
```

or this one:

```
npx parcel build index.html
```

That folder will contain all the bundle files for our development environment or production environment, depending on what command we use to execute Parcel.

### What is browserlists?

is a configuration file and a tool used in web development to specify the list of target browsers and their versions that your web application or project should support.

## Notes from Episode 02 - Ignite Our App

### What do you need to do before pushing your code to production?
  
Basically you will need to do bundling, code splitting, chunking, image optimization, removing comments, minifying the code, compressing the code; you'll need to do a lot of things.

**When you create a react app it has all the superpowers, so, it is already ignited, it creates schedule for you, it gives you a basic react app which is already production ready.**

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

**By typing:** 

```
npm install -D parcel
```

### What is the difference between the caret (^) and tilde (~) symbol inside of our package.json file?

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

npx parcel index.html. It generates a build development of our project and put that build into our dist folder, and it will host our app on http://localhost:1234 or port 1234. So the code that we will see in our dev environment will be the one that is inside the dist folder now :D.

### What is npx (notes)?

Similar as npm we have something called npx, and npx means executing a package. In this case we told Parcel to execute and we put our src, in this case was index.html to serve as an entry point for our web application. Parcel uses this file to build and bundle our application, then starts a development server to host our bundled application and provides a local URL.

### It is a good way to bring React into our project through CDN links? Why?

Is not a good way to bring it to our project. And it is because fetching from CDN links we need to make a call to where the library or package is hosted, and it brings a lot of performance concerns. The best way is to intall it through npm and not waste time making extra calls to bring it to our project (It will get installed in our node_modules). A second thing is that through CDN links we will have to change the version manually when a new version has been realeased, so, it's better to have it inside our package.json file where is easier to manage all dependencies including React.

**Once we installed React and ReactDOM in our project, to actually start using it we need to import it to our file**

### What means the path at the end of the import?

That path it is referring to our react that is inside our node_modules folder, so it is making a link to use it in our app.

### will we be able to use React once we imported our modules to our app and initialized Parcel?

No, Parcel will throw an error telling us that **Browser cannot have imports or exports**, and that is because our script whose name is App.js is treated as a browser script, and treats it as a normal JavaScript file which is not. Therefore it cannot understand what is the import where we imported our modules. That's why we need to tell our browser that the App.js file is a module

**Now our console will throw an error because we're using createRoot from react-dom and not from react-dom/client. Now, we need to use react-dom/client to use createRoot because this is different from the CDN link.

### What parcel does?

- Dev build
- Local server
- HMR = Hot Module Replacement - When we make changes into our code and save the file Parcel automatically reloads the page, so we can see our changes instantly (that's known as Hot Module Replacement)
- Parcel uses a watching file algorithm - This algorithm is written in C++. So it keeps an eye on all your files, and as soon as you make a change and save your app Parcel will reload the page.
- Caching - Faster builds (gives you faster builds). When you save the app the terminal shows you the time that was passed to build the app, and you might be wondering why it is so fast? It is beacuse Parcel is caching things for you inside the .parcel-cache folder in form of binary files so that the next build is ready faster.
- Image optimization.
- Minification of our file when creating a production build.
- Bundling.
- Compressing.
- Consistent hashing.
- Code splitting.
- Differential bundling - Means that supports different versions of browsers (support old browsers).
- Diagnostics behind the scenes.
- Error handling (throws errors beautifully).
- Https - Let's suppose we want to test something that only works on HTTPS, Parcel gives you those features also.
- Tree shaking algorithm - Suppose we have hundreds of functions in our code, but we're just using four or five functions, so Parcel will remove unused code for you.
- Creates different dev and production bundles.

So, React is not the only thing that's making your app fast. Parcel too (bundlers in general) :D.

Parcel is not doing everything by itself, it also needs to manage its own dependencies to act and make your app fast as you can see :D.

### What happens if we execute npx parcel build index.html and we haven't modified anything in our package.json?

Parcel will throw an error saying Target "main" declares an output file path of "App.js" (our app) which does not match the compiled bundle type "html". 

So we will need to remove the property called main in our package.json file because Parcel get a conflict with that.

Npm chose that path as the main path to our entry point, but when we use Parcel, we tell Parcel that the entry point is index.html.

And once we have done it, It generates a build for production of our project and put that build into our dist folder, so we can deliver that app to our users.

### What happens when we execute npx parcel build index.html (a build production ready app)?

It will bundle, minify and a lot of things more and it will put all the new files inside the dist folder.

### Do we need to put our dist and .parcel-cache folders into our github repository? What will happen with our server when it is time to deploy our app? Is it going to has our build for production if we don't include those folders?

No, we don't need to push our folders to github because we can get those folders again by executing npx parcel build index.html or npx parcel index.html either for production or development. So in our server we can execute that command, and we will have our folders ready to deploy the app.

### How can we make compatible our app for old versions of browsers?

We need to use broserslist, but we need to tell it for what versions of browsers we need to support the app to. Browserslist is an npm package, and it needs some configuration, so, we head over to [Browserslist page](browserslist.dev)
and we can select for example in the search bar the last 2 versions of all browsers and it will give you the overall browser coverage. It dependes on you what percentage of coverage you want to have for your app. For a government website you will need to make your app work for maybe 99% of the overall browser coverage. It depends of your needs. So, let's work with the last 2 versions of all browsers which is 69% just to not have a lot of code and keep our app lighter.

To configure browserslist we'll need to write something in your package.json file: 

```json
 "browserslist": [
    "last 2 versions"
  ]
```

And now our app will work for the last 2 versions of all browsers. And this means that it will work at a 100%. For the other percentage that we didn't take into account it might work or not.

if we click on query composition it will take us to browserslist's repository and there you can see how to configure to function for 99.5% of the US people. So you can configure broserslist based on countries.

After all of this we have created our own create react app.

## Useful resources

- [Parcel](https://parceljs.org/)

- [Dependencies](https://stackoverflow.com/questions/18875674/whats-the-difference-between-dependencies-devdependencies-and-peerdependencie)

- [browserlist](https://stackoverflow.com/questions/55510405/what-is-the-significance-of-browserslist-in-package-json-created-by-create-react)