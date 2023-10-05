### Monolith architecture

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

useEffect is called as a function, and useEffect will take two arguments. The first argument is an arrow function as a callback function, and the second argument is a dependency array.

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
