declare module '*.vue' {
  import type { DefineComponent } from 'vue';

  const component: DefineComponent<{}, {}, any>;
  export default component;
}
//помогает вашему IDE понять, что такое файл, заканчивающийся на .vue