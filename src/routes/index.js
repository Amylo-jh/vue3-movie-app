import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './Home'
import Movie from './Movie'
import About from './About'

export default createRouter({
    // Hash mode, history mode가 있고, hashmode로 사용할 예정.
    // 주소창에 #이 붙어 있는 것을 의미함.
    history: createWebHashHistory(),
    
    // pages
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/movie',
            component: Movie
        },
        {
            path: '/about',
            component: About
        }
    ]
})