<template>
  <header>
    <Navbar
      class="navbar-pc"
      fixed="top"
    >
      <div class="navbar-top">
        <a
          class="navbar-logo"
          href="#"
        >
          <img
            src="https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/week3/logo.png"
            alt="logo"
          >
        </a>

        <ul class="navbar-list">
          <li
            v-for="item in topLink"
            :key="item.label"
          >
            <router-link
              class="navbar-top-link d-block hvr-grow"
              :to="item.to"
            >
              {{ item.label }}
            </router-link>
          </li>
        </ul>
      </div>
    </Navbar>
    <Navbar
      class="navbar-responsive"
      fixed="top"
    >
      <div class="text-center py-3">
        <img
          src="https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/week3/logo.png"
          alt="logo"
        >
      </div>

      <div class="menu row">
        <a
          href="#"
          class="menu-item bg-danger"
        >系列鏡框</a>
        <a
          href="#"
          class="menu-item bg-danger"
        >門市據點</a>
        <a
          href="#"
          class="menu-item bg-danger"
        >部落格</a>
        <a
          href="#"
          class="menu-item bg-danger"
        >常見問題</a>
      </div>
    </Navbar>
  </header>

  <main
    class="main"
    role="main"
  >
    <router-view />
  </main>

  <footer>
    <Navbar>
      <section class="navbar-bottom">
        <div class="container">
          <div class="navbar-bottom-list d-flex justify-content-between mb-3">
            <ul class="navbar-list">
              <li
                v-for="item in bottomLink"
                :key="item.label"
              >
                <router-link
                  class="navbar-bottom-link d-block hvr-grow"
                  :to="item.to"
                >
                  {{ item.label }}
                </router-link>
              </li>
            </ul>
            <ul class="social d-flex">
              <li
                v-for="item in socialLink"
                :key="item.label"
                class="social-item"
              >
                <a :href="item.to">
                  <img
                    class="social-item-img img-fluid"
                    :src="item.url"
                    alt=""
                  >
                </a>
              </li>
            </ul>
          </div>

          <div class="d-flex justify-content-between mb-3">
            <div class="d-flex align-items-center">
              <img
                class="navbar-bottom-icon img-fluid mr-3"
                src="https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/085a62fb22df4bf21c605a180648c6c6e35c2b32/week3/icon-phone.svg"
                alt=""
              >
              <span class="navbar-bottom-info">0800-000-000</span>
            </div>

            <ul class="social-item-responsive social d-flex">
              <li
                v-for="item in socialLink"
                :key="item.label"
                class="social-item"
              >
                <a :href="item.to">
                  <img
                    class="social-item-img img-fluid"
                    :src="item.url"
                    alt=""
                  >
                </a>
              </li>
            </ul>
          </div>

          <div class="d-flex align-items-center mb-4">
            <img
              class="navbar-bottom-icon img-fluid mr-2"
              src="https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/085a62fb22df4bf21c605a180648c6c6e35c2b32/week3/icon-mail.svg"
              alt=""
            >
            <a
              class="navbar-bottom-info text-white"
              href="mailto: glasses@business.com"
            >glasses@business.com</a>
          </div>

          <hr class="mb-4">

          <div class="d-flex justify-content-between flex-wrap">
            <div class="d-flex align-items-center mb-3">
              <a
                class="navbar-bottom-logo mr-5"
                href="#"
              >
                <img
                  src="https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/week3/logo.png"
                  alt="logo"
                >
              </a>

              <span
                class="navbar-bottom-copyright"
              >Copyright © 2020 Glasses.All rights reserved.</span>
            </div>

            <div
              class="navbar-bottom-rules d-flex align-items-center flex-wrap"
            >
              <a
                class="navbar-bottom-rules-link text-white mb-3"
                href="#"
              >隱私權政策</a>
              <a
                class="navbar-bottom-rules-link text-white mb-3"
                href="#"
              >服務條款</a>
            </div>
          </div>
        </div>
      </section>
    </Navbar>
  </footer>
</template>

<script>
import Navbar from "/@/layouts/Navbar/index.vue";

import { toRefs } from "vue";

import {
  getNavbarTopLink,
  getNavbarBottomLink,
  getNavbarSocialLink,
} from "/@/hooks/useNavbarLink";
export default {
  components: {
    Navbar,
  },

  setup() {
    const topLink = getNavbarTopLink();
    const bottomLink = getNavbarBottomLink();
    const socialLink = getNavbarSocialLink();

    return {
      topLink,
      bottomLink,
      socialLink,
    };
  },
};
</script>

<style lang="scss" scoped>
// navbar-top
.navbar-pc {
  @include md-down {
    display: none;
  }
}

.navbar-top {
  display: flex;
  justify-content: space-between;
  padding: 30px 88px;
  @include lg {
    padding: 30px 39px;
  }
  .navbar-logo {
    display: block;
  }
}

.navbar-list {
  display: flex;
  align-items: center;
}

.navbar-top-link {
  margin-left: 64px;
  color: #fff;
  @include lg {
    margin-left: 40px;
  }
}

// navbar-bottom
.navbar-responsive {
  display: none;
  @include md-down {
    display: block;
  }
}

.social-item {
  text-align: right;
  margin: 0 12px;
  @include lg {
    margin: 0;
  }
}

.social-item-responsive {
  display: none;
  @include md-down {
    display: flex;
  }
}

.social-item-img {
  @include lg {
    width: 50%;
  }
}

.navbar-bottom {
  padding-top: 48px;
  padding-bottom: 28px;
  padding-right: 40px;
  padding-left: 40px;
  @include lg {
    width: 100%;
  }
  @include md-down {
    padding: 23px 15px;
  }
}

.navbar-bottom-icon {
  width: 44px;
  @include lg {
    width: 24px;
  }
}

.navbar-bottom-logo {
  @include lg {
    display: none;
  }
}

.navbar-bottom-info {
  font-size: 36px;
  @include lg {
    font-size: 20px;
  }
}

.navbar-bottom-list {
  @include md-down {
    display: none;
  }
}

.navbar-bottom-link {
  margin-right: 48px;
  color: #fff;
  @include lg {
    margin-right: 40px;
  }
  @include md-down {
    display: none;
  }
}

.navbar-bottom-rules {
  @include md-down {
    width: 100%;
  }
}

.navbar-bottom-rules-link {
  display: block;
  &:nth-child(2) {
    margin-left: 62px;
  }
  @include md-down {
    width: 100%;
    &:nth-child(2) {
      margin-left: 0px;
      margin-bottom: 0px;
    }
  }
}

.menu-item {
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 50%;
  flex: 0 0 50%;
  padding: 8px 54px;
  white-space: nowrap;
  border: 1px solid #fff;
  color: #fff;
}
</style>
