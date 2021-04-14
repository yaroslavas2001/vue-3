<template>
  <input v-model="search" />
  <p>From date</p>
  <input type="date" v-model="fromDate" />
  <p>To date</p>
  <input type="date" v-model="toDate" />
  <p>From age</p>
  <input type="number" v-model="fromAge" />
  <p>To age</p>
  <input type="number" v-model="toAge" />
  <button ref="btnEl" @click="searchFromTo()">Найти</button>
</template>
<script lang="ts">
import { Options, Prop, Vue, Ref } from "vue-property-decorator";
import ISearch from "../models/ISearch";

@Options({
  name: "filter",
  emits: ["change"]
})
export default class Filter extends Vue {
  // @Ref('btnEl') btnEl!: HTMLButtonElement;
  search = "";
  fromDate = "";
  toDate = "";
  fromAge = "";
  toAge = "";
  // searchpull: ISearch[] = [];
  searchFromTo() {
    let filterData: ISearch = {
      search: this.search,
      fromDate: this.fromDate,
      toDate: this.toDate,
      fromAge: this.fromAge,
      toAge: this.toAge
    };
    // this.searchpull.push(dist);
    this.$emit("change", filterData);
  }
}
</script>
