<template>
    <div class="pagination">
        <div class="page" v-for="page in totalPageCount " :class="{active: page == currentPage}" :key="page" @click="pageClick(page)">{{page}}</div>
      </div>
</template>
<script>
import { Options, Prop, Vue, Watch } from 'vue-property-decorator';


@Options({
    name: 'pagination'
})
export default class Pagination extends Vue {
created(){
    console.log();
}

// get totalPageCount(): number {
//     return Math.ceil(this.filteredUsers.length/this.pageSize);
//   }
}
</script>