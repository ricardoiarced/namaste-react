# Namaste React - Episode 05

## Table of contents

- [What is the difference between Named Export, Default export and star symbol as export?]()
- [What is the ]

## Theory

### What is the difference between Named Export, Default export and \* as export?

Named Export:

When you use named exports, you are exporting specific variables, functions, or classes from a module.

Syntax example:

```js
// Module.js
export const variable1 = "Value 1";
export function myFunction() {
  // function implementation
}
```

```js
// AnotherFile.js
import { variable1, myFunction } from "./Module";
```

Default Export:

Default exports are used when a module wants to export a single value or functionality as the default export.

There can be only one default export per module.

Syntax example:

```js
// Module.js
const myVariable = "Default Value";
export default myVariable;
```

```js
// AnotherFile.js
import myVariable from "./Module";
```

(star symbol) as Export:

The (star symbol) as syntax is used for namespace imports, where you import all exports from a module under a single variable.

It's often used when you want to import the entire module and access its exports through a namespace.

Syntax example:

```js
// Module.js
export const variable1 = "Value 1";
export const variable2 = "Value 2";
```

```js
// AnotherFile.js
import * as myModule from "./Module";
console.log(myModule.variable1); // Accessing variable1 through the namespace
```

### What is the importance of config.js file?

The config.js file, or similar configuration files, are commonly used to store configuration settings and parameters for an application.

### What are React Hooks?

They are JavaScript utility functions which are given to us by React. Allow functional components to have state and side effects which were previously exclusive to class components.

### Why do we need a useState Hook?

We need it to create a super powerful state variable in React. And it's called a state variable because it maintains the state of your component. So, with that, whenever the state variable changes and make a call to the updater function, React schedules an update to the component. Then the process of Reconciliation starts and the diffing algorithm compares the new and old virtual DOM trees to determine the minimum number of changes needed to update the UI. Based on that, React determines which parts of the UI need to be re-rendered.

Everything that React does, you can have the same result using JavaScript, HTML and CSS.

### Why we need React?

When we use React or another library or framework it makes our development experience easier. It makes you write less code and do more on the web page.

### Why is not a good practice to have a lot of components and lines of code in a single file?

The best practice is to make separate files for separate components, and save them inside a folder. This way we have the code more organized and also easy to read and maintain. Because we're creating code first for humans because they need to understand the code in order to make changes or updates.

### src folder

Generally, the trend in the industry is to keep the main code in a src folder. And it means source code.

### Visit the React official page to know more about structuring a React project

**Whenever you create a file for a component, name it the same as the component you will build inside the file.**

### Why some people name their files with the JSX extension?

It is a debate on what extension to use when naming your files but Akshay prefers the 'js' extension because he used it when he was working on Uber.

KEEP IT SIMPLE! Remember to keep everything simple to understand better.

### Why React throws an error when you moved the component to its own file instead of keeping it in the same file?

Because React will try to find such component but the component is no longer there. So it will show a ReferenceError: 'Your component' is not defined. So we need to import the component to use it. But we need to export it first wheere you moved your component.

**To export a component we use:**

```js
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://image.similarpng.com/very-thumbnail/2021/09/Good-food-logo-design-on-transparent-background-PNG.png"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
```

There are two ways of exporting a component. But the previous one shows the standard practice.

There is a debate in the industry in how to import components. Let's see this example:

```js
import Header from "./components/Header";
```

Some people add the extension at the end and it works fine but if you don't add it, React will treat that as a JavaScript file by itself. Akshay likes to keep it simple and he doesn't write the extension when importing.

### What to do whenever you have hardcoded data?

You never keep hardcoded data in your component files. That's the standard in the industry. This involves using large arrays with information (In this episode we were using data from an array of objects that we took from the Swiggy API), harcoded URLs (In our example we're referencing to our CDN URL we use to log the image of the meals), and also for harcoded links like the logo of our app, etc. The best practice is to keep them in separate files. Some people call those files, configs.js, or utils.js or constants.js. We're creating a folder called utils inside our components folder, and inside utils folder we create a file called constants.js. And since this is not a component we need to name it with the first character as lower case. We also created a mockData.js file where we put our array of objects that we took from the Swiggy API. We could put it inside the constants.js file but Akshay preferred to put it inside a new file.

### How do we export our harcoded array of objects that we took from the Swiggy API?

We export it like this:

```js
export default resList;
```

And inside our Body component we import the array like this:

```js
import resList from "../utils/mockData";
```

### There are two types of import and two types of export:

- There is the default export.
- There is the named export or named import.

  - The second way of export is when you have to export multiple things in one file:

  Example of named export:

  ```js
  export const CDN_URL =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

  export const LOGO_URL =
    "https://image.similarpng.com/very-thumbnail/2021/09/Good-food-logo-design-on-transparent-background-PNG.png";
  ```

### Difference about using the named export when importing

