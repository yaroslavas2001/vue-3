<template>
  <div class="ui-input">
    <input v-model='value' placeholder="Введите тектс">
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options<UiInput>({
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
export default class UiInput extends Vue {
  readonly modelValue!: string;

  value:string='';

  created() {
    console.log('value',this.value);
     this.value= this.modelValue;
    console.log('value',this.value);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.ui-input{
  input {
    height: 29px;
  }
}
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
