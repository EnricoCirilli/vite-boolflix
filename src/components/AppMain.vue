<script>
import { store }from '../store'
import AppCard from './AppCard.vue'
export default {
    data() {
        return {
            store
        }
    },
    components: { AppCard },
};

</script>


<template>
<section>
    <h2> Movies</h2>
    <div v-for="movie in store.moviesList" :key="movie.id">
    <AppCard :movieObj="movie" />
    </div>
</section>
<section>
    <h2> Serie tv</h2>
    <div>
        <div v-for="serie in store.seriesList" :key="serie.id">
            <AppCard :movieObj="serie" />
        </div>
    </div>
</section>


</template>


<style scoped lang="scss"></style>