import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
// Constructor function particular to javascript not react; 
// the very first function to be called when a new intance of the component is created.
    constructor(props) {
        // We are borrowing functionality from react component base class; Must call super to make sure that we are able to call the constructor function from the parent component
        // Must be done everytime
        super(props);
        // null is used because we don't know what our latitude is yet but we will
        // This is the only time we do direct assigment to this.state
        this.state = {lat: null};

        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                // To update our state, we called setState. ALways!
                this.setState({lat: position.coords.latitude});
                // We never write this.state.lat = position.coords.latitude. Never do direct assignments to this.state
            },
            (err) => console.log(err)
          );
  }
  
//   React requires render be defined; it gets called all the time so don't initialize some work or request in render
  render() {
    
    return <div>Latitude: {this.state.lat}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
