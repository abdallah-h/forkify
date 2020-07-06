import axios from "axios";

export default class Search {
	constructor(query) {
		this.query = query;
	}

	/**
	 *
	 * get request from api
	 * @memberof Search
	 */
	async getResults() {
		const proxy = "https://api.allorigins.win/raw?url=";
		try {
			const res = await axios(
				`${proxy}https://recipesapi.herokuapp.com/api/search?q=${this.query}&page=1`,
			);
			this.result = res.data.recipes;
		} catch (error) {
			alert(error);
		}
	}
}
