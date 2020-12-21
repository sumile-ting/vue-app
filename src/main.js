import Vue from "vue";
import ElementUI from "element-ui";
import router from "./router";

import store from "@/store";
import "element-ui/lib/theme-chalk/index.css";
import globalInfos from "./constants/global"
import App from "./App.vue";
import HighCharts from "highcharts";

//引入font-awesome
import 'font-awesome/css/font-awesome.css';
import './assets/css/custom.scss'

//关闭生产模式下给出的提示
Vue.config.productionTip = false;


Vue.prototype.GLOBAL = globalInfos;
//console.log(router)
Vue.use(ElementUI);

import * as filters from './filters/filters.js'

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
});

HighCharts.setOptions({ //全局设置highcharts的logo
    credits: {
      text: '第一录井'
    }
});

new Vue({
  el: '#app',
  router,
  store,
  //  es6 通过render方法来使用外部引入的App组件
  render: h => h(App),

}).$mount();
