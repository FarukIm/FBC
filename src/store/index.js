import { configureStore } from "@reduxjs/toolkit";
import articlesSlice from "./articlesSlice";
import selectedArticleSlice from "./selectedArticleSlice";

const store = configureStore({
	reducer: {
		articles: articlesSlice.reducer,
		selectedArticle: selectedArticleSlice.reducer,
	},
});

export default store;
