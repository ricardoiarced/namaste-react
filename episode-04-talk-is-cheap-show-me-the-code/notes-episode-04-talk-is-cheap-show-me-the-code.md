# Namaste React - Episode 1

## Table of contents

- [Theory](#theory)
  - [Is JSX mandatory for React?](#is-jsx-mandatory-for-react)
  - [Is ES6 mandatory for React?](#is-es6-mandatory-for-react)
  - [How can we write comments in JSX?](#how-can-we-write-comments-in-jsx)
  - [What is <React.Fragment></React.Fragment> and <></>?](#what-is-reactfragmentreactfragment-and)
  - [What is the virtual DOM?](#what-is-the-virtual-dom)
  - [What is reconciliation in React?](#what-is-reconciliation-in-react)
  - [What is React Fiber?](#what-is-react-fiber)
  - [Why do we need keys in React? When do we need keys in React?](#why-do-we-need-keys-in-react-when-do-we-need-keys-in-react)
  - [Can we use index as keys in React?](#can-we-use-index-as-keys-in-react)
  - [What is props in React?](#what-is-props-in-react)
  - [Ways to pass in props](#ways-to-pass-in-props)
  - [What is Config Driven UI?](#what-is-config-driven-ui)
- [Notes from episode 04 - Laying the Foundation](#notes-from-episode-04---talk-is-cheap-show-me-the-code)
  - [How to start thinking about building an app](#how-to-start-thinking-about-building-an-app)
  - [Why we create components?](#why-we-create-components).
  - [How many ways are to write CSS?](#how-many-ways-are-to-write-css)
  - [How can we make our cards components dynamic?](#how-can-we-make-our-cards-components-dynamic)
  - [Using destructuring](#using-destructuring)
  - [Config Driven UI concept (Swiggy app used it to create their website)](#config-driven-ui-concept-swiggy-app-used-it-to-create-their-website)
  - [What does build a frontend application?](#what-does-build-a-frontend-application)
  - [What happens when you build a large scale application?](#what-happens-when-you-build-a-large-scale-application)
  - [How is represented data inside an API?](#how-is-represented-data-inside-an-api)
  - [When you build a production-ready app, what do you need to do?](#when-you-build-a-production-ready-app-what-do-you-need-to-do)
  - [Best practices](#best-practices)
  - [Why we need keys?](#why-we-need-keys)

## Theory

### Is JSX mandatory for React?

JSX is not a requirement for using React. Using React without JSX is especially convenient when you don’t want to set up compilation in your build environment.

### Is ES6 mandatory for React?

ES6 is not mandatory for React.

Normally you would define a React component as a plain JavaScript class:

```js
class Greeting extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

You can use the create-react-class module if you're not using ES6.

```js
var createReactClass = require("create-react-class");
var Greeting = createReactClass({
  render: function () {
    return <h1>Hello, {this.props.name}</h1>;
  },
});
```

### How can we write comments in JSX?

If you want to comment something in JSX you need to use JavaScript comments inside of Curly braces like:

```js
{
  /*comment here*/
}
```

### What is <React.Fragment></React.Fragment> and <></>?

A common pattern in React is for a component to return multiple elements. Fragments let you group a list of children without adding extra nodes to the DOM.

Example:

```js
render() {
  return (
    <React.Fragment>
      <ChildA />
      <ChildB />
      <ChildC />
    </React.Fragment>
  );
}
```

And the short syntax is this:

```js
class Columns extends React.Component {
  render() {
    return (
      <>
        <td>Hello</td>
        <td>World</td>
      </>
    );
  }
}
```

### What is the virtual DOM?

The virtual DOM (VDOM) is a programming concept where an ideal, or “virtual”, representation of a UI is kept in memory and synced with the “real” DOM by a library such as ReactDOM.

### What is reconciliation in React?

Reconciliation in React is the process by which React updates the user interface to match the most recent changes in the application's state. It's a critical part of React's virtual DOM (Document Object Model) diffing algorithm, which efficiently determines what needs to be updated in the actual DOM to reflect the current state of the application.

Reconciliation is the algorithm behind what is popularly understood as the "virtual DOM." A high-level description goes something like this: when you render a React application, a tree of nodes that describes the app is generated and saved in memory. This tree is then flushed to the rendering environment — for example, in the case of a browser application, it's translated to a set of DOM operations. When the app is updated (usually via setState), a new tree is generated. The new tree is diffed with the previous tree to compute which operations are needed to update the rendered app.

### What is React Fiber?

React Fiber is a reimplementation of React's core algorithm.

The goal of React Fiber is to increase its suitability for areas like animation, layout, and gestures. Its headline feature is incremental rendering: the ability to split rendering work into chunks and spread it out over multiple frames.

### Why do we need keys in React? When do we need keys in React?

Keys help React identify which items have changed, are added, or are removed. Keys should be given to the elements inside the array to give the elements a stable identity. We need keys when we need to show dynamic data in our app.

### Can we use index as keys in React?

Yes, we can use them, but use them as the last resort. It's not recommended to use the indexes for keys if the order of items may change. So that can impact performance a lot and may cause issues with component state.

### What is props in React?

Props stands for properties and is an object that you can pass in as an argument to a function to return a React element. Those functions are called function components because they are literally JavaScript functions.

### Ways to pass in props

We can pass them like this:

```js
const RestaurantCard = (props) => {
  return (
    <div className="res-card" style={styleCard}>
      <img
        className="res-img"
        alt="res-card"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/c9elzh8awx7jcx70cood"
      />
      <h3>{props.resName}</h3>
      <h4>{props.cuisine}</h4>
      <h4>4.4 stars</h4>
      <h4>38 minutes</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard resName="foods" cuisine="Biryani" />
        <RestaurantCard resName="KFC" cuisine="burguer, fast food" />
      </div>
    </div>
  );
};
```

Or we can use destructuring:

```js
const RestaurantCard = ({ resName, cuisine }) => {
  return (
    <div className="res-card" style={styleCard}>
      <img
        className="res-img"
        alt="res-card"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/c9elzh8awx7jcx70cood"
      />
      <h3>{resName}</h3>
      <h4>{cuisine}</h4>
      <h4>4.4 stars</h4>
      <h4>38 minutes</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard resName="foods" cuisine="Biryani" />
        <RestaurantCard resName="KFC" cuisine="burguer, fast food" />
      </div>
    </div>
  );
};
```

### What is Config Driven UI?

Is an approach to designing and building user interfaces (UIs) in software applications where the behavior and appearance of the UI elements are defined and controlled through configuration settings or data, rather than hardcoding these aspects into the application's code.

## Notes from Episode 04 - Talk is cheap, show me the code

### How to start thinking about building an app

Let's suppose you have to build a food ordering app.

The first thing you need to do as a senior engineer is your planning, if your planning is good code is very easy to write.

Parts of planning:

1. UI design.
2. What components can have my app?

### Why we create components?

A component is just like a function, and we create them to reuse them every single time we need them in our code.

### How many ways are to write CSS?

- Inline styles using the style attribute which accepts a JavaScript object with camelCased properties.
- In a separate file
- Using a framework like Tailwind, Bootstrap, etc.

Let's explain better the inline styles with an example:

```js
const styleCard = {
  backgroundColor: "#f0f0f0f0",
};

const RestaurantCard = () => {
  return (
    <div className="res-card" style={styleCard}>
      <h3>Name Foods</h3>
    </div>
  );
};
```

Or we can change it to this:

```js
const RestaurantCard = () => {
  return (
    <div className="res-card" style={{
  backgroundColor: "#f0f0f0f0",
};}>
      <h3>Name Foods</h3>
    </div>
  );
};
```

So in this last way the first curly braces are expecting some JavaScript code inside, and the second ones are actually the object where you can define your properties for the styles.

And it works, but it is not a good practice, it's not recommended to use those ways of implementing styles in your app.

### How can we make our cards components dynamic?

We need to use a concept called props. In React we have something known as props. And is short for properties. You can pass props to a component. So to pass data dynamically to a component we pass data as props. A functional component at the end of the day is just a normal JavaScript function. Props at the end of the day are just normal arguments of our function. When we say I'm passing a prop to a component is like say I'm passing an argument to our funcion.

An example of this:

```js
const RestaurantCard = (props) => {
  return (
    <div className="res-card" style={styleCard}>
      <img
        className="res-img"
        alt="res-card"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/c9elzh8awx7jcx70cood"
      />
      <h3>{props.resName}</h3>
      <h4>{props.cuisine}</h4>
      <h4>4.4 stars</h4>
      <h4>38 minutes</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard resName="foods" cuisine="Biryani" />
        <RestaurantCard resName="KFC" cuisine="burguer, fast food" />
      </div>
    </div>
  );
};
```

Here we're passing props to our RestaurantCard components. So, React will take those props, wrap them inside an object and receive that object as an argument.
When you need to pass dynamic data to a component you need to pass the data as props.

### Using destructuring

We can use destructuring inside the function parameters of the Restaurant component

```js
const RestaurantCard = ({ resName, cuisine }) => {
  return (
    <div className="res-card" style={styleCard}>
      <img
        className="res-img"
        alt="res-card"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/c9elzh8awx7jcx70cood"
      />
      <h3>{resName}</h3>
      <h4>{cuisine}</h4>
      <h4>4.4 stars</h4>
      <h4>38 minutes</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard resName="foods" cuisine="Biryani" />
        <RestaurantCard resName="KFC" cuisine="burguer, fast food" />
      </div>
    </div>
  );
};
```

The keys would be resName and cuisine and the actual data is the string in the RestaurantCard components

We can have the same behavior by doing something like this:

```js
const RestaurantCard = (props) => {
  const { resName, cuisine } = props;
  return (
    <div className="res-card" style={styleCard}>
      <img
        className="res-img"
        alt="res-card"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/c9elzh8awx7jcx70cood"
      />
      <h3>{resName}</h3>
      <h4>{cuisine}</h4>
      <h4>4.4 stars</h4>
      <h4>38 minutes</h4>
    </div>
  );
};
```

It's just pure JavaScript.

### Config Driven UI concept (Swiggy app used it to create their website)

Config Driven UI is where we can change the location of the website and according to the location, data changes. Our website is driven by configs. If we were to change the location to Delhi. There, the carroussel would be different and also the offers. Basically is controlling your UI how it looks like using data or config and where does that config come from? It comes from the backend. You can build a config driven UI. All the UI is driven by a config. This is how big applications are built.

### What does build a frontend application?

UI layer and data layer.

### What happens when you build a large scale application?

You put your images in CDNs. res.cloudinary.com is a CDN and all the images are hosted there.

### How is represented data inside an API?

In the real world the data will be represented by an array of objects or list of objects.

### When you build a production-ready app, what do you need to do?

You need to use reusable components. So we can pass dynamic props inside the component.

### Best practices

```js
const RestaurantCard = (props) => {
  const { resData } = props;
  return (
    <div className="res-card" style={styleCard}>
      <img
        className="res-img"
        alt="res-card"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${resData.info.cloudinaryImageId}`}
      />
      <h3>{resData.info.name}</h3>
      <h4>{resData.info.cuisines}</h4>
      <h4>{resData.info.avgRating}</h4>
      <h4>{resData.info.costForTwo}</h4>
      <h4>{resData.info.sla.deliveryTime} minutes</h4>
    </div>
  );
};
```

The code above is not good because we're using a lot of dot notations to access data. So we can use destructuring to get rid of those things.

```js
const RestaurantCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resData?.info;

  const { deliveryTime } = resData?.info.sla;
  return (
    <div className="res-card" style={styleCard}>
      <img
        className="res-img"
        alt="res-card"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
      />
      <h3>{name}</h3>
      <h4>{cuisines}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};
```

This piece of code can be refactored as well:

```js
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard resData={resList[0]} />
        <RestaurantCard resData={resList[1]} />
        <RestaurantCard resData={resList[2]} />
        <RestaurantCard resData={resList[3]} />
        <RestaurantCard resData={resList[4]} />
        <RestaurantCard resData={resList[5]} />
        <RestaurantCard resData={resList[6]} />
        <RestaurantCard resData={resList[7]} />
        <RestaurantCard resData={resList[8]} />
      </div>
    </div>
  );
};
```

We neeed to use the map array method because is the standard and it uses the principle of functional programming.

```js
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resList.map((restaurant) => (
          <RestaurantCard resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
```

If we leave it like that we would have a warning in the console saying: Each child in a list should have a unique 'key' prop. You can't ignore any warning, so we need to solve this. Unique key property means that each item of this list should be uniquely represented whenever you're looping through any list.

```js
const Body = () => {
  return (
    <div className="body">
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

### Why we need keys?

Let's suppose we have a card container element and we have a lot of childrens. Those childrens are the restaurant cards which are at the same level. These components need to have unique ids. Let's suppose we have 4 restaurant components or cards and they don't have ids, and a new restaurant gets introduced, React will rerender all the restaurant cards because React wouldn't know which restaurant card is new. React can't identify the cards by itself. So React won't know if that new card that got inserted is the second one or the third one. It won't be able to put that card in the correct spot so it will render everything. It's possible that more cards get inserted at another places, so, React just cleans the container and rerenders all the cards altogether. React will treat all the restaurant cards as the same.
It will be different if every card has a unique id and another card gets inserted in the first place with a unique id as well, React will know that the card that got inserted is in the first place with its unique id, and with that information will render just that card instead of rendering all like with the previous example. This is a huge optimization while writing code. Suppose if you're building infinte scroll or suppose you're building a restaurant list where there are hundreds of restaurants in the page. So if React had to render everything again it would be a bad thing because it will impact performance.

Some people when using a method like map uses indexes like 0, 1, 2, 3, etc. for the elements inside the array you're attaching the method to. And that index is the second property of the map method:

```js
const Body = () => {
  return (
    <div className="body">
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

Some people use that index as the key. It might seem right at first glance but is not a good practice because the order of items might change. In the official docs of React says the index as a key is an anti-pattern. It's not recommended. If you don't have a unique id then use the index property because it's better than not using anything. Use index as a last resort. Not putting a key is not acceptable.

```js
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resList.map((restaurant, index) => (
          <RestaurantCard key={index} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
```
