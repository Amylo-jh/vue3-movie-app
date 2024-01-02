import { createStore } from 'vuex'
import movie from './movie'
import about from './about'

export default createStore({
    modules: {
        modules: {
            movie,
            about
        }
    }
})