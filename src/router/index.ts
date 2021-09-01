import { createRouter, createWebHashHistory } from "vue-router";

const Home = () => import('@/views/home/index.vue');
const Songs = () => import('@/views/songs/index.vue');


const routes = [
    { path: '/', component: Home },
    { path: '/songs/:id(\\d+)', component: Songs }
];


export default createRouter({
    history: createWebHashHistory(),
    routes
});