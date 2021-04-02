<template>
  <div class="ui-record">
    <input v-model='value' placeholder="Введите тектс">
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options<UiRecord>({
  props: {
    modelValue: String,
  },
  emits: ['update:modelValue'],
  watch: {
    value(value) {
      this.value= value;
      this.$emit('update:modelValue', value);
    },
  },
})
export default class UiRecord extends Vue {
  readonly modelValue!: string;

  value:string='';

  created() {
     this.value= this.modelValue;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
