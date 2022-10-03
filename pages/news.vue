<template>
  <div>
    <div class="bg-hive">
      <section>
        <div class="container">
          <h3 class="text-white mt-5 text-primary">Berita dan Acara</h3>
        </div>
      </section>
    </div>
    <div class="container">
      <section>
        <ul class="nav nav-pills gap-2 mb-3" id="pills-tab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active btn-lg rounded-pill" id="pills-1-tab" data-bs-toggle="pill" data-bs-target="#pills-1" type="button" role="tab" aria-controls="pills-1" aria-selected="true">Semua</button>
          </li>
        </ul>
        <div class="tab-content" id="pills-tabContent">
          <div class="tab-pane fade show active" id="pills-1" role="tabpanel" aria-labelledby="pills-1-tab">
            <div class="row">
              <div v-if="news != null && news.length > 0" class="col-12 col-lg-6 mb-4" v-for="brt in news" :key="brt.id">
                <nuxt-link :to="{ path: 'news/'+brt.url }"  class="btn-p">
                  <div class="card rounded overflow-hidden border-0 shadow-sm">
                    <div class="ratio ratio-36x9">
                      <img :src="brt.foto" class="object-cover">
                    </div>
                    <div class="card-body">
                      <div class="text-primary"><small>{{ brt.tgl }} • {{ brt.kategori }}</small></div>
                      <div class="text-dark">{{ brt.judul }}</div>
                    </div>
                  </div>
                </nuxt-link>
              </div>
            </div>
            <nav aria-label="..." class="d-none">
              <ul class="pagination m-0 justify-content-center">
                <li class="page-item disabled">
                  <span class="page-link">Kembali</span>
                </li>
                <li class="page-item"><a class="page-link" href="#">1</a></li>
                <li class="page-item active" aria-current="page">
                  <span class="page-link">2</span>
                </li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item">
                  <a class="page-link" href="#">Selanjutnya</a>
                </li>
              </ul>
            </nav>
          </div>
          <div class="tab-pane fade" id="pills-2" role="tabpanel" aria-labelledby="pills-2-tab">...</div>
          <div class="tab-pane fade" id="pills-3" role="tabpanel" aria-labelledby="pills-3-tab">...</div>
          <div class="tab-pane fade" id="pills-4" role="tabpanel" aria-labelledby="pills-4-tab">...</div>
        </div>
      </section>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from '~/components/Footer.vue';
export default {

  name: 'news',

  layout: 'pages',

  components: {
    Footer
  },

  data () {
    return {
        news : null,
    }
  },
  async fetch() {
      this.news = await fetch(process.env.apiUrl+'/mobileapi/news_all').then((res) => res.json());
      console.log(this.news);
  }
}
</script>

<style lang="scss" scoped>
.nav-link{
  color: #2b2d41;
  background-color: white;
  border: 1px solid #ddd!important;
  padding-left: 50px;
  padding-right: 50px;
}
.nav-pills {
  .nav-link.active {
    color: #fff;
    background-color: #ff5a5e;
    border: 1px solid #ff5a5e!important;
  }
}
</style>
