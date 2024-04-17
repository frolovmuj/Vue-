<template>
  <div v-if="card" class="content">
    <div class="left-column"
      ><img
        :src="'../../public/' + card.imgUrl"
        alt="card"
        data-image="black"
    /></div>
    <div class="right-column">
      <div class="product-description"
        >Кроссовки
        <h1>{{ card.title }}</h1>
        <p
          >"Кроссовки {{ card.title }} - это отличный выбор
          для баскетболистов и всех, кто ищет поддержку и
          комфорт при занятиях спортом. Верхняя часть
          выполнена из сетчатого материала, что обеспечивает
          хорошую вентиляцию. Подошва из синтетического
          материала обеспечивает хорошее сцепление с
          поверхностью и амортизацию при прыжках. Кроссовки
          имеют удобную шнуровку и дизайн, который подойдет
          для любого стиля."</p
        >
      </div>
      <div class="product-configuration"> </div>
      <div class="product-price"
        ><span>{{ card.price.toLocaleString() }} руб.</span>
        <green-btn @click="uniteToCart">
          {{
            card.inCart
              ? 'Удалить из корзины'
              : 'Добавить в корзину'
          }}
        </green-btn>
        <green-btn @click="uniteToFavorites">
          {{
            card.favourite
              ? 'Удалить из любимых'
              : 'Добавить в любимые'
          }}
        </green-btn>
      </div>
    </div>
  </div>
  <page-preload v-else/>
</template>
<script>
import PagePreload from '../components/preloads/ItemPagePreload.vue';
import { mapState, mapActions } from 'vuex';
export default {
  components: {
    PagePreload
  },
  data() {
    return {
      id: null,
    };
  },
  watch: {
    '$route.params.id'(newId) {
      this.id = newId;
      console.log(this.id);
      this.getOneItem(this.id);
    },
  },
  computed: {
    ...mapState({
      card: (state) => state.item.card,
    }),
  },
  methods: {
    ...mapActions({
      addToCart: 'item/addToCart',
      removeFromCart: 'item/removeFromCart',
      addToFavorites: 'item/addToFavorites',
      removeFromFavorites: 'item/removeFromFavorites',
      getOneItem: 'item/getOneItem',
    }),
    uniteToCart() {
      if (!this.card.inCart) {
        this.addToCart(this.card._id);
        this.card.inCart = true;
      } else {
        this.removeFromCart(this.card._id);
        this.card.inCart = false;
      }
    },
    uniteToFavorites() {
      if (!this.card.favourite) {
        this.addToFavorites(this.card._id);
        this.card.favourite = true;
      } else {
        this.removeFromFavorites(this.card._id);
        this.card.favourite = false;
      }
    },
  },
  mounted() {
    this.id = this.$route.params.id;
    this.getOneItem(this.id);
  },
};
</script>
<style lang="scss" scoped>
.content {
  padding: 30px;
  display: flex;
  @media (max-width: 1059px) {
    flex-direction: column;
  }
}

/* Columns */
.left-column {
  width: 55%;
  position: relative;
  @media (max-width: 1059px) {
    margin: 0 auto;
  }
}

.right-column {
  width: 45%;
  @media (max-width: 1059px) {
    width: 100%;
  }
}

/* Left Column */
.left-column img {
  text-align: center;
  width: 56%;
  display: block;
  margin: 0 auto;
  transition: all 0.3s ease;
  @media (max-width: 1059px) {
    width: 80%;
  }
}

/* Product Description */
.product-description {
  border-bottom: 1px solid #e1e8ee;
  margin-bottom: 20px;
  span {
    font-size: 12px;
    color: #358ed7;
    letter-spacing: 1px;
    text-transform: uppercase;
    text-decoration: none;
  }
  h1 {
    font-weight: 300;
    font-size: 42px;
    margin-bottom: 15px;
    color: #43484d;
    letter-spacing: -2px;
  }
  p {
    font-size: 16px;
    font-weight: 300;
    color: #86939e;
    line-height: 24px;
    padding-bottom: 15px;
  }
}

/* Product Price */
.product-price {
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  button {
    width: 100%;
  }
  span {
    font-size: 26px;
    font-weight: 300;
    color: #43474d;
    margin-right: 20px;
  }
}
</style>
