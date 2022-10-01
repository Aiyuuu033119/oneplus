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
              <h5>Selesaikan Pembayaran Anda</h5>
            </div>
            <div class="card-body">
              <div>Mohon selesaikan pembayaran anda dengan mengikuti petunjuk yang telah dikirimkan. Setelah pembayaran terkonfirmasi pembelian akan dikirim secepatnya. Terima kasih telah menggunakan codegame.</div>
              <div class="divider"></div>
              <h6>Ringkasan Pesanan</h6>
              <h6 class="mb-4">{{ titleProduk }}</h6>
              <div class="d-grid gap-3">
                <div class="d-flex align-items-center justify-content-between gap-3" v-for="item in details" :key="item.id">
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

    <div class="modal fade" id="modalDefs" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLongTitle">Detail Pembayaran</h5>
          <button type="button" class="close" @click="modalClosed" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <iframe v-if="routePay != '' && routePay != null" :src="routePay" width="100%" style="height:400px"></iframe>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" @click="modalClosed">Close</button>
        </div>
      </div>
    </div>
  </div>
  </section>


</template>


<script>

export default {

  name: 'detail_order',

  data () {
    return {
      titleProduk : '1x Mobile Legends',
      fotoProduk : '',
      snap_url : '',
      routePay : '',
      nominal : 0,
      modalConfirm : false,
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

  created(){
      var pid = this.$route.params.code;
      this.$axios.get(process.env.apiUrl+'/mobileapi/detailOrder/'+pid).then((result) => {
            var status = result.data.success;
            var resultData = result.data.data;
            var prodData = result.data.produk;
            this.fotoProduk = prodData.foto;
            this.titleProduk = prodData.nama;
            $("#imageProd").attr('src', this.fotoProduk);
            $("#descProd").html(prodData.deskripsi);
            this.routePay = resultData.snap_url;
            this.details = [
              {
                id: 1,
                var: 'Metode Pembayaran:',
                value: resultData.payment_method
              },
              {
                id: 2,
                var: 'Id Pembelian',
                value: resultData.reference_no
              },
              {
                id: 3,
                var: 'Id Transaksi',
                value: resultData.orderid
              },
              {
                id: 4,
                var: 'Status Pembayaran',
                value: resultData.status
              },
              {
                id: 5,
                var: 'Total Pembayaran',
                value: "IDR. "+resultData.total
              },
            ];
            this.nominal = resultData.total;

      })
      .catch(function (error) {
          console.log(error.message)
      });
  },

  methods: {
    payments() {
      $('#modalDefs').modal('show')
    },
    modalClosed() {
      $('#modalDefs').modal('hide')
    }
  }
}
</script>

<style lang="scss" scoped>
.modal-title{
  text-transform: uppercase;
}
@media (max-width: 767px){
  .modal-dialog-scrollable{
    margin: 0;
    height: 100vh;
  }
  .modal-content{
    height: 100vh;
    border: 0;
    border-radius: 0;
  }
}
</style>
