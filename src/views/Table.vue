<template>
  <div class="home">
  <h1>Table</h1>
    <input v-model='name'/>

    <div class="2" v-if="name.length!=0">
      <div class="_row">
        <div class="cell_name">Имя 1</div>
        <div class="cell_date">Дата рождения</div>
        <div class="cell_age">Возраст</div>
        <div class="cell_avatar">Фотография</div>
      </div>
      <div class="row" v-for="item in searchlist" :key="item">
          <div class="cell_name" >{{item.name}}</div>
          <div class="cell_date" >{{item.data}}</div>
          <div class="cell_age" >{{item.age}}</div>
          <div class="cell_avatar">
            <img :src="item.avatar" alt="">
          </div>
      </div>
       <div class="pagination">
        <div class="page" v-for="page in totalPageCount " :key="page" @click="pageClick(page)">{{page}}</div>
      </div>
    </div>
    <div class="2" v-else>
      <div class="_row">
        <div class="cell_name">Имя</div>
        <div class="cell_date">Дата рождения</div>
        <div class="cell_age">Возраст</div>
        <div class="cell_avatar">Фотография</div>
      </div>
      <div class="row" v-for="item in usersToDisplay" :key="item">
          <div class="cell_name" >{{item.name}}</div>
          <div class="cell_date" >{{item.data}}</div>
          <div class="cell_age" >{{item.age}}</div>
          <div class="cell_avatar">
            <img :src="item.avatar" alt="">
          </div>
      </div>
      <div class="pagination">
        <div class="page" v-for="page in totalPageCount " :key="page" @click="pageClick(page)">{{page}}</div>
      </div>
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
import * as faker from 'faker';

@Options({
  components: {
    HelloWorld
  }, 
})
export default class Table extends Vue {
   //@Prop({type: Object}) UserViewModel!: Object;
  usersToDisplay: {name: string, data: Date, age: number, avatar: string}[] = [];
  allUsers: {name: string, data: Date, age: number, avatar: string}[] = [];
  searchlist: {name: string, data: Date, age: number, avatar: string}[] = [];
  pageSize = 10;
  totalPageCount: number = 0;
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
    this.totalPageCount = Math.ceil(this.allUsers.length/this.pageSize);
  }
  created() {
    this.initData();
    this.filterDisplayUsers();
  }
  filterDisplayUsers() {
     
    let from = (this.currentPage - 1)*this.pageSize;
    let to = from + this.pageSize;
    if(this.name.length==0){
       this.usersToDisplay = this.allUsers.slice(from,to);
    }else{
      console.log(from);
      console.log(to);
      this.usersToDisplay= this.searchlist.slice(from,to);
    }

  }
  pageClick (page : Number){
    this.currentPage =Number(page);
    this.filterDisplayUsers();
  }
  name = '';
  @Watch('name')
  search() {
    console.log(this.name);
    // this.allUsers = this.allUsers.filter(function(item){
    //   console.log(item.name);
    // })
  this.searchlist = [];
    for(var i=0; i<this.allUsers.length;i++){
      if( this.allUsers[i].name.toLowerCase().includes(this.name.toLowerCase()) || String( this.allUsers[i].age).includes(this.name) || String( this.allUsers[i].data).includes(this.name) ){
        this.searchlist.push(this.allUsers[i]);
        console.log("yes");
      } 
    }
    this.totalPageCount = Math.ceil(this.searchlist.length/this.pageSize);
    //js filter
  }
  // плагинация https://www.youtube.com/watch?v=ndNWcZko64s
  // https://stackoverflow.com/questions/45278398/how-to-use-faker-js-in-typescript
  //https://www.npmjs.com/package/faker
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
  }
}
</style>
