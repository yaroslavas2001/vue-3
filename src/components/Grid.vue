<template>
      <div class="_row">
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
      </div> 
      
</template>
<script lang="ts">

import { Options, Prop, Vue, Watch } from 'vue-property-decorator';
  
interface IUser {
  name: string;
  data: Date;
  age: number;
  avatar: string;
}
@Options({
    name: 'grid'
}) 
export default class Grid extends Vue {
    @Prop({type: Array}) allUsers!: any [];
    @Prop({type:  Number}) currentPage!: number;
    @Prop({type: Number}) pageSize!: number;

  get usersToDisplay(): IUser[] {
    let from = (this.currentPage - 1)*this.pageSize;
    let to = from + this.pageSize;
    console.log(this.allUsers.slice(from,to));
    return (this.allUsers.slice(from,to));
    //  return this.filteredUsers.slice(from,to);
  }

}
</script>