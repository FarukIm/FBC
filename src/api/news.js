const getTopHeadLines = async () => {
	const response = await fetch(
		"https://newsapi.org/v2/top-headlines?country=us&pageSize=20&page=1&apiKey=c1b7a39ccdcd42c29ff37f28df7091e2"
	);
	let data = await response.json();
	return data;
};

export { getTopHeadLines };
