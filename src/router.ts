import Vue from 'vue'
import Router from 'vue-router'
import Tasks from "./views/TasksView.vue";
import Activity from "./views/ActivityView.vue";
import Notfound from "./views/Notfound.vue";
import Plug from "./views/Plug.vue";

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            name: 'tasks',
            path: '/tasks',
            component: Tasks,
        },
        {
            name: 'kanban',
            path: '/kanban',
            component: Plug,
        },
        {
            name: 'activity',
            path: '/activity',
            component: Activity,
        },
        {
            name: 'calendar',
            path: '/calendar',
            component: Plug,
        },
        {
            name: 'files',
            path: '/files',
            component: Plug,
        },
        {
            name: 'home',
            path: '/',
            component: Tasks,
        },
        {
            name: 'notfound',
            path: '/*',
            component: Notfound,
        },
    ]
})