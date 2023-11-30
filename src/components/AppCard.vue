<script>
export default{
props: {
   movieObj: Object,
},
data( ){
    return{
        flags: ['br', 'it', 'es', 'en', 'us']
    }
},

methods: {
    getFlagUrl(language) {
        return new URL(`../assets/images/${language}.png`, import.meta.url).href;
    }
},
};


</script>


<template>
    <div class="row">
<div class="col">
<h2>{{ movieObj.title }}</h2>
<h3>{{  movieObj.original_title }}</h3>
<img  v-if="flags.includes(movieObj.original_language)" :src="getFlagUrl(movieObj.original_language)" alt="">
<p v-else>{{  movieObj.original_language }}</p>
<p>{{  movieObj.vote_average }}</p>
</div>
</div>


</template>



<style scoped lang="scss">
img{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 2px solid #fff;
    position: absolute;
    top: 10px;
    right: 10px;
}

.row{
    width: 200px;
    height: 300px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
    padding: 10px;
    margin: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;     
    align-items: center;
    text-align: center;
    position: relative;
    overflow: hidden;
    transition: all 0.5s ease-in-out;
    cursor: pointer;
}


</style>