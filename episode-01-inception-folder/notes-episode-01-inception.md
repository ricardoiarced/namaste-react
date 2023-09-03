# Namaste React - Episode 1

## Table of contents

- [Theory](#theory)
    - [What is Emmet?](#what-is-emmet)
    - [Difference between a library and framework](#difference-between-a-library-and-framework)
    - [What is CDN?](#what-is-cdn)
    - [Why do we use CDN?](#why-do-we-use-cdn)
    - [Why is React known as React?](#why-is-react-known-as-react)
    - [What is cross-origin in the script tag?](#what-is-cross-origin-in-the-script-tag)
    - [what is the difference between React and ReactDOM?](#what-is-the-difference-between-react-and-reactdom)
    - [What is the difference between react.development.js and react.production.js files via CDN?](#what-is-the-difference-between-reactdevelopmentjs-and-reactproductionjs-files-via-cdn)
    - [What are async and defer?](#what-are-async-and-defer)
- [Notes](#notes-from-episode-01---inception)
    - [What happens when we insert the CDN links in our code?](#what-happens-when-we-insert-the-cdn-links-in-our-code)
    - [When we go to the source inside the CDN link with the description of react, what does the link take us to?](#when-we-go-to-the-source-inside-the-cdn-link-with-the-description-of-react-what-does-the-link-take-us-to)
    - [Who is writing the code of React?](#who-is-writing-the-code-of-react)
    - [The other link from the other CDN link with the description of react-dom, what does the link take us to?](#the-other-link-from-the-other-cdn-link-with-the-description-of-react-dom-what-does-the-link-take-us-to)
    - [Why do we have two links that take us to two separate files?](#why-do-we-have-two-links-that-take-us-to-two-separate-files)
    - [How do we log to the console Hello World using React?](#how-do-we-log-to-the-console-hello-world-using-react)
    - [Do you know what is the most expensive operation inside of a browser in a web page?](#do-you-know-what-is-the-most-expensive-operation-inside-of-a-browser-in-a-web-page)
    - [What happens if we use console.log to our heading?](#what-happens-if-we-use-consolelog-to-our-heading)
    - [How can we add a sibling element h2 where our h1 is located?](#how-can-we-add-a-sibling-element-h2-where-our-h1-is-located)
    - [Let's suppose we changed the order of our scripts](#lets-suppose-we-changed-the-order-of-our-scripts)
    - [We have this structure](#we-have-this-structure)
    - [We have this other structure](#we-have-this-other-structure)
- [Useful resources](#useful-resources)

## Theory

### What is Emmet?

Emmet is a plugin for many popular text editors which greatly improves HTML & CSS workflow. It gives you the power to use short expressions to generate HTML markup, and CSS.

### Difference between a Library and Framework?

A library can be applied (work independently) to one small portion of a page. A framework requires to create a whole app, but a library can work in our existing apps as well.

### What is CDN?

CDN stands for content delivery network, and it is a geographically distributed group of servers that caches content close to end users. A CDN allows for the quick transfer of assets needed for loading Internet content, including HTML pages, JavaScript files, stylesheets, images, and videos.

Related to react, CDN is a place where the react library is hosted. We're just fetching the react library and put it in our code using CDN links.

### Why do we use CDN?

To reduce latency which can delay your experience when trying to access a web page or video stream before it fully loads on your device.

### Why is React known as React?

React is a JavaScript library for building user interfaces. It was developed by Facebook, and the name “React” was chosen because it is meant to help developers build user interfaces that are fast and responsive, or “reactive.” The library was designed to “react” to changes in data.

### what is cross-origin in the script tag?

The crossorigin attribute sets the mode of the request to an HTTP CORS Request.

Web pages often make requests to load resources on other servers. Here is where CORS comes in.

A cross-origin request is a request for a resource (e.g. style sheets, iframes, images, fonts, or scripts) from another domain.

CORS is used to manage cross-origin requests.

There are two values that we can use with crossorigin

- anonymous or crossorigin (is the same as crossorigin="") - A cross-origin request is perfomrmed. No credentials are sent.

- use-credentials - A cross-origin request is performed. Credentials are sent (e.g. a cookie, a certificate, a HTTP Basic authentication)

**In our code we're not sending any credentials:**

```html
    <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
```

### what is the difference between React and ReactDOM?

React is the JavaScript library to build web Applications, and ReactDOM is the JavaScript library (bridge) between React and the DOM, so it allows React to intereact with the DOM.

### What is the difference between react.development.js and react.production.js files via CDN?

react.development.js is suited when you're developing your app, and the react.production.js file is best suited for production as it is minified and optimized for it.

### What are async and defer?

async and defer are boolean attributes which are used along with script tags to load the external scripts efficiently into our web page.

When you load a web page there are two major things happening in our browser:
1. The first one is the HTML parsing.
2. The second is the loading of the script.

The loading of the script can break down into two main things:
1. Fetching the script from the network.
2. Execute the script line by line.

Examples with the three possible scenarios:

```html
<script src=""></script>
```
 ![First scenario](/notes-episode-1-inception/Without%20an%20attribute.png)

1. First scenario: Our browser is parsing the HTML and suddenly encounters a script tag on certain point 'O', then the parsing stops at that point in time, fetchs the script from the network to get it into the browser and executes the script, then, after the script is fully executed the HTML parsing will continue to execute. This is not a good scenario.

 ```html
<script async src=""></script>
```

![Second scenario](/notes-episode-1-inception/Using%20'async'%20attribute.png)
2. Second scenario (Using async attribute): While the HTML parsing is happening our script tag with the async attribute is being fetched (by the browser) from the network (src we specified) asynchronously (in parallel), then, HTML parsing stops and the script starts executing, and once the script is executed the HTML parsing continues executing again.

```html
<script async src=""></script>
```

![Third scenario](/notes-episode-1-inception/Using%20'defer'%20attribute.png)

3. Third scenario (Using defer attribute): In this case, the HTML parsing starts executing as well as the script tag is being fetch in parallel from the network but here the script tag is executed once the HTML parsing is completed

- After selecting one of those three sceneraios to our project we should note one important thing: the 'async' attribute does not guarantee the execution of the scripts but 'defer' does. What does that mean? If you were to put async attributes in multiple scripts that depend on one another does not guarantee the execution of the scripts in a particular order, that might brake your code, in that case you should use 'defer'.

- Let's take another example like loading Google's analytics script and another analytics script which are modular, so, they are independent from our code. In that case make sense to use the 'async' attribute and not to use 'defer', otherwise is better to use 'defer' attribute because it maintains the order in which the scripts are executed.

## Notes from Episode 01 - Inception

### What happens when we insert the CDN links in our code?

Well, now our browser understands React. And now if we head over to our index.html file and open it in our web browser, go to dev tools, and open the console, and write React, we can see a huge object called React (And inside, a lot of methods we can use now).

### When we go to the source inside the CDN link with the description of react, what does the link take us to?

Well, the link take us to a page where there is a lot of code written. Basically, JavaScript code, and that's because, React is a JavaScript library (The source code of React, all code of React in one file). When we put the CDN links we now got React to our project.

### Who is writing the code of React?

Some Facebook (Meta) developers like you and me.

### The other link from the other CDN link with the description of react-dom, what does the link take us to?

This takes us to the JavaScript library which is useful for DOM operations, so, to modify the DOM (Builds the bridge between React and the DOM).

### Why do we have two links that take us to two separate files?

That's because React does not only work in browsers. It works in phones as React Native, and other things as well. Therefore there are different types of functions or methods which are being used in different places like phones, browsers, and so on. That's why we have two files.

### How do we log to the console Hello World using React?

```html
<body>
    <div id="root">
    </div>
    <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <script>
        const heading = React.createElement('h1', {}, 'Hello World from React!');
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(heading);
    </script>
</body>
```

So here React.createElement is creating an object, and we need to convert it to an h1 and put it into the DOM, so we need to create the root for it, so, in the next line, we create the root with ReactDOM.createRoot (We created a root for our React library). The last part is to use render, which basically takes the object that was generated from the heading, and convert it to a heading element, and put it into the DOM, so we can see it in our browser. The {} inside React.createElement is the place where you will give attributes to your elements, and the last parameter is where you put the children of that element.

### Do you know what is the most expensive operation inside of a browser in a web page?

When we do manual pages interactive. When we modify the DOM (When the DOM tree is changed, putting and removing some nodes from the DOM, that is the most costly operation). All the frameworks and libraries try to optimize this, and React comes with a filosofy that whenever you need to do anything on a web page do it using javascript, and that's why React give us those helper functions to make things work in a very perormant way.

### What happens if we use console.log to our heading?

We'll see an object in the console, and it is because at the end of the day is a React element (The heading is a React element), and a React element is nothing but a normal JavaScript object. Also the heading that we logged has something known as props, and props are children + attributes that we pass in. In this case our children would be 'Hello World from React!' and our props would be the id. But in the console those two are wrapped together by an object.

### How can we add a sibling element h2 where our h1 is located?

**We have this structure:**

```javascript
const parent = React.createElement('div', { id: 'parent' },
    React.createElement('div', { id: 'child' },
        React.createElement('h1', {}, 'I\'m an h1 tag'))
);
```

**We need to create an array of childrens like this:**

```javascript
const parent = React.createElement('div', { id: 'parent' },
    React.createElement('div', { id: 'child' },
        [React.createElement('h1', {}, 'I\'m an h1 tag'), React.createElement('h2', {}, 'I\'m an h2 tag')]
        )
);
```
When we do this, we'll be able to see our h2 tag in our page but React will throw an error to the console: **Warning: Each child in a list should have a unique "key" prop.**

**We can make a more complicated structure like this:**

```js
const parent = React.createElement('div', { id: 'parent' },
    [React.createElement('div', { id: 'child' },
        [React.createElement('h1', {}, 'I\'m an h1 tag'), React.createElement('h2', {}, 'I\'m an h2 tag')]
        ), React.createElement('div', { id: 'child' },
        [React.createElement('h1', {}, 'I\'m an h1 tag'), React.createElement('h2', {}, 'I\'m an h2 tag')]
        )]
);
```
But it is very untidy, and it's getting harder to understand the code.

### Let's suppose we changed the order of our scripts

```html
<body>
    <div id="root"></div>
    <script src="./App.js"></script>
    <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
</body>
```

And when we load the page again we will see an error in the console telling us: **Uncaught ReferenceError: React is not defined**, so, the order of the files are always in sequence.

### We have this structure

```html 
<body>
    <div id="root">
        <h1>Ricardo is here!</h1>
    </div>
    <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <script src="./App.js"></script>
</body>
```

**And in our App.js we have:**

```javascript
const parent = React.createElement('div', { id: 'parent' },
    [React.createElement('div', { id: 'child' },
        [React.createElement('h1', {}, 'I\'m an h1 element'),
        React.createElement('h2', {}, 'I\'m an h2 element')]
    ), React.createElement('div', { id: 'child' },
        [React.createElement('h1', {}, 'I\'m an h1 element'),
        React.createElement('h2', {}, 'I\'m an h2 element')]
    )]
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(parent);
);
```
**What would happen to our h1 element that we wrote inside the div element with the id of root?**

It will get replaced by our parent in App.js. We can see that happen when we reload and reload the page. For a few milliseconds 'Ricardo is here!' will be loaded in our browser, but then it gets replaced by our parent. So, whatever we pass in to our render method, will replace whaterver is inside our div with the id of root.
What happens is that first of all our browser reads the HTML, so it will print Ricardo is here! in the browser, but as soon as we go to our script it will load React, then the ReactDOM, and then our script whose src is App.js (so it will start loading), and finally when we reach the render method it will render the parent inside our root. 

### We have this other structure:

**What will happen when we reload the page?**

```html
<body>
    <h1>Top</h1>
    <div id="root">
        <h1>Ricardo is here!</h1>
    </div>
    <h1>Bottom</h1>
    <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <script src="./App.js"></script>
</body>
```
We will get our two h1 elements, one in the top of our div with the id of root, and also the other one below our same div.
![Ejemplo](./Screenshot%202023-08-18%20210833.png)
So React only renders in our root that we specified in our App.js inside our root, and other portions of HTML works the same. This is why we call React a library also. We call React as a library because React can be applied (work independently)to one small portion of a page. A framework requires to create a whole app, but React can work in our existing apps as well

## Useful resources

- [Emmet](https://medium.com/@kartik2406/web-development-with-vs-code-part-1-emmet-6af80f0f630c)

- [CDN 1](https://www.cloudflare.com/learning/cdn/what-is-a-cdn/)

- [CDN 2](https://www.akamai.com/glossary/what-is-a-cdn#:~:text=The%20mission%20of%20a%20CDN,load%20error%20or%20time%2Dout)

- [React](https://medium.com/@dhawalpandya/why-is-react-called-react-92f83b10aeac)

- [crossorigin 1](https://www.w3schools.com/tags/att_script_crossorigin.asp)

- [crossorigin 2](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)

- [crossorigin 3](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/crossorigin)

- [react.development.js and react.production.js](https://legacy.reactjs.org/docs/cdn-links.html)

- [async and defer](https://www.youtube.com/watch?v=IrHmpdORLu8&ab_channel=AkshaySaini)