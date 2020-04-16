import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./spinner"

class App extends React.Component {
  // Constructor function particular to javascript not react;
  // the very first function to be called when a new intance of the component is created.
  // Generally not recommended to do data loading inside of the constructor; Makes the code clearer than having it spread across componentDidMount and constructor.
  //   constructor(props) {
  //     // We are borrowing functionality from react component base class; Must call super to make sure that we are able to call the constructor function from the parent component
  //     // Must be done everytime
  //     super(props);
  //     // null is used because we don't know what our latitude is yet but we will
  //     // This is the only time we do direct assigment to this.state
  //     this.state = { lat: null, errorMessage: "" };
  //   }
  // This is a shorter way of using JSX to initialize state; Doesn't use a constructor function. Babel will translate it to a constructor function for us.
  state = { lat: null, errorMessage: "" };
  // Good place to do data loading!
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      // To update our state, we called setState. ALways!
      // We never write this.state.lat = position.coords.latitude. Never do direct assignments to this.state
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  // good place to do more data loading when state or props change
  //   componentDidUpdate() {
  //     console.log("my component was just updated and re-rendered.");
  //   }

  // React requires render be defined; it gets called all the time so don't initialize some work or request in render
  // Render is called twice in this app: once when the application is intiialized and again when we update a property on our state object
  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }

    return <Spinner />;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
