<template>
  <div class="app">
    <div class="wrapper">
      <drawer-block/>
      <header-block/>
      <router-view />
    </div>
  </div>
</template>
<script>
import HeaderBlock from './components/Header.vue';
import DrawerBlock from './components/Drawer.vue';
import {
  mapActions,
  mapMutations,
} from 'vuex';
export default {
  components: { HeaderBlock, DrawerBlock },
  methods: {
    ...mapMutations({
      setSearchValue: 'item/setSearchValue',
    }),
    ...mapActions({
      fetchPosts: 'item/fetchPosts',
      getFavoritesItems: 'item/getFavoritesItems',
      getAllBoughtItems: 'item/getAllBoughtItems',
    }),
  },
  mounted() {
    this.fetchPosts();
    this.getFavoritesItems();
    this.getAllBoughtItems();
  },
};
</script>
<style lang="scss">
</style>
