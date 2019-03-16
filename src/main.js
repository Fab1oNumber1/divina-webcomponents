import Vue from "vue";
import App from "./App.vue";

import FbGallery from "./components/FbGallery";
import FbHeaderSlider from "./components/FbHeaderSlider";
import FbInput from "./components/FbInput";
import FbTab from "./components/FbTab";
import FbTabs from "./components/FbTabs";

Vue.config.productionTip = false;
Vue.config.devtools = false;

Vue.component(FbGallery.name, FbGallery);
Vue.component(FbHeaderSlider.name, FbHeaderSlider);
Vue.component(FbInput.name, FbInput);
Vue.component(FbTab.name, FbTab);
Vue.component(FbTabs.name, FbTabs);

new Vue({
  render: h => h(App)
}).$mount("#app");
