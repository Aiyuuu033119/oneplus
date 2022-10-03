<template>
  <section>
    <div class="container">
      <div class="row">
        <div class="col-12 col-lg-6 offset-lg-3">
          <div class="card border-0 rounded shadow-sm">
            <div class="card-header border-bottom">
              <div class="d-flex align-items-center gap-2">
                <Icon icon="bx:bx-time" height="24px" style="color: #FF5A5F;"/>
                <h5 class="m-0 text-primary ">History Transaksi</h5>
              </div>
            </div>
            <div class="card-body">
              <div class="d-grid gap-3">
                <div v-if="transactions != null" class="d-flex align-items-center justify-content-between py-3 border-bottom" v-for="i in transactions" :key="i">
                  <div class="d-grid gap-2">
                    <div class="fw-bold">{{ i.nama }}</div>
                    <div class="text-secondary"><small>{{ i.tgl }}</small></div>
                  </div>
                  <button v-if="i.status == 'unpaid' && i.snap_url != ''" @click="gotoURL(i.snap_url)" class="btn btn-primary rounded">Bayar</button>
                  <button v-if="i.status == 'paid' && i.kategori_url != ''" @click="gotoRoute(i.kategori_url)" class="btn btn-primary rounded">Beli lagi</button>
                  <button v-if="i.status == 'expired'" class="btn btn-secondary rounded">Kadaluarsa</button>
                </div>
                <div v-else class="d-flex align-items-center justify-content-between py-3 border-bottom">
                </div>
                <nav v-if="transactions != null" aria-label="...">
                  <ul class="pagination m-0 justify-content-center">
                    <li :class="previousPageClass">
                      <span class="page-link" @click="pesanan(currPage - 1)">Kembali</span>
                    </li>
                    <li v-for="i in max_page" :key="i" v-bind:class = "(i == currPage)? 'page-item active':'page-item'">
                        <a v-if="i != currPage" class="page-link" @click="pesanan(i)">{{ i }}</a>
                        <span v-else class="page-link">{{ i }}</span>
                    </li>
                    <li :class="nextPageClass">
                      <a class="page-link" href="#" @click="pesanan(currPage + 1)">Selanjutnya</a>
                    </li>
                  </ul>
                </nav>
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

  name: 'history-transactions',

  layout: 'default',

  components: {
    Icon
  },

  data () {
    return {
        transactions : null,
        max_page: 1,
        currPage: 1,
        pagingclass: 'page-item',
        previousPageClass: 'page-item',
        nextPageClass: 'page-item'
    }
  },

  created(){
      this.pesanan(1);
  },
  methods: {
      pesanan(page='') {
          var vuedis = this;
          if(page <= this.max_page){
              if (localStorage.getItem('c4Prt7')===null){

              }else{
                  var datapartis = localStorage.getItem('c4Prt7');
                  var craid = JSON.parse(datapartis);
                  var iduser = craid.usrid;
                  this.$axios.get(process.env.apiUrl+'/mobileapi/pesanan/'+iduser+'?page='+page).then((result) => {
                        if(result.data.hasOwnProperty("data")){
                            vuedis.transactions = result.data.data;
                            vuedis.max_page = result.data.maxPage;
                            vuedis.currPage = page;

                            if(page == 1 || page == '1'){
                              vuedis.previousPageClass = 'page-item disabled';
                            }else{
                              vuedis.previousPageClass = 'page-item';
                            }

                            if(result.data.page == result.data.maxPage){
                                vuedis.nextPageClass = 'page-item disabled';
                            }else if(result.data.page != result.data.maxPage){
                                vuedis.nextPageClass = 'page-item';

                            }
                        }

                  });
              }
          }else{

          }
      },
      gotoURL(snapURL=''){
          window.open(snapURL, '_blank').focus();
      },
      gotoRoute(catURL=''){
            this.$router.push({
              path: '/product/'+catURL,
            },
            () => {
              this.$router.app.refresh()
            });
      }
  }
}
</script>

<style lang="css" scoped>
</style>
