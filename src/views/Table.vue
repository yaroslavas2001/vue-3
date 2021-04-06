<template>
  <div class="home">
  <h1>Table</h1>
  <div class="_row">
    <div class="cell_name">Имя</div>
    <div class="cell_date">Дата рождения</div>
    <div class="cell_age">Возраст</div>
    <div class="cell_avatar">Фотография</div>
  </div>
  <div class="row" v-if="UserViewModel">
      <div class="cell_name" v-for="item in UserViewModel" :key="item.name">{{item.name}}</div>
      <div class="cell_date" v-for="item in UserViewModel" :key="item.data">{{item.data}}</div>
      <div class="cell_age" v-for="item in UserViewModel" :key="item.age">{{item.age}}</div>
      <div class="cell_avatar" v-for="item in UserViewModel" :key="item.avatar">
        <img :src="item.avatar" alt="">
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
  // заполнить v-for
  created() {
    let UserViewModel = [];
    let UserServerModel = [];
     for (var i = 0; i < 50; i++) {
      let dist = {
      name : faker.name.firstName(),
      data : faker.date.past(),
      age :Math.floor(Math.random() * 101),
      avatar : faker.image.avatar()
      };
      UserServerModel.push(dist);
    }
    UserViewModel = UserServerModel;
    this.show(UserViewModel);
  }
  show (UserViewModel : object) {
    console.log(UserViewModel);
  }
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
    padding: 20px 40px;
    border: 1px #000 solid;
  }
}
</style>
