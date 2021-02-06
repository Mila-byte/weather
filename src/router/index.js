import Vue from 'vue'
import VueRouter from 'vue-router'
import FullInfo from "@/components/FullInfo";
import MainPage from "@/components/MainPage";

Vue.use(VueRouter)

const routes = [
    {path: '/info/:name', component: FullInfo},
    {path: '/', component: MainPage}
]

export default new VueRouter({
    routes
})
