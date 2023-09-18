import React from "react";
import ReactDOM from "react-dom/client";
import ball from "./ball.svg";
import user from "./user.svg";

// const heading = React.createElement(
//   "div",
//   { class: "title" },
//   React.createElement("h1", { id: "h1" }, "Main heading"),
//   React.createElement("h2", { id: "h2" }, "Subheading 1"),
//   React.createElement("h3", { id: "h3" }, "Sub-subheading 1")
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// const heading = (
//   <div className="title">
//     <h1>Main heading</h1>
//     <h2>Subheading 1</h2>
//     <h3>Sub-subheading 1</h3>
//   </div>
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// const Heading = () => {
//   const heading1 = "Main heading";
//   const heading2 = "Subheading 1";
//   const heading3 = "Sub-subheading 1";
//   return (
//     <div className="title">
//       <h1>{heading1}</h1>
//       <h2>{heading2}</h2>
//       <h3>{heading3}</h3>
//     </div>
//   );
// };

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Heading />);

// const Title = () => <h1>Hello</h1>;

// const Container = () => (
//   <div className="container">
//     <Title />
//   </div>
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Container />);

// const TitleComponent = () => <h1>This is a title component!</h1>;

// const Container = () => <div>{<TitleComponent />}</div>;

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Container />);

// const TitleComponent = () => <h1>This is a title component!</h1>;

// const Container = () => <div>{<TitleComponent></TitleComponent>}</div>;

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Container />);

// const TitleComponent = () => <h1>This is a title component!</h1>;

// const Container = () => <div>{TitleComponent()}</div>;

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Container />);

const Header = () => {
  return (
    <header>
      <img src={ball} alt="Ball logo" />
      <input type="text" />
      <img src={user} alt="User icon" />
    </header>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header />);
