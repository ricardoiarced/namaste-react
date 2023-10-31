### What happens if we use the useEffect hook without a dependency array?

The useEffect hook will be called on every render of the component.

### What happens if we use the useEffect hook with an empty dependency array?

The useEffect hook will be called on initial render (just once)

### What if we put something inside the dependency array?

Then, the useEffect hook will be called when the dependency changes.

### What happens if you call your useState hook outside of your component?

React will throw an error telling you that is an invalid hook call.

**Always call your hooks at the top of your components because JavaScript is a single threaded language, so it's a good practice to do that and also React understands properly.**

**Never create your state variables inside an if else eventhough is valid, it might create inconsistencies in your program**

**Never create your state variables inside a for loop or inside a function**

### What can we use to implement routing into our app?

We can use react-router-dom libray to do that.

### What's the point of createBrowserRouter?

It is a router. You can select a router depending the requirements of your app. In this case, createBrowserRouter uses the DOM History API to keep the UI in sync with the URL.

### Why we use RouterProvider?

We use it because we need to pass all data router objects to render the app and enable the rest of the data APIs.

### Example using createBrowserRouter and RouterProvider

```js
import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./About";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
```

So with the code above we can go to a new page on localhost:1234/about and it will render that page perfectly! And we can go back to our home page as well because of the router object we defined above.

### React router gives us a default eror page?

Yes. It will show that page whenever we write some path that doesn't exist in our app.

### Important hook that React router gives us access to

And it is the useRouterError hook. And this gives us more information about the error, and we can show a specific detail to users

Here is an implementation of this hook:

```js
import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      <h1>Oops!!!</h1>
      <h2>Something went wrong!!</h2>
      <h3>
        {err.status}: {err.statusText}
      </h3>
    </div>
  );
};

export default Error;
```

```js
import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./About";
import Contact from "./components/Contact";
import Error from "./Error";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
```

There are two files, one is the error component and the other is the App file.
