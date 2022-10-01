<template>
  <div>
    <div class="container">
      <div class="ratio ratio-36x9">
        <img :src="fotoBerita" class="object-cover">
      </div>
      <section>
        <div class="text-primary"><small>{{ tglBerita }} • {{ catBerita }}</small></div>
        <h1>{{ judulBerita }}</h1>
        <div class="text-dark mb-3" v-html="contentBerita"></div>
        <div class="btn-share">
          <button class="btn btn-link bg-transparent border-0"><Icon icon="logos:whatsapp" height="36px"/></button>
          <button class="btn btn-link bg-transparent border-0"><Icon icon="logos:facebook" height="36px"/></button>
          <button class="btn btn-link bg-transparent border-0"><Icon icon="logos:twitter" height="36px"/></button>
          <button class="btn btn-link bg-transparent border-0"><Icon icon="akar-icons:link-chain" height="36px"/></button>
        </div>
      </section>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from '~/components/Footer.vue';
import { Icon } from '@iconify/vue2';
export default {

  name: 'single-post',

  layout: 'pages',

  components: {
    Footer,
    Icon
  },

  data () {
    return {
      fotoBerita : '/img/image-2.png',
      tglBerita : '15 Nov 2021',
      catBerita : 'Berita',
      judulBerita : 'Ini adalah sample judul',
      contentBerita : ''
    }
  },
  created(){
      var vuedis = this;
      var slug = this.$route.params.slug;

      this.$axios.get(process.env.apiUrl+'/mobileapi/blogsingle/'+slug).then((result) => {
            this.fotoBerita = result.data.foto;
            this.judulBerita = result.data.judul;
            this.tglBerita = result.data.tgl;
            this.catBerita = result.data.kategori;
            this.contentBerita = result.data.content;
      });
  },
}
</script>

<style lang="css" scoped>
</style>
