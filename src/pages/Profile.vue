<template>
  <section class="content">
    <div class="content__heading">
      <img
        @click="this.$router.go(-1)"
        src="../../public/img/back.svg"
        alt="back" />
      <my-title>Архив покупок</my-title>
    </div>
    <div class="cards">
      <purchased-card
        v-if="sentItems.length > 0"
        v-for="item in sentItems"
        :key="item._id"
        :card="item"
         />
      <!-- !! Если пусто -->
      <div v-else class="content_empty">
        <h1 class="content_empty__title"
          >Оформите хотя бы один заказ, чтобы посмотреть
          историю покупок</h1
        >
        <green-btn @click="$router.push('/')"
          >Вернутсья к покупкам</green-btn
        >
      </div>
    </div>
  </section>
</template>
<script>
import PurchasedCard from '../components/PurchasedCard.vue';

import {
  mapState,
  mapGetters,
  mapActions,
  mapMutations,
} from 'vuex';
export default {
  components: {
    PurchasedCard,
  },
  computed: {
    ...mapState({
      sentItems: (state) => state.item.sentItems,
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
<style lang="scss" scoped>
.content {
  &__heading{
    display: flex;
    gap: 20px;
    justify-content: start;
    align-items: center;
    img{
      cursor: pointer;
      border-radius: 8px;
      transition: box-shadow 0.3s;
      &:hover{
        box-shadow: 3px 2px 14px -2.6px black;
      }
    }
  }
}
</style>
