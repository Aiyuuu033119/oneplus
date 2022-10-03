<template>
<div class="wrapper">
  <Sidebar :isOpenSidebar="isOpenSidebar" @toggle-sidebar="toggleSideBar"/>
  <div :class="getRoute() === 'contact-us' ? '' : 'bgHome'">
    <Navbar @toggle-sidebar="toggleSideBar"/>
    <div>
      <Nuxt />
    </div>
    <Footer />
  </div>
  <div @click="toggleSideBar" class="overlay" :class="isOpenSidebar ? 'active' : ''"></div>
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
    console.log(this.$route.name);
    return {
      isOpenSidebar: false,
    }
  },
  methods: {
    toggleSideBar() {
      this.isOpenSidebar = !this.isOpenSidebar;
    },
    getRoute() {
      return this.$route.name
    }
  },
}
</script>

<style lang="css" scoped>
</style>