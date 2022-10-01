<template>
  <div class="position-relative h-100">
    <div class="d-flex align-items-center gap-3 mb-4">
      <div class="avatar ratio ratio-1x1">
        <!-- <img src="/img/"> -->
        {{ initial }}
      </div>
      <div class="d-grid gap-2 text-white">
        <h5 class="m-0">{{ username }}</h5>
        <div>Bergabung sejak {{ joindate }}</div>
      </div>
    </div>
    <ul>
      <li v-for="item in mainmenu" :key="item.id">
        <nuxt-link :to="item.url" class="btn rounded p-3 d-flex align-items-center gap-2 text-white" :class="{'active' : item.current}"><Icon :icon="item.icon" height="24px"/><h5 class="m-0">{{ item.text }}</h5></nuxt-link>
      </li>
    </ul>
    <div class="position-absolute bottom-0 w-100 border-top border-primary py-3">
      <button type="button" class="btn bg-transparent border-0 rounded p-3 d-flex align-items-center gap-2 text-white" @click="doLogout"><Icon icon="bx:bxs-log-out" height="24px"/><h5 class="m-0">Keluar</h5></button>
    </div>
  </div>
</template>

<script>
import { Icon } from '@iconify/vue2';

var stateLogin = 0;

export default {

  name: 'MainMenu',

  components: {
    Icon
  },

  data () {
    return {
      username : '',
      initial : 'H',
      joindate : '',
      mainmenu: [
        {
          id: 1,
          icon: 'ci:home-fill',
          text: 'Halaman Utama',
          url: '/',
          current: true,
        },
        {
          id: 2,
          icon: 'ri:file-history-fill',
          text: 'Histori Transaksi',
          url: '/history-transactions',
          current: false,
        },
      ],
    }
  },

  created(){
        var vuedis = this;
        var cprt = null;
        if (localStorage.getItem('c4Prt7')===null){
            stateLogin = 0;
        }else{
            var dataparti = localStorage.getItem('c4Prt7');
            cprt = JSON.parse(dataparti);
            stateLogin = 1;
        }

        if(stateLogin == 1 && cprt != null){
            var iduser = cprt.usrid;
            vuedis.username = cprt.nama;
            this.$axios.get('/mobileapi/getProfile/'+iduser).then((result) => {
                  vuedis.username = result.data.nama;
                  vuedis.initial = result.data.nama.charAt(0).toUpperCase();
                  vuedis.joindate = result.data.tgl;
            });
        }else{
            this.$emit('changeState', 'login')
        }
  },

  methods: {
    changeState() {
      this.$emit('changeState', 'login')
    },
    doLogout(){

      if(localStorage.getItem("c4Prt7") !== null) localStorage.removeItem("c4Prt7");

      this.$emit('changeState', 'login')
    }
  }
}
</script>

<style lang="css" scoped>
.active{
  background: #FF5A5F;
  color: white;
}
</style>
