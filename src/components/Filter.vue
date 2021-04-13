<template>
  <input v-model="search" />
</template>
<script lang="ts">
import { Options, Prop, Vue, Watch } from "vue-property-decorator";
import * as moment from "moment";

@Options({
  name: "filter",
})
export default class Filter extends Vue {
  @Prop({ type: Array }) allUsers!: any[];
  search = "";
  @Watch("search") // есть такая хрень как debounce (в библиотеке lodash)
  onSearchChanged() {
    this.$emit("someEvent", this.search);
    //передать в родитель
  }
}
</script>
