import {reactive} from "vue"
export const store = reactive({
	variable1: [],
	variable2: [],
	searchText: "",
	apiUrl: 'https://api.themoviedb.org/3/search',
    apiKey: '204f12915bca19cfb24a8d110bd9bcae',
    movieSearch: '/movie',
    tvSeriesSearch: '/tv',
    searchText: ''
})
