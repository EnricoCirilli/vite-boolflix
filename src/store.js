import {reactive} from "vue"
export const store = reactive({
	moviesList: [],
	tvSeriesSearch: [],
	searchText: "",
	apiUrl: 'https://api.themoviedb.org/3/search',
    apiKey: '204f12915bca19cfb24a8d110bd9bcae',
	moviesList: '/movie',
    tvSeriesSearch: '/tv',
})
