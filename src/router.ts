import Vue from 'vue'
import Router from 'vue-router'
import Tasks from "./views/TasksView.vue";
import Activity from "./views/ActivityView.vue";
import Canban from "./views/KanbanView.vue";
import NotFound from "./views/NotFound.vue";
import PlugView from "./views/PlugView.vue";

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
            component: Canban,
        },
        {
            name: 'activity',
            path: '/activity',
            component: Activity,
        },
        {
            name: 'calendar',
            path: '/calendar',
            component: PlugView,
        },
        {
            name: 'files',
            path: '/files',
            component: PlugView,
        },
        {
            name: 'home',
            path: '/',
            component: Tasks,
        },
        {
            name: 'notfound',
            path: '/*',
            component: NotFound,
        },
    ]
})