<template>
  <div class="home">
  <h1>Table</h1>
    <!-- <input v-model='search'/>  передать в компонент-->
   <Filter :users="allUsers" @someEvent="onSomeEventCaptured"/>
    <div class="2">
      <div class="_row">
        <div class="cell_name">Имя</div>
        <div class="cell_date">Дата рождения</div>
        <div class="cell_age">Возраст</div>
        <div class="cell_avatar">Фотография</div>
      </div>
      <div class="row" v-for="item in usersToDisplay" :key="item">
          <div class="cell_name" >{{item.name}}</div>
          <div class="cell_date" >{{formatDate(item.data)}}</div>
          <div class="cell_age" >{{item.age}}</div>
          <div class="cell_avatar">
            <img :src="item.avatar" alt="">
          </div>
      </div>
      <!-- <div class="pagination">
        <div class="page" v-for="page in totalPageCount " :class="{active: page == currentPage}" :key="page" @click="pageClick(page)">{{page}}</div>
      </div> -->
      <Pagination />
    </div>

  </div>
</template>

<script lang="ts">
// класс у которого будет метод - получить список пользователей . В качестве параметров он принимает класс FilterRequest {search?, date?, skip?, take?}
// т.е. getUsers(FilterRequest) => вернет {Count: (всего элементов), Items: - непосредственно элементы}. Items: []UserServerModel - {name, birhtdate, avatar, age}
// надо сделать компонент фильтр - ввод поисковой строки, выбор даты.
// компонент / табличка - который отображает данные.
// компонент - постраничка - который формирует элементы переключения страниц
// отображать ты будешь список UserViewModel[]
// пример таблицы https://mdbootstrap.com/docs/b4/jquery/tables/pagination/
import { Options, Prop, Vue, Watch } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import Filter from '@/components/Filter.vue';
import Pagination from '@/components/Pagination.vue';

import * as faker from 'faker';
import * as moment from 'moment';

interface IUser {
  name: string;
  data: Date;
  age: number;
  avatar: string;
}
@Options({
  name: 'table',
  components: {
    HelloWorld,
    Filter,
    Pagination,
  }, 
})
export default class Table extends Vue {

    get usersToDisplay(): IUser[] {
    let from = (this.currentPage - 1)*this.pageSize;
    let to = from + this.pageSize;
    return this.filteredUsers.slice(from,to);
  }
  allUsers: IUser[] = [];
  filteredUsers: IUser[] = [];
  pageSize = 10;
  get totalPageCount(): number {
    return Math.ceil(this.filteredUsers.length/this.pageSize);
  }
  formatDate(date: Date) {
    return moment(date).format('DD.MM.YYYY hh:mm');
  }

  // ловля события
  onSomeEventCaptured(data: string) {
    console.log('Словили событие: ', data);
    
  }
  currentPage = 1;
  initData() {
    for (var i = 0; i <30; i++) {
      let dist = {
        name : faker.name.firstName(),
        data : faker.date.past(),
        age :Math.floor(Math.random() * 101),
        avatar : faker.image.avatar()
        };
      this.allUsers.push(dist);
    }
    this.filteredUsers = this.allUsers.slice();
  }
  created() {
    this.initData();
  console.log(Filter);
  }
  pageClick (page : Number){
    console.log(this.currentPage);
    this.currentPage =Number(page);
  }

  // search = '';
  // @Watch('search') // есть такая хрень как debounce (в библиотеке lodash)
  // onSearchChanged() {
  //   console.log(this.search);
  //   const s = this.search.toLowerCase();
  //   this.filteredUsers = this.allUsers.filter(x=>x.name.toLowerCase().includes(s)
  //     || x.age.toString().includes(s) || this.formatDate(x.data).includes(s));
  //     if (this.currentPage > this.totalPageCount) {
  //       this.currentPage = this.totalPageCount;
  //     }
  // }
}
</script>
<style lang="less">
.home {
  .element{
    display: flex;
    align-items: center;
  }
  ._row,
  .row{
    display: flex;
  }
  .cell_name,
  .cell_date,
  .cell_age,
  .cell_avatar{
    width: 200px;
    border: 1px #000 solid;
  }
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
}
</style>
