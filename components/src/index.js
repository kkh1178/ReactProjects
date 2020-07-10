import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
	return (
		<div className="ui container comments">
			{/* We can rewrite this into a reuseable component */}
			{/* If we want to show one component inside another, we don't use the curly braces. Treat as a JSX tag*/}
			<ApprovalCard>
				<CommentDetail
					author="Sam"
					timeAgo="today at 4:50PM"
					commentText="Nice Blog post!"
					// This will be assigned to the props.avatar.
					avatar={faker.image.avatar()}
				/>
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail
					author="Alex"
					timeAgo="today at 6:59PM"
					commentText="You're doing a great job!"
					avatar={faker.image.avatar()}
				/>
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail
					author="Jane"
					timeAgo="today at 2:30AM"
					commentText="very informative."
					avatar={faker.image.avatar()}
				/>
			</ApprovalCard>
		</div>
	);
};

ReactDOM.render(<App />, document.querySelector("#root"));
