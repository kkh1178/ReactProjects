import React from "react";

const ApprovalCard = (props) => {
	// console.log(props.children);
	return (
		<div className="ui card">
			{/* You have to reference props.children. if you don't, 
            the children won't show up inside of the component */}
			<div className="content">{props.children}</div>
			<div className="extra content">
				<div className="ui two buttons">
					<div className="ui basic green button">Approve</div>
					<div className="ui basic red button">Reject</div>
				</div>
			</div>
		</div>
	);
};

export default ApprovalCard;
