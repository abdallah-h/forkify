export const elements = {
	searchForm: document.querySelector(".search"),
	searchInput: document.querySelector(".search__field"),
	searchRes: document.querySelector(".results"),
	searchResList: document.querySelector(".results__list"),
	searchResPages: document.querySelector(".results__pages"),
};
export const elementStrings = {
	loader: "loader",
};

export const renderLoader = (parent) => {
	const loader = `
        <div class="${elementStrings.loader}">
            <svg>
                <use href="img/icons.svg#icon-cw"></use>
            </svg>
        </div>
    `;
	parent.insertAdjacentHTML("afterbegin", loader);
	console.log(parent);
};

export const clearLoader = () => {
	const loader = document.querySelector(`.${elementStrings.loader}`);
	if (loader) loader.parentElement.removeChild(loader);
};
