<script>
export default {
    props: {
        movieObj: Object,
        vote_average: Number,

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
    computed: {
        vote() {
            return Math.ceil(this.movieObj.vote_average / 2)

        }
    }
};


</script>


<template>
  
   
      <div class="card h-100 text-bg-dark">
                <img v-if="movieObj.poster_path" class="poster"
                    :src="`https://image.tmdb.org/t/p/w342/${movieObj.poster_path}`" :alt="movieObj.title">
                <img v-else src="https://www.altavod.com/assets/images/poster-placeholder.png" class="poster"
                    alt="placeholder image">

                <!-- sezione titoli -->
                <h2>{{ movieObj.title ? movieObj.title : movieObj.name }}</h2>
                <h3>{{ movieObj.original_title ? movieObj.original_title : movieObj.original_name }}</h3>
                <!-- lingua sezione -->
                <img v-if="flags.includes(movieObj.original_language)" :src="getFlagUrl(movieObj.original_language)" alt="">
                <p v-else>{{ movieObj.original_language }}</p>

                <!-- stelle votazione -->
                <p class="card-text">
                    <!-- {{ movieObj.vote_average }} -->
                    <i v-for="(star, index) in 5" :key="index" :class="star <= vote ? 'fa-solid' : 'fa-regular'"
                        class="fa-star"></i>
                </p>
                </div>
            
</template>



<style scoped lang="scss">


.poster {
    width: 12.6rem;
    height: 18rem;
    object-fit: cover;
    border-radius: 10px;
}

img {
    width: 10%;
}

.card-text {
    color: #f1c40f;
    font-size: 20px;
    margin: 0;
    padding: 0;
}
</style>