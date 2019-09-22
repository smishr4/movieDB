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
			<option>2019</option>
			<option>2018</option>
			<option>2017</option>
			<option>2016</option>
			<option>2015</option>
		</select>
		<label>Rating</label>
		<select>
			<option>1</option>
			<option>2</option>
			<option>3</option>
			<option>4</option>
			<option>5</option>
		</select>
	</div>
}

export default withRouter(Filters);