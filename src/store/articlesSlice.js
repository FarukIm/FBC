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
		isSearch: false,
	},
	reducers: {
		addArticles(state, action) {
			const newArticles = action.payload;
			if (state.isSearch) {
				state.articlesList = newArticles;
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
		startSearch(state, action) {
			state.isSearch = action.payload;
		},
		setFirstPage(state, action) {
			state.page = 1;
		},
	},
});

export const articlesActions = articlesSlice.actions;

export default articlesSlice;
