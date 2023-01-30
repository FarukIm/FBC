import { createSlice } from "@reduxjs/toolkit";

const articlesSlice = createSlice({
	name: "articles",
	initialState: {
		articlesList: [],
		totalArticles: 0,
	},
	reducers: {
		addArticles(state, action) {
			const newArticles = action.payload;
			state.articlesList = [...state.articlesList, ...newArticles];
		},
		initializeTotalArticles(state, action) {
			return (state.totalArticles = action.payload);
		},
	},
});

export const articlesActions = articlesSlice.actions;

export default articlesSlice;
