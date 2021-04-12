<template>
        <input v-model='search' />
</template>
<script lang="ts">
import { Options, Prop, Vue, Watch } from 'vue-property-decorator';
import * as moment from 'moment';

@Options({
name: 'filter',
})
export default class Filter extends Vue {
    @Prop({type: Array}) allUsers!: any [];
//  получить в компоненте
 formatDate(date: Date) {
    return moment(date).format('DD.MM.YYYY hh:mm');
  }
search = '';
  @Watch('search') // есть такая хрень как debounce (в библиотеке lodash)
  onSearchChanged() {
    //  const s = this.search.toLowerCase();
    // this.filteredUsers = this.allUsers.filter(x=>x.name.toLowerCase().includes(s)
    //   || x.age.toString().includes(s) || this.formatDate(x.data).includes(s));
    //   if (this.currentPage > this.totalPageCount) {
    //     this.currentPage = this.totalPageCount;
    //   }
    //console.log(this.search);
    // this.allUsers = this.allUsers.filter(function(item){
    //   console.log(item.name);
    // })
    // console.log(this.allUsers);
    this.$emit('someEvent', this.search);
    //передать в родитель


  }
  
}
</script>
