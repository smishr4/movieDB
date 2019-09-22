import React from "react";
import logo from "./logo.svg";
import PropTypes from "prop-types";
import "./App.css";

import Header from "./components/Header/Header";
import List from "./components/List/List";
import RightPanel from "./components/RightPanel/RightPanel";
import { withRouter } from "react-router-dom";

function App(props) {
	return (
		<div className="App">
			<div className="Layout">
				<Header />
				<List search={props.location.search}/>
			</div>
			<RightPanel></RightPanel>
			{/* <button */}
			{/* 	onClick={() => */}
			{/* 		props.history.push({ */}
			{/* 			search: "?asd=" + Math.random().toFixed(3) */}
			{/* 		}) */}
			{/* 	} */}
			{/* > */}
			{/* 	asasd */}
			{/* </button> */}
		</div>
	);
}

App.propTypes = {
	history: PropTypes.any,
	location: PropTypes.any
};

export default withRouter(App);
