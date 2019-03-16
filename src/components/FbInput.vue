<template>
  <div class="fb-input-wrapper" :class="states">
    <div class="fb-label" v-html="label" :style="{ padding: padding }"></div>
    <input
      type="text"
      class="fb-input"
      v-model="value"
      :style="{ padding: padding }"
      @focus="focus"
      @blur="blur"
      @input="$emit('input', $event.target.value);"
    />
    <div class="fb-lines">
      <div class="fb-line"></div>
      <div class="fb-line"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "fb-input",
  data() {
    return {
      value: "",
      states: {
        empty: true,
        focused: false
      }
    };
  },
  props: {
    label: String,
    default_value: String,
    name: String,
    padding: {
      type: String,
      default: ".5em"
    }
  },
  watch: {
    value(newVal) {
      if (newVal) {
        this.states.empty = false;
      } else {
        this.states.empty = true;
      }
    }
  },
  methods: {
    focus(event) {
      this.states.focused = true;
    },
    blur(event) {
      this.states.focused = false;
    }
  },
  mounted() {
    if (this.default_value) {
      this.value = this.default_value;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../assets/default_variables";

.fb-input-wrapper {
  position: relative;
  background: $secondary;
  font-size: 1em;
  transition: $default_transition;
  .fb-text-hider {
    position: absolute;
    background-color: $secondary;
    height: 100%;
    top: 0;
    left: 0;
    width: 100%;
    transition: $default_transition;
    pointer-events: none;
    &::before {
      content: "";
      position: absolute;
      left: 0;
      height: 1em;
      top: calc(50% - 0.5em);
      width: 0.1em;
      display: block;
      background-color: $primary;

      animation: blink 1s step-start 0s infinite;
      @keyframes blink {
        50% {
          opacity: 0;
        }
      }
    }
  }
  .fb-label {
    position: absolute;
    left: 0;
    top: 0;
    padding: 0.5em;
    pointer-events: none;
    transform: translateY(-2.3em);
    font-size: 0.8em;
    transition: $default_transition;
  }
  .fb-input {
    font-size: 1em;
    display: block;
    width: 100%;
    border: none;
    padding: 0.5em;
    background: none;
    outline: none;
  }
  .fb-lines {
    position: absolute;
    left: 0;
    bottom: 0;
    height: 0.1em;
    width: 100%;
    .fb-line {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      top: 0;
      background-color: $primary;
      height: 100%;
      width: 100%;
      transition: $default_transition;
    }
    .fb-line:nth-of-type(1) {
      opacity: 0.3;
    }
    .fb-line:nth-of-type(2) {
      opacity: 1;
      width: 100%;
    }
  }

  &.empty:not(.focused) {
    background: lighten($secondary, 3);
    .fb-label {
      font-size: 1em;
      transform: translateY(0);
    }
    .fb-lines {
      .fb-line:nth-of-type(2) {
        width: 0;
      }
    }
  }
}
</style>
