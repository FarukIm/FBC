import { apiKey } from "../utils/constants";

const getTopHeadlines = async (pageNum) => {
	const response = await fetch(
		`https://newsapi.org/v2/top-headlines?country=us&pageSize=20&page=${pageNum}&apiKey=${apiKey}`
	);
	let data = await response.json();
	return data;
};

const getSearch = async (searchTerm, sortBy = "", pageNum = 1) => {
	const response = await fetch(
		`https://newsapi.org/v2/everything?q=${searchTerm}&sortBy=${sortBy}&pageSize=20&page=${pageNum}&apiKey=${apiKey}`
	);
	let data = await response.json();
	return data;
};

export { getTopHeadlines, getSearch };
