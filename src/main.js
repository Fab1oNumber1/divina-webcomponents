import Vue from "vue";
import App from "./App.vue";

const comps = [
  "FbGallery",
  "FbHeaderSlider",
  "FbInput",
  "FbTab",
  "FbTabs",
  "FbPrestaProductSelection"
];

for (const comp of comps) {
  let loadedComp = require("./components/" + comp);

  if (loadedComp.selector) {
    Vue.component(loadedComp.selector, loadedComp);
    continue;
  }

  Vue.component(loadedComp.name, loadedComp);
}

/*
import FbGallery from "./components/FbGallery";
import FbHeaderSlider from "./components/FbHeaderSlider";
import FbInput from "./components/FbInput";
import FbTab from "./components/FbTab";
import FbTabs from "./components/FbTabs";
import FbPrestaProductSelection from "./components/FbPrestaProductSelection";
*/
Vue.config.productionTip = false;
Vue.config.devtools = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
