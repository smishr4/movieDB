import React from "react";

export default function Item(props) {
	return (
		<div className="Item">
			<div
				className="ItemBkg"
				style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w1000_and_h563_face/${props.poster_path || "u3bZgnGQ9T01sWNhyveQz0wH0Hl.jpg"})` }}
			></div>
			<p className="Title">{(props.original_title || props.original_name).slice(0, 10)}</p>
			<p className="Description">{props.overview.slice(0, 10)}</p>
		</div>
	);
}
