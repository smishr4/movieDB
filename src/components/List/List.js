import React, { PureComponent } from "react";
import Item from "./Item/Item";
import PropTypes from "prop-types";
import axios from "axios";
import { parseQueryString, toQueryString } from "../../util";

class List extends PureComponent {
	state = {
		items: [
			
		],
		loading: true,
		error: null
	};

	componentDidMount() {
		const query = parseQueryString(this.props.search);
		let type = query.type || "movie",
			search = toQueryString({
				api_key: "3a94078fb34b772a31d9a1348035bed7",
				language: "en-US",
				sort_by: query.sort_by || "popularity.desc",
				query: query.q
			});
		axios
			.get(`https://api.themoviedb.org/3/discover/${type}?${search}`)
			.then(res => {
				this.setState({ loading: false, items: res.data.results });
			})
			.catch(error => {
				// eslint-disable-next-line
				console.log({ error });
				this.setState({
					loading: false,
					error: "Internal server error"
				});
			});
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevProps.search != this.props.search) {
			this.setState({loading: true});
			const query = parseQueryString(this.props.search);
			let type = query.type,
				search = toQueryString({
					api_key: "3a94078fb34b772a31d9a1348035bed7",
					language: "en-US",
					sort_by: query.sort_by || "popularity.desc",
					query: query.q
				});
			axios
				.get(`https://api.themoviedb.org/3/discover/${type}?${search}`)
				.then(res => {
					this.setState({ loading: false, items: res.data.results });
				})
				.catch(error => {
					// eslint-disable-next-line
					console.log({ error });
					this.setState({
						loading: false,
						error: "Internal server error"
					});
				});
		}
	}

	render() {
		console.log("list rendered");
		if (this.state.error) {
			return <h2>{this.state.error}</h2>;
		}
		return this.state.loading ? (
			"Loading..."
		) : (
			<div className="List">
				{this.state.items.map((item, index) => (
					<Item key={index} {...item} />
				))}
			</div>
		);
	}

	static propTypes = {
		search: PropTypes.string
	};
}

export default List;
