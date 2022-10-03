<template>
  <nav
    id="sidebar"
    class="mCustomScrollbar _mCS_1 mCS-autoHide mCS_no_scrollbar"
    :class="isOpenSidebar ? 'active' : ''"
    style="overflow: visible"
  >
    <div
      id="mCSB_1"
      class="mCustomScrollBox mCS-minimal mCSB_vertical mCSB_outside"
      style="max-height: none"
      tabindex="0"
    >
      <div
        id="mCSB_1_container"
        class="mCSB_container mCS_y_hidden mCS_no_scrollbar_y"
        style="position: relative; top: 0; left: 0"
        dir="ltr"
      >
        <a @click="$emit('toggle-sidebar')" id="dismiss" class="link-color link-hover-color">
          <i class="fas fa-times"></i>
        </a>

        <div class="sidebar-header">
          <div @click="$emit('toggle-sidebar')">
            <nuxt-link to="/login" class="btn btn-primary btn-block"
              >Masuk / Daftar</nuxt-link
            >
          </div>
        </div>
        <ul class="list-unstyled components text-dark">
          <li @click="$emit('toggle-sidebar')">
            <nuxt-link to="/" class="link-color link-hover-color"
              ><i class="fas fa-home mr-3"></i>
              Home</nuxt-link
            >
          </li>
          <li @click="$emit('toggle-sidebar')">
            <nuxt-link to="/store" class="link-color link-hover-color"
              ><i class="fas fa-shopping-cart mr-3"></i>
              Pembelian</nuxt-link
            >
          </li>
        </ul>
      </div>
    </div>
    <div
      id="mCSB_1_scrollbar_vertical"
      class="
        mCSB_scrollTools mCSB_1_scrollbar
        mCS-minimal
        mCSB_scrollTools_vertical
      "
      style="display: none"
    >
      <div class="mCSB_draggerContainer">
        <div
          id="mCSB_1_dragger_vertical"
          class="mCSB_dragger"
          style="position: absolute; min-height: 50px; height: 0px; top: 0px"
        >
          <div class="mCSB_dragger_bar" style="line-height: 50px"></div>
          <div class="mCSB_draggerRail"></div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { Icon } from "@iconify/vue2";
import Login from "~/components/Login";
import Register from "~/components/Register";
import EmailConfirmation from "~/components/EmailConfirmation";
import MainMenu from "~/components/MainMenu";

var stateisLog = 0;

export default {
  name: "Sidebar",
  props: ['isOpenSidebar'],
  components: {
    Icon,
    Login,
    Register,
    EmailConfirmation,
    MainMenu,
  },

  data() {
    return {
      state: "login",
    };
  },

  filters: {
    formUang(money) {
      return money.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
    },
  },

  created() {
    var aid = null;
    if (localStorage.getItem("c4Prt7") === null) {
      stateisLog = 0;
    } else {
      var dataparti = localStorage.getItem("c4Prt7");
      aid = JSON.parse(dataparti);
      stateisLog = 1;
    }

    if (stateisLog == 1 && aid != null) {
      this.state = "loggedin";
    } else {
      this.state = "login";
    }
  },

  methods: {
    changeState(state) {
      this.state = state;
    },
  },
};
</script>

<style lang="scss" scoped>
@media only screen and (max-width: 767px) {
  .offcanvas {
    .offcanvas-header {
      img {
        height: 18px;
      }
    }
  }
}
</style>
