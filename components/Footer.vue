<template>
  <div>
    <section class="bg-white">
      <div class="container">
        <h5 class="text-secondary mb-2 card-subtitle">DUKUNGAN PELANGGAN</h5>
        <h2 class="fw-bold mb-4 card-title">Hubungi kami</h2>
        <div class="row">
          <div class="col-6 col-lg-2 mb-3">
            <nuxt-link to="" class="text-dark">
              <div class="card border-0 rounded shadow p-4">
                <div class="d-flex align-items-center flex-column gap-2">
                  <Icon icon="logos:whatsapp" height="52px" />
                  <div>Whatsapp</div>
                </div>
              </div>
            </nuxt-link>
          </div>
          <div class="col-6 col-lg-2 mb-3">
            <nuxt-link to="" class="text-dark">
              <div class="card border-0 rounded shadow p-4">
                <div class="d-flex align-items-center flex-column gap-2">
                  <Icon
                    icon="dashicons:email"
                    height="52px"
                    class="text-danger"
                  />
                  <div>Email</div>
                </div>
              </div>
            </nuxt-link>
          </div>
          <div class="col-6 col-lg-2 mb-3">
            <nuxt-link to="" class="text-dark">
              <div class="card border-0 rounded shadow p-4">
                <div class="d-flex align-items-center flex-column gap-2">
                  <Icon
                    icon="fluent:chat-help-24-filled"
                    height="52px"
                    class="text-danger"
                  />
                  <div>FAQ</div>
                </div>
              </div>
            </nuxt-link>
          </div>
          <div class="col-6 col-lg-2 mb-3">
            <nuxt-link to="" class="text-dark">
              <div class="card border-0 rounded shadow p-4">
                <div class="d-flex align-items-center flex-column gap-2">
                  <Icon
                    icon="si-glyph:customer-support"
                    height="52px"
                    class="text-danger"
                  />
                  <div>Hotline</div>
                </div>
              </div>
            </nuxt-link>
          </div>
        </div>
      </div>
    </section>
    <section class="bg-light border-bottom pb-2">
      <div class="container footer-sub">
        <div class="mb-4"><img :src="logo" height="25px" /></div>
        <div class="row">
          <div class="col-12 col-lg-4 mb-4">
            <small>{{ alamat }}</small>
            <p class="m-0"><strong>PT Maju Selaras Komputer</strong></p>
            <p class="m-0">
              Ruko Citra Bisnis Park, Jalan Peta Barat Blok G No 23
            </p>
            <p class="m-0">Kalideres - Jakarta Barat</p>
          </div>
          <div class="col-12 col-lg-8 footer-menu mt-4">
            <div class="d-flex align-items-center gap-3 justify-content-end">
              <nuxt-link to="" class="text-dark">Syarat & Ketentuan</nuxt-link>
              <nuxt-link to="" class="text-dark">Hubungi Kami</nuxt-link>
            </div>

            <div class="mt-3 d-flex align-items-center gap-3 justify-content-end">
              <nuxt-link to="" class="text-dark">
                <div class="social facebook border-0 rounded-circle p-2">
                  <div class="d-flex align-items-center flex-column gap-2">
                    <Icon icon="brandico:facebook" height="24px" class="text-white"/>
                  </div>
                </div>
              </nuxt-link>
              <nuxt-link to="" class="text-dark">
                <div class="social email border-0 rounded-circle p-2">
                  <div class="d-flex align-items-center flex-column gap-2">
                    <Icon
                      icon="bxs:envelope"
                      height="24px"
                      class="text-white"
                    />
                  </div>
                </div>
              </nuxt-link>
              <nuxt-link to="" class="text-dark">
                <div class="social twitter border-0 rounded-circle p-2">
                  <div class="d-flex align-items-center flex-column gap-2">
                    <Icon
                      icon="akar-icons:twitter-fill"
                      height="24px"
                      class="text-white"
                    />
                  </div>
                </div>
              </nuxt-link>
              <nuxt-link to="" class="text-dark">
                <div class="social instagram border-0 rounded-circle p-2">
                  <div class="d-flex align-items-center flex-column gap-2">
                    <Icon
                      icon="akar-icons:instagram-fill"
                      height="24px"
                      class="text-white"
                    />
                  </div>
                </div>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-light pt-3 pb-5">
      <div class="container footer-sub">
        <div class="row">
          <div class="col-12 col-lg-4 mb-3">
            <small>© 2020 - 2022 VOGAME. All Rights Reserved</small>
          </div>
          <div class="col-12 col-lg-8 footer-menu">
            <small
              >Kembali keatas
              <Icon
                icon="akar-icons:arrow-up"
                height="16px"
                class="text-black"
              />
            </small>
          </div>
        </div>
      </div>
    </section>
  </div>
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
