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
      <h3>Name Foods</h3>
      <h4>Biryani, North Indian, Asian</h4>
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
