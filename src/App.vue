<template>
  <div id="app">
    <div class="content">
      <fb-gallery
        wpEndpoint="https://dev.kommpass-staging.ch/wp-json"
      ></fb-gallery>
    </div>
  </div>
</template>

<script>
import FbInput from "./components/FbInput";
import FbGallery from "./components/FbGallery";

import FbTab from "./components/FbTab";
import FbTabs from "./components/FbTabs";
import FbHeaderSlider from "./components/FbHeaderSlider";
import ImagePlaceholderUnsplash from "image-placeholder-unsplash";

export default {
  name: "app",
  data() {
    return {
      slides: [
        {
          img: ImagePlaceholderUnsplash.getImage(600, 800, "random")
        },
        {
          img: ImagePlaceholderUnsplash.getImage(600, 800, "random")
        }
      ]
    };
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Ubuntu");
@import url("https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap-reboot.min.css");

body,
html {
  font-size: 20px;

  font-family: Ubuntu, sans-serif;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
}
.content {
  padding: 1rem;
}
</style>