Whenever you import something that was exported using the named export way, you have to use curly braces to put whatever you want to import:

```js
import { CDN_URL } from "../utils/constants";
```

**When Akshay was working on Uber, they had a practice where they don't had any file with more than 100 lines. It wasn't a rule, but they decided to kept to that approach.**

### How can we use event handlers in JSX?

We can do it like this:

```js
const Body = () => {
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            console.log("Button Clicked");
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="search">Search</div>
      <div className="res-container">
        {resList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
```

We use event handlers as attributes in JSX. Our button has the 'click' event attached to it.

### Why when we use a click event on a button and inside we use a filter method to filter out restaurants that has less than 4 stars the app doesn't update the restaurant cards?

React is fast in DOM manipulation. This is the problem that React is trying to solve. All the libraries and framewors try to work with the UI layer and the data layer in synchrony. They're trying to update the DOM efficiently. The reason why we cannot update the UI when filtering out the less rated restaurants is because the array that we're filtering is a normal let JavaScript variable. We need to give it the superpowers of React to convert it to a React variable.

### How is called a React variable?

Is called as a state variable.

### What do we use to create a state variable?

We use React hooks. And the hook that we're going to use is known as useState.

### What is a hook in React?

It's a normal JavaScript utility function which is given to us by React. Those hooks were written by Facebook developers. We got all these utility functions in our code when we installed React.

### What are the two most important hooks?

- useState() - This hook creates a super powerful state variable in React. And it's called a state variable because it maintains the state of your component.
- useEffect() -

To use useState() we need to import it:

```js
import { useState } from "react";
```

And we need to import it as a named import.

**So this means that inside the node_modules folder which has the react folder the useState hook is exported as a named export.**

**While React is exported as a default export.**

We can create a state variable like this:

```js
const [listOfRestaurants] = useState();
```

Let's see how can we assign initial values to both JS variables and state variables:

```js
// State Variable - Super powerful variable
const [listOfRestaurants] = useState([]);
// Normal JS variable
let listOfRestaurants = [];
```

whenever you call the useState(), you will receive a state variable inside an array. Or you will receive an array and that array contains the state variable. React keeps an eye on that variable so, whenever

### How do we update the list of restaurants then?

We use a second parameter inside our array and it is a function:

```js
const [listOfRestaurants, setListOfRestaurants] = useState([]);
```

With the 'setListOfRestaurants' function we can update our list.

We do it like this:

```js
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="search">Search</div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
```

The super powerful state variable keeps the UI layer in sync with the data layer. As soon as the 'listOfRestaurants' changes it will automatically refresh our component. **This is known as render.**

### What is render in React?

Whenever a state variable updates or changes, React rerenders the component.

When we clicked on our button we changed the state of our variable, since we defined an onClick event and inside we used the function to update our state variable and actually visualize our data in our app. Whenever the 'setListOfRestaurants' is called React will remove the Body and update it properly. It will do it quickly. As soon as my data layer changes the UI changes, and changes by rerendering the component.

### Why React is fast?

Because React can do faster DOM manipulation, can do efficient DOM manipulation, and it has something known as virtual DOM. There's something known as diffing algorithm, there's something known as reconciliation.

### What is the Reconciliation algorithm?

Is also known as React fiber and it is a reimplementation of the reconciliation algorithm from React 16. Let's suppose in our app we have a res-container and we have 8 restaurant cards, then when we click the button our list changes as well as our UI (State). React creates a virtual DOM and it is a representation of the actual DOM and it is just a JavaScript object. We see the changes reflected in our UI because the diff algorithm (reconciliation algorithm) finds out the differences between the previous virtual DOM and the updated virtual DOM. Once the differences are identified, the library can then efficiently update the actual DOM to reflect these changes, minimizing the number of actual DOM manipulations for better performance. That's how React becomes faster. **React does not touch the DOM a lot and that's why React is fast.**

**The virtual DOM existed a while ago before React, but React took that concept and built its core algorithm over that concept or that virtual DOM**

### If the interviewer asks you why React is fast?

You tell him/her this: Is fast because it has the virtual DOM, and thanks to the diff algorithm, it finds out the difference between the previous virtual DOM and the updated virtual DOM, and once it finds the differences we can see those changes reflected in our actual DOM which is the UI, and React does that efficiently reducing the number of actual DOM manipulations.

### In our app where does the reconciliation algorithm actually start?

When we call setListOfRestaurants, the reconciliation algorithm starts finding out the differences between the two virtual DOMs and then rerendering the UI.

**useState returns an array**

We can get the same result doing this:

```js
const arr = useState(resList);
const [listOfRestaurants, setlistOfRestaurants] = arr;

// Another way

const arr = useState(resList);
const listOfRestaurants = arr[0];
const setlistOfRestaurants = arr[1];
```

What we're doing since the beginning is array destructuring. We need the second function to update the UI and start the diff algorithm. We can even use the variables separated without using destructuring and it will work just fine.
