<template>
  <div>
    <div class="bg-hive">
      <section>
        <div class="container">
          <h3 class="text-white mt-5 text-primary">Program Kemitraan</h3>
        </div>
      </section>
    </div>
    <div class="container">
      <section>
        <h5 class="mb-4 text-primary">Mulailah bekerja sama dengan kami!</h5>
        <form>
          <div class="row">
            <div class="col-12 col-lg-6">
              <div class="mb-3">
                <label for="nameInput" class="form-label">Nama Lengkap</label>
                <input type="text" class="form-control form-control-lg rounded" id="nameInput" placeholder="Contoh : Budi Mulianto">
              </div>
            </div>
            <div class="col-12 col-lg-6">
              <div class="mb-3">
                <label for="phoneInput" class="form-label">No Ponsel</label>
                <input type="number" class="form-control form-control-lg rounded" id="phoneInput" placeholder="Contoh: 8123456789101">
              </div>
            </div>
            <div class="col-12 col-lg-6">
              <div class="mb-3">
                <label for="emailInput" class="form-label">Email</label>
                <input type="email" class="form-control form-control-lg rounded" id="emailInput" placeholder="Masukkan alamat Email">
              </div>
            </div>
            <div class="col-12 col-lg-6">
              <div class="mb-3">
                <label for="countryInput" class="form-label">Negara</label>
                <select class="form-select form-select-lg rounded" aria-label="Select Country">
                  <option selected>Indonesia</option>
                  <option value="1">Malaysia</option>
                  <option value="2">Singapore</option>
                  <option value="3">Thailand</option>
                </select>
              </div>
            </div>
            <div class="col-12 col-lg-6">
              <div class="mb-3">
                <label for="formInput" class="form-label">Tipe Permohonan</label>
                <select class="form-select form-select-lg rounded" aria-label="Select Form">
                  <option selected>Reseller</option>
                  <option value="1">Merchant</option>
                  <option value="2">Endorsement</option>
                  <option value="3">E-Sport Tournaments</option>
                </select>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-12 col-lg-12">
              <div class="mb-3">
                <label for="descInput" class="form-label">Nama Lengkap</label>
                <textarea class="form-control form-control-lg rounded" id="descInput" rows="5" placeholder="Jelaskan secara singkat tentang apa yang anda inginkan dengan adanya program kemitraan ini."></textarea>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-12 col-lg-6">
              <vue-recaptcha sitekey="Your key here"></vue-recaptcha>
            </div>
            <div class="col-12 col-lg-6">
              <button class="btn btn-primary btn-lg rounded w-100">Kirim</button>
            </div>
          </div>
        </form>
      </section>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from '~/components/Footer.vue';
import VueRecaptcha from 'vue-recaptcha';
export default {

  name: 'partners',

  layout: 'pages',

  components: {
    Footer,
    VueRecaptcha
  },

  data () {
    return {

    }
  }
}
</script>

<style lang="css" scoped>
</style>