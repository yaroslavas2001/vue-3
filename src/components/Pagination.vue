<template>
    <div class="pagination">
        <div class="page" v-for="page in totalPageCount " :class="{active: page == currentPage}" :key="page" @click="pageClick(page)">{{page}}</div>
      </div>
</template>
<script lang="ts">
import { Options, Prop, Vue, Watch } from 'vue-property-decorator';


@Options({
    name: 'pagination'
})
export default class Pagination extends Vue {

@Prop({type: Number}) currentPage!: number;
 @Prop({type: Array}) filteredUsers!: any [];
@Prop({type: Number}) pageSize!: number;
pageClick (page : Number){
    this.currentPage =Number(page);
}
get totalPageCount(): number {
    return Math.ceil(this.filteredUsers.length/this.pageSize);
  }
}
</script>
<style lang="less">
.pagination{
    display: flex;
}
.page{
    padding: 10px;
    border: 1px solid #000;
    margin: 1px;
    cursor: pointer;
    &.active {
      background-color: purple;
   }
}
</style>