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
```javascript
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

# Do you know what is the most expensive operation inside of a browser in a web page?
When we do manual pages interactive. When we modify the DOM (When the DOM tree is changed, putting and removing some nodes from the DOM, that is the most costly operation). All the frameworks and libraries try to optimize this, and React comes with a filosofy that whenever you need to do anything on a web page do it using javascript, and that's why React give us those helper functions to make things work in a very perormant way.

# What happens if we use console.log to our heading?
We'll see an object in the console, and it is because at the end of the day is a React element (The heading is a React element), and a React element is nothing but a normal JavaScript object. Also the heading that we logged has something known as props, and props are children + attributes that we pass in. In this case our children would be 'Hello World from React!' and our props would be the id. But in the console those two are wrapped together by an object.