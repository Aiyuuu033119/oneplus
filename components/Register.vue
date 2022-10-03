<template>
  <section class="container">
    <div class="row">
      <div class="col-lg-4 offset-lg-4">
        <div class="card shadow-1">
          <div class="px-4 auth-container" id="load">
            <h5 class="text-black text-center pt-4 mb-4">Daftar Vogame</h5>
            <div class="mb-3 form-group">
              <input type="text" v-model="name" class="form-control formRounded" id="nameInput"
                @keyup.enter="doRegister" placeholder="Nama Pengguna">
            </div>
            <div class="mb-3 form-group">
              <input type="email" v-model="email" class="form-control formRounded" id="emailInput"
                @keyup.enter="doRegister" placeholder="Masukkan Email">
            </div>
            <div class="mb-3 form-group">
              <input type="text" v-model="number" class="form-control formRounded" id="numberInput"
                @keyup.enter="doRegister" placeholder="No Whatsapp">
            </div>
            <div class="mb-3 form-group">
              <div class="position-relative">
                <input type="password" class="form-control formRounded" v-model="password" id="passwordInput"
                  @keyup.enter="doRegister" placeholder="Masukkan kata sandi">
                <button class="btn bg-transparent h-100 text-secondary position-absolute top-0 end-0" type="button">
                  <Icon icon="carbon:view-filled" height="24px" />
                </button>
              </div>
              <div class="text-black mt-1"><small>Kata sandi harus mengandung minimal 8 karakter termasuk 1
                  angka</small>
              </div>
            </div>
            <div class="mb-3 form-group">
              <select class="form-select  js-select2 select2-hidden-accessible" name="kelamin" required="" tabindex="-1"
                aria-hidden="true">
                <option value="">Jenis Kelamin</option>
                <option value="1">Laki-laki</option>
                <option value="2">Perempuan</option>
              </select>
            </div>
            <div class="separator">Tanggal lahir</div>
            <div class="mb-3 form-group row">
              <div class="col-md-4 col-sm-12">
                <select class="form-select  js-select2 select2-hidden-accessible" name="tgl" required=""
                  tabindex="-1" aria-hidden="true">
                  <option value>Tgl</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                  <option value="13">13</option>
                  <option value="14">14</option>
                  <option value="15">15</option>
                  <option value="16">16</option>
                  <option value="17">17</option>
                  <option value="18">18</option>
                  <option value="19">19</option>
                  <option value="20">20</option>
                  <option value="21">21</option>
                  <option value="22">22</option>
                  <option value="23">23</option>
                  <option value="24">24</option>
                  <option value="25">25</option>
                  <option value="26">26</option>
                  <option value="27">27</option>
                  <option value="28">28</option>
                  <option value="29">29</option>
                  <option value="30">30</option>
                  <option value="31">31</option>
                </select>
              </div>
              <div class="col-md-4 col-sm-12 px-2">
                <select class="form-select  js-select2 select2-hidden-accessible" name="bln" required=""
                  tabindex="-1" aria-hidden="true">
                  <option value>Bulan</option>
                  <option value="1">Januari</option>
                  <option value="2">Februari</option>
                  <option value="3">Maret</option>
                  <option value="4">April</option>
                  <option value="5">Mei</option>
                  <option value="6">Juni</option>
                  <option value="7">Juli</option>
                  <option value="8">Agustus</option>
                  <option value="9">September</option>
                  <option value="10">Oktober</option>
                  <option value="11">November</option>
                  <option value="12">Desember</option>
                </select>
              </div>
              <div class="col-md-4 col-sm-12 px-2">
                <select class="form-select  js-select2 select2-hidden-accessible" name="thn" required=""
                  tabindex="-1" aria-hidden="true">
                  <option value="">Tahun</option>
                  <option value="1">2002</option>
                  <option value="2">2001</option>
                </select>
              </div>
            </div>
            <div class="text-black mb-3">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                <small class="form-check-label text-primary" for="flexCheckDefault">
                  I agree to Vogame <a class="text-primary">
                    <nuxt-link to="/">Terms and Conditions</nuxt-link>
                  </a>
                </small>
              </div>
            </div>
            <div class="mb-3">
              <button class="btn btn-primary btn-lg w-100 text-black rounded" type="button"
                @click="doRegister">Daftar</button>
            </div>
            <div v-if="errmsg != null && errmsg != ''" class="text-black mb-3">{{errmsg}}</div>
          </div>

          <div class="card-footer">
            <nuxt-link to="/login">
              <a class="btn btn-link btn-block text-dark">Sudah punya akun? Masuk sekarang</a>
            </nuxt-link>
          </div>


        </div>
      </div>
    </div>
  </section>

</template>

<script>
import { Icon } from '@iconify/vue2';
export default {

  name: 'Register',

  components: {
    Icon
  },

  data() {
    return {
      email: '',
      password: '',
      errmsg: ''
    }
  },

  methods: {
    changeState() {
      this.$emit('changeState', 'login')
    },
    async doRegister() {
      var vuedis = this;
      try {
        this.$axios.post('/mobileapi/register', {
          email: this.email,
          password: this.password
        }).then((result) => {
          if (result.data.success == true) {
            vuedis.$emit('changeState', 'success-register')
          } else {
            vuedis.errmsg = result.data.message;
          }
        });

      } catch (e) {
        this.error = e.response.data.message
      }
    },
    signUp() {
      this.$emit('changeState', 'success-register')
    }
  }
}
</script>

<style lang="css" scoped>

</style>
