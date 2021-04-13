<template>
  <div class="home">
  <h1>Table</h1>
   <Filter @change="onFilterChanged"/>

   <Grid :usersToDisplay="usersToDisplay"/>

  

        <!-- <input v-model='search' /> -->
      <!-- <div class="_row">
        <div class="cell_name">Имя</div>
        <div class="cell_date">Дата рождения</div>
        <div class="cell_age">Возраст</div>
        <div class="cell_avatar">Фотография</div>
      </div>
      <div class="row" v-for="item in usersToDisplay" :key="item"  >
          <div class="cell_name" >{{item.name}}</div>
          <div class="cell_date" >{{formatDate(item.data)}}</div>
          <div class="cell_age" >{{item.age}}</div>
          <div class="cell_avatar">
            <img :src="item.avatar" alt="">
          </div>
      </div>  -->
  <Pagination :currentPage="currentPage" :pageSize="pageSize" :totalCount="totalPageCount" @change="onPaginationChanged"/>
        <!-- <div class="pagination">
        <div class="page" v-for="page in totalPageCount " :class="{active: page == currentPage}" :key="page" @click="pageClick(page)">{{page}}</div>
      </div> -->

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
// 
import { Options, Prop, Vue, Watch } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import Filter from '@/components/Filter.vue';
import Pagination from '@/components/Pagination.vue';
import Grid from '@/components/Grid.vue';

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
    Grid,
  }, 
})
export default class Table extends Vue {

created() {
  this.initData();
}
allUsers: IUser[] = [];
filteredUsers: IUser[] = [];
currentPage = 1;
pageSize = 10;
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

get usersToDisplay(): IUser[] {
  let from = (this.currentPage - 1)*this.pageSize;
  let to = from + this.pageSize;
  return this.filteredUsers.slice(from,to);
}

get totalPageCount(): number {
  return Math.ceil(this.filteredUsers.length/this.pageSize);
}  

//поиск
 formatDate(date: Date) {
   return moment(date).format('DD.MM.YYYY hh:mm');
  }
  // search = '';
  // @Watch('search') // есть такая хрень как debounce (в библиотеке lodash)
  // onSearchChanged() {
    //   const s = this.search.toLowerCase();
  //   this.filteredUsers = this.allUsers.filter(x=>x.name.toLowerCase().includes(s)
  //     || x.age.toString().includes(s) || this.formatDate(x.data).includes(s));
  //     if (this.currentPage > this.totalPageCount) {
    //       this.currentPage = this.totalPageCount;
  //     }
  // }
  // ловля события
onFilterChanged(data: {search: string, ageFrom?: number, ageTo?: number, dateFrom?: Date, dateTo?: Date}) {
  const s = data.search.toLowerCase();
    this.filteredUsers = this.allUsers.filter(x=>x.name.toLowerCase().includes(s)
      || x.age.toString().includes(s) || this.formatDate(x.data).includes(s));
      if (this.currentPage > this.totalPageCount) {
        this.currentPage = this.totalPageCount;
      }
}

        // получает номер страницы на которую нажали
  onPaginationChanged(data: {page: number, pageSize: number}) {
     this.currentPage =Number(data.page);
    // console.log('Словили событие: ', data);
    // console.log(data.toLowerCase());
  }
}
</script>