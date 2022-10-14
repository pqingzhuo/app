import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)

const routes = [
    {
        path:'/myS',
        name:'myS',
        component:() => import('../views/Tables/myS.vue'),
    },
    {
        path:'/myC',
        name:'myC',
        component:() => import('../views/Tables/myC.vue')
    },
    {
        path:'/SC',
        name:'SC',
        component:() => import('../views/Tables/SC.vue')
    }
]
const router = new VueRouter({
    mode: 'hash',
    routes
})

export default router