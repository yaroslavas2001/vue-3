<template>
  <div class="home">
    <H1>{{ name }}</H1>
    <h1>
    {{test}}
    </h1>
    <div class='element'>
      <input v-model='name'/>
      <button>Ok</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Prop, Vue, Watch } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

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
    console.log('Name changed: ', this.name);
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
