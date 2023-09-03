- [Notes from episode 03 - Laying the Foundation](#what-means-npx-parcel-indexhtml) - [What means npx parcel index.html?](#what-means-npx-parcel-indexhtml) - [How we can create a script build for development and for production?](#how-we-can-create-a-script-build-for-development-and-for-production) - [What are DOM elements?](#what-are-dom-elements)

## Notes from Episode 03 - Laying the Foundation

### What means npx parcel index.html?

This means that we're executing a npm package, in this case Parcel and we give the source files to index.html.

### How we can create a script build for development and for production?

Inside our package.json, in scripts, we add:

```json
{
  "scripts": {
    "start": "parcel index.html",
    "build": "parcel build index.html"
  }
}
```

Is a standard convention in the industry to create npm scripts. So if you were to work for a company and you don't know how to run the project, go to the package.json file and in scripts you will find everything to run your project :D.

### How do we run the scripts for development and for production?

We execute this command for development mode:

```
npm run start
```

or

```
npm start
```

And this one for production:

```
npm run build
```

So it will execute behind the scenes Parcel to generate our development environment with our bundle, and also our bundle for production ready depending on what command we use.

### What are DOM elements?

Are HTML elements.

### What are React elements?

Are kind of the same as DOM elements but it is an object.

```js
const heading = React.createElement("h1", { id: "heading" }, "Namaste React");
```

This creates an object.

**When we render this element into the DOM, it becomes an HTML element**

To render the element, first we need to create a root, and whatever happens inside React happens inside the root as well.

```js
const root = ReactDOM.createRoot(document.getElementById("root"));
```

This is how we create a root. The root element is a div inside our HTML and that element will be the container for whatever we code in React.

And now, to render the element we just need to add this line:

```js
root.render(heading);
```

So when we add this line and run our app, ReactDOM takes the object created by React.createElement and pushes to the browser. So it will put inside the root id element whatever we render from root.render, and if there were something inside the root id element before rendering something in our HTML, it will replace whatever it is at that moment.

### How we can know if something is happening with our rendering using plain React?

Inside the root id element, it is a best practice to put an h1 or something to write 'Not rendered', so if there were a bug in your react code or the rendered is not happening for some reason you will see in your screen 'Not rendered'. And when you fix the problem, you'll see whatever you use to replace 'Not rendered' with.

### Why JSX was created?

React developers realized that if we're going to create an h1 tag or divs and spans like that, this is not going to work, so, it is not a good way to create our browser elements. It is not developer friendly. To help the developers community they created something known as JSX

### What is JSX?

JSX is a different syntax which is easier to create React elements. A lot of developers think that JSX is part of React and that's not true, JSX is different. We can write React without JSX also, I can build big applications without using JSX but JSX makes our development life easier, and that's why we use JSX. So we came to a conclussion that JSX is separte from React. JSX is HTML-like or XML-like syntax.

### How did we use to build our app before any library or framework came out to the market?

We used to have HTML files, we used to have CSS files and JavaScript files. We used to write our markup inside our HTML. We used to write our logic inside JavaScript files.

### What does JSX try improve?

React tries to merge everything, HTML and JavaScript, so, we can do the same thing in one file. JSX is a convention where we can merge HTML and JavaScript together.

Here is how we can use JSX:

```js
const jsxHeading = <h1 id="heading">Namaste React using JSX</h1>;
```

**JSX is not HTML inside JavaScript!**

So, our code above is JSX not HTML. And when that line of code is executed becomes a React element, so, jsxHeading is a React element. We can say that code is equivalent to this code:

```js
const heading = React.createElement("h1", { id: "heading" }, "Namaste React");
```

So, with this code we create a React element using pure React and the other one is creating a React element using JSX.

### Do we write code for humans or machines?

We write code for both humans and machines but first for humans and then for machines. And that's because when your're working on a project you will be working with another developers, so you will be writing code for other people. They should read our code and understand. If we were writing code for machines we would need to write it in binary. We're writing it in React beacuse developers can understand it, and we're not writing in binary or low-level languages. Because code is for humans and then for machines.

Whenever we are writing code a good library or framework is such that makes developers life easier.

That's why Facebook engineers realized that pure React code was difficult to understand and the syntax wasn't friendly. Therefore they created JSX.

### How do we render JSX to our browser?

The same as we were doing it:

```js
root.render(jsxHeading);
```

and our code looks cleaner.

### Does the JSX syntax we wrote before is valid JavaScript?

The previous code:

```js
const jsxHeading = <h1 id="heading">Namaste React using JSX</h1>;
```

This is not a valid JavaScript code. It's a tricky one because it is valid but it is also not. The reason is because this is not pure JavaScript, so, does not come built inside it. Your JS engines don't understand JSX. Any piece of JavaScript code is such that JS engines understand it. JS engines understand a language called ECMAScript which is pure JavaScript.

### If we put the same code stored in jsxHeading inside our developer console will throw an error?

Yes, it will throw a SyntaxError: unexpected token '<'

### Why then is working our code inside the browser?

That's because Parcel is doing the job behind the scenes, even before that code (JSX) goes to the browser or JS engine, it is transpiled before it goes to the JS engine, and then JS engine receives the code that browsers can understand.

### What means transpile?

Means that code you selected is converted to code that browsers can understand

### Does ReactDOM understand whatever you pass to root.render?

No, because first needs to be transpiled to understands it. It is transpiled by Parcel.

### Parcel do all everything by itself?

No, Parcel is like a manager, Parcel is a beast! It has its own dependencies that do things for Parcel, and Parcel gives the job of transpilation to one package known as Babel. So when we make a change and save our file Parcel builds the project and as the same time Babel converts the code to the one that React understands. So, Babel does transpilation.

### What's Babel?

Babel is a compiler known as well as a transpiler, which takes your code and converts it to another code that browsers understand and that React understand. The job of Babel here is to transpile or convert JSX into React code.

### How does JSX work?

When you give JSX code is transpiled to React.createElement. And React.createElement give us a JS object. And that JS object (React element) is rendered to the DOM as an HTML element. JSX behind the scenes is React.createElement.

### Differences between JSX and HTML

On HTML you can assign a class like this:

```html
<div class="root"></div>
```

But on JSX you can do the same like this:

```js
const heading = <div className="root"></div>;
```

So is a slightly difference.

### If you have to give attributes on JSX how will you do that?

If I have to give attributes using JSX I have to use camel case.

Homework:
How do I write an img tag inside JSX? Explore different attributes of different tags.

How do I write src attribute inside an img tag using JSX?

How do I write href attribute inside an anchor tag using JSX?

### What will we need to do if we want to write JSX in multiple lines instead of one line?

We need to wrap the code between parenthesis:

```js
const jsxHeading = <h1 className="head">Namaste React using JSX</h1>;
```

We need to tell Babel where our JSX is starting and where is ending.

### What is a React component?

Everything is a component in React. A header is a component, a card is a component, a footer is a component, a heading is a component, a title is a component.

There are two types of components in React:

- Class Based Component: Old way of writing code. we use JavaScript classes to build components.

- Functional Component: New way of writing code, and we use functions to create components.

A React functional component is just a normal JavaScript function which returns a piece of JSX. It also returns a React element or more than one React element.

### Why do we need to start with a capital letter when creating a component in React?

Because if not, you will get an error.

### How do we create a functional component?

We create it by typing this:

```js
const HeadingComponent = () => {
  return <h1>Namaste React Functional Component</h1>;
};
```

Or like this:

```js
const HeadingComponent = () => <h1>Namaste React Functional Component</h1>;
```

Those two are doing the same thing.

For a functional component returning multiple components we can write something like this:

```js
const HeadingComponent = () => {
  return (
    <div id="container">
      <h1 className="heading">Namaste React Functional Component</h1>
    </div>
  );
};
```

This is called a nested functional component.

That's why JSX makes our life easier.

### How can we render a React functional component?

```js
root.render(<HeadingComponent />);
```

All the components need to be rendered like that. This is the syntax that Babel understands.

### How do we render a component inside another component?

We do it like this:

```js
const Title = () => (
  <h1 className="head" tabIndex="5">
    Namaste React using JSX
  </h1>
);

const HeadingComponent = () => (
  <div id="container">
    <Title />
    <h1>Namaste React Functional Component</h1>
  </div>
);

root.render(<HeadingComponent />);
```

**This is known as component composition**.

Babel is transpiling all the code from the components into normal React code, and React is rendering the code to browsers to understand. Browsers don't care about it, they just need HTML to render. So root.render() is converting everything to HTML so the browser can render. So, when we nest one component inside another we're doing component composition.

### Can we create functional components using a function expression?

Yes, we can do it like this:

```js
const Title = function () {
  return (
    <h1 className="head" tabIndex="5">
      Namaste React using JSX
    </h1>
  );
};
```

But Akshay says that the industry standard is to use arrow functions now.

### What is the superpowers of JSX?

In JSX if you write curly braces, inside the curly braces you can run any piece of JavaScript expression. So, you can write any JavaScript expression.

**Example:**

```js
const number = 10000;

// React component
const HeadingComponent = () => (
  <div id="container">
    <h1>{number}</h1>
    <Title text="hello" />
    <h1>Namaste React Functional Component</h1>
  </div>
);
```

Writing JavaScript inside JSX is a very powerful thing.

### How can we put a React element inside a component?

We need to use the same convention as before, like using curly braces:

```js
const title = (
  <h1 className="head" tabIndex="5">
    hello
  </h1>
);

// React component
const HeadingComponent = () => (
  <div id="container">
    <h1>{title}</h1>
    <h1>Namaste React Functional Component</h1>
  </div>
);
```

### Can we put a component inside a React element?

Yes, we can do it like this:

```js
const HeadingComponent = () => (
  <div id="container">
    <h1>Namaste React Functional Component</h1>
  </div>
);

const title = (
  <div className="head" tabIndex="5">
    <HeadingComponent />
  </div>
);
```

We can mix whatever we want inside one another. This is a beutiful thing of JSX.

### Example of a malicious API

Let's suppose we're calling an API, so we're getting data from that, and executing that data or whatever we're receiving from the API:

```js
const data = api.getData();

const HeadingComponent = () => (
  <div id="container">
    {data}
    <h1>Namaste React Functional Component</h1>
  </div>
);
```

So, that API is a malicious one. This is known as XSS or Cross Site Scripting where an attacker can execute malicious code. In our case the attacker could read our cookies, local storage, and so many information about your computer.

But JSX is so amazing that takes care of these injection attacks. Therefore if that API passes some malicious scripts inside our code JSX will skip it, JSX is sanitizing your data inside your data variable between curly braces. So whatever comes in JSX sanitze the data and then passes.

### Types of syntax for a nested component

```js
const Title = () => (
  <h1 className="head" tabIndex="5">
    hello
  </h1>
);

const HeadingComponent = () => (
  <div id="container">
    <Title />
    <Title></Title>
    <h1>Namaste React Functional Component</h1>
  </div>
);
```

The Title component was inserted two times but differently, and it won't show any change in our browser, it will still be the same. So, those two types of inserting components are the same.

We can also achieved the same by doing this:

```js
const Title = () => (
  <h1 className="head" tabIndex="5">
    hello
  </h1>
);

const HeadingComponent = () => (
  <div id="container">
    {Title()}
    <h1>Namaste React Functional Component</h1>
  </div>
);
```

We're calling the Title component as a function because is a normal function so we can call it like that.

### Why your React code is readable?

Because we're writing JSX. And JSX is not React. If your code is readable is because you're using JSX. React does not make your code more readable.
