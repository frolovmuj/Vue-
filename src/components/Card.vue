<template>
  <div class="card">
    <button class="card__favorite">
      <img
        @click="uniteToFavorites"
        :src="
          card.favourite
            ? '../../public/img/liked.svg'
            : '../../public/img/unliked.svg'
        "
        alt="liked" />
    </button>
    <img
      class="card__img"
      :width="133"
      :height="112"
      :src="'../../public/' + card.imgUrl"
      @click="$router.push(`/cards/${card._id}`)"
      alt="sneakers" />
    <p class="card__title">{{ card.title }}</p>
    <div class="card__flex">
      <div class="card__price">
        <span>Цена:</span>
        <b>{{ card.price.toLocaleString() }} руб.</b>
      </div>
      <button class="card__buttonToBasket">
        <img
          @click="uniteToCart"
          :src="
            card.inCart
              ? '../../public/img/addedToCart.svg'
              : '../../public/img/plusButton.svg'
          "
          alt="добавить в корзину" />
      </button>
    </div>
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
  computed: {
    ...mapState({}),
    ...mapGetters({}),
  },
  methods: {
    ...mapMutations({}),
    ...mapActions({
      addToCart: 'item/addToCart',
      removeFromCart: 'item/removeFromCart',
      addToFavorites: 'item/addToFavorites',
      removeFromFavorites: 'item/removeFromFavorites',
    }),
    uniteToCart() {
      if (!this.card.inCart) {
        this.addToCart(this.card._id);
      } else {
        this.removeFromCart(this.card._id);
      }
    },
    uniteToFavorites() { 
      if (!this.card.favourite) {
        this.addToFavorites(this.card._id);
      } else {
        this.removeFromFavorites(this.card._id);
      }
    },
  },
  props: {
    card: {
      type: Object || null,
      required: true,
    },
  },
};
</script>
<style lang="scss" scoped>
.card {
  max-width: 210px;
  background: #ffffff;
  border: 1px solid #f3f3f3;
  border-radius: 40px;
  padding: 30px;
  transition: box-shadow 0.4s ease, transform 0.2s ease-in;
  &:hover {
    box-shadow: 0px 14px 30px rgba(0, 0, 0, 0.05);
    transform: translateY(-7px);
  }
  &__favorite {
    cursor: pointer;
    position: absolute;
  }

  &__img {
    cursor: pointer;
    min-width: 133px;
    margin-bottom: 14px;
  }

  &__flex {
    display: flex;
    gap: 0 25px;
    align-items: center;
    width: 150px;
  }
  &__title {
    font-size: 15px;
    line-height: 14px;
    color: #000000;
    margin-bottom: 14px;
  }
  &__price {
    display: flex;
    flex-direction: column;
    gap: 2px 0;
    span {
      font-weight: 500;
      font-size: 11px;
      line-height: 13px;
      text-transform: uppercase;
      color: #bdbdbd;
    }
  }
  &__buttonToBasket {
    background: #ffffff;
    border: 1px solid #f2f2f2;
    border-radius: 8px;
    width: 32px;
    height: 32px;
    &:hover {
      box-shadow: 0px 14px 30px rgba(0, 0, 0, 0.05);
    }
  }
}
</style>
