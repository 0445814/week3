<template>
  <section class="section-container banner">
    <div class="banner-slogan lh-15">
      <p class="banner-slogan-top text-right text-danger-2 font-weight-bold">
        Promise-Desert 2020 早春系列
      </p>
      <p class="banner-slogan-bottom text-right text-danger-2 font-weight-bold">
        看得清，才能看得遠
      </p>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.banner {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 840px;
  background-image: url("https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/week3/banner.png");
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  @include md-down {
    height: 394px;
  }

  .banner-slogan-top {
    font-size: 36px;
    @include md {
      font-size: 20px;
    }
    @include md-down {
      font-size: 1rem;
    }
  }

  .banner-slogan-bottom {
    font-size: 64px;
    @include md {
      font-size: 48px;
    }
    @include md-down {
      font-size: 32px;
    }
  }
}
</style>
