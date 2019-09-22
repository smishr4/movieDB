import React, { useState } from "react";
import searchIcon from "./assets/search.svg";
import { debounce, parseQueryString, toQueryString } from "../../../util";
import { withRouter } from "react-router-dom";

function Search(props) {
	let query = parseQueryString(props.location.search);

	function search(val) {
		props.history.push({
			search: toQueryString(Object.assign(query, { q: val }))
		});
	}

	const modSearch = debounce(search, 300);

	return (
		<div className="Search">
			<img src={searchIcon}></img>
			<form>
				<input onChange={evt => modSearch(evt.target.value.replace(/\s/g, '+'))}></input>
			</form>
		</div>
	);
}

export default withRouter(Search);
