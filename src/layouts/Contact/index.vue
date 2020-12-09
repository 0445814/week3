<template>
  <section class="section-container bg-danger-3">
    <h2 class="section-title">
      聯絡我們
    </h2>
    <div class="container">
      <div class="row justify-content-center">
        <form
          class="contact"
          @submit.prevent="handleSubmit"
        >
          <p class="contact-note">
            我們相當重視您的意見，若您有任何疑問，可先參考「常見問題」，若仍有任何問題，請填妥以下資料，我們會在近期與您聯繫。
          </p>

          <label
            class="form-label"
            for="name"
          >姓名</label>
          <input
            id="name"
            class="form-input"
            type="text"
            placeholder="陳小明"
          >
          <label
            class="form-label"
            for="tel"
          >聯絡電話</label>
          <input
            id="tel"
            class="form-input"
            type="tel"
            placeholder="0912-345-678"
          >
          <label
            class="form-label"
            for="email"
          >電子郵件</label>
          <input
            id="email"
            class="form-input"
            type="email"
            placeholder="example@email.com"
          >
          <label
            class="form-label"
            for="suggestion"
          >意見反應</label>
          <textarea
            id="suggestion"
            class="form-input"
            type="textarea"
            rows="7"
            placeholder="請輸入您的意見"
          />
          <div style="margin-bottom: 40px">
            <input
              id="agree"
              type="checkbox"
              placeholder="example@email.com"
            >
            <label
              for="agree"
            >我同意隱私權政策，並同意依隱私權政策中所述的方式處理自己的資料。</label>
          </div>

          <div class="text-center">
            <button
              class="form-btn btn btn-danger"
              type="submit"
            >
              確認送出
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  setup() {
    const handleSubmit = () => {
      window.alert("表單送出!");
    };

    return {
      handleSubmit,
    };
  },
};
</script>

<style lang="scss" scoped>
.contact {
  width: 730px;
  @include md {
    width: 450px;
  }

  @include md-down {
    width: 100%;
  }
}
.contact-note {
  font-size: 20px;
  line-height: 1.5;
  margin-bottom: 20px;
}
</style>
