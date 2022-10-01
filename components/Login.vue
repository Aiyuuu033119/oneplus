<template>
  <div>
    <h4 class="text-white mb-4">Masuk akun</h4>
      <div class="mb-3">
        <label for="emailInput" class="form-label text-white">Email</label>
        <input type="text" v-model="username" class="form-control form-control-lg rounded" placeholder="Masukkan alamat Email">
      </div>
      <div class="mb-3">
        <label for="passwordInput" class="form-label text-white">Kata Sandi</label>
        <div class="position-relative">
          <input type="password" v-model="password" class="form-control form-control-lg rounded" id="passwordInput" placeholder="Masukkan kata sandi" @keyup.enter="doLogin" >
          <button class="btn bg-transparent h-100 text-secondary position-absolute top-0 end-0" type="button">
            <Icon icon="carbon:view-filled" height="24px"/>
          </button>
        </div>
      </div>
      <div v-if="errmsg != null && errmsg != ''" class="text-white mb-3">{{errmsg}}</div>
      <div class="text-white" v-html="is_sandi">Lupa Kata Sandi? <nuxt-link to="" class="btn-link text-primary">Ubah Sandi</nuxt-link></div>
      <div class="mb-3">
        <button class="btn btn-primary btn-lg w-100 text-white rounded" type="button" @click="doLogin">Masuk</button>
      </div>
      <div class="text-white mb-3">Belum punya Akun? <button class="btn-link bg-transparent border-0 text-primary" @click="changeState">Buat Akun</button></div>

  </div>
</template>

<script>
import { Icon } from '@iconify/vue2';
export default {

  name: 'Login',

  components: {
    Icon
  },

  data () {
    return {
      username : '',
      is_sandi : '&nbsp;',
      errmsg : '',
      password : ''
    }
  },
  methods: {
    changeState() {
      this.$emit('changeState', 'register')
    },
    async doLogin(){
          var vuedis = this;
          try {
            this.$axios.post('/mobileapi/login', {
              email: this.username,
              password: this.password
            }).then((result) => {
                if(result.data.success == true){
                  localStorage.setItem('c4Prt7', JSON.stringify(result.data));
                  vuedis.$emit('changeState', 'loggedin')
                }else{
                  vuedis.errmsg = result.data.message;
                }
            });

          } catch (e) {
            this.error = e.response.data.message
          }
    },
    successLogin() {
      this.$emit('changeState', 'loggedin')
    }
  }
}
</script>

<style lang="css" scoped>
</style>
