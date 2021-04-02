<template>
  <div class="home">
  <h1>Table</h1>
    <h1>{{ name }}</h1>
    <div class='element'>
      <input v-model='name'/>
      <!--v-model  для обновления данных в элементах ввода-->
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
  }
  name = 'Иванов Иван Иванович';
  @Watch('name')
  onNameChanged() {
    // https://stackoverflow.com/questions/45278398/how-to-use-faker-js-in-typescript
    //https://www.npmjs.com/package/faker
    for (var i = 0; i < 50; i++) {
      let firstName = faker.name.firstName();
      console.log(firstName);
      let birthday = faker.date.past();
      console.log(birthday);
      let age = Math.floor(Math.random() * 101);;
      console.log(age);
      let avatar = faker.image.avatar();
      console.log(avatar);
    }
  }
}
</script>
<style lang="less">
.home {
  .element{
    display: flex;
    align-items: center;
  }
}
</style>
