import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

//配置路由
const router = new VueRouter({
	history : true,//启用html5的history pushState replaceState
	saveScrollPosition : true //当用户点击后退时保持用户滚动条位置
});

//路由映射
router.map({
	'/': {
		component: (resolve) => require(['./views/welcome'], resolve)
		
	},
	'/home': {
		component: (resolve) => require(['./views/home'], resolve)
		
	},
	'/store': {
		component: (resolve) => require(['./views/store'], resolve),
		subRoutes: {
			'/rec': {
				component: (resolve) => require(['./views/choice'], resolve)
			},
			'/rank': {
				component: (resolve) => require(['./views/rank'], resolve)
			},
			'/songs': {
				component: (resolve) => require(['./views/songs'], resolve)
			},
			'/radio': {
				component: (resolve) => require(['./views/radio'], resolve)
			},
			'/mv': {
				component: (resolve) => require(['./views/mv'], resolve)
			}
		}
	},
	'/new': {
		component: (resolve) => require(['./views/new'], resolve)
	}
});

export default router;