

<script>
import { store } from "../store";
export default {
  
  data() {
    return {
      store,
    };
  },
  emits: ["perform-search"],
};

</script>



<template>

  <header class="card">
    <h1>Boolflix</h1>
    <button @click="$emit('perform-search')">
      Search</button>
    <input v-model="store.searchText" type="text" id="search">
    </header>

</template>




<style  lang="scss" scoped>
.card { 
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  background-color: #000;
  color: #fff;
  height: 80px;
  h1 {
    letter-spacing: 3px;
    margin: 10px 0;
    font-size: 30px;
    font-weight: 700;
    color: red;
  }
  input {
    width: 300px;
    height: 30px;
    border-radius: 5px;
    border: 1px solid #fff;
    padding: 0 10px;
    font-size: 16px;
    color: #000;
  }
  button {
    letter-spacing: 2px;
    width: 100px;
    height: 30px;
    border-radius: 5px;
    border: 1px solid #fff;
    background-color: #fff;
    color: #000;
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
  }
  
}
  
  

</style>

