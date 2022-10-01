<template>
  <div class="bg-white shadow sticky-top">
    <div class="container">
      <div class="d-flex align-items-center justify-content-between">
        <div class="d-flex align-items-center">
          <nuxt-link to="/" class="py-3 pr-3"
            ><img :src="logo" height="25"
          /></nuxt-link>
          <div
            class="
              align-items-center
              input-group
              btn-search
              bg-white
              border
              rounded-pill
              d-none d-lg-flex
            "
          >
            <input
              id="searchInput"
              type="search"
              v-model="searchval"
              class="form-control bg-transparent border-0"
              placeholder="Cari Games"
              ref="control"
              @keyup.enter="find"
            />
            <button class="btn bg-transparent text-danger" type="button">
              <Icon icon="bx:bx-search" height="24px" />
            </button>
          </div>
        </div>
        <div>
          <div class="d-inline-block d-lg-none">
            <button
              class="bg-transparent border-0 text-danger"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseExample"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              <Icon icon="bx:bx-search" height="24px" />
            </button>
          </div>
          <b-button pill variant="primary" class="mr-2 d-none d-md-inline-block"
            >Masuk / Daftar</b-button
          >
          <a v-b-toggle.sidebar-backdrop class="text-danger" role="button"
            ><Icon icon="eva:menu-fill" height="24px"
          /></a>
        </div>
      </div>
      <div class="collapse pb-3" id="collapseExample">
        <input
          type="search"
          v-model="searchval"
          class="form-control bg-transparent border rounded-pill"
          placeholder="Cari Games"
          ref="control"
          @keyup.enter="find"
        />
      </div>

      <b-sidebar id="sidebar-backdrop" right backdrop>
        <div class="px-3 py-2 mb-2">
          <b-button block pill variant="primary">Masuk / Daftar</b-button>
        </div>
        <div class="border-bottom"></div>
        <div class="px-3 py-2 my-2">
          <nuxt-link to="" class="text-dark">
            <div class="side-nav">
              <div class="d-flex align-items-center flex-row gap-3">
                <Icon
                  icon="ant-design:home-filled"
                  height="20px"
                  class="my-3"
                />
                <div>Home</div>
              </div>
            </div>
          </nuxt-link>
          <nuxt-link to="" class="text-dark">
            <div class="side-nav">
              <div class="d-flex align-items-center flex-row gap-3">
                <Icon
                  icon="clarity:shopping-cart-solid"
                  height="20px"
                  class="my-3"
                />
                <div>Pembelian</div>
              </div>
            </div>
          </nuxt-link>
        </div>
      </b-sidebar>
    </div>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue2";
export default {
  name: "Navbar",

  components: {
    Icon,
  },

  data() {
    return {
      searchval: "",
      title: "Isigame",
      logo: "img/logo.svg",
      alamat: "",
      notelp: "",
      whatsapp: "",
    };
  },

  created() {
    var vuedis = this;
    this.$axios.get("/mobileapi/s7xs6oast").then((result) => {
      vuedis.title = result.data.nama;
      vuedis.logo = result.data.logo != "" ? result.data.logo : "img/logo.svg";
      vuedis.notelp = result.data.telp;
      vuedis.alamat = result.data.alamat;
      vuedis.whatsapp = result.data.wa;
    });
  },

  methods: {
    find() {
      var disval = this.searchval;
      var to = "/search";
      if (this.$router.currentRoute.path === to) {
        window.location.href = "/search?search=" + disval;
      } else {
        this.$router.push(
          {
            path: to,
            force: true,
            name: "search",
            query: { search: disval },
          },
          () => {
            this.$router.app.refresh();
          }
        );
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.side-nav {
  &:hover {
    color: #ff5a5e;
  }
}
.close {
  opacity: 1 !important;
}
</style>