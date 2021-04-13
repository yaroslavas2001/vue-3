<template>
  <input v-model="search" />
  <p>From date</p>
  <input type="date" id="from" />
  <p>To date</p>
  <input type="date" id="to" value="2018-07-22" />
  <p>From age</p>
  <input id="number" type="number" value="42" />
  <p>To age</p>
  <input id="number" type="number" value="42" />
  <button @click="searchFromTo()">Найти</button>
</template>
<script lang="ts">
import { Options, Prop, Vue, Watch } from "vue-property-decorator";
@Options({
  name: "filter",
})
export default class Filter extends Vue {
  // search = "";
  // @Watch("search") // есть такая хрень как debounce (в библиотеке lodash)
  // onSearchChanged() {
  //   this.$emit("someEvent", this.search);
  //   //передать в родитель
  // }
  searchFromTo() {
    let string = document.getElementsByTagName("input")[0].value;
    let fromDate = document.getElementsByTagName("input")[1].value;
    let toDate = document.getElementsByTagName("input")[2].value;
    let fromAge = document.getElementsByTagName("input")[3].value;
    let toAge = document.getElementsByTagName("input")[4].value;
    this.$emit("someEvent", string, fromDate, toDate,fromAge,toAge);
  }
}
</script>
