<template>
  <section class="section-container bg-danger-3">
    <div class="container">
      <h2 class="section-title text-danger-2">
        用專業的心，做專業的事
      </h2>

      <div class="row">
        <div
          v-for="item in dataReactive"
          :key="item.imgUrl"
          class="intro-card"
        >
          <div class="text-center">
            <img
              class="intro-card-img img-fluid"
              :src="item.imgUrl"
              alt=""
            >
          </div>
          <h3 class="h4 text-center text-danger-2 font-weight-bold mb-3">
            {{ item.title }}
          </h3>

          <p class="lh-15">
            {{ item.content }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { reactive } from "vue";
export default {
  setup() {
    const data = [
      {
        imgUrl:
          "https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/7059003f6d011be52053cb5e63d68f3999af01d7/week3/icon-dollar.svg",
        title: "單一價格",
        content: "無論任何度數皆不需追加費用 即可擁有適合自己的薄型球面鏡片。",
      },
      {
        imgUrl:
          "https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/7059003f6d011be52053cb5e63d68f3999af01d7/week3/icon-clock.svg",
        title: "20 分鐘即可取件",
        content:
          "為了您的寶貴時間著想，以豐 富專業知識與技術將結帳到交件的時間縮減至最快 20 分鐘即可完成。",
      },
      {
        imgUrl:
          "https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/7059003f6d011be52053cb5e63d68f3999af01d7/week3/icon-heart.svg",
        title: "安心售後服務",
        content:
          "我們提供長達 120 天的保固售後服務，不限會員資格皆享有免費深層保養及專業維修服務。",
      },
      {
        imgUrl:
          "https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/7059003f6d011be52053cb5e63d68f3999af01d7/week3/icon-glasses.svg",
        title: "關於鏡片",
        content: "使用世界知名頂級品牌，抗UV、防汙鍍膜薄型非球面鏡片。",
      },
    ];

    const dataReactive = reactive(data);

    return {
      dataReactive,
    };
  },
};
</script>

<style lang="scss" scoped>
.intro-card {
  max-width: 25%;
  flex: 0 0 25%;
  padding-right: 15px;
  padding-left: 15px;
  margin-bottom: 40px;
  line-height: 1.5;
  @include lg {
    max-width: 50%;
    flex: 0 0 50%;
  }
  @include md-down {
    max-width: 100%;
    flex: 0 0 100%;
  }
}

.intro-card-img {
  min-height: 107px;
  margin-bottom: 40px;
}
</style>
