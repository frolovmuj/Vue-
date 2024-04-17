import { ItemsService } from '../services/items.service';
export const itemModule = {
  state: () => ({
    searchValue: '',
    cartIsOpen: false,
    cartIsCheckout: false,
    items: [],
    sentItems: [],
    itemsInCart: [],
    favoritesItems: [],
    card: null,
  }),
  mutations: {
    setItems(state, array) {
      state.items = array;
    },
    setSearchValue(state, newSearchValue) {
      state.searchValue = newSearchValue;
    },
    setCart(state, cards) {
      state.itemsInCart = cards;
    },
    setFavoritesItems(state, cards) {
      state.favoritesItems = cards;
    },
    clearSearchValue(state) {
      state.searchValue = '';
    },
    openCart(state) {
      state.cartIsOpen = true;
    },
    closeCart(state) {
      state.cartIsOpen = false;
    },
    setCartIsCheckout(state, value){
        state.cartIsCheckout = value
    },
    addToCart(state, card) {
      state.itemsInCart.unshift(card);
      state.items = state.items.map((item) => {
        if (item._id === card._id) {
          return { ...item, inCart: true }; // создаем новый объект и возвращаем его
        } else {
          return item; // возвращаем оригинальный объект
        }
      });
      state.favoritesItems = state.favoritesItems.map(
        (item) => {
          if (item._id === card._id) {
            return { ...item, inCart: true }; // создаем новый объект и возвращаем его
          } else {
            return item; // возвращаем оригинальный объект
          }
        }
      );
      if (state.cartIsCheckout) this.commit('item/setCartIsCheckout', false)
    },
    removeFromCart(state, card) {
      state.itemsInCart = state.itemsInCart.filter(
        (c1) => c1._id !== card._id
      );
      state.items = state.items.map((item) => {
        if (item._id === card._id) {
          return { ...item, inCart: false }; // создаем новый объект и возвращаем его
        } else {
          return item; // возвращаем оригинальный объект
        }
      });
      state.favoritesItems = state.favoritesItems.map(
        (item) => {
          if (item._id === card._id) {
            return { ...item, inCart: false }; // создаем новый объект и возвращаем его
          } else {
            return item; // возвращаем оригинальный объект
          }
        }
      );
      if (state.card) {
        state.card.inCart = false;
      }
    },

    addToFavorites(state, card) {
      state.favoritesItems.unshift(card);
      state.items = state.items.map((item) => {
        if (item._id === card._id) {
          return { ...item, favourite: true }; // создаем новый объект и возвращаем его
        } else {
          return item; // возвращаем оригинальный объект
        }
      });
    },
    removeFromFavorites(state, card) {
      state.favoritesItems = state.favoritesItems.filter(
        (c1) => c1._id !== card._id
      );
      state.items = state.items.map((item) => {
        if (item._id === card._id) {
          return { ...item, favourite: false }; // создаем новый объект и возвращаем его
        } else {
          return item; // возвращаем оригинальный объект
        }
      });
    },
    setCard(state, card) {
      state.card = card;
    },
    setBoughtItems(state, items) {
      state.sentItems = [...state.sentItems, ...items];
    },
    buyItems(state, items) {
      state.sentItems = [...items, ...state.sentItems];
      const idCards = items.map((item) => item._id);
      state.items = state.items.map((item) =>
        idCards.includes(item._id)
          ? { ...item, inCart: false }
          : item
      );
      state.favoritesItems = state.favoritesItems.map(
        (item) =>
          idCards.includes(item._id)
            ? { ...item, inCart: false }
            : item
      );
      state.itemsInCart = [];
      if (!state.cartIsCheckout) this.commit('item/setCartIsCheckout', true)
    },
  },
  getters: {
    searchedItems(state) {
      return state.items.filter((card) =>
        card.title
          .toLocaleLowerCase()
          .includes(state.searchValue.toLocaleLowerCase())
      );
    },
    getTotalPrice(state, getters) {
      const itemsLength = state.itemsInCart.length;
      const totalPrice = state.itemsInCart.reduce(
        (acc, curr) => {
          return acc + curr.price;
        },
        0
      );
      return totalPrice;
    },
    getTotalTax(state, getters) {
      const getTotalPrice = getters.getTotalPrice;
      const newTax = getTotalPrice * 0.05;
      return newTax;
    },
  },
  actions: {
    async fetchPosts({ state, commit, dispatch }) {
      const data = await ItemsService.getAllItems();
      commit('setItems', data);
    },
    async getCartItems({ state, commit, dispatch }) {
      const data = await ItemsService.getCart();
      commit('setCart', data);
    },
    async addToCart({ state, commit, dispatch }, id) {
      const data = await ItemsService.addToCart(id);
      commit('addToCart', data);
    },
    async removeFromCart({ state, commit, dispatch }, id) {
      const data = await ItemsService.removeFromCart(id);
      commit('removeFromCart', data);
    },
    async getFavoritesItems({ state, commit, dispatch }) {
      const data = await ItemsService.getAllFavorites();
      commit('setFavoritesItems', data);
    },
    async addToFavorites({ state, commit, dispatch }, id) {
      const data = await ItemsService.addToFavorites(id);
      commit('addToFavorites', data);
    },
    async removeFromFavorites(
      { state, commit, dispatch },
      id
    ) {
      const data = await ItemsService.removeFromFavorites(
        id
      );
      commit('removeFromFavorites', data);
    },
    async getOneItem({ state, commit, dispatch }, id) {
      const data = await ItemsService.getOneItem(id);
      commit('setCard', data);
    },
    async getAllBoughtItems({ state, commit, dispatch }) {
      const data = await ItemsService.getAllBoughtItems();
      commit('setBoughtItems', data);
    },
    async buyItems({ state, commit, dispatch }) {
      const arrayOfId = state.itemsInCart.map(
        (item) => item._id
      );
      const data = await ItemsService.buyItems(arrayOfId);
      commit('buyItems', data);
    }
  },
  namespaced: true,
};
