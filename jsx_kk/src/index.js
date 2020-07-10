// import the react and reactdom libraries
import React from "react";
import ReactDOM from "react-dom";

// We can create a new function to replace buttonText

function getButtonText() {
	return "Click me!";
}

// Create a react component
const App = () => {
	return (
		<div>
			{/* We have to use className instead of class to prevent key word clashes; Might change
in the future. */}
			<label className="label" htmlFor="name">
				Enter name:
			</label>
			<input id="name" type="text" />
			{/* <button style='background-color: blue; color: white;'>Submit</button>  will give you an error 
    because it is written in html and not jsx*/}
			<button style={{ backgroundColor: "blue", color: "white" }}>
				{/* Add the parantheses to actually call the function */}
				{getButtonText()}
			</button>
		</div>
	);
};
// Take the react component and render it to the screen.
// App is the component and the root is where we want it shown
ReactDOM.render(<App />, document.querySelector("#root"));
