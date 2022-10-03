<template>
  <footer class="footer">
    <div class="container">
      <div class="row">
        <div class="col-12 col-lg-6">
          <nuxt-link to="/"
            ><img
              src="https://vogame.co.id/assets/img/logo/logo2.png"
              width="125"
              class="mb-3"
          /></nuxt-link>
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
              href="https://www.facebook.com/join.vogame/"
              title=""
              class="bg-facebook"
              ><i class="fab fa-facebook-f"></i
            ></a>
            <a href="mailto:cs@vogame.id" title="" class="bg-youtube"
              ><i class="fas fa-envelope"></i
            ></a>
            <a
              href="https://twitter.com/OfficialVogame"
              title=""
              class="bg-twitter"
              ><i class="fab fa-twitter"></i
            ></a>
            <a
              href="https://www.instagram.com/vogame.id/"
              title=""
              class="bg-instagram"
              ><i class="fab fa-instagram"></i
            ></a>
          </div>
        </div>
      </div>
    </div>
    <hr />
    <div class="container">
      <div class="row">
        <div class="col-12 col-lg-6 mb-3">
          © 2020 - 2022 VOGAME. All Rights Reserved
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
      vuedis.logo = result.data.logo;
      vuedis.notelp = result.data.telp;
      vuedis.alamat = result.data.alamat;
      vuedis.whatsapp = result.data.wa;
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

.social.facebook {
  background: #2c4cd5;
}
.social.email {
  background: #db4437;
}
.social.twitter {
  background: #1dcaff;
}
.social.instagram {
  background: #dd2a7b;
}
.social:hover {
  background: #ff5a5e;
}
</style>
