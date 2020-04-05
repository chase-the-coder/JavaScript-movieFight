const fetchData = async () => {
	const response = await axios.get('http://www.omdbapi.com/', {
		params: {
			apikey: '620f1970',
			s: 'avengers'
		}
	});
	console.log(response.data);
};
