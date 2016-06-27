import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter()

router.map({
    '/message': {
        name: 'message',
        component: (resolve) => {
            require(['./views/message.vue'], resolve)
        }
    },
    '/contact': {
        name: 'contact',
        component: (resolve) => {
            require(['./views/contact.vue'], resolve)
        }
    },
    '/infocenter': {
        name: 'infocenter',
        component: (resolve) => {
            require(['./views/infocenter.vue'], resolve)
        }
    },
    '/chat': {
        name: 'chat',
        component: (resolve) => {
            require(['./views/chat.vue'], resolve)
        }
    }
})

router.redirect({
    '/': '/message'
})

export default router
