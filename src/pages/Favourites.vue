<template>
  <section class="content">
    <div class="content__heading">
      <img
        @click="this.$router.go(-1)"
        src="../../public/img/back.svg"
        alt="back" />
      <my-title>Оценённые</my-title>
    </div>
    <div class="cards">
      <card-item
        v-for="card in favoritesItems"
        v-if="favoritesItems.length > 0"
        :card="card"
        :key="card._id" />
      <div
        v-else
        class="content_empty">
        <h1 class="content_empty__title"
          >Оцените хоть одну пару кроссовок, чтобы увидеть
          их здесь</h1
        >
        <green-btn @click="$router.push('/')"
          >Вернутсья на главную</green-btn
        >
      </div>
    </div>
  </section>
</template>
<script>
import CardItem from '../components/Card.vue';
import CardPreload from '../components/preloads/CardPreload.vue';
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
  },
  computed: {
    ...mapState({
      favoritesItems: (state) => state.item.favoritesItems,
    }),
    ...mapGetters({
      searchedItems: 'item/searchedItems',
    }),
  },
  methods: {
    ...mapMutations({
      setSearchValue: 'item/setSearchValue',
    }),
  },
};
</script>
<style lang="scss" scoped>
.content {
  &__heading {
    display: flex;
    gap: 20px;
    justify-content: start;
    align-items: center;
    img {
      cursor: pointer;
      border-radius: 8px;
      transition: box-shadow 0.3s;
      &:hover {
        box-shadow: 3px 2px 14px -2.6px black;
      }
    }
  }
}
</style>
