<template>
  <section class="pt-0 pt-lg-4">
    <div class="container">
      <div class="row">
        <div class="col-12 col-lg-4">
          <ProductDetails />
        </div>
        <div class="col-12 col-lg-8 content-wrap">
          <div class="card border-0 rounded">
            <div class="card-header border-bottom">
              <h5 class="text-primary">Selesaikan Pembayaran Anda</h5>
            </div>
            <div class="card-body">
              <div>Mohon selesaikan pembayaran anda dengan mengikuti petunjuk yang telah dikirimkan. Setelah pembayaran terkonfirmasi pembelian akan dikirim secepatnya. Terima kasih telah menggunakan codegame.</div>
              <div class="divider"></div>
              <h6>Ringkasan Pesanan</h6>
              <h6 class="mb-4">1x Mobile Legends, 400 Diamonds + 80 Bonus</h6>
              <div class="d-grid gap-3">
                <div class="d-flex justify-content-between gap-3" v-for="item in details" :key="item.id">
                  <div class="flex-shrink-0">{{ item.var }}:</div>
                  <div class="overflow-break fw-bold text-end">{{ item.value }}</div>
                </div>
              </div>
              <div class="divider"></div>
              <div class="row">
                <div class="col-12 col-lg-6">
                  <button class="btn btn-link text-dark btn-lg rounded w-100">Lakukan Pembelian Lain</button>
                </div>
                <div class="col-12 col-lg-6">
                  <button class="btn btn-primary btn-lg rounded w-100" @click="payments">Lanjutkan Pembayaran</button>
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
export default {

  name: 'summary',

  data () {
    return {
      details: [
        {
          id: 1,
          var: 'Metode Pembayaran:',
          value: 'DANA'
        },
        {
          id: 2,
          var: 'Id Pembelian',
          value: '123456789101112131415'
        },
        {
          id: 3,
          var: 'Id Transaksi',
          value: '123456789101112131415'
        },
        {
          id: 4,
          var: 'Status Pembayaran',
          value: 'Menunggu Pembayaran'
        },
        {
          id: 5,
          var: 'Total Pembayaran',
          value: 'IDR. 1.000.000'
        },
      ],
    }
  },

  methods: {
    payments() {
      this.$router.push('payments')
    },
  }
}
</script>

<style lang="css" scoped>
</style>
