<template>
  <Headline />
  <Search />
  <MovieList /> 
</template>

<script>
import Headline from '../components/Headline.vue'
import Search from '../components/Search.vue'
import MovieList from '../components/Movielist.vue';

export default {
    components: {
        Headline,
        Search,
        MovieList
    }
}
</script>