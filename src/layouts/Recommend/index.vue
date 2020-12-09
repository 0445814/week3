<template>
  <section class="section-container">
    <h2 class="section-title text-danger-2">
      顧客推薦
    </h2>

    <div class="container">
      <div class="row justify-content-center">
        <div
          v-for="item in dataReactive"
          :key="item.imgUrl"
          class="recommend-card"
        >
          <Card>
            <template #card-header>
              <img
                class="recommend-card-img img-fluid"
                :src="item.imgUrl"
                alt=""
              >
            </template>
            <template #card-body>
              <h3 class="font-weight-bold mb-2">
                {{ item.title }}
              </h3>
              <p
                class="mb-3"
                style="line-height: 1.5"
              >
                This is a wider card with supporting text below as a natural lead-in
                to additional content. This content is a little bit longer.
              </p>
              <p class="text-secondary">
                Last updated 3 mins ago
              </p>
            </template>
          </Card>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Card from "/@/components/Card/index.vue";
import { reactive } from "vue";
export default {
  components: {
    Card,
  },
  setup() {
    const data = [
      {
        imgUrl:
          "https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/week3/rec-1.png",
        title: "Jessy",
        content:
          "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer",
        footer: "Last updated 3 mins ago",
      },
      {
        imgUrl:
          "https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/week3/rec-2.png",
        title: "Karen",
        content:
          "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer",
        footer: "Last updated 3 mins ago",
      },
      {
        imgUrl:
          "https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/week3/rec-3.png",
        title: "Chelsea",
        content:
          "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer",
        footer: "Last updated 3 mins ago",
      },
      {
        imgUrl:
          "https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/week3/rec-4.png",
        title: "Jane",
        content:
          "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer",
        footer: "Last updated 3 mins ago",
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
  .recommend-card {
    width: 255px;
    padding: 15px;
    margin-bottom: 28px;
    @include lg {
      max-width: 50%;
      flex: 0 0 50%;
      width: 330px;
    }
    @include md-down {
      max-width: 100%;
      flex: 0 0 100%;
    }
  }

  .recommend-card-img {
    @include lg {
      width: 100%;
    }
  }
</style>
