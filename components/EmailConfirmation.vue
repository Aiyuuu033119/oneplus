<template>
  <div class="text-center">
    <img src="/img/email-confirmation.svg" class="py-5">
    <h4 class="text-white mb-3">Konfirmasi email anda</h4>
    <div class="text-white mb-3">Email verifikasi telah dikirim ke alamat email Anda. Silakan periksa Inbox.</div>
    <button type="button" class="btn btn-primary btn-lg w-100 text-white rounded" data-bs-dismiss="offcanvas" aria-label="Close" @click="changeState">Kembali ke Beranda</button> 
  </div>
</template>

<script>
export default {

  name: 'EmailConfirmation',

  data () {
    return {

    }
  },

  methods: {
    changeState() {
      this.$emit('changeState', 'loggedin')     
    },
  }
}
</script>

<style lang="css" scoped>
</style>