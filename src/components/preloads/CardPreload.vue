<template>
  <div class="card">
    <button class="card__favorite">
      <div> </div>
    </button>
    <div class="card__img"> </div>
    <div class="card__titles">
      <p class="card__title"></p>
      <p class="card__title"></p>
      <p class="card__title"></p>
    </div>
  </div>
</template>
<script>
export default {

};
</script>
<style lang="scss" scoped>
@mixin shine {
  position: relative;
  overflow: hidden;
  &::after {
    content: '';
    position: absolute;
    top: -50%;
    right: -50%;
    bottom: -50%;
    left: -50%;
    background: linear-gradient(
      to bottom,
      rgba(229, 172, 142, 0),
      rgba(255, 255, 255, 0.5) 50%,
      rgba(229, 172, 142, 0)
    );
    transform: rotateZ(60deg) translate(-5em, 7.5em);
  }

  &:after,
  &:after {
    animation: sheen 0.8s forwards;
    animation-iteration-count: infinite;
    animation-fill-mode: forwards;
  }

  @keyframes sheen {
    100% {
      transform: rotateZ(60deg) translate(1em, -9em);
    }
  }
}

.card {
  max-width: 210px;
  background: #ffffff;
  border: 1px solid #7e7e7e;
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
    min-width: 133px;
    height: 112px;
    border-radius: 8px;
    background: #5e5b5b;
    margin-bottom: 14px;
    @include shine;
  }
  &__flex {
    display: flex;
    gap: 0 25px;
    align-items: center;
    width: 150px;
  }
  &__titles {
    display: flex;
    flex-direction: column;
    gap: 8px;
    .card__title {
      font-size: 15px;
      line-height: 14px;
      height: 10px;
      background-color: #5e5b5b;
      @include shine;
      &:nth-child(1) {
        width: 120px;
      }
      &:nth-child(2) {
        width: 150px;
      }
      &:nth-child(3) {
        width: 85px;
      }
    }
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
