<template>
  <section class="container">
    <div class="row">
      <div class="col-12 col-lg-6 offset-lg-3">
        <div class="card border-0 rounded shadow-sm">
          <div class="card-header border-bottom">
            <div class="d-flex align-items-center gap-2">
              <Icon icon="ant-design:field-time-outlined" height="24px" style="color: #FF5A5F;"/>
              <h5 class="m-0 text-primary">Pembayaran sedang diproses</h5>      
            </div>
          </div>
          <div class="card-body">
            <div class="d-grid gap-3">
              <div class="d-flex align-items-center justify-content-between" v-for="item in details" :key="item.id">
                <div>{{ item.var }}:</div>
                <div class="d-flex align-items-center gap-2">
                  <div class="fw-bold text-end">{{ item.value }}</div>
                  <button class="btn btn-link text-primary px-0" v-if="item.copy"><Icon icon="fa-solid:copy" height="18px"/></button>
                </div>
              </div>
              <div class="divider-dots"></div>
              <div class="d-flex align-items-center justify-content-between">
                <div>Total Pembayaran:</div>
                <div class="fw-bold text-end">IDR. 1.000.000</div>
              </div>
              <div class="divider-dots"></div>
              <div class="text-secondary"><small>Silakan gunakan Kode Pembayaran dalam waktu 24 jam. Instruksi dapat ditemukan pada tautan di bawah ini dan pada email yang kami kirimkan kepada Anda.</small></div>
              <div>
                <button class="btn btn-outline-primary btn-lg px-lg-5 rounded d-flex align-items-center mx-auto gap-2 mb-3" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                  <Icon icon="maki:information" height="24px"/>
                  Panduan Pembayaran
                </button>
                <div class="collapse" id="collapseExample">
                  <div class="card rounded">
                    <div class="card-body">
                      <p><b>Step 1:</b><br>
                      Kunjungi link <nuxt-link to="">https://www.codegame.com/mobile-legends</nuxt-link> , Pilih tipe denominasi yang diinginkan.</p>

                      <p><b>Step 2:</b><br>
                      Masukkan User ID Kamu, (User ID Bisa dilihat di Profil Karakter di dalam game anda).</p>

                      <p><b>Step 3:</b><br>
                      Pilih Denominasi yang diinginkan.</p>

                      <p><b>Step 4:</b><br>
                      Pilih Virtual Account Transfer -> BCA (Minimum Transaction 50.000 IDR)</p>

                      <p><b>Step 5:</b><br>
                      Input e-mail kamu, tekan enter.</p>

                      <p><b>Step 6:</b><br>
                      Kamu akan terima Nomor Transaksi and Kode Payment. Pergi ke ATM Terdekat untuk menyelesaikan transaksi kamu.</p>

                      <p><b>Step 7:</b><br>
                      Transaksi kamu telah selesai.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <button class="btn btn-primary btn-lg w-100 rounded">Keluar</button>
              </div>
              <div class="text-secondary text-center"><small>Halaman pop up aman untuk ditutup sekarang</small></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Icon } from '@iconify/vue2';
export default {

  name: 'payments',

  layout: 'pages',

  components: {
    Icon
  },

  data () {
    return {
      details: [
        {
          id: 1,
          var: 'Item',
          value: '40 Diamonds + 4 Bonus'
        },
        {
          id: 2,
          var: 'Nama Pengguna',
          value: 'Hunter666'
        },
        {
          id: 3,
          var: 'Player Id',
          value: '690048783'
        },
        {
          id: 4,
          var: 'Id Transaksi',
          value: '12345-678910-111213-1415',
          copy: true,
        },
        {
          id: 5,
          var: 'Kode Pembayaran',
          value: '3909600153313231',
          copy: true,
        },
      ],
    }
  }
}
</script>

<style lang="css" scoped>
</style>