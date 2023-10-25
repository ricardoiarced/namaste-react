# Namaste React - Episode 05

## Table of contents

- [Theory](#theory)
  - [What is a microservice?](#what-is-a-microservice)
  - [What is Monolith architecture?](#what-is-monolith-architecture)
  - [What is the difference between Monolith and Microservices architecture?](#what-is-the-difference-between-monolith-and-microservices-architecture)
  - [Why do we need a useEffect Hook?](#why-do-we-need-a-useeffect-hook)
  - [What is optional chaining?](#what-is-optional-chaining)
  - [What is Shimmer UI?](#what-is-shimmer-ui)
  - [What is the difference between JS expression and JS statement?](#what-is-the-difference-between-js-expression-and-js-statement)
  - [What is conditional rendering?](#what-is-conditional-rendering)
  - [What is CORS?](#what-is-cors)
  - [What are async and await?](#what-are-async-and-await)
  - [What is the use of 'const json = await data.json();' in getRestaurants()?](#what-is-the-use-of-const-json--await-datajson-in-getrestaurants)
- [Notes from episode 06 - Exploring the World!](#notes-from-episode-06---exploring-the-world)
  - [Microservices architecture](#microservices-architecture)
  - [How do the services of microservices architecture interact with each other?](#how-do-the-services-of-microservices-architecture-interact-with-each-other)
  - [Every microservice might be built in a specific language](#every-microservice-might-be-built-in-a-specific-language)
  - [There are two ways in which apps can fetch data from backend](#there-are-two-ways-in-which-apps-can-fetch-data-from-backend)
  - [Syntax of useEffect hook](#syntax-of-useeffect-hook)
  - [Why did can't we access the swiggy API through fetch?](#why-did-cant-we-access-the-swiggy-api-through-fetch)
  - [How can we get rid of this CORS?](#how-can-we-get-rid-of-this-cors)
  - [How can we improve the experience even more?](#how-can-we-improve-the-experience-even-more)
  - [Is showing an spinner a good way to improve experience?](#is-showing-an-spinner-a-good-way-to-improve-experience)
  - [What is conditional rendering?](#what-is-conditional-rendering-1)
  - [Why do we even need state variables?](#why-do-we-even-need-state-variables)
  - [Let's talk more about useState hook](#lets-talk-more-about-usestate-hook)
  - [Input](#input)
  - [What is happening when we type letter by letter in our search bar?](#what-is-happening-when-we-type-letter-by-letter-in-our-search-bar)
  - [How to filter out when clicking the button search?](#how-to-filter-out-when-clicking-the-button-search)

## Theory

### What is a microservice?

Is an architechtural and organizational approach to software development where an application is divided into small independent services that communicate over well-defined APIs.

### What is Monolith architecture?

Is a software application where all the components and features are tightly integrated into a single codebase and run as a single application. It's like having a big, self-contained software package where everything, from the user interface to the database access, is part of the same program.

### What is the difference between Monolith and Microservices architecture?

The difference lies in how the application is structured and how its components interact with each other.

1. Architecture:

- Monolith: In a monolithic architecture, the entire application is designed as a single, tightly integrated unit. All components (e.g., database, server, user interface) are interconnected and run as a single service.
- Microservices: In a microservices architecture, the application is broken down into small, independent services that communicate with each other through well-defined APIs. Each service is a separate unit with its own database and can be developed, deployed, and scaled independently.

2.  Scalability:

- Monolith: Scaling a monolith usually involves duplicating the entire application, which can be inefficient as not all parts may need scaling.
- Microservices: Scaling can be more efficient in microservices as you can scale only the services that require additional resources, leading to better resource utilization.

3.  Development and Deployment:

- Monolith: Development and deployment of a monolith involve working on the entire codebase. This can be simpler but may lead to longer development and deployment cycles.
- Microservices: Microservices allow for independent development and deployment of each service. Teams can work on different services simultaneously, which can result in faster development and deployment cycles.

4. Technology Stack:

- Monolith: Typically, a monolith uses a single technology stack for the entire application.
- Microservices: Each microservice can use its own technology stack, allowing teams to choose the best tools for the specific service requirements.

5. Failure Impact:

- Monolith: If a component in a monolith fails, it can potentially bring down the entire application.
- Microservices: Failures are more isolated in microservices. If one service fails, it doesn't necessarily affect the entire application, and other services can continue to function.

6. Ease of Understanding and Maintenance:

- Monolith: Understanding the entire monolithic codebase might be easier, but maintenance can become challenging as the codebase grows.
- Microservices: Each microservice has a smaller codebase, making it more manageable. However, understanding the entire system may require knowledge of the interactions between different services.

### Why do we need a useEffect Hook?

We use useEffect hook in React to perform side effects in functional components. Side effects refer to any operation that doesn't directly affect the rendering of the component but might involve data fetching, subscriptions, manually changing the DOM, or any other asynchronous tasks.

1. Fetching Data: If your component needs to fetch data from an API or a server, useEffect is a suitable place to put that logic. This helps in keeping the data fetching separate from the rendering logic.

```js
useEffect(() => {
  // Fetch data from an API
  fetchData();
}, []); // Empty dependency array ensures that this effect runs once after the initial render
```

2. Subscriptions: If your component needs to subscribe to some external event or data source, useEffect can be used to set up and clean up those subscriptions.

```js
useEffect(() => {
  const subscription = subscribeToEvent();

  return () => {
    // Cleanup subscription when the component is unmounted
    subscription.unsubscribe();
  };
}, []);
```

3. Updating the DOM: If you need to interact with the DOM directly, such as manipulating the title of the page or focusing on an input field, useEffect is the right place to perform these actions.

```js
useEffect(() => {
  document.title = "Updated Title";
}, []);
```

4. Managing Lifecycle Events: useEffect can be used to mimic lifecycle events in functional components, such as componentDidMount, componentDidUpdate, and componentWillUnmount.

```js
useEffect(() => {
  // Code to run after every render
  console.log("Component Updated");

  return () => {
    // Code to run when the component is unmounted
    console.log("Component Will Unmount");
  };
});
```

### What is optional chaining?

Is an operator represented by the question mark ('?') that allows you to access properties or methods of an object without explicitly checking if each level of the nested structure exists. This is particularly useful when dealing with nested objects or accessing properties that might be undefined or null.

```js
// Without optional chaining
if (obj && obj.property && obj.property.method) {
  // do something with obj.property.method
} else {
  // handle the case where obj, obj.property, or obj.property.method is null or undefined
}

// With optional chaining
const result = obj?.property?.method; // If any of obj, obj.property, or obj.property.method is null or undefined, result will be undefined
```

### What is Shimmer UI?

a Shimmer UI (User Interface) is a placeholder or loading animation that is used to indicate that content is being loaded. Instead of displaying a blank or static screen while waiting for data to load, developers use shimmer effects to create a subtle animation that gives users a visual cue that something is happening in the background.

A typical shimmer effect consists of a light and dark pattern that moves or shimmers over the area where the content will appear. This animation helps users understand that the application is working on fetching or processing data, and it gives a sense of progress.

### What is the difference between JS expression and JS statement?

1. A JavaScript expression is a piece of code that produces a value.

2. A JavaScript statement is a larger organizational unit that performs an action. It doesn't necessarily produce a value.

```js
// Expression
let sum = 2 + 3; // The expression 2 + 3 produces the value 5, assigned to the variable sum.

// Statement
if (sum === 5) {
  console.log("The sum is 5."); // The if statement is a control flow statement.
}
```

### What is conditional rendering?

Is the process of rendering different content or components based on certain conditions. It allows you to control what is displayed to the user based on the state of your application or other variables.

```js
import React, { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      {isLoggedIn ? <p>Welcome, User!</p> : <p>Please log in to continue.</p>}
    </div>
  );
}

export default App;
```

### What is CORS?

CORS stands for Cross Origin Resource Sharing. CORS is a mechanism which uses additional HTTP headers to tell the browser whether a specific web app can share resource with another web app and both web apps should have different origin. If both web apps have the same origin sharing resources is easy but we use CORS mechanism to share resources otherwise.

A while ago requesting data from one origin (ricardoiarced.com) to another(google.com/api/getdata) wasn't allowed. And this applies for sub domains as well. It wasn't allowed to request data to sub domains either. This also applies for ports, you couldn't request data from one port to another. This applies as well for different protocols, so you couldn't request data from one protocol (https) to another (httpp://ricardo.com).

A preflight options call is made before the actual API call is made.

### What are async and await?

Async makes your function asynchronous which your code now doesn't need to wait to execute other lines of code. Then we use await inside the async function to wait for a promise to settle and return its result. Most asynchronous operations returns a promise. And a promise is a special object representing the eventual completion or failure of an asynchronous operation.

```js
async function fetchData() {
  const result = await someAsyncOperation();
  // continue with the result
}
```

### What is the use of 'const json = await data.json();' in getRestaurants()?

Basically we're waiting for a promise to settle and return the actual data of the restaurants from Swiggy's API.

## Notes from episode 06 - Exploring the World!

### Microservices architecture

When we have different projects for every important part of the app. For example, having the backend in one project, having the frontend in another project, the storage in another project, authentication in another project. This is known as separation of concerns and single responsibility principle where each and every service has its own job. So teams can work in their own github repository without interfering with other parts of the project.

### How do the services of microservices architecture interact with each other?

The backend needs to talk to the UI, and the other way around. The backend needs to talk to the database, etc. Chatgpt told me that microservices interact with each other through an API.

### Every microservice might be built in a specific language

This depends of the use case of the application.

**Every microservice can be deployed in different ports to work with**

For example: the UI can be at port 1234, the backend at 1000, etc.

And to interact or connect with each other they make calls to each port or URL that are parts of the main domain of the app.

### There are two ways in which apps can fetch data from backend

1. In the first approach as soon as the page loads, the UI makes and API call to render the UI with data. Let's suppose the page spent 500 ms to show the UI with rendered data.

2. In the second approach as soon as the page loads the UI renders, so whatever is inside at that time gets to render, let's say the app skeleton, then after that, the UI makes an API call to rerender the UI with the new data once again.

**React has one of the best render mechanisms**, so it doesn't matter if the UI renders twice using the second approach. With the second approach we improve user experience (UX) and we're going to use this approach always when working with React.

### Syntax of useEffect hook

useEffect is called as a function, and useEffect will take two arguments. The first argument is a callback function, and the second argument is a dependency array.

Example:

```js
useEffect(() => {
  console.log("useEffect called");
}, []);
```

Here, as soon as the component renders in the UI, the callback function of the useEffect hook will be called. If you have to do something after rendering the component you have to write it inside useEffect.

**To implement our second approach useEffect will be useful!**

So we will fetch the data inside useEffect:

```js
useEffect(() => {
  fetchData();
}, []);
```

### Why did can't we access the swiggy API through fetch?

Because it says that our access has been blocked by CORS policy. Akshay says that our browsers block us to call APIs from one origin to another. Chrome is blocking us to call Swiggy's API from localhost, from one origin to another origin. If there is an origin mismatch the browser blocks the API call.

### How can we get rid of this CORS?

We need to get an extension. For Chrome is Allow CORS: Access-Control-Allow-Origin. Once we get it we need to activate it.

Now we can access the data and we can get rid of mock data like this:

```js
const [listOfRestaurants, setListOfRestaurants] = useState([]);
useEffect(() => {
  fetchData();
}, []);

const fetchData = async () => {
  const data = await fetch(
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
  );

  const json = await data.json();

  console.log(json);
  setListOfRestaurants(
    json.data.cards[5].card.card.gridElements.infoWithStyle.restaurants
  );
};
```

Now, our page with our body will be rendered and after a few seconds our body will be populated with our data coming from swiggy's API. But we're not handling the data, so we need to use optional chaining.

Example with optional chaining:

```js
const [listOfRestaurants, setListOfRestaurants] = useState([]);
useEffect(() => {
  fetchData();
}, []);

const fetchData = async () => {
  const data = await fetch(
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
  );

  const json = await data.json();
  setListOfRestaurants(
    json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
  );
};
```

### How can we improve the experience even more?

We can write a logic to render a spinner to tell the user that the UI is loading.

```js
if (listOfRestaurants.length === 0) {
  return <h1>Loading....</h1>;
}

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
    <div className="res-container">
      {listOfRestaurants.map((restaurant) => (
        <RestaurantCard key={restaurant.info.id} resData={restaurant} />
      ))}
    </div>
  </div>
);
```

Above is the logic for showing Loading... if the listOfRestaurants = 0. We added an if statement before the return of the Restaurants. We returned just an h1 tag with the text Loading...

### Is showing an spinner a good way to improve experience?

No, that's not a good way. There is a concept known as shimmer UI. And Akshay says that it logs a fake page until we log the data from the API.

**Shimmer UI has a psychological effect because we have made an impression of what is comming as soon as the fake cards disappear and the good ones appear with the populated data.**

### What is conditional rendering?

When you render some piece of JSX according to a condition.

Example:

```js
if (listOfRestaurants.length === 0) {
  return <Shimmer />;
}
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
    <div className="res-container">
      {listOfRestaurants?.map((restaurant) => (
        <RestaurantCard key={restaurant.info.id} resData={restaurant} />
      ))}
    </div>
  </div>
);
```

The code above is an example of conditional rendering.

We can simplify that using the ternary operator:

```js
return listOfRestaurants?.length === 0 ? (
  <Shimmer />
) : (
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
    <div className="res-container">
      {listOfRestaurants?.map((restaurant) => (
        <RestaurantCard key={restaurant.info.id} resData={restaurant} />
      ))}
    </div>
  </div>
);
```

### Why do we even need state variables?

Because if we were to use normal javascript variables and try to update the UI it won't work. We neeed something to update the UI.

### Let's talk more about useState hook

We need a state variable to update for example the text of a button like this:

```js
const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("login");
  console.log("Header rendered");

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              setBtnNameReact("logout");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};
```

Here, once we click in the button, the setBtnNameReact will change the state variable to 'logout' and therefore our Header component will be rerendered once again with the new value 'logout' text as part of the button but it will efficiently update only the text content of the button in the DOM.

Here we have a little tweak:

```js
const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("login");
  console.log("Header rendered");

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              btnNameReact === "login"
                ? setBtnNameReact("logout")
                : setBtnNameReact("login");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};
```

Now, this code will change interchangeably from login to logout whenever we click on the button. So the Header component will be rendered everytime but just the button will be updated. The code of the Header component will be called over and over again as we click on the button.

### Input

To filter our restaurants when we type something on an input and click search. We need to attach a onClick event in the button and we need to bind a state variable to the value attribute of our input.

```js
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    console.log(json);
    setListOfRestaurants(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return listOfRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input type="text" className="search-box" value={searchText} />
          <button
            onClick={() => {
              // filter the restaurant cards and update the UI
              // searchText
              console.log(searchText);
            }}
          >
            Search
          </button>
        </div>
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
      <div className="res-container">
        {listOfRestaurants?.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
```

With the code above if we try to type something on the search bar won't work because we have bound the state variable to the value attribute of our input and the state variable is empty. Therefore if we don't change the value of our state variable the input value attribute won't change either. To solve that we need to use an onChange event on the input.

```js
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    console.log(json);
    setListOfRestaurants(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return listOfRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              // filter the restaurant cards and update the UI
              // searchText
              console.log(searchText);
            }}
          >
            Search
          </button>
        </div>
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
      <div className="res-container">
        {listOfRestaurants?.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
```

With this tweak our search bar will work now, so we can type now. We bound the state variable searchText to our value attribute of our input, then we added an onChange event on the input and we added our setState function there to change the value of our state variable as we write something in the search bar, therefore we used the event parameter to use the current value of that input element. And when we click on the button we can see our state variable searchText with the new value in the console.

### What is happening when we type letter by letter in our search bar?

Behind the scenes as soon as we write something, a letter and then another letter, we're changing our state variable searchText on every key press. **Remember this: Whenever you change a local state variable in our case is searchText React rerenders the component, so in every key press React rerenders the Body component**

**Whenever a state variable updates or changes, React triggers a reconciliation cycle (re-renders the component)**

### How to filter out when clicking the button search?

```js
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  console.log("Body rendered");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    console.log(json);
    setListOfRestaurants(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return listOfRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              // filter the restaurant cards and update the UI
              // searchText
              console.log(searchText);

              const filteredRestaurant = listOfRestaurants.filter(
                (restaurant) =>
                  restaurant.info.name.toLowerCase().includes(searchText)
              );

              setListOfRestaurants(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
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
      <div className="res-container">
        {listOfRestaurants?.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
```

The code above has the implementation to filter out restaurants based on our search when we click the button search.

**People who code slow doesn't need to debug their code or they spend just little time debugging. And the people who code fast will take a lot of time to debug**
