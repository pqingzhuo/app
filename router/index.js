import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)

const routes = [
    {
        path:'/S',
        name:'S',
        component:() => import('../views/Tables/S.vue'),
    },
    {
        path:'/C',
        name:'C',
        component:() => import('../views/Tables/C.vue')
    },
    {
        path:'/SC',
        name:'SC',
        component:() => import('../views/Tables/SC.vue')
    }
]
const router = new VueRouter({
    mode: 'history',
    routes
})

export default router