<template>
  <section class="bgwhite p-t-55 p-b-65">
    <div class="container">
      <div class="section-title-col sticky-top">
        <h3 class="home-title text-primary">Cari Top Up Game atau Voucher</h3>
        <ul class="nav justify-content-center" id="myTab" role="tablist">
          <li class="nav-item">
            <a
              @click="setActive(1)"
              class="btn btn-tab"
              :class="active == 1 ? 'btn-light bg-white bg-white text-secondary' : '' "
              >Semua Produk</a
            >
          </li>
          <li class="nav-item">
            <a
              @click="setActive(2)"
              class="btn btn-tab"
              :class="active == 2 ? 'btn-light bg-white bg-white text-secondary' : ''"
              >Voucher</a
            >
          </li>
          <li class="nav-item">
            <a
              @click="setActive(3)"
              class="btn btn-tab"
              :class="active == 3 ? 'btn-light bg-white bg-white text-secondary' : ''"
              >Game</a
            >
          </li>
        </ul>
      </div>
      <div class="tab-content" id="myTabContent">
        <Shop :active="active"/>
        <Voucher :active="active"/>
        <Game :active="active"/>
      </div>
    </div>
  </section>
</template>
  
<script>
import Shop from "./shop.vue";
import Voucher from "./voucher.vue";
import Game from "./game.vue";
export default {
  name: "store",
  components: {
    Shop,
    Voucher,
    Game
  },
  layout: "default",

  data() {
    return {
      active: 1,
    };
  },
  methods: {
    setActive(index) {
      this.active = index;
    },
  },
};
</script>
  
  <style lang="scss" scoped>
</style>
  