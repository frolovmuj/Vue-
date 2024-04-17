<template>
  <div class="slider">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <div class="slider-content">
            <div class="left-side">
              <div class="header">
                <img
                  src="../../public/img/slider/company.jpg"
                  alt="" />
              </div>
              <div class="left-side__content">
                <div class="text">
                  <span>Stan Smith</span>,<br />
                  Forever!
                </div>
                <a
                  @click="
                    $router.push(
                      '/cards/6496b53c0f3a5c9234e7c9c1'
                    )
                  "
                  >Купить</a
                >
              </div>
            </div>
            <div class="right-side">
              <img
                src="../../public/img/slider/right-side.png"
                alt="item" />
            </div>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="slider-content">
            <div class="left-side">
              <div class="header">
                <img
                  src="../../public/img/slider/company.jpg"
                  alt="" />
              </div>
              <div class="left-side__content">
                <div class="text">
                  <span>Stan Smith</span>,<br />
                  Forever!
                </div>
                <a
                  @click="
                    $router.push(
                      '/cards/6496b53c0f3a5c9234e7c9c1'
                    )
                  "
                  >Купить</a
                >
              </div>
            </div>
            <div class="right-side">
              <img
                src="../../public/img/slider/right-side.png"
                alt="item" />
            </div>
          </div>
        </div>
        <!-- другие слайды -->
      </div>

      <!-- Навигация -->
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>

      <!-- Пагинация -->
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default {
  data() {
    return {
      swiper: null,
    };
  },
  mounted() {
    Swiper.use([Navigation, Pagination]);

    this.swiper = new Swiper('.swiper-container', {
      // другие опции конфигурации Swiper
      slidesPerView: 'auto',
      height: 300,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      grabCursor: true,
      autoplay: true,
    });
  },
};
</script>
<style lang="scss">
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
    animation: sheen 2s forwards;
    animation-iteration-count: infinite;
    animation-fill-mode: forwards;
  }

  @keyframes sheen {
    100% {
      transform: rotateZ(60deg) translate(1em, -9em);
    }
  }
}
.slider {
  padding: 30px;
}
.swiper-container {
  overflow: hidden;
  position: relative;
}
.swiper-slide {
  height: 300px;
  .slider-content {
    width: 80%;
    margin: 0 auto;
    height: 300px;
    border-radius: 30px;
    background-color: #fff;
    &:nth-child(1) {
      background: #f4efe9;
      justify-content: space-between;
      display: flex;
      position: relative;
      .left-side {
        width: 29%;
        .header {
          position: absolute;
          margin-top: 16px;
          margin-left: 20px;
        }
        &__content {
          display: flex;
          align-items: flex-end;
          justify-content: center;
          height: 100%;
          flex-direction: column;
          .text {
            position: relative;
            z-index: 2;
            font-size: 38px;
            margin-bottom: 12px;
            font-weight: 700;
            color: #000;
            span {
              color: #8bb43c;
            }
          }
          a {
            border-radius: 110px;
            background: #a5d364;
            padding: 14px 0;
            text-align: center;
            text-transform: uppercase;
            color: #fff;
            margin: 0 auto;
            width: 177px;
            cursor: pointer;
            transition: all 0.1s ease-out;
            &:hover {
              background: #000;
              @include shine();
            }
          }
        }
      }
      .right-side {
        width: 71%;
        img {
          height: 100%;
          border-radius: 30px;
        }
      }
    }
  }
}
.swiper-button-next,
.swiper-button-prev {
  color: #696969;
  z-index: 1;
}
.swiper-pagination-bullet-active {
  background-color: #000;
}
</style>
