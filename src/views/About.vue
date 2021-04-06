<template>
  <div class="about">
    <h1>This is an about page</h1>
     <h1>{{ name }}</h1>
    <div class='element'>
      <input v-model='name'/>
      <!--v-model  для обновления данных в элементах ввода-->
    </div>
  </div>
</template>
<script>
 // let firstName = faker.name.firstName();
      // console.log(firstName);
      // let birthday = faker.date.past();
      // console.log(birthday);
      // let age = Math.floor(Math.random() * 101);
      // console.log(age);
      // let avatar = faker.image.avatar();
      // console.log(avatar);
       // name = 'Иванов Иван Иванович';
  // @Watch('name')
  // onNameChanged() {}
</script>
