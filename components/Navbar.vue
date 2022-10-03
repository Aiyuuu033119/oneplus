<template>
  <header class="sticky-top">
    <nav class="bg-primary navbar navbar-expand-lg navbar-light">
      <div class="container">
        <div class="w-100 d-flex align-items-center">
          <div class="col-8 col-lg-2 text-left">
            <nuxt-link to="/"
              >
              <h4 class="text-white text-uppercase font-weight-bold m-0">{{ appName }}</h4>
              <!-- <img :src="logo" width="150" alt="NusaPin - Voucher Game Online"
            /> -->
            </nuxt-link>
          </div>
          <div class="col-2 col-lg-6 d-none d-lg-block">
            <form action="https://vogame.co.id/shop" method="GET">
              <div class="input-group">
                <input
                  type="text"
                  class="search-query form-control"
                  name="cari"
                  value=""
                  placeholder="Cari Games"
                />
                <span class="input-group-append">
                  <button class="btn btn-light search-icon" type="button">
                    <i class="fas fa-search"></i>
                  </button>
                </span>
              </div>
            </form>
          </div>
          <div class="col-2 col-lg-4 d-block d-lg-none">
            <a
              class="btn btn-primary text-white"
              data-bs-toggle="collapse"
              href="#panel-login"
              role="button"
              aria-expanded="false"
              aria-controls="panel-login"
            >
              <i class="fas fa-search fa-lg"></i>
            </a>
          </div>
          <div class="col-2 col-lg-4 text-right">
            <nuxt-link to="/" class="btn btn-secondary registe 2020 - 2022 {{ appName }}. All Rights ReservedrBtn">
              Masuk / Daftar</nuxt-link
            >
            <div
              @click="$emit('toggle-sidebar')"
              id="sidebarCollapse"
              class="text-white btn bg-transparent"
              role="button"
            >
              <i class="fas fa-bars fa-lg text-white"></i>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <div class="searchForm">
      <div class="container">
        <div
          id="panel-login"
          class="panel-collapse collapse"
          aria-expanded="false"
          style=""
        >
          <div class="panel-body">
            <form action="https://vogame.co.id/shop" method="GET">
              <div class="input-group col-md-12">
                <input
                  type="text"
                  name="cari"
                  class="search-query form-control"
                  placeholder="Cari Games"
                />
                <span class="input-group-append">
                  <button type="submit" class="btn btn-link">
                    <i class="fas fa-search"></i>
                  </button>
                </span>
              </div>
            </form>
          </div>
          <!-- end panel-body -->
        </div>
      </div>
    </div>
  </header>
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
      logo: "/img/logo.png",
      alamat: "",
      notelp: "",
      whatsapp: "",
      appName: process.env.appName
    };
  },

  created() {
    var vuedis = this;
    this.$axios.get("/mobileapi/s7xs6oast").then((result) => {
      vuedis.title = result.data.nama;
      vuedis.logo = result.data.logo != "" ? result.data.logo : "/img/logo.png";
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