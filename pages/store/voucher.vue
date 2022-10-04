<template>
  <div
    class="tab-pane fade"
    :class="active === 2 && 'show active'"
    id="three"
    role="tabpanel"
    aria-labelledby="three-tab"
  >
    <div class="section-home-col seven-col mb-5" v-if="voucherz != null && voucherz.length">
      <div class="cardSize" v-for="item in voucherz" :key="item.id">
        <div class="card">
          <nuxt-link :to="'/product-details/'+ item.url">
            <div
              class="card-img-top"
              style="
                height: 139px;
                background-size: cover;
                background-position: center center;
              "
              :style="'background-image: url(' + item.foto + ');'"
              :alt="item.nama"
            ></div>
            <div class="card-body">
              <h5 class="card-title text-primary" :title="item.nama">{{item.nama}}</h5>
              <p class="card-text"></p>
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
    <div class="section-home-col seven-col mb-5" v-else>
      <div class="col-12 text-center m-tb-40">
        <h2 class="text-primary"><mark>Produk Kosong</mark></h2>
      </div>
    </div>

    <!-- Pagination -->
    <div class="pagination flex-m flex-w p-t-26">
      <div class="flex-c flex-w w-full p-t-10 m-lr--7">
        <a
          href="javascript:void(0)"
          class="flex-c-m how-pagination1 trans-04 m-all-7 active-pagination1"
          >1</a
        >
        <a
          href="javascript:void(0)"
          class="flex-c-m how-pagination1 trans-04 m-all-7"
          onclick="refreshTabel(2)"
          >2</a
        >
        <a
          href="javascript:void(0)"
          class="flex-c-m how-pagination1 trans-04 m-all-7"
          onclick="refreshTabel(3)"
          >3</a
        >
        <a
          href="javascript:void(0)"
          onclick="refreshTabel(2)"
          class="flex-c-m how-pagination1 trans-04 m-all-7"
          >›</a
        >
        <a
          href="javascript:void(0)"
          onclick="refreshTabel(10)"
          class="flex-c-m how-pagination1 trans-04 m-all-7"
          >»</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "store",
  props: ['active'],
  layout: "default",

  data() {
    return {
      voucherz: null,
    };
  },
  async fetch() {
    this.voucherz = await fetch(
      process.env.apiUrl + "/mobileapi/kategorivoucher"
    ).then((res) => res.json());
  },
};
</script>

<style lang="scss" scoped>
</style>
