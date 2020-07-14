import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";

// Creating a class based component because it will hold all of the
// different states for our components

// We will need a searchcar, videodetail, videolist, and videoitem components

// adding axios code to app.js to prevent a 400 error

const key = "";

class App extends React.Component {
	state = { videos: [] };
	onTermSubmit = async (term) => {
		// console.log(term);
		const response = await youtube.get("/search", {
			params: {
				q: term,
				part: "snippet",
				maxResults: 5,
				key: key,
			},
		});

		console.log(response);
		this.setState({ videos: response.data.items });
	};

	render() {
		return (
			<div className="ui container" style={{ marginTop: "10 px" }}>
				<SearchBar onFormSubmit={this.onTermSubmit} />
				<VideoList videos={this.state.videos} />
			</div>
		);
	}
}

export default App;
