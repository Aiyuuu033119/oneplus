<template>
  <div>
    <div class="bg-white shadow sticky-top">
      <div class="container">
        <div class="d-flex align-items-center justify-content-between">
          <div class="d-flex align-items-center">
            <nuxt-link to="/" class="py-3"><img :src="logo" height="25"></nuxt-link>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-gray">
      <Nuxt />
    </div>
  </div>
</template>

<script>
export default {

  name: 'pages',

  data () {
    return {
      title : 'Isigame',
      logo : 'img/logo.svg',
      alamat : '',
      notelp : '',
      whatsapp : ''
    }
  },

  created(){
      var vuedis = this;
      this.$axios.get('/mobileapi/s7xs6oast').then((result) => {
            vuedis.title = result.data.nama;
            vuedis.logo = (result.data.logo != "") ? result.data.logo : 'img/logo.svg';
            vuedis.notelp = result.data.telp;
            vuedis.alamat = result.data.alamat;
            vuedis.whatsapp = result.data.wa;
      });
  },
}
</script>

<style lang="css" scoped>
</style>
