import Search from "./models/Search";
import * as searchView from "./views/searchView";
import { elements, renderLoader, clearLoader } from "./views/base";

const state = {};
/**
 * Controller for search
 */
const controlSearch = async () => {
	const query = searchView.getInput();

	if (query) {
		state.search = new Search(query);

		searchView.clearInput();
		searchView.clearResults();
		renderLoader(elements.searchRes);

		try {
			await state.search.getResults();

			clearLoader();
			searchView.renderResults(state.search.result);
		} catch (err) {
			alert("Something wrong with the search...");
			clearLoader();
		}
	}
};

document.querySelector(".search").addEventListener("submit", (e) => {
	e.preventDefault();
	controlSearch();
});

elements.searchResPages.addEventListener("click", (e) => {
	// @ts-ignore
	const btn = e.target.closest(".btn-inline");
	if (btn) {
		const goToPage = parseInt(btn.dataset.goto, 10);
		searchView.clearResults();
		searchView.renderResults(state.search.result, goToPage);
	}
});
