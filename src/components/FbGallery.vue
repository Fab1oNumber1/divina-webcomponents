<template>
  <div class="fb-gallery-wrapper">
    <div class="images">
      <div
        class="image"
        v-for="(image, index) of imagesToShow"
        :style="getStyleForImage(image)"
        ref="images"
        @click="open(image);"
      >
        <img
          :src="image.media_details.sizes.large.source_url"
          :alt="image.alt_text"
        />
        <div class="overlay">
          <h4>{{ image.title.rendered }}</h4>
        </div>
      </div>
    </div>

    <div
      @click="previewOpen = false;"
      class="preview"
      v-if="preview"
      :class="{ open: previewOpen }"
    >
      <div class="previewBounding" :style="previewStyle"></div>
    </div>
  </div>
</template>
<script>
import WPAPI from "wpapi";

export default {
  name: "fb-gallery",
  data() {
    return {
      wp: null,
      wpImages: null,
      preview: null,
      previewBounding: null,
      previewWidth: null,
      previewHeight: null,
      previewOpen: false
    };
  },
  props: {
    images: {
      type: Array,
      default: null
    },
    wpEndpoint: {
      type: String,
      default: null
    }
  },
  mounted() {
    if (this.wpEndpoint) {
      this.wp = new WPAPI({ endpoint: this.wpEndpoint });
      this.wpLoadImages();
    }
  },
  computed: {
    imagesToShow() {
      return this.wp ? this.wpImages : this.images;
    },
    previewStyle() {
      const style = {};
      style.left = this.previewBounding.left + "px";
      style.top = this.previewBounding.top + "px";
      style.width = this.previewWidth + "px";
      style.height = this.previewHeight + "px";
      style.backgroundImage =
        "url(" + this.preview.media_details.sizes.large.source_url + ")";

      return style;
    }
  },
  methods: {
    async wpLoadImages() {
      this.wpImages = await this.wp.media();
    },
    getStyleForImage(image) {
      const style = {};
      style.gridRowEnd =
        "span " + parseInt(image.media_details.sizes.medium.height / 40);

      return style;
    },
    open(image) {
      let index = this.imagesToShow.indexOf(image);
      let elem = this.$refs.images[index];
      this.preview = image;
      this.previewBounding = elem.getBoundingClientRect();
      this.previewHeight = elem.offsetHeight;
      this.previewWidth = elem.offsetWidth;
      setTimeout(() => {
        this.previewOpen = true;
      }, 500);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/default_variables";

.images {
  display: grid;
  max-width: 100%;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-auto-rows: 40px;
  grid-gap: 10px;
}
.image {
  overflow: hidden;
  position: relative;
  cursor: pointer;
  img {
    width: 100%;
  }
  .overlay {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    padding: 0.5em;
    background-color: transparentize($primary, 0.4);
    color: $secondary;
    h4 {
      margin: 0;
    }
  }
}
.preview {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  pointer-events: none;
  opacity: 0;
  transition: 1s ease;

  .previewBounding {
    position: absolute;
    transition: 1s ease;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
  }
  &.open {
    background-color: transparentize($primary, 0.4);
    pointer-events: auto;
    opacity: 1;
    .previewBounding {
      left: 5% !important;
      top: 5% !important;
      width: 90% !important;
      height: 90% !important;
    }
  }
}
</style>
