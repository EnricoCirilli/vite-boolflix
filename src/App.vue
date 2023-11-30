<script>
import { store } from "./store";
import axios from "axios";
import AppHeader from "./components/AppHeader.vue";

export default {
  data() {
    return {
      store,
    };
  },
  components: {
    AppHeader,
  },
  methods: {
    handleSearch() {
      axios
        .get(this.store.apiUrl + this.store.movieSearch, {
          params: {
            query: this.store.searchText,
            api_key: this.store.apiKey
          }
        })
        .then((resp) => {
          //console.log(resp);
          this.store.moviesList = resp.data.results
        })
    }
  },
  }

</script>

<template>
  
  <AppHeader @performSearch="handleSearch"/>




</template>



<style  lang="scss">
@use "./style/general.scss";
@import "@fortawesome/fontawesome-free/css/all.css";
</style>
