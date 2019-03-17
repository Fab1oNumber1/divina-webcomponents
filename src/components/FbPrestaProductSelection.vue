<template>
  <div class="product-selection-wrapper">test</div>
</template>

<script lang="ts">
import { Component, Vue, Provide } from "vue-property-decorator";
import Service from "../services/PrestaService";
import { Category } from "../interfaces/Prestashop.ts";

@Component({})
export default class FbPrestaProductSelection extends Vue {
  static selector: string = "fb-presta-product-selection";
  private _service: PrestaService;
  private categories: Array<Category> = [];
  created() {
    this._service = new Service();

    this.loadData();
  }

  private async loadData() {
    this.categories = await this._service.get("categories");
  }
}
</script>
