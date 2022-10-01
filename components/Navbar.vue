<template>
  <div class="bg-white shadow sticky-top">
    <div class="container">
      <div class="d-flex align-items-center justify-content-between">
        <div class="d-flex align-items-center">
          <a href="" class="text-danger" data-bs-toggle="offcanvas" href="#offcanvas1" role="button" aria-controls="offcanvas1"><Icon icon="ci:menu-alt-03" height="24px"/></a>
          <nuxt-link to="/" class="p-3"><img :src="logo" height="25"></nuxt-link>
        </div>
        <div class="input-group btn-search bg-white border rounded-pill d-none d-lg-flex">
          <button class="btn bg-transparent text-danger" type="button">
            <Icon icon="bx:bx-search" height="24px"/>
          </button>
          <input id="searchInput" type="search" v-model="searchval" class="form-control bg-transparent border-0" placeholder="Pencarian game ataupun voucher" ref="control" @keyup.enter="find">
        </div>
        <div class="d-inline-block d-lg-none">
          <button class="bg-transparent border-0 text-danger" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
            <Icon icon="bx:bx-search" height="24px"/>
          </button>
        </div>
      </div>
      <div class="collapse pb-3" id="collapseExample">
        <input type="search" v-model="searchval" class="form-control bg-transparent border rounded-pill" placeholder="Pencarian game ataupun voucher" ref="control" @keyup.enter="find">
      </div>
    </div>
  </div>
</template>

<script>
import { Icon } from '@iconify/vue2';
export default {

  name: 'Navbar',

  components: {
    Icon
  },

  data () {
    return {
      searchval : '',
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

  methods: {
    find() {
      var disval = this.searchval;
      var to = '/search';
      if (this.$router.currentRoute.path === to) {
            window.location.href= '/search?search='+disval;
      } else {
          this.$router.push({
            path: to,
            force: true,
            name: 'search',
            query: { search: disval }
          },
          () => {
            this.$router.app.refresh()
          });
      }

    }
  }
}
</script>

<style lang="css" scoped>
</style>
