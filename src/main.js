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

Vue.prototype.$swipe = new Cov()

router.start(App, 'app')
