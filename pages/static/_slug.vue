<template>
  <div>
    <div class="bg-hive">
      <section>
        <div class="container">
          <h3 class="text-white mt-5 text-primary">{{judulPage}}</h3>
        </div>
      </section>
    </div>
    <div class="container">
      <section  v-html="contentPage"></section>
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
      judulPage : 'judul laman',
      contentPage : 'kontent laman'
    }
  },
  created(){
      var vuedis = this;
      var slug = this.$route.params.slug;

      this.$axios.get(process.env.apiUrl+'/mobileapi/pagesingle/'+slug).then((result) => {
            this.judulPage = result.data.judul;
            this.contentPage = result.data.content;
      });
  },
}
</script>

<style lang="css" scoped>
</style>
