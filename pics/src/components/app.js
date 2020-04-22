import React from "react";
import axios from "axios";
import unsplash from "../api/unslash";
import SearchBar from "./SearchBar";
// import dotenv from "dotenv";
// dotenv.config();


// const App = () => {
//   return (
//   <div className="ui container" style={{ marginTop: '10px'}}>
//     <SearchBar />
//   </div>
//   );
// };

// Rewrote the above const to the below class function
class App extends React.Component {
  // adding a state with an empty array
  state = { 
    images: [],
    counter: 0
  };
  // use the async/allow syntax. async is an alternate method to promise.
  onSeachSubmit = async (term) => {
    const response = await unsplash.get("/search/photos", {
      params: { query: term }
    });
    console.log(response.data);
    // We make a request to unsplash, pull out results and  set it on our state object. This will cause the app to re-render
    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        {console.log('test', this.state.images.length)}
        <SearchBar onSubmit={this.onSeachSubmit} />
        {/* One of the reasons to set our images to an empty array and not a null object is so we can find the length */}
        Found: {this.state.images.length} images
      </div>
    );
  }
}

export default App;
