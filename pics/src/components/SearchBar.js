import React from "react";

class SearchBar extends React.Component {
  state = { term: ""};
  // Changed this to an arrow function instead of an object to prevent the error of "Cannot read property state of undefined" 
  
  onFormSubmit = (event) => {
    // event.preventDefault will prevent the browser from submitting to form automatticaly and automatically refreshing when user hits enter
    event.preventDefault();
    // 
    this.props.onSubmit(this.state.term);
  }

  render() {
    return (
        <div className="ui segment">
          {/* you can also put an arrow function in onSubmit {(event)=> this.onFormSubmit(event)} */}
            {/* you add the parantheses on the end of onFormSubmit in the above, that defines an arrow function and passes it down into the form. When sumbitted, it calls the arrow function. envokes arrow function once */}
            <form onSubmit={this.onFormSubmit} className="ui form">
              <div className="field">
                <label>
                  Image Search:
                </label>
                {/* WHen we pass a method to a prop to onchange, it is a callback function. Don't add parantheses. If you add them, then oninputchange will be called automatically every time its rendered*/}
                {/* Leaving parantheses, we pass a reference to the input function at sometime in the future. */}
                <input 
                  type="text" 
                  value={this.state.term} 
                  onChange={e => this.setState({term: e.target.value})}/>
              </div>
              
            </form>
        </div>
    );
  }
}

export default SearchBar;
