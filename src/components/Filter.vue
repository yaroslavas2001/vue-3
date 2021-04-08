<template>
        <input v-model='search'/>
</template>
<script lang="ts">
import { Options, Prop, Vue, Watch } from 'vue-property-decorator';
import Table from '@/views/Table.vue';

@Options({
name: 'filter',
})
export default class Filter extends Vue {
    @Prop({type: Array}) users!: any [];
//  получить в компоненте
search = '';
  @Watch('search') // есть такая хрень как debounce (в библиотеке lodash)
  onSearchChanged() {
    //console.log(this.search);
    // this.allUsers = this.allUsers.filter(function(item){
    //   console.log(item.name);
    // })
    console.log(this.users);
    this.$emit('someEvent', this.search);
    //передать в родитель



    // const s = this.search.toLowerCase();
    // this.filteredUsers = this.allUsers.filter(x=>x.name.toLowerCase().includes(s)
    //   || x.age.toString().includes(s) || this.formatDate(x.data).includes(s));
    //   if (this.currentPage > this.totalPageCount) {
    //     this.currentPage = this.totalPageCount;
    //   }
  }
}
</script>
