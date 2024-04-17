<template>
  <slider-swapper />
  <div class="hr"></div>
  <section class="content">
    <div class="content__heading">
      <my-title>{{
        searchValue.length > 0
          ? `Поиск по товару: "${searchValue}"`
          : 'Все товары'
      }}</my-title>
      <search-input
        :model-value="searchValue"
        @update:model-value="setSearchValue" />
    </div>
    <div class="cards">
      <transition-group
        v-if="items.length > 0"
        name="card-list">
        <card-item
          v-for="card in searchedItems"
          :key="card._id"
          :card="card" />
      </transition-group>
      <card-preload v-else v-for="i in 20" :key="i" />
      <!-- <PreloadCards v-else /> -->
    </div>
  </section>
</template>
<script>
import CardPreload from '../components/preloads/CardPreload.vue';
import CardItem from '../components/Card.vue';
import SliderSwapper from '../components/Slider.vue';

import {
  mapState,
  mapGetters,
  mapActions,
  mapMutations,
} from 'vuex';
export default {
  components: {
    CardItem,
    CardPreload,
    SliderSwapper,
  },
  computed: {
    ...mapState({
      items: (state) => state.item.items,
      searchValue: (state) => state.item.searchValue,
    }),
    ...mapGetters({
      searchedItems: 'item/searchedItems',
    }),
  },
  methods: {
    ...mapMutations({
      setSearchValue: 'item/setSearchValue',
    }),
    ...mapActions({
      fetchPosts: 'item/fetchPosts',
    }),
  },
};
</script>
<style lang="scss">
.card-list-item {
  display: inline-block;
  margin-right: 10px;
}
.card-list-enter-active,
.card-list-leave-active {
  transition: all 2s;
}
.card-list-enter, .card-list-leave-to /* .list-leave-active до версии 2.1.8 */ {
  opacity: 0;
  transform: translateX(30px);
}
.card-list-move {
  transition: transform 0.7s;
}
.hr {
  background-color: #eaeaea;;
  height: 1px;
}
</style>
