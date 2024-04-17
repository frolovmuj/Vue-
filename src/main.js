import { createApp } from 'vue';
import App from './App.vue';
import components from './components/UI/index';
import router from './router/router';
import './styles/reset.scss'
import './styles/index.scss'
import store from './store';
const app = createApp(App);
components.forEach((component) => {
  app.component(component.name, component);
});
app.use(router).use(store).mount('#app');

