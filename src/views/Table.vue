<template>
  <div class="home">
  <h1>Table</h1>
  <div class="_row">
    <div class="cell_name">Имя</div>
    <div class="cell_date">Дата рождения</div>
    <div class="cell_age">Возраст</div>
    <div class="cell_avatar">Фотография</div>
  </div>
<div class="row" v-for="item in UserViewModellist" :key="item">
      <div class="cell_name" >{{item.name}}</div>
      <div class="cell_date" >{{item.data}}</div>
      <div class="cell_age" >{{item.age}}</div>
      <div class="cell_avatar">
        <img :src="item.avatar" alt="">
      </div>
  </div>
 <div class="pagination">
   <div class="page" v-for="page in pages" :key="page" @click="pageClick(page)">{{page}}</div>
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
  
  data() {
    let UserViewModel = [];
    let UserServerModel = [];
     for (var i = 0; i < 52; i++) {
      let dist = {
      name : faker.name.firstName(),
      data : faker.date.past(),
      age :Math.floor(Math.random() * 101),
      avatar : faker.image.avatar()
      };
      UserServerModel.push(dist);
    }
    UserViewModel = UserServerModel;
    
    let pageNum = 1;
    let usersPerpage = 10;
    let pages = Math.ceil(UserViewModel.length/10);
    let from = (pageNum - 1)*usersPerpage;
    let to = from + usersPerpage;
    let UserViewModellist =UserViewModel.slice(from,to);
    return {
      UserViewModellist,
      UserViewModel,
      pages,
    }
  }
  pageClick (){
    console.log(7);
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
