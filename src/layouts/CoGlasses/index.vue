<template>
  <section class="section-container coglasses">
    <h2 class="section-title text-white">
      聯名設計鏡框
    </h2>

    <div class="container">
      <div class="row justify-content-center">
        <a
          class="product-item mb-3"
          href="#"
        >
          <div
            class="product-item-img"
            style="
              background-image: url('https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/week3/product-8.png');
            "
          />
          <h3 class="product-item-slogan text-danger">Double A+</h3>
        </a>
        <a
          class="product-item"
          href="#"
        >
          <div
            class="product-item-img"
            style="
              background-image: url('https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/week3/product-9.png');
            "
          />
          <h3 class="product-item-slogan text-danger">YOUTH</h3>
        </a>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.coglasses {
  background-image: url("https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/week3/bg.png");
  background-position: center;
  background-repeat: no-repeat;
}

.product {
  display: flex;
  justify-content: center;
}

.product-item {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  margin-right: 10px;
  max-width: 47%;
  flex: 0 0 47%;
  height: 472px;

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #fff;
    opacity: 0.5;
  }

  &:hover {
    &::after {
      transition: all 0.25s;
      opacity: 0.25;
    }
  }
  @include lg {
    height: 280px;
  }
  
  @include md-down {
    max-width: 100%;
    flex: 0 0 100%;
    height: 284px;
  }
}

.product-item-img {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
}

.product-item-slogan {
  position: absolute;
  font-size: 72px;
  font-weight: bold;
  z-index: 1;

  @include md {
    font-size: 32px;
  }
}
</style>
