import React from "react";
import Tabs from "./Tabs/Tabs";
import Search from "./Search/Search";

export default function Header() {
	return <div className="Header">
		<Tabs></Tabs>
		<Search></Search>
	</div>
}