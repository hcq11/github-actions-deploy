import Vue from 'vue';
import App from './App.vue';
import router from './router';
import ElementUI from 'element-ui';
import VueI18n from 'vue-i18n';
import { messages } from './components/common/i18n';
import 'element-ui/lib/theme-chalk/index.css'; // 默认主题
// import './assets/css/theme-green/index.css'; // 浅绿色主题
import './assets/css/icon.css';
// import './assets/js/jsmpeg.min.js'
var JSMpeg  = require('./assets/js/jsmpeg.min.js')
import './components/common/directives';
import 'babel-polyfill';
import httpPlugin from './api/http';
import Vuex from 'vuex'
import store from './store'
import { getUsername } from './api/auth'

import VueSocketIO from 'vue-socket.io'
import SocketIO from "socket.io-client"

const options = {
    path: '/socket.io',
    autoConnect: false,
    withCredentials:false
}
Vue.use(new VueSocketIO({
    debug: true,
    connection: SocketIO('ws://localhost:56336/', options),
    vuex: {
        store,
        actionPrefix: 'SOCKET_',
        mutationPrefix: 'SOCKET_',
        options: {
            useConnectionNamespace: true
        }
    }
}))

Vue.config.productionTip = false;
Vue.use(VueI18n);
Vue.use(ElementUI, {
    size: 'small'
});
Vue.use(httpPlugin);


const i18n = new VueI18n({
    locale: 'zh',
    messages
});

//使用钩子函数对路由进行权限跳转
router.beforeEach((to, from, next) => {
    document.title = `${to.meta.title} | ATRIS`;
    const userName = getUsername();
    if (userName==='' && to.path !== '/login') {
        next('/login');
    } else if (to.meta.permission) {
        // 如果是管理员权限则可进入，这里只是简单的模拟管理员权限而已
        role === 'admin' ? next() : next('/403');
    } else {
        // 简单的判断IE10及以下不进入富文本编辑器，该组件不兼容
        if (navigator.userAgent.indexOf('MSIE') > -1 && to.path === '/editor') {
            Vue.prototype.$alert('vue-quill-editor组件不兼容IE10及以下浏览器，请使用更高版本的浏览器查看', '浏览器不兼容通知', {
                confirmButtonText: '确定'
            });
        } else {
            next();
            // if (!Vue.prototype.$socket) {
            //     Vue.use(new VueSocketIO({
            //         connection: 'ws://localhost:3000',
            //         debug: true,
            //     }));
            // }
        }
    }
});

new Vue({
    router,
    store,
    i18n,
    render: h => h(App)
}).$mount('#app');
