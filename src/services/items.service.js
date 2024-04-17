import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:3010';
export const ItemsService = {
  async getAllItems() {
    try {
      const response = await axios.get('/items');
      return response.data;
    } catch (err) {
      console.error(err);
    }
  },
  async getCart() {
    try {
      const response = await axios.get('/cart');
      return response.data;
    } catch (err) {
      console.error(err);
    }
  },
  async addToCart(id) {
    try {
      const response = await axios.post(
        '/items/add-to-cart',
        {
          id: id,
        }
      );
      return response.data;
    } catch (err) {
      console.log(err);
    }
  },
  async removeFromCart(id) {
    try {
      const response = await axios.post(
        '/items/remove-from-cart',
        {
          id: id,
        }
      );
      return response.data;
    } catch (err) {
      console.log(err);
    }
  },
  async getAllFavorites() {
    try {
      const response = await axios.get('/favorites');
      return response.data;
    } catch (err) {
      console.error(err);
    }
  },
  async addToFavorites(id) {
    try {
      const response = await axios.post(
        '/items/add-to-favorites',
        {
          id: id,
        }
      );
      return response.data;
    } catch (err) {
      console.log(err);
    }
  },
  async removeFromFavorites(id) {
    try {
      const response = await axios.post(
        '/items/remove-from-favorites',
        {
          id: id,
        }
      );
      return response.data;
    } catch (err) {
      console.log(err);
    }
  },
  async getOneItem(id) {
    try {
      const response = await axios.get(
        `/cards/card?id=${id}`
      );
      return response.data;
    } catch (err) {
      console.error(err);
    }
  },
  async getAllBoughtItems() {
    // Получаем все
    try {
      const response = await axios.get(`/boughts-items`);
      return response.data;
    } catch (err) {
      console.error(err);
    }
  },
  async buyItems(arrayOfId) {
    //Покупаем
    try {
      const response = await axios.post(`/boughts-items`, {
        arrayOfId: arrayOfId,
      });
      return response.data;
    } catch (err) {
      console.error(err);
    }
  },
};
