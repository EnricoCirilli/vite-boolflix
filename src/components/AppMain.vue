<script>
import { store } from '../store'
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
        <h2 class="text-danger mb-2 text-center"> Movies</h2>
        <div class="container d-flex align-items-center">
          
            <div class="row row-cols-5 g-4">
                
                    <div v-for="movie in store.moviesList" :key="movie.id">
                        <AppCard :movieObj="movie" />
                    </div>
                </div>
            
        </div>   
        <h2 class="text-danger mb-2 text-center"> Serie tv</h2>
        <div class="container d-flex align-items-center">
            
            <div>
                <div class="row row-cols-5 ">
                <div v-for="serie in store.seriesList" :key="serie.id">
                    <AppCard :movieObj="serie" />
                </div>
                </div>
            </div>
        </div>
    </section>
</template>


<style scoped lang="scss">


</style>