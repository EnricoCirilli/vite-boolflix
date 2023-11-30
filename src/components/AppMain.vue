<script>
import { store }from '../store'
export default {
    data() {
        return {
            store
        }
    },
}

</script>


<template>
<section>
    <div v-for="movie in store.moviesList">
<h2>{{ movie.title }}</h2>
<h3>{{ movie.original_title }}</h3>
<p>{{ movie.original_language }}</p>
<p>{{ movie.vote_average }}</p>
    </div>
</section>


</template>


<style scoped lang="scss"></style>