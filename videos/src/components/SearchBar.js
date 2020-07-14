import React from "react";

// Building the search bar based on the previous example. Let's see if I understand what is going on
class SearchBar extends React.Component {
	// Initializing a state with term that is blank. We will assign the value of term when we actually
	// search for something.
	state = { term: "" };

	// Creating a function that will handle the submission event
	onFormSubmit = (event) => {
		// The form likes to reset itself automatically when I hit enter. This prevents that.
		event.preventDefault();
		// Make sure we call callback from parent component; I NEED TO UNDERSTAND THIS!!!
		this.props.onFormSubmit(this.state.term);
	};

	onInputChange = (event) => {
		// Where does target.value come from
		// console.log(event);
		this.setState({ term: event.target.value });
	};

	// getting the classNames from the semantic documentation.
	render() {
		return (
			// These classNames are all coming from the semantic ui docs that we imported
			<div className="search-bar ui segment">
				<form onSubmit={this.onFormSubmit} className="ui form">
					<div className="field">
						<label>Video Search:</label>
						<input
							type="text"
							// hooking this up to the state makes in a controlled component; Making sure to store
							// our term in the component and not in the DOM. Also we will need to add an
							// event handler so that we can actually type. See below (onChange).
							value={this.state.term}
							// This will allow the user to type in the searchbar;
							// onChange is a special handler
							onChange={
								// this.setState({ term: e.target.value })
								// This is another way of writing the above setState; we could have used an inline
								// completely equivalent to e=> this.setState({term: e.target.value});
								this.onInputChange
							}></input>
					</div>
				</form>
			</div>
		);
	}
}

export default SearchBar;
