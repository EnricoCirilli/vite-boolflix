<script>
import { store } from "../store";
export default {
  emits: ["performSearch"],
  data() {
    return {
      store,
    };
  },
};

</script>

<template>
  <div class="card">
    <h1>Boolflix</h1>
    <h2>What is Boolflix?</h2>
    <p>
      Boolflix is a web application that allows you to search for movies and TV series by title, genre and cast.
    </p>
  
  <button @click="$emit('performSearch')">
    <a href="" target="_blank">Search Movie</a></button>
    
    <input  v-model.trim="store.searchText" type="text" class="form-control" placeholder="inizia la ricerca">
  </div>
</template>

<style  lang="scss" scoped></style>

