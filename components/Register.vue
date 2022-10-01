<template>
  <div>
    <h4 class="text-white mb-4">Daftar</h4>
      <div class="mb-3">
        <label for="emailInput" class="form-label text-white">Email</label>
        <input type="email" v-model="email" class="form-control form-control-lg rounded" id="emailInput" @keyup.enter="doRegister" placeholder="Masukkan alamat Email">
      </div>
      <div class="mb-3">
        <label for="passwordInput" class="form-label text-white">Kata Sandi</label>
        <div class="position-relative">
          <input type="password" class="form-control form-control-lg rounded" v-model="password" id="passwordInput" @keyup.enter="doRegister" placeholder="Masukkan kata sandi">
          <button class="btn bg-transparent h-100 text-secondary position-absolute top-0 end-0" type="button">
            <Icon icon="carbon:view-filled" height="24px"/>
          </button>
        </div>
        <div class="text-white mt-1"><small>Kata sandi harus mengandung minimal 8 karakter termasuk 1 angka</small></div>
      </div>
      <div class="text-white mb-3">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
          <label class="form-check-label" for="flexCheckDefault">
            Saya setuju mendapatkan diskon, promosi, dan informasi lainnya di CodeGame
          </label>
        </div>
      </div>
      <div class="mb-3">
        <button class="btn btn-primary btn-lg w-100 text-white rounded" type="button" @click="doRegister">Daftar</button>
      </div>
      <div v-if="errmsg != null && errmsg != ''" class="text-white mb-3">{{errmsg}}</div>
      <div class="text-white mb-3">Sudah punya Akun? <button class="btn-link bg-transparent border-0 text-primary" @click="changeState">Masuk</button></div>

  </div>
</template>

<script>
import { Icon } from '@iconify/vue2';
export default {

  name: 'Register',

  components: {
    Icon
  },

  data () {
    return {
        email : '',
        password : '',
        errmsg : ''
    }
  },

  methods: {
    changeState() {
      this.$emit('changeState', 'login')
    },
    async doRegister(){
          var vuedis = this;
          try {
            this.$axios.post('/mobileapi/register', {
              email: this.email,
              password: this.password
            }).then((result) => {
                if(result.data.success == true){
                  vuedis.$emit('changeState', 'success-register')
                }else{
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
