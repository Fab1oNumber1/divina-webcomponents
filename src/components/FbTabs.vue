<template>
  <div ref="fbTabs" class="fb-tabs">
    <div class="tab-headers">
      <div
        v-for="(tab, index) of tabs"
        class="tab-header"
        v-html="tab.header"
        :class="{ active: tab === selected_tab }"
        @click="selectTab(tab);"
        :key="'tab-' + index"
      ></div>
    </div>
    <slot test="abcd"></slot>
  </div>
</template>

<script>
export default {
  name: "fb-tabs",
  props: {
    default_tab: Number | String
  },
  data() {
    return {
      tabs: [],
      selected_tab: null
    };
  },
  mounted() {
    for (let node of this.$refs.fbTabs.childNodes) {
      if (node.nodeType === 1 && node.getAttribute("header")) {
        this.tabs.push({
          header: node.getAttribute("header"),
          key: node.getAttribute("key"),
          $ref: node
        });
      }
    }

    console.log();
    if (this.default_tab && this.tabs[parseInt(this.default_tab)]) {
      this.selectTab(this.tabs[parseInt(this.default_tab)]);
    } else {
      this.selectTab(this.tabs[0]);
    }
  },
  methods: {
    hideAll() {
      for (let tab of this.tabs) {
        tab.$ref.style.display = "none";
      }
    },
    selectTab(tab) {
      this.hideAll();
      this.selected_tab = tab;
      this.selected_tab.$ref.style.display = "block";
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../assets/default_variables";

.tab-headers {
  display: flex;
  margin-bottom: 1rem;
  .tab-header {
    flex: 1;
    padding: 0.5em;
    text-align: center;
    cursor: pointer;
    &.active {
      background-color: $secondary;
    }
  }
}
</style>
