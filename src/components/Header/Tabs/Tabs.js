import React from "react";
import { withRouter } from "react-router-dom";
import { parseQueryString, toQueryString } from "../../../util";

const TAB_CONFIG = [
	{ id: 1, name: "POPULAR", key: "popularity.desc" },
	{ id: 2, name: "TREND", key: "trending.desc" },
	{ id: 3, name: "NEWEST", key: "release_date.desc" },
	{ id: 4, name: "TOP RATED", key: "vote_count.desc" }
];

function Tabs(props) {
	let query = parseQueryString(props.location.search);
	return (
		<div className="Tabs">
			{TAB_CONFIG.map(config => {
				return (
					<div
						className="Tab"
						key={config.id}
						onClick={() =>
							props.history.push({
								search: toQueryString(
									Object.assign({}, query, {
										sorty_by: config.key
									})
								)
							})
						}
					>
						{config.name}
					</div>
				);
			})}
		</div>
	);
}

export default withRouter(Tabs);
