import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../pages/Home.vue'
import FavouritesPage from '../pages/Favourites.vue'
import ItemPage from '../pages/ItemPage.vue'
import ProfilePage from '../pages/Profile.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/favourites', component: FavouritesPage },
  { path: '/cards/:id', component: ItemPage },
  { path: '/boughts', component: ProfilePage },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});
export default router;
