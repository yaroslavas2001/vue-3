<template>
  <div class="home">
    <h1>Table</h1>
    <Filter @change="onFilterChanged" />

    <Grid :usersToDisplay="usersToDisplay" />

    <Pagination
      :currentPage="currentPage"
      :pageSize="pageSize"
      :totalCount="totalPageCount"
      @pageClick="pageClick"
    />
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


//добавить поиск до и после
//дообавить расширение списка как в примере
// слот в таблице все импуты, в фильтре кнопки поиска и отчистки фильтра
import { Options, Prop, Vue, Watch } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import Filter from "@/components/Filter.vue";
import Pagination from "@/components/Pagination.vue";
import Grid from "@/components/Grid.vue";
import ISearch from "../models/ISearch";

import * as faker from "faker";
import * as moment from "moment";
import { date } from "faker";

interface IUser {
  name: string;
  data: Date;
  age: number;
  avatar: string;
}

@Options({
  name: "table",
  components: {
    HelloWorld,
    Filter,
    Pagination,
    Grid,
  },
})
export default class TableComponent extends Vue {
  created() {
    this.initData();
  }
  allUsers: IUser[] = [];
  filteredUsers: IUser[] = [];
  currentPage = 1;
  pageSize = 10;
  initData() {
    for (var i = 0; i < 30; i++) {
      let dist = {
        name: faker.name.firstName(),
        data: faker.date.past(),
        age: Math.floor(Math.random() * 101),
        avatar: faker.image.avatar(),
      };
      this.allUsers.push(dist);
    }
    this.filteredUsers = this.allUsers.slice();
  }

  get usersToDisplay(): IUser[] {
    let from = (this.currentPage - 1) * this.pageSize;
    let to = from + this.pageSize;
    return this.filteredUsers.slice(from, to);
  }

  get totalPageCount(): number {
    return Math.ceil(this.filteredUsers.length / this.pageSize);
  }
  // получает номер страницы на которую нажали
  pageClick(page: Number) {
    this.currentPage = Number(page);
  }
  formatDate(date: Date) {
    return moment(date).format("DD.MM.YYYY");
  }
  // ловля события
  onFilterChanged(data: ISearch) {
    //console.log(typeof(data.fromDate))
    //console.log(typeof()));
   const s = data.search.toLowerCase();
    this.filteredUsers = this.allUsers.filter((x) => x.name.toLowerCase().includes(s) || x.age.toString().includes(s) ||this.formatDate(x.data).includes(s));
    if (this.currentPage > this.totalPageCount) {
      this.currentPage = this.totalPageCount;
    }

  }
}
</script>
<style lang="less">
.home {
  .element {
    display: flex;
    align-items: center;
  }
  ._row,
  .row {
    display: flex;
  }
  .cell_name,
  .cell_date,
  .cell_age,
  .cell_avatar {
    width: 200px;
    border: 1px #000 solid;
  }
  .pagination {
    display: flex;
  }
  .page {
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
