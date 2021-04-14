<template>
  <input v-model="search" />
  <p>From date</p>
  <input type="date" v-model="fromDate" />
  <p>To date</p>
  <input type="date" v-model="toDate" />
  <p>From age</p>
  <input type="number" v-model.number="fromAge" />
  <p>To age</p>
  <input type="number" v-model.number="toAge" />
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
  fromDate = new Date();//"00-00-0000");
  toDate = new Date();//"12-12-9999");
  fromAge = 0;
  toAge = 100;
  // searchpull: ISearch[] = [];
  searchFromTo() {
    let filterData: ISearch = {
      search: this.search,
      fromDate: new Date(this.fromDate),
      toDate: new Date(this.toDate),
      fromAge: this.fromAge,
      toAge: this.toAge
    };
    console.log(this.fromDate);
    this.$emit("change", filterData);
  }
}
</script>
