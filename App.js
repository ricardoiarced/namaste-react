import React from "react";
import ReactDOM from "react-dom/client";

// JSX (transpiled before it reaches the JS) - PARCEL - Babel

// JSX => Babel transpiles it to React.createElement => React.createElement => ReactElement.JS Object => HTMLElement(render)

// React Element
const Title = () => (
        <h1 className="head" tabIndex="5">hello</h1>
);

// React component
const HeadingComponent = () =>  (
    <div id="container">
       <Title></Title>
            <h1>Namaste React Functional Component</h1>
        </div>
    );
    
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<HeadingComponent/>);