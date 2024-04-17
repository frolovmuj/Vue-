<template>
  <div class="content">
    <div class="leftColumn"
      ><div class="img"></div
    ></div>
    <div class="rightColumn"
      >
      <div class="productDescription">
        <h1></h1>
        <p></p>
      </div>
      <div class="productPrice">
        <div class="productPrice__text">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <span
          class="productPrice__price"></span>
        <green-btn></green-btn>
      </div>
    </div>
    <pre />
  </div>
</template>
<script>
export default {};
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

.content {
  padding: 30px;
  display: flex;
  gap: 5px;
  background: #ffffff;
  @media (max-width: 1059px) {
    flex-direction: column;
  }
}

/* Columns */
.leftColumn {
  width: 55%;
  position: relative;
  @media (max-width: 1059px) {
    width: 100%;
  }
}

.rightColumn {
  width: 45%;
  @media (max-width: 1059px) {
    width: 100%;
  }
}

/* Left Column */
.leftColumn div {
  text-align: center;
  height: 400px;
  border-radius: 9px;
  background: #5e5b5b;
  @include shine;
  display: block;
  margin: 0 auto;
  @media (max-width: 540px) {
    height: 300px;
  }
}

/* Product Description */
.productDescription {
  border-bottom: 1px solid #e1e8ee;
  margin-bottom: 20px;
  span {
    font-size: 12px;
    background: #5e5b5b;
    @include shine;
    letter-spacing: 1px;
    text-transform: uppercase;
    text-decoration: none;
  }
  h1 {
    margin-bottom: 15px;
    background: #5e5b5b;
    @include shine;
    height: 14px;
    width: 80px;
  }
  p {
    background: #5e5b5b;
    @include shine;
    font-weight: 300;
    height: 49px;
    padding-bottom: 15px;
  }
}

/* Product Price */
.productPrice {
  display: flex;
  flex-direction: column;
  gap: 10px;
  button {
    @include shine;
    cursor: default;
    width: 100%;
    background: #5e5b5b;
    height: 43px;
    border-radius: 9px;
  }
  &__text {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 3vh;
    span {
      font-weight: 300;
      background: #5e5b5b;
      @include shine;
      height: 10px;
      width: 100%;
      margin-right: 20px;
    }
  }
  &__price {
    width: 40%;
    margin: 0 auto;
    height: 20px;
    background: #5e5b5b;
    @include shine;
  }
}
</style>
