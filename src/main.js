import Vue from 'vue';
import {Button,Input,Container,Main,Header,Aside,Select,Option,Radio,RadioGroup} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import router from '../router'
Vue.use(Button);
Vue.use(Input);
Vue.use(Container);
Vue.use(Main);
Vue.use(Header);
Vue.use(Aside);
Vue.use(Select);
Vue.use(Option);
Vue.use(Radio);
Vue.use(RadioGroup);

import axios from 'axios'
Vue.prototype.$axios=axios

new Vue({
  router,
  el: '#app',
  render: h => h(App)
});