import React from "react";
import axios from 'axios';
import SearchBar from "./SearchBar";
import dotenv from 'dotenv';
dotenv.config()

const key = process.env.UNSPLASH
// const App = () => {
//   return (
//   <div className="ui container" style={{ marginTop: '10px'}}>
//     <SearchBar />
//   </div>
//   );
// };


// Rewrote the above const to the below class function
class App extends React.Component {
// use the async/allow syntax. async is an alternate method to promise. 
  async onSeachSubmit(term) {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
      params: { query: term },
      headers: {
        Authorization: "Client-ID "
      }
    });
    console.log(response.data.results);
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px'}}>
        <SearchBar onSubmit={this.onSeachSubmit}/>
      </div>
      )
  }
}

export default App;
