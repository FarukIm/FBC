import { createSlice } from "@reduxjs/toolkit";

const selectedArticleSlice = createSlice({
	name: "selectedArticle",
	initialState: {
		article: [],
		isOpen: false,
	},
	reducers: {
		setArticle(state, action) {
			state.selectedArticle = action.payload;
		},
		closeArticle(state, action) {
			state.isOpen = false;
		},
		openArticle(state, action) {
			state.isOpen = true;
		},
	},
});

export const selectedArticleActions = selectedArticleSlice.actions;

export default selectedArticleSlice;
