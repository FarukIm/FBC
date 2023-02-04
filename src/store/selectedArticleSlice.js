import { createSlice } from "@reduxjs/toolkit";

const selectedArticleSlice = createSlice({
	name: "selectedArticle",
	initialState: {
		article: {
			source: {
				id: "",
				name: "",
			},
			author: "",
			title: "",
			description: "",
			url: "",
			urlToImage: "",
			publishedAt: "",
			content: "",
		},
		isOpen: false,
	},
	reducers: {
		setArticle(state, action) {
			state.article.source.id = action.payload.source.id;
			state.article.source.name = action.payload.source.name;
			state.article.author = action.payload.author;
			state.article.title = action.payload.title;
			state.article.description = action.payload.description;
			state.article.url = action.payload.url;
			state.article.urlToImage = action.payload.urlToImage;
			state.article.publishedAt = action.payload.publishedAt;
			state.article.content = action.payload.content;
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
