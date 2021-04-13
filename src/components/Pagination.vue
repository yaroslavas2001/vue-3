<template>
  <div class="pagination">
    <div
      class="page"
      v-for="page in totalPageCount"
      :class="{ active: page == currentPage }"
      :key="page"
      @click="pageClick(page)"
    >
      {{ page }}
    </div>
  </div>
</template>
<script lang="ts">
import { Options, Prop, Vue} from "vue-property-decorator";

@Options({
  name: "pagination",
})
export default class Pagination extends Vue {
  @Prop({
    type: Number,
    required: true,
    default: 1 /*, validator: function(value: number) {
    return value > 0;
    //
}*/,
  })
  currentPage!: number;
  @Prop({ type: Number }) totalCount!: number;
  @Prop({ type: Number, default: 10 }) pageSize!: number;

  pageClick(page: Number) {
    // this.currentPage =Number(page);
    this.$emit("pageClick", page);
  }
  get totalPageCount(): number {
    return this.totalCount;
  }
}
</script>
<style lang="less">
.pagination {
  display: flex;
}
.page {
  padding: 10px;
  border: 1px solid #000;
  margin: 1px;
  cursor: pointer;
  &.active {
    background-color: purple;
  }
}
</style>