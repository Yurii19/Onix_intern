import Vue from 'vue'
import Router from 'vue-router'
import TasksView from "@/views/TasksView.vue";
import ActivityView from "@/views/ActivityView.vue";
import KanbanView from "@/views/KanbanView.vue";
import NotFound from "@/views/NotFound.vue";
//import PlugView from "./views/PlugView.vue";
import CalendarView from "@/views/CalendarView.vue";
import FilesView from "@/views/FilesView.vue";

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            name: 'tasks',
            path: '/tasks',
            component: TasksView,
        },
        {
            name: 'kanban',
            path: '/kanban',
            component: KanbanView,
        },
        {
            name: 'activity',
            path: '/activity',
            component: ActivityView,
        },
        {
            name: 'calendar',
            path: '/calendar',
            component: CalendarView,
        },
        {
            name: 'files',
            path: '/files',
            component: FilesView,
        },
        {
            name: 'home',
            path: '/',
            component: TasksView,
        },
        {
            name: 'notfound',
            path: '/*',
            component: NotFound,
        },
    ]
})