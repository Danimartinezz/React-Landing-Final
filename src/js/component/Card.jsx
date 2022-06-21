import React from "react";

const Card = props => {
	return (
		<div className="card">
			<img src={props.imageUrl} className="card-img-top" />
			<div className="card-body">
				<h5 className="card-title"> {props.cardTitle}</h5>
				<p className="card-text">{props.content}</p>
			</div>
			<div className="card-footer">
				<a href={props.url} className="btn btn-primary">
					{props.label}
				</a>
			</div>
		</div>
	);
};
export default Card;