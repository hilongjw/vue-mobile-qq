import Vue from 'vue'
import App from './App'

import Cov from './cov'
import router from './router'

Vue.config.debug = true

let $root = null

Vue.prototype.$Cov = {
    setRoot (vm) {
        $root = vm
    },
    hideGlobalNav () {
        $root.state.globalNavShow = false
    },
    showGlobalNav () {
        $root.state.globalNavShow = true
    }
}

let swiper = new Cov()
Vue.prototype.$swipe = swiper

router.start(App, 'app')
