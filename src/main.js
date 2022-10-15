import Vue from 'vue';
import {Button,Input,Container,Main,Header,Aside,Select,Option,Radio,RadioGroup,Table,TableColumn} from 'element-ui';
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
Vue.use(Table);
Vue.use(TableColumn);

import axios from 'axios'
Vue.prototype.$axios=axios
Vue.prototype.isUpdate=global

new Vue({
  router,
  el: '#app',
  render: h => h(App)
});