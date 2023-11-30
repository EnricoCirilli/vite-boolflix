import {reactive} from "vue"
export const store = reactive({
	moviesList: [],
	seriesList: [],
	searchText: "",
	apiUrl: 'https://api.themoviedb.org/3',
    apiKey: '204f12915bca19cfb24a8d110bd9bcae',
	// moviesList: '/movie',
    // seriesList: '/tv',
})
