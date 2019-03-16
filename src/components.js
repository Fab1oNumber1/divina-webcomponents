import "@babel/polyfill";
import Vue from "vue";
import VueCustomElement from "vue-custom-element";

import FbGallery from "./components/FbGallery";
import FbHeaderSlider from "./components/FbHeaderSlider";
import FbInput from "./components/FbInput";
import FbTab from "./components/FbTab";
import FbTabs from "./components/FbTabs";

Vue.use(VueCustomElement);

Vue.customElement(FbGallery.name, FbGallery);
Vue.customElement(FbHeaderSlider.name, FbHeaderSlider);
Vue.customElement(FbInput.name, FbInput);
Vue.customElement(FbTab.name, FbTab);
Vue.customElement(FbTabs.name, FbTabs);
