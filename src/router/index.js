import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import store from '../store/index'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'Login',
		component: Login,
		alias: '/login'
	},
	{
		path: '/register',
		name: 'Register',
		component: () =>
			import(/* webpackChunkName: "register" */ '../views/Register.vue'),
	},
	{
		path: '/myfootball',
		name: 'myfootball',
		component: () =>
			import(/* webpackChunkName: "myfootball" */ '../views/myfootball/myfootball.vue'),
		children: [
			{
				path: '',
				alias : 'article',
				name: 'arcticle',
				component: () =>
			import(/* webpackChunkName: "article" */ '../views/myfootball/article.vue'),
			},
			{
				path: 'contact',
				name: 'contact',
				component: () =>
			import(/* webpackChunkName: "contact" */ '../views/myfootball/contact.vue'),
			},
			{
				path: 'hist',
				name: 'hist',
				component: () =>
			import(/* webpackChunkName: "hist" */ '../views/myfootball/hist.vue'),
			},
			{
				path: 'regle',
				name: 'regle',
				component: () =>
			import(/* webpackChunkName: "regle" */ '../views/myfootball/regle.vue'),
			},
			{
				path: 'coach',
				name: 'coach',
				component: () =>
			import(/* webpackChunkName: "coach" */ '../views/myfootball/coach.vue'),
			},
			{
				path: 'cdm',
				name: 'cdm',
				component: () =>
			import(/* webpackChunkName: "veille" */ '../views/myfootball/cdm.vue'),
			},
			{
				path: 'lieu',
				name: 'lieu',
				component: () =>
			import(/* webpackChunkName: "lieu" */ '../views/myfootball/lieu.vue'),
			},
		]
	},
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
})

router.beforeEach((to, from, next) => {
	if((to.name === 'myfootball' || to.name === 'article' || to.name === 'contact' || to.name === 'hist' || to.name === 'regle' || to.name === 'coach' || to.name === 'cdm' || to.name === 'lieu') && !store.getters.isAuthenticated) {
		next('/login')
	} else {
		next()
	}
})
//si t'est pas autentifié tu rentre pas 
export default router
