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
