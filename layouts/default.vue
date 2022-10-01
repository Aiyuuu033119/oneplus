<template>
  <div>
    <Sidebar />
    <Navbar />
    <div class="bg-hive">
      <Nuxt />
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue';
import Footer from '~/components/Footer.vue';
import Sidebar from '~/components/Sidebar.vue';
export default {

  name: 'default',

  components: {
    Navbar,
    Footer,
    Sidebar
  },

  data () {
    return {

    }
  }
}
</script>

<style lang="css" scoped>
</style>