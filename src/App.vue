<!-- SCRIPT -->

<script>
import { store } from "./store";
import axios from "axios";
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";

export default {
  //DATA
  data() {
    return {
      store,
    };
  },
  //COMPONENTS
  components: { AppHeader, AppMain },

  //METHODS
  methods: {
    handleSearch() {
      // console.log("handleSearch");
      axios.get("https://api.themoviedb.org/3/search", {
          params: {
            query: this.store.searchText,
            api_key: '204f12915bca19cfb24a8d110bd9bcae'
          }
        })
        .then((resp) => {
          console.log(resp);
          this.store.moviesList = resp.data.results
        })
    }
  },
  }

</script>
<!-- /SCRIPT -->


<!-- TEMPLATE -->
<template>
  <!-- genitore performa la ricerca -->
  <AppHeader @performSearch="handleSearch"/>

<AppMain />


</template>
<!-- /TEMPLATE -->

<!-- /STYLE -->
<style  lang="scss">
@use "./style/general.scss";
@import "@fortawesome/fontawesome-free/css/all.css";
</style>

<!-- /STYLE -->
