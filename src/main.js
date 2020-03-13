import Vue from "vue";
import App from "./App.vue";
// import './style/main.scss'; //css樣式
import './style/custom.scss'; //css樣式
import router from "./router";
import store from "./store";
import "./registerServiceWorker";


import { NoticeBar } from 'vant';
import "vant/lib/index.css";
import { Tabbar, TabbarItem } from 'vant';
import { NavBar } from 'vant';
import { Tab, Tabs } from 'vant';
import { Lazyload } from 'vant';

import './utils/rem';
import './utils/webp-detect';

Vue.use(Tab);
Vue.use(Tabs);
Vue.use(NavBar);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(NoticeBar);
Vue.use(Lazyload);


import { Col, Row } from 'vant';

Vue.use(Col);
Vue.use(Row);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
