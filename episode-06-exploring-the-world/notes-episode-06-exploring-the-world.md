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
