<template>
  <section class="section-container">
    <h2 class="section-title text-danger-2">
      經典系列鏡框
    </h2>
    <div class="container">
      <div class="row">
        <div class="product-item">
          <img
            class="product-item-img img-fluid"
            src="https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/week3/product-1.png"
            :width="imgWidth"
            alt=""
          >

          <div class="product-item-slogan">
            <a
              href="#"
              class="d-flex align-items-center font-weight-bold font-style-italic"
            >
              <img
                class="product-slogan-icon icon-pc icon-pc img-fluid"
                src="https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/7059003f6d011be52053cb5e63d68f3999af01d7/week3/icon-diamond.svg"
                alt=""
              >
              <img
                class="product-slogan-icon icon-responsive img-fluid"
                src="https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/7059003f6d011be52053cb5e63d68f3999af01d7/week3/icon-diamond-white.svg"
                alt=""
              >
              OPTICAL</a>
          </div>
        </div>
        <div class="product-item">
          <div class="product-item-slogan">
            <a
              href="#"
              class="d-flex align-items-center font-weight-bold font-style-italic"
            >
              <img
                class="product-slogan-icon icon-pc img-fluid"
                src="https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/7059003f6d011be52053cb5e63d68f3999af01d7/week3/icon-sun.svg"
                alt=""
              >
              <img
                class="product-slogan-icon icon-responsive img-fluid"
                src="https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/7059003f6d011be52053cb5e63d68f3999af01d7/week3/icon-sun-white.svg"
                alt=""
              >
              SUNGLASSES</a>
          </div>
          <img
            class="product-item-img img-fluid"
            src="https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/week3/product-2.png"
            :width="imgWidth"
            alt=""
          >
        </div>
        <div class="product-item">
          <img
            class="product-item-img img-fluid"
            src="https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/week3/product-3.png"
            :width="imgWidth"
            alt=""
          >

          <div class="product-item-slogan">
            <a
              href="#"
              class="d-flex align-items-center font-weight-bold font-style-italic"
            >
              <img
                class="product-slogan-icon icon-pc img-fluid"
                src="https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/7059003f6d011be52053cb5e63d68f3999af01d7/week3/icon-thunder.svg"
                alt=""
              >
              <img
                class="product-slogan-icon icon-responsive img-fluid"
                src="https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/7059003f6d011be52053cb5e63d68f3999af01d7/week3/icon-thunder-white.svg"
                alt=""
              >
              FUNCTIONAL</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const imgWidth = ref(635);

    return {
      imgWidth,
    };
  },
};
</script>

<style lang="scss" scoped>
.product {
  @include lg {
    padding: 40px;
  }
}

.product-item {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 32px;
}

.product-item-img {
  max-width: 50%;
  flex: 0 0 50%;
  @include lg {
    width: 390px;
  }
  @include md-down {
    max-width: 100%;
    flex: 0 0 100%;
  }
}

.product-item-slogan {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  max-width: 50%;
  flex: 0 0 50%;
  padding: 30px;
  font-size: 48px;
  a {
    color: #aa0601;
  }

  @include lg {
    order: 2;
    width: 100%;
    font-size: 28px;
  }

  @include md-down {
    position: absolute;
    a {
      color: #fff;
    }
  }
}

.product-slogan-icon {
  margin-right: 8px;
}

.icon-pc {
  @include md-down {
    display: none;
  }
}

.icon-responsive {
  display: none;
  @include md-down {
    display: block;
  }
}
</style>
