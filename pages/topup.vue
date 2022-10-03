<template>
  <section class="bgwhite p-t-55 p-b-65">
    <div class="container">
      <div class="section-title-col sticky-top">
        <h3 class="home-title">Cari Top Up Game atau Voucher</h3>
        <ul class="nav justify-content-center" id="myTab" role="tablist">
          <li class="nav-item">
            <a class="btn btn-light" href="/shop">Semua Produk</a>
          </li>
          <li class="nav-item">
            <a class="btn btn-light active" href="/top-up">Top Up</a>
          </li>
          <li class="nav-item">
            <a class="btn btn-light" href="/voucher">Voucher</a>
          </li>
          <li class="nav-item">
            <a class="btn btn-light" href="/game">Game</a>
          </li>
        </ul>
      </div>
      <div class="tab-content" id="myTabContent">
        <div
          class="tab-pane fade show active"
          id="one"
          role="tabpanel"
          aria-labelledby="one-tab"
        >
          <div class="section-home-col seven-col mb-5">
            <div class="col-12 text-center m-tb-40">
              <h2><mark>Produk Kosong</mark></h2>
            </div>
          </div>

          <!-- Pagination -->
          <div class="pagination flex-m flex-w p-t-26">
            <!-- <div class="flex-c flex-w w-full p-t-10 m-lr--7">
              <a
                href="javascript:void(0)"
                class="
                  flex-c-m
                  how-pagination1
                  trans-04
                  m-all-7
                  active-pagination1
                "
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
            </div> -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "store",

  layout: "default",

  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
</style>
