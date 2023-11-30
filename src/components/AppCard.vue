<script>
export default {
    props: {
        movieObj: Object,

    },
    data() {
        return {
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

            <!-- sezione poster -->
            <img v-if="movieObj.poster_path" class="poster" :src="`https://image.tmdb.org/t/p/w342/${movieObj.poster_path}`"
                :alt="movieObj.title">
            <img v-else src="https://www.altavod.com/assets/images/poster-placeholder.png" class="poster"
                alt="placeholder image">

            <!-- sezione titoli -->
            <h2>{{ movieObj.title ? movieObj.title : movieObj.name }}</h2>
            <h3>{{ movieObj.original_title ? movieObj.original_title : movieObj.original_name }}</h3>
            <img v-if="flags.includes(movieObj.original_language)" :src="getFlagUrl(movieObj.original_language)" alt="">
            <p v-else>{{ movieObj.original_language }}</p>
            <p>{{ movieObj.vote_average }}</p>
        </div>
    </div>
</template>



<style scoped lang="scss">
//  img{
//     width: 50px;
//     height: 50px;
//     border-radius: 50%;
//     border: 2px solid #fff;
//     position: absolute;
//     top: 10px;
//     right: 10px;
// }
.row {
    float: left;

}

.col {
    width: 50%;
    padding: 0 10px;
    box-sizing: border-box;
    float: left;
}
</style>