import { createRouter, createWebHistory } from "vue-router";

const Home = () => import('../views/Home.vue');
const Songs = () => import('../views/Songs.vue');


const routes = [
    { path: '/', component: Home },
    { path: '/songs', component: Songs }
];


export default createRouter({
    history: createWebHistory(),
    routes
});