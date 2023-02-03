import { createSlice } from "@reduxjs/toolkit";

const isDuplicate = (arr1, arr2) => {
	if (arr1.length !== arr2.length) return false;
	for (let i = 0; i < arr2.length; i++) {
		if (arr1[i].title === arr2[i].title) return true;
	}
};

const articlesSlice = createSlice({
	name: "articles",
	initialState: {
		articlesList: [],
		totalArticles: 0,
		page: 1,
		searchTerm: "",
		oldSearch: "",
	},
	reducers: {
		addArticles(state, action) {
			const newArticles = action.payload;
			if (newArticles.totalResults !== state.totalArticles) {
				state.totalArticles = newArticles.totalResults;
				state.articlesList = newArticles;
				return;
			}
			if (state.searchTerm !== state.oldSearch && state.page === 1) {
				state.articlesList = newArticles;
				state.oldSearch = state.searchTerm;
				return;
			} else if (newArticles && state.articlesList.length > 0) {
				for (let i = 0; i < newArticles.length; i++) {
					if (state.articlesList[i].title === newArticles[i].title) return;
				}
			}
			state.articlesList = [...state.articlesList, ...newArticles];
		},

		initializeTotalArticles(state, action) {
			if (state.totalArticles === 0) {
				state.totalArticles = action.payload;
			}
		},
		addPage(state, action) {
			state.page = state.page + 1;
		},
		addSearchTerm(state, action) {
			state.searchTerm = action.payload;
		},
		updateOldSearch(state, action) {
			state.oldSearch = action.payload;
		},
		removeSearch(state, action) {
			state.oldSearch = "";
			state.searchTerm = "";
		},
		setFirstPage(state, action) {
			state.page = 1;
		},
	},
});

export const articlesActions = articlesSlice.actions;

export default articlesSlice;
