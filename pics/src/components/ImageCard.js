import React from "react";

class ImageCard extends React.Component {
	constructor(props) {
		super(props);
		this.state = { spans: 0 };
		this.imageRef = React.createRef();
	}

	componentDidMount() {
		// When our component renders, we are printing the image height. But the image
		// hasn't actually loaded yet. Its too early to pull the client height from component
		// didmount. To fix this, use this.imageRef.

		this.imageRef.current.addEventListener("load", this.setSpans);
		// Define setSpans function
	}
	// Using an arrow function to prevent the value of this as being undefined.
	setSpans = () => {
		const height = this.imageRef.current.clientHeight;
		const spans = Math.ceil(height / 10);
		this.setState({ spans });
	};

	render() {
		const { description, urls } = this.props.image;
		return (
			<div style={{ gridRowEnd: `span ${this.state.spans}` }}>
				<img
					ref={this.imageRef}
					alt={description}
					src={urls.regular}></img>
			</div>
		);
	}
}

export default ImageCard;
