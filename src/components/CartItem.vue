<template>
  <div class="card">
    <img
      class="card__img"
      width="70"
      height="70"
      @click="$router.push(`/cards/${card._id}`)"
      :src="'../../public' + card.imgUrl"
      alt="sheakers" />
    <div class="card__description">
      <p>{{ card.title }}</p>
      <b>{{ card.price.toLocaleString() }} руб.</b>
    </div>
    <button class="card__buttonIntoToBusket">
      <img
      @click="removeFromCart(card._id)"
        src="../../public/img/crossButton.svg"
        alt="remove" />
    </button>
  </div>
</template>
<script>
import {
  mapState,
  mapGetters,
  mapActions,
  mapMutations,
} from 'vuex';
export default {
  props: {
    card: {
      type: Object,
      required: true,
    },
  },
  computed: {
    ...mapState({}),
    ...mapGetters({}),
  },
  methods: {
    ...mapMutations({}),
    ...mapActions({
      removeFromCart: 'item/removeFromCart',
    }),
  },
};
</script>
<style lang="scss" scoped>
.card {
  background: #ffffff;
  border: 1px solid #f3f3f3;
  border-radius: 20px;
  display: flex;
  padding: 30px 20px;
  &__img {
    margin-right: 21px;
    cursor: pointer;
  }
  &__description {
    display: flex;
    flex-direction: column;
    gap: 8px 0;
    width: 150px;
    margin-right: 12px;
    p {
      font-size: 14px;
      line-height: 17px;
      color: #000000;
    }
  }
  button {
    margin-left: 10px;
    img {
      cursor: pointer;
      border-radius: 8px;
      transition: box-shadow 0.3s;
      &:hover {
        box-shadow: 3px 2px 14px -2.6px;
      }
    }
  }
}
</style>
