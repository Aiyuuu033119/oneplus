<template>
  <section>
    <div class="container">
      <div class="row">
        <div class="col-12 col-lg-6 offset-lg-3">
          <div class="card border-0 rounded shadow-sm">
            <div class="card-header border-bottom">
              <div class="d-flex align-items-center gap-2">
                <h5 class="m-0 text-primary" v-html="searchtitle"></h5>
              </div>
            </div>
            <div class="card-body">
              <div class="d-grid gap-3">
                <div v-if="games != null" class="games-slider row g-3">
                  <div class="col-4 col-lg-3" v-for="item in games" :key="item.id">
                    <nuxt-link :to="{ path: 'product/'+item.url }"  class="card rounded border-0">
                      <div class="">
                        <div class="ratio ratio-1x1 mb-2">
                          <img :src="item.foto" :alt="item.nama" class="object-cover rounded">
                        </div>
                        <div class="d-grid gap-1 text-center">
                          <small class="text-secondary">{{ item.publisher }}</small>
                          <div class="card-title text-dark fw-bold mb-0">{{ item.nama }}</div>
                        </div>
                      </div>
                    </nuxt-link>
                  </div>
                </div>
                <div v-else class="games-slider row g-3">
                  <div class="col-12 col-lg-12">Pencarian tidak ditemukan</div>
                </div>

                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Icon } from '@iconify/vue2';
export default {

  name: 'search',

  components: {
    Icon
  },

  data () {
    return {
      search : '',
      searchtitle : 'Hasil Pencarian',
      games: null,
    }
  },

  async fetch() {
      var disv = this;
      var paramsearch = this.$route.query;
      if(paramsearch.hasOwnProperty("search")){
          this.games = await fetch(process.env.apiUrl+'/mobileapi/search?search='+paramsearch.search).then((res) => res.json());
      }
  },

  created(){
      var paramsearch = this.$route.query;
      if(paramsearch.hasOwnProperty("search")){
          this.searchtitle = 'Hasil Pencarian &quot;'+paramsearch.search+'&quot;';
      }
  }
}
</script>

<style lang="scss" scoped>
.nav-link{
  color: #2b2d41;
  background-color: white;
  border: 1px solid #ddd!important;
  padding-left: 30px;
  padding-right: 30px;
}
.nav-pills {
  .nav-link.active {
    color: #fff;
    background-color: #ff5a5e;
    border: 1px solid #ff5a5e!important;
  }
}
@media only screen and (max-width: 767px){
  .games-slider{
    margin-left: -15px;
    margin-right: -15px;

    a{

      small{
        font-size: 11px;
      }

      .card-title{
        font-size: 14px;
      }
    }
  }
}
</style>
