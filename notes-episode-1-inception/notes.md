# What is CDN?
CDN stands for content delivery network, and it is a geographically distributed group of servers that caches content close to end users. A CDN allows for the quick transfer of assets needed for loading Internet content, including HTML pages, JavaScript files, stylesheets, images, and videos.

Related to react, CDN is a place where the react library is hosted. We're just fetching the react library and put it in out code using CDN links

# Why do we use CDN?


# What happens when we insert the CDN links in our code?
Well, now our browser understands React. And now if we head over to our index.html file and open it in our web browser, go to dev tools, and open the console, and write React, we can see a huge object called React (And inside, a lot of methods we can use now).

# What is the attribute crossorigin inside the script element of the CDN?

# When we go to the source inside the CDN link with the description of react, what does the link take us to?
Well, the link take us to a page where there is a lot of code written. Basically, JavaScript code, and that's because, React is a JavaScript library (The source code of React, all code of React in one file). When we put the CDN links we now got React to our project.

# Who is writing the code of React?
Some Facebook (Meta) developers like you and me.

# Now, the other link from the other CDN link with the description of react-dom, what does the link take us to?
This take us to the React library which is useful for DOM operations, so, to modify the DOM (Builds the bridge between React and the DOM).

# Why do we have two links that take us to two separate files?
That's because React does not only work in browsers. It works in phones as React Native, and other things as well. Therefore there are different types of functions or methods which are being used in different places like phones, browsers, and so on. That's why we have two files.

# How do we log to the console Hello World using React?

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

So here React.createElement is creating an object, and we need to convert it to an h1 and put it into the DOM, so we need to create the root for it, so, in the next line, we create the root with ReactDOM.createRoot (We created a root for our React library). The last part is to use render, which basically takes the object that was generated from the heading, and convert it to a heading element, and put it into the DOM, so we can see it in our browser. The {} inside React.createElement is the place where you will give attributes to your elements, and the last parameter is where you put the children of that element.

# Do you know what is the most expensive operation inside of a browser in a web page?
When we do manual pages interactive. When we modify the DOM (When the DOM tree is changed, putting and removing some nodes from the DOM, that is the most costly operation). All the frameworks and libraries try to optimize this, and React comes with a filosofy that whenever you need to do anything on a web page do it using javascript, and that's why React give us those helper functions to make things work in a very perormant way.

# What happens if we use console.log to our heading?
We'll see an object in the console, and it is because at the end of the day is a React element (The heading is a React element), and a React element is nothing but a normal JavaScript object. Also the heading that we logged has something known as props, and props are children + attributes that we pass in. In this case our children would be 'Hello World from React!' and our props would be the id. But in the console those two are wrapped together by an object.

**We have this structure:**
```javascript
const parent = React.createElement('div', { id: 'parent' },
    React.createElement('div', { id: 'child' },
        React.createElement('h1', {}, 'I\'m an h1 tag'))
);
```
# How can we add a sibling element h2 where our h1 is located?
We need to create an array of childrens like this:

```javascript
const parent = React.createElement('div', { id: 'parent' },
    React.createElement('div', { id: 'child' },
        [React.createElement('h1', {}, 'I\'m an h1 tag'), React.createElement('h2', {}, 'I\'m an h2 tag')]
        )
);
```
When we do this, we'll be able to see our h2 tag in our page but React will throw an error to the console: **Warning: Each child in a list should have a unique "key" prop.**

**We can make a more complicated structure like this:**
```javascript
const parent = React.createElement('div', { id: 'parent' },
    [React.createElement('div', { id: 'child' },
        [React.createElement('h1', {}, 'I\'m an h1 tag'), React.createElement('h2', {}, 'I\'m an h2 tag')]
        ), React.createElement('div', { id: 'child' },
        [React.createElement('h1', {}, 'I\'m an h1 tag'), React.createElement('h2', {}, 'I\'m an h2 tag')]
        )]
);
```
But it is very untidy, and it's getting harder to understand the code.

**We changed the order of our scripts:**
<body>
    <div id="root"></div>
    <script src="./App.js"></script>
    <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
</body>

And when we load the page again we will see an error in the console telling us: **Uncaught ReferenceError: React is not defined**, so, the order of the files are always in sequence.

**We have this structure:**
<body>
    <div id="root">
        <h1>Ricardo is here!</h1>
    </div>
    <script src="./App.js">
    </script>
    <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
</body>

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
);
```
# What would happen to our h1 element that we wrote inside the div element with the id of root?
It will get replaced by our parent in App.js. We can see that happen when we reload and reload the page. For a few milliseconds 'Ricardo is here!' will be loaded in our browser, but then it gets replaced by our parent. So, whatever we pass in to our render method, will replace whaterver is inside our div with the id of root.
What happens is that first of all our browser reads the HTML, so it will print Ricardo is here! in the browser, but as soon as we go to our script it will load React, then the ReactDOM, and then our script whose src is App.js (so it will start loading), and finally when we reach the render method it will render the parent inside our root. 

**Now, we have this other structure**
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

# What will happen when we reload the page?
We will get our two h1 elements, one in the top of our div with the id of root, and also the other one below our same div.
![Ejemplo](./Screenshot%202023-08-18%20210833.png)
So React only renders in our root that we specified in our App.js inside our root, and other portions of HTML works the same. This is why we call React a library also. We call React as a library because React can be applied (work independently)to one small portion of a page. A framework requires to create a whole app, but React can work in our existing apps as well


