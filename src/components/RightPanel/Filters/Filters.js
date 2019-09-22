import React from "react";
import {withRouter} from "react-router-dom";
import {parseQueryString, toQueryString} from "../../../util";
function Filters(props) {

	let query = parseQueryString(props.location.search);

	function filter(op, value) {
		let search = query;
		search[op] = value;
		props.history.push({
			search: toQueryString(search)
		});
	}

	// __TODO__ : following to be completed

	return <div className="Filters">
		<label>Type</label>
		<select onChange={evt => filter("type", evt.target.value)}>
			<option selected={query.type == "movie"} value="movie">Movies</option>
			<option selected={query.type == "tv"}value="tv">TV Shows</option>
		</select>
		<label>Genre</label>
		<select  onChange={evt => filter("genre", evt.target.value)}>
			<option value="crime">Crime</option>
			<option value="comedy">Comedy</option>
		</select>
		<label>Year</label>
		<select>
			<option>ABC</option>
		</select>
		<label>Rating</label>
		<select>
			<option>ABC</option>
		</select>
	</div>
}

export default withRouter(Filters);