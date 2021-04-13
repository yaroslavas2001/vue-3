<template>
  <div class="_row">
    <div class="cell_name">Имя</div>
    <div class="cell_date">Дата рождения</div>
    <div class="cell_age">Возраст</div>
    <div class="cell_avatar">Фотография</div>
  </div>
  <div class="row" v-for="item in Display" :key="item">
    <div class="cell_name">{{ item.name }}</div>
    <div class="cell_date">{{ formatDate(item.data) }}</div>
    <div class="cell_age">{{ item.age }}</div>
    <div class="cell_avatar">
      <img :src="item.avatar" alt="" />
    </div>
  </div>
</template>
<script lang="ts">
import { Options, Prop, Vue } from "vue-property-decorator";
import * as moment from "moment";
interface IUser {
  name: string;
  data: Date;
  age: number;
  avatar: string;
}
@Options({
  name: "grid",
})
export default class Grid extends Vue {
  @Prop({ type: Array }) usersToDisplay!: IUser[];
  get Display(): IUser[] {
    return this.usersToDisplay;
  }
  formatDate(date: Date) {
    return moment(date).format("DD.MM.YYYY hh:mm");
  }
}
</script>
<style lang="less">
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
</style>