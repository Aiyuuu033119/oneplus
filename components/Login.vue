<template>
  <div class="card shadow-1" style="margin-top: 4rem;">
    <div class="px-4">
      <h4 class="text-black text-center pt-4 mb-4">Masuk akun</h4>
      <div class="separator">login disini</div>
      <div class="text-center mb-3">
        <input type="text" v-model="username" class="form-control form-control-lg rounded-pill" placeholder="Email">
      </div>
      <div class="mb-3 ">
        <div class="position-relative">
          <input type="password" v-model="password" class="form-control form-control-lg rounded-pill" id="passwordInput"
            placeholder="Password" @keyup.enter="doLogin">
          <button class="btn bg-transparent h-100 text-secondary position-absolute top-0 end-0" type="button">
            <Icon icon="carbon:view-filled" height="24px" />
          </button>
        </div>
      </div>
      <div class="page-link text-right">Lupa Kata Sandi? 
      </div>
      <div class="text-center mb-3">
        <button class="btn btn-primary w-100 btn-lg text-black rounded-full" type="button" @click="doLogin">Masuk</button>
      </div>
      <div class="card-footer">
											<a href="https://vogame.co.id/home/signup" class="btn btn-link btn-block text-dark">Belum punya akun? Daftar sekarang</a>
									</div>
    </div>
  </div>
</template>

<script>
import { Icon } from '@iconify/vue2';
export default {

  name: 'Login',

  components: {
    Icon
  },

  data() {
    return {
      username: '',
      is_sandi: '&nbsp;',
      errmsg: '',
      password: ''
    }
  },
  methods: {
    changeState() {
      this.$emit('changeState', 'register')
    },
    async doLogin() {
      var vuedis = this;
      try {
        this.$axios.post('/mobileapi/login', {
          email: this.username,
          password: this.password
        }).then((result) => {
          if (result.data.success == true) {
            localStorage.setItem('c4Prt7', JSON.stringify(result.data));
            vuedis.$emit('changeState', 'loggedin')
          } else {
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
