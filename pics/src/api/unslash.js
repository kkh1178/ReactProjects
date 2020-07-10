import axios from "axios";

// move all things related to unsplash out of our App and into here.

export default axios.create({
	baseURL: "https://api.unsplash.com",
	headers: {
		// get your Client-ID from https://unsplash.com/oauth/applications/
		Authorization: "Client-ID ",
	},
});
