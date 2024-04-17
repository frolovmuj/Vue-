<template>
  <div v-if="cartIsOpen" class="overlay">
    <div class="drawer">
      <div v-if="itemsInCart.length > 0">
        <h2 class="drawer__title">
          <span>Корзина</span>
          <img
            @click="closeCart"
            src="../../public/img/crossButton.svg"
            alt="Close basket" />
        </h2>
        <div class="cards">
          <cart-item
            v-for="card in itemsInCart"
            :key="card._id"
            :card="card" />
        </div>
        <div class="drawer__total">
          <ul class="drawer__descritionList">
            <li class="drawer__descritionItem">
              <span>Цена:</span>
              <div class="lineDot"></div>
              <b
                >{{
                  getTotalPrice.toLocaleString()
                }}
                руб.</b
              >
            </li>
            <li class="drawer__descritionItem">
              <span>Налог 5%:</span>
              <div class="lineDot"></div>
              <b>{{ getTotalTax.toLocaleString() }} руб.</b>
            </li>
            <li class="drawer__descritionItem">
              <span>Итого:</span>
              <div class="lineDot"></div>
              <b
                >{{
                  (
                    getTotalTax + getTotalPrice
                  ).toLocaleString()
                }}
                руб.</b
              >
            </li>
          </ul>
          <green-btn @click="buyItems">
            Оформить заказ</green-btn
          >
        </div>
      </div>

      <!--! Если куплена  -->
      <div v-else-if="cartIsCheckout" class="drawer_bought">
        <img
          src="/img/cartIsBought.jpg"
          alt="cartIsBought" />
        <h2>
          Заказ оформлен и будет доставлен в ближайшее
          время!
        </h2>
        <p
          >Ваш заказ был оформлен и наша компания доставит
          его в самое ближайшее время. Примерное время
          ожидания 3-12 дней</p
        >
        <green-btn @click="closeCart">
          Закрыть корзину</green-btn
        >
      </div>

      <div v-else class="drawer_empty">
        <h2> Корзина Пуста</h2>
        <img
          width="250"
          height="250"
          src="../../public/img/box.jpg"
          alt="box" />
        <h3>Похоже что ваша корзина пуста :(</h3>
        <green-btn @click="closeCart">
          Выйти с корзины
        </green-btn>
      </div>
    </div>
  </div>
</template>
<script>
import CartItem from './CartItem.vue';
import {
  mapState,
  mapGetters,
  mapActions,
  mapMutations,
} from 'vuex';
export default {
  components: {
    CartItem,
  },
  computed: {
    ...mapState({
      itemsInCart: (state) => state.item.itemsInCart,
      cartIsOpen: (state) => state.item.cartIsOpen,
      cartIsCheckout: (state) => state.item.cartIsCheckout,
    }),
    ...mapGetters({
      getTotalPrice: 'item/getTotalPrice',
      getTotalTax: 'item/getTotalTax',
    }),
  },
  methods: {
    ...mapMutations({
      closeCart: 'item/closeCart',
    }),
    ...mapActions({
      getCartItems: 'item/getCartItems',
      buyItems: 'item/buyItems',
    }),
  },
  mounted() {
    this.getCartItems();
  },
  watch: {
    cartIsOpen(value) {
      window.scrollTo({
        top: 0,
        left: 0,
      });
      document.body.style.overflow = value
        ? 'hidden'
        : 'auto';
    },
  },
};
</script>
<style lang="scss" scoped>
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  background: #00000080;
  z-index: 10;
  width: 100%;
  height: 100%;
}
.drawer {
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 418px;
  height: 100%;
  right: 0;
  opacity: 100;
  z-index: 100;
  background: #ffffff;
  box-shadow: -10px 4px 24px rgba(0, 0, 0, 0.1);
  padding: 30px;
  @media (max-width: 437px) {
    width: 100%;
  }
  .drawer_empty {
    h2 {
      font-weight: 700;
      font-size: 24px;
      line-height: 29px;
      color: #000000;
      margin-bottom: 18vh;
      @media screen and (max-height: 650px) {
        margin-bottom: 5vh;
      }
    }
    img {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 auto;
    }
    h3 {
      font-weight: 900;
      font-size: 24px;
      text-align: center;
      line-height: 29px;
      color: #000000;
      margin-bottom: 50px;
    }
    button {
      width: 100%;
    }
  }
  .drawer_bought {
    img {
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 35px;
      display: block;
    }
    h2 {
      font-weight: 700;
      font-size: 24px;
      line-height: 29px;
      color: #9dd558;
      text-align: center;
      margin-bottom: 2vh;
    }
    p {
      text-align: center;
      margin-bottom: 20px;
    }
    button {
      width: 100%;
    }
  }

  &__title {
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    color: #9dd558;
    margin-bottom: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    img {
      cursor: pointer;
      border-radius: 8px;
      transition: box-shadow 0.3s;
      &:hover {
        box-shadow: 3px 2px 14px -2.6px;
      }
    }
  }
  .cards {
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: 20px;
    overflow: auto;
    margin-bottom: 20px;
  }
  &__total {
    .drawer__descritionList {
      display: flex;
      flex-direction: column;
      gap: 19px 0;
      margin-bottom: 24px;
      .drawer__descritionItem {
        display: flex;
        gap: 0 9px;
        .lineDot {
          width: 167px;
          height: 1px;
          border: 1px dashed #dfdfdf;
          margin-top: 14px;
        }
      }
    }
    button {
      width: 100%;
    }
  }
}
</style>
