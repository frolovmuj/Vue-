<template>
  <div class="card">
    <span class="card-time">{{ getTime(card.createdAt) }}</span>
    <img
      class="card__img"
      width="133"
      height="112"
      :src="'../../public/' + card.imgUrl"
      alt="sneakers" />
    <p class="card__title">{{ card.title }}</p>
    <div class="card__flex">
      <div class="card__price">
        <span>Цена:</span>
        <b>{{ card.price.toLocaleString() }} руб.</b>
      </div>
    </div>
  </div>
</template>
<script>
import dayjs from 'dayjs';
import 'dayjs/locale/ru';
dayjs.locale('ru');
export default {
  props: {
    card: {
      required: true,
      type: Object,
    },
  },
  methods: {
    getTime(date){
        return dayjs(date).format('DD MMMM HH:mm');
    }
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
  &-time{
    font-size: 16px;
    color: #bdbdbd;
    display: flex;
    justify-content: end;
  }
  &:hover {
    box-shadow: 0px 14px 30px rgba(0, 0, 0, 0.05);
    transform: translateY(-7px);
  }
  &__img {
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
}
</style>
