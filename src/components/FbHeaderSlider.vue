<template>
  <div class="fb-header-slider" :style="{ height: sliderHeight }">
    <transition name="fade">
      <div
        class="fb-header-slide"
        v-for="(slide, index) of slides"
        v-if="index === actualSlide"
        :key="'slide-' + index"
      >
        <div
          class="fb-header-slide-img"
          :style="{ backgroundImage: 'url(' + slide.img + ')' }"
        ></div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "fb-header-slider",
  props: {
    slides: Array,
    sliderHeight: {
      type: String,
      default: "100vh"
    },
    defaultSlide: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      interval: null,
      actualSlide: 0
    };
  },
  mounted() {
    this.actualSlide = this.defaultSlide;

    this.interval = window.setInterval(this.nextSlide, 6000);
  },
  methods: {
    nextSlide() {
      this.actualSlide++;
      if (this.actualSlide >= this.slides.length) {
        this.actualSlide = 0;
      }
      if (this.actualSlide < 0) {
        this.actualSlide = this.slides.length - 1;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.fb-header-slider {
  position: relative;
  width: 100%;
  overflow: hidden;
  .fb-header-slide {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    .fb-header-slide-img {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background-size: cover;
      background-position: center;
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: 1s linear;
}
.fade-enter {
  opacity: 1;
  transform: translateX(-100%);
}

.fade-enter-to {
  opacity: 1;
  transform: translateX(0);
}
.fade-leave-to {
  opacity: 1;
  transform: translateX(100%);
}
</style>
