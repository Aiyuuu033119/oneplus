<template>
  <footer class="footer">
    <div class="container">
      <div class="row">
        <div class="col-12 col-lg-6">
          <nuxt-link to="/"
            >
            <h4 class="text-black text-uppercase font-weight-bold m-0">{{ appName }}</h4>
            <!-- <img
              src="https://vogame.co.id/assets/img/logo/logo2.png"
              width="125"
              class="mb-3"
          /> -->
          </nuxt-link>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-lg-6 mb-3">
          <p class="m-0">
            <strong>PT Maju Selaras Komputer</strong><br />
            Ruko Citra Bisnis Park, Jalan Peta Barat Blok G No 23<br />
            Kalideres - Jakarta Barat
          </p>
        </div>
        <div class="col-12 col-lg-6">
          <ul class="list-unstyled">
            <li>
              <nuxt-link to="/" class="link-color link-hover-color">Syarat &amp; Ketentuan</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/contact-us" class="link-color link-hover-color">Hubungi Kami</nuxt-link>
            </li>
          </ul>
          <div class="socialmedia">
              <a
                v-for="(item, i) in social"
                :key="i"
                :href="item.nama == 'email' ? 'mailto:'+item.url : item.url"
                title=""
                :class="item.nama == 'email' ? 'bg-youtube' : 'bg-'+item.nama"
                target="_blank"
                ><i class="fab"
                  :class="item.nama == 'facebook' ? 'fab fa-facebook-f' :
                  item.nama == 'email' ? 'fas fa-envelope' :
                  item.nama == 'twitter' ? 'fab fa-twitter' :
                  'fab fa-instagram'
                  "
                ></i
              ></a>
          </div>
        </div>
      </div>
    </div>
    <hr />
    <div class="container">
      <div class="row">
        <div class="col-12 col-lg-6 mb-3">
          © 2020 - 2022 {{ appName }}. All Rights Reserved
        </div>
        <div class="col-12 col-lg-6 mb-3">
          <a href="#top" class="copyright link-color link-hover-color"
            >Kembali keatas <i class="fas fa-arrow-up"></i
          ></a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { Icon } from "@iconify/vue2";
export default {
  name: "Footer",

  components: {
    Icon,
  },

  data() {
    return {
      social: [],
      appName: process.env.appName
    };
  },
  created() {
    this.$axios.get("/mobileapi/sosialmedia").then((result) => {
      this.social = result.data;
    });
  },
};
</script>

<style lang="scss" scoped>
.card {
  &:hover {
    color: #ff5a5e;
  }
}
.social {
  color: white;
  height: 42px;
  width: 42px;
}
</style>
