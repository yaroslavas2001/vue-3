<template>
  <div class="home">
    <h1>{{ name }}</h1>
    <h1> {{test}} </h1>
    <div class='element'>
      <input v-model='name'/>
      <!--v-model  для обновления данных в элементах ввода-->
      <button>Ok</button>
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
export default class Home extends Vue {
  
  @Prop({type: String}) test!: string;
  created() {
  }
  name = 'Иванов Иван Иванович';
  @Watch('name')
  onNameChanged() {
    let city = faker.phone.phoneNumber();
    console.log(city);
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
