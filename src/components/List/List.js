import React, { PureComponent } from "react";
import Item from "./Item/Item";
import PropTypes from "prop-types";
import axios from "axios";
import { parseQueryString, toQueryString } from "../../util";

class List extends PureComponent {
	state = {
		items: [
			{
				popularity: 568.124,
				vote_count: 165,
				video: false,
				poster_path:
					"https://static.posters.cz/image/350webp/76122.webp",
				id: 474350,
				adult: false,
				backdrop_path: "/4W0FnjSGn4x0mKZlBRx8OjFxQUM.jpg",
				original_language: "en",
				original_title: "It Chapter Two",
				genre_ids: [27],
				title: "It Chapter Two",
				vote_average: 7.3,
				overview: `27 years after overcoming the malevolent supernatural entity
			Pennywise, the former members of the Losers' Club, who have grown up and moved away
			from Derry, are brought back together by a devastating phone call.",
			"release_date": "2019-09-06`
			},
			{
				popularity: 568.124,
				vote_count: 165,
				video: false,
				poster_path:
					"https://static.posters.cz/image/350webp/76122.webp",
				id: 474350,
				adult: false,
				backdrop_path: "/4W0FnjSGn4x0mKZlBRx8OjFxQUM.jpg",
				original_language: "en",
				original_title: "It Chapter Two",
				genre_ids: [27],
				title: "It Chapter Two",
				vote_average: 7.3,
				overview: `27 years after overcoming the malevolent supernatural entity
			Pennywise, the former members of the Losers' Club, who have grown up and moved away
			from Derry, are brought back together by a devastating phone call.",
			"release_date": "2019-09-06`
			},
			{
				popularity: 568.124,
				vote_count: 165,
				video: false,
				poster_path:
					"https://static.posters.cz/image/350webp/76122.webp",
				id: 474350,
				adult: false,
				backdrop_path: "/4W0FnjSGn4x0mKZlBRx8OjFxQUM.jpg",
				original_language: "en",
				original_title: "It Chapter Two",
				genre_ids: [27],
				title: "It Chapter Two",
				vote_average: 7.3,
				overview: `27 years after overcoming the malevolent supernatural entity
			Pennywise, the former members of the Losers' Club, who have grown up and moved away
			from Derry, are brought back together by a devastating phone call.",
			"release_date": "2019-09-06`
			}
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
