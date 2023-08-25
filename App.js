import React from "react";
import ReactDOM from "react-dom/client";
/**
 * 
 * <div id='parent'>
 *      <div id='child'>
 *          <h1>I'm h1 tag</h1> 
 *      </div>
 * </div>
 * 
 *  ReactElement(Object) => HTML(Browser understands)
 */

const parent = React.createElement('div', { id: 'parent' },
    [React.createElement('div', { id: 'child' },
        [React.createElement('h1', {}, 'I\'m an h1 element'),
        React.createElement('h2', {}, 'I\'m an h2 element')]
    ), React.createElement('div', { id: 'child' },
        [React.createElement('h1', {}, 'I\'m an h1 element'),
        React.createElement('h2', {}, 'I\'m an h2 element')]
    )]
);

console.log(parent);
// const heading = React.createElement('h1', { id: 'heading' }, 'Hello World from React');
const root = ReactDOM.createRoot(document.getElementById('header'));
root.render(parent);