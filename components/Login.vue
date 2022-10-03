<template>
  <section class="container">
    <div class="row">
      <div class="col-lg-4 offset-lg-4">
        <div class="card shadow-1">
          <div class="px-4 auth-container" id="load" >
            <h5 class="text-black text-center pt-4 mb-4">Masuk ke Vogame</h5>
            <div class="separator">login disini</div>
            <div class="text-center mb-3">
              <input type="text" v-model="username" class="form-control formRounded"
                placeholder="Email">
            </div>
            <div class="mb-3 ">
              <div class="position-relative">
                <input type="password" v-model="password" class="form-control formRounded"
                  id="passwordInput" placeholder="Password" @keyup.enter="doLogin">
                <button class="btn bg-transparent h-100 text-secondary position-absolute top-0 end-0" type="button">
                  <Icon icon="carbon:view-filled" height="24px" />
                </button>
              </div>
            </div>
            <div class="page-link text-primary text-right">
              <small>Lupa Password?</small>
            </div>
            <div class="text-center mb-3">
              <button class="btn btn-primary w-100 btn-lg text-black rounded-full" type="button"
                @click="doLogin">Masuk</button>
            </div>
            
          </div>
          <div class="card-footer">
            <nuxt-link to="/register"
              >
              <a class="btn btn-link btn-block text-dark">Belum punya akun?
                Daftar
                sekarang</a>
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
