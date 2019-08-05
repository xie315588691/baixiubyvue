import Vue from 'vue'
import Router from 'vue-router'
import indexBox from './views/index.vue'
import loginBox from './views/login.vue'

import mainBox from './components/index.vue'
import commentBox from './components/comments.vue'
import userBox from './components/users.vue'
import profileBox from './components/profile.vue'
import postsBox from './components/posts.vue'
import postAddBox from './components/postadd.vue'
import categoriesBox from './components/categories.vue'
import navMenusBox from './components/navMenus.vue'
import slidesBox from './components/slides.vue'
import settingsBox from './components/setting.vue'
import passwordRestBox from './components/passwordRest.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            redirect: '/index'
        },
        {
            path: '/',
            component: indexBox,
            children: [
                {
                    path: '/index',
                    component: mainBox
                },
                {
                    path: '/comments',
                    component: commentBox
                },
                {
                    path: '/users',
                    component: userBox
                },
                {
                    path: '/profile',
                    component: profileBox
                },
                {
                    path: '/posts',
                    component: postsBox
                },
                {
                    path: '/postAdd',
                    component: postAddBox
                },
                {
                    path: '/categories',
                    component: categoriesBox
                },
                {
                    path: '/navMenus',
                    component: navMenusBox
                },
                {
                    path: '/slides',
                    component: slidesBox
                },
                {
                    path: '/setting',
                    component: settingsBox
                },
                {
                    path: '/passwordReset',
                    component: passwordRestBox
                }
            ]
        },
        {
            path: '/login',
            name: 'login',
            component: loginBox
        }
    ],
    linkActiveClass: 'active'
})
