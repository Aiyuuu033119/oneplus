<template>
  <section class="pt-0 pt-lg-4">
    <div class="container">
      <div class="row">
        <div class="col-12 col-lg-4">
          <ProductDetails />
        </div>
        <div class="col-12 col-lg-8 content-wrap">
          <div class="d-grid gap-3">
            <div class="card border-0 rounded">
              <div class="card-header">
                <div class="d-flex align-items-center gap-3">
                  <div class="ratio ratio-1x1 avatar avatar-sm bg-primary rounded-pill">1</div>
                  <h5 class="card-subtitle m-0 text-primary">Masukan ID Pengguna {{titleProduk}}</h5>
                </div>
              </div>
              <div class="card-body pt-0">
                <form>
                  <div class="d-flex align-items-center mb-3 gap-2">
                    <input type="text" class="form-control form-control-lg rounded w-50" id="playerInput" placeholder="Player ID">
                    <input type="text" class="form-control form-control-lg rounded w-50" id="zoneInput" placeholder="Zone">
                    <div class="dropdown">
                      <button class="btn btn-primary px-2 rounded-pill" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"><Icon icon="ion:help-outline" height="24px"/></button>
                      <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton1">
                        <div class="ratio ratio-21x9"><img src="/img/image-1.png" class="object-cover"></div>
                      </ul>
                    </div>
                  </div>
                  <div class="text-secondary"><small>Untuk mengetahui User ID Anda, silakan klik menu profile dibagian kiri atas pada menu utama game. User ID akan terlihat dibagian bawah Nama Karakter Game Anda. Silakan masukkan User ID Anda untuk menyelesaikan transaksi. Contoh : 12345678(1234).</small></div>
                </form>
              </div>
            </div>
            <div class="card border-0 rounded">
              <div class="card-header">
                <div class="d-flex align-items-center gap-3">
                  <div class="ratio ratio-1x1 avatar avatar-sm bg-primary rounded-pill">2</div>
                  <h5 class="card-subtitle m-0 text-primary">Pilih Nominal</h5>
                </div>
              </div>
              <div class="card-body pt-0">
                <form>
                  <div class="plan">
                    <div class="plan-item" v-for="item in nominal" :key="item.id">
                      <input type="radio" class="product-id" :data-harga="item.harga" name="radio1" :id="item.id" :value="item.id">
                      <label class="free-label four col" :for="item.id" :data-id="item.id" :data-nama="item.nama" :data-harga="item.harga">{{ item.nama }}</label>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div class="card border-0 rounded">
              <div class="card-header">
                <div class="d-flex align-items-center gap-3">
                  <div class="ratio ratio-1x1 avatar avatar-sm bg-primary rounded-pill">3</div>
                  <h5 class="card-subtitle m-0 text-primary">Pilih Metode Pembayaran</h5>
                </div>
              </div>
              <div class="card-body pt-0">
                <div class="accordion accordion-flush" id="accordionFlushExample">

                  <div class="accordion-item shadow-sm rounded mb-3 overflow-hidden">
                    <h2 class="accordion-header text-primary" id="flush-headingOne">
                      <button class="accordion-button collapsed bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                        <div class="d-grid w-100 position-relative">
                          <div class="d-flex align-items-center justify-content-between p-3">
                            <div class="d-flex align-items-center gap-2">
                              <Icon icon="clarity:bank-solid" height="24px" class="text-danger"/>
                              <h5 class="card-subtitle m-0 text-primary">Transfer Bank</h5>
                            </div>
                            <h5 class="card-subtitle m-0 text-primary text-danger text-end priceProd">IDR. 0</h5>
                          </div>
                          <div class="d-flex flex-wrap align-items-center gap-4 p-3 py-4 bg-gray logo-bank">
                            <img src="https://i.ibb.co/QrKMWY1/Asset-34.png" height="16px">
                            <img src="https://i.ibb.co/4J67NZh/Asset-37.png" height="16px">
                            <img src="https://i.ibb.co/Wx77Kzf/Asset-6.png" height="16px">
                            <img src="/img/methods/bank-cimb.svg" height="16px">
                          </div>
                        </div>
                      </button>
                    </h2>
                    <div id="flush-collapseOne" class="accordion-collapse bg-gray collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                      <div class="accordion-body">
                        <div class="row">
                          <div class="col-12 col-lg-6 mb-3">
                            <button type="button" class="konfirmTod btn-p border-0 bg-transparent w-100" data-id="0" @click="checkout('FPMANDIRI')">
                              <div class="card border-0 rounded shadow-sm">
                                <div class="card-header border-bottom">
                                  <div class="d-flex align-items-center justify-content-between">
                                    <img src="https://i.ibb.co/Wx77Kzf/Asset-6.png" height="32px" width="80px">
                                    <h5 class="card-subtitle m-0 text-primary text-danger priceProd">0</h5>
                                  </div>
                                </div>
                                <div class="card-body">
                                  <div class="text-dark">Bank Mandiri</div>
                                </div>
                              </div>
                            </button>
                          </div> <!-- col -->
                          <div class="col-12 col-lg-6 mb-3">
                            <button type="button" class="konfirmTod btn-p border-0 bg-transparent w-100" data-id="0" @click="checkout('FPDANAMON')">
                              <div class="card border-0 rounded shadow-sm">
                                <div class="card-header border-bottom">
                                  <div class="d-flex align-items-center justify-content-between">
                                    <img src="https://i.ibb.co/4J67NZh/Asset-37.png" height="32px" width="80px">
                                    <h5 class="card-subtitle m-0 text-primary text-danger priceProd">0</h5>
                                  </div>
                                </div>
                                <div class="card-body">
                                  <div class="text-dark">Bank Danamon</div>
                                </div>
                              </div>
                            </button>
                          </div> <!-- col -->
                          <div class="col-12 col-lg-6 mb-3">
                            <button type="button" class="konfirmTod btn-p border-0 bg-transparent w-100" data-id="0" @click="checkout('FPBNI')">
                              <div class="card border-0 rounded shadow-sm">
                                <div class="card-header border-bottom">
                                  <div class="d-flex align-items-center justify-content-between">
                                    <img src="/img/methods/bank-bni.svg" height="32px" width="80px">
                                    <h5 class="card-subtitle m-0 text-primary text-danger priceProd">0</h5>
                                  </div>
                                </div>
                                <div class="card-body">
                                  <div class="text-dark">Bank BNI</div>
                                </div>
                              </div>
                            </button>
                          </div> <!-- col -->
                          <div class="col-12 col-lg-6 mb-3">
                            <button type="button" class="konfirmTod btn-p border-0 bg-transparent w-100" data-id="0" @click="checkout('FPMAYBANK')">
                              <div class="card border-0 rounded shadow-sm">
                                <div class="card-header border-bottom">
                                  <div class="d-flex align-items-center justify-content-between">
                                    <img src="https://i.ibb.co/BnPMfFT/Asset-21.png" height="32px" width="80px">
                                    <h5 class="card-subtitle m-0 text-primary text-danger priceProd">0</h5>
                                  </div>
                                </div>
                                <div class="card-body">
                                  <div class="text-dark">Bank Maybank</div>
                                </div>
                              </div>
                            </button>
                          </div> <!-- col -->
                          <div class="col-12 col-lg-6 mb-3">
                            <button type="button" class="konfirmTod btn-p border-0 bg-transparent w-100" data-id="0" @click="checkout('FPCIMB')">
                              <div class="card border-0 rounded shadow-sm">
                                <div class="card-header border-bottom">
                                  <div class="d-flex align-items-center justify-content-between">
                                    <img src="/img/methods/bank-cimb.svg" height="32px" width="80px">
                                    <h5 class="card-subtitle m-0 text-primary text-danger priceProd">0</h5>
                                  </div>
                                </div>
                                <div class="card-body">
                                  <div class="text-dark">Bank CIMB</div>
                                </div>
                              </div>
                            </button>
                          </div> <!-- col -->
                          <div class="col-12 col-lg-6 mb-3">
                            <button type="button" class="konfirmTod btn-p border-0 bg-transparent w-100" data-id="0" @click="checkout('FPPERMATA')">
                              <div class="card border-0 rounded shadow-sm">
                                <div class="card-header border-bottom">
                                  <div class="d-flex align-items-center justify-content-between">
                                    <img src="https://i.ibb.co/tJSsvYy/Asset-39.png" height="32px" width="80px">
                                    <h5 class="card-subtitle m-0 text-primary text-danger priceProd">0</h5>
                                  </div>
                                </div>
                                <div class="card-body">
                                  <div class="text-dark">Bank Permata</div>
                                </div>
                              </div>
                            </button>
                          </div> <!-- col -->
                        </div>
                      </div>
                    </div>
                  </div><!-- item -->

                  <div class="accordion-item shadow-sm rounded mb-3 overflow-hidden">
                    <h2 class="accordion-header text-primary" id="flush-headingTwo">
                      <button class="accordion-button collapsed bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                        <div class="d-grid w-100 position-relative">
                          <div class="d-flex align-items-center justify-content-between p-3">
                            <div class="d-flex align-items-center gap-2">
                              <Icon icon="bx:bxs-wallet" height="24px" class="text-danger"/>
                              <h5 class="card-subtitle m-0 text-primary">E-Money</h5>
                            </div>
                            <h5 class="card-subtitle m-0 text-primary text-danger text-end priceProd">IDR. 0</h5>
                          </div>
                          <div class="d-flex flex-wrap align-items-center gap-4 p-3 py-4 bg-gray logo-bank">
                            <img src="/img/methods/gopay.svg" height="16px" style="display:none">
                            <img src="/img/methods/ovo.svg" height="16px" style="display:none">
                            <img src="/img/methods/shopeepay.svg" height="16px" style="display:none">
                            <img src="/img/methods/dana.svg" height="16px" style="display:none">
                            <img src="https://i.ibb.co/C1sHN5n/iconQris.png" height="16px">
                          </div>
                        </div>
                      </button>
                    </h2>
                    <div id="flush-collapseTwo" class="accordion-collapse bg-gray collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                      <div class="accordion-body">
                        <div class="row">
                          <div class="col-12 col-lg-6 mb-3">
                            <button type="konfirmTod button" class="btn-p border-0 bg-transparent w-100" data-id="0" @click="checkout('PAYQRIS')">
                              <div class="card border-0 rounded shadow-sm">
                                <div class="card-header border-bottom">
                                  <div class="d-flex align-items-center justify-content-between">
                                    <img src="https://i.ibb.co/C1sHN5n/iconQris.png" height="32px" width="80px">
                                    <h5 class="card-subtitle m-0 text-primary text-danger priceProd">0</h5>
                                  </div>
                                </div>
                                <div class="card-body">
                                  <div class="text-dark">QRIS</div>
                                </div>
                              </div>
                            </button>
                          </div> <!-- col -->

                        </div>
                      </div>
                    </div>
                  </div><!-- item -->





                </div><!-- end accordion -->

                <div class="d-none justify-content-center w-100">
                  <button class="btn btn-primary btn-lg px-lg-5 rounded d-flex align-items-center gap-2" data-bs-toggle="modal" data-bs-target="#modalDefault" @click="howTo">
                    <Icon icon="maki:information" height="24px"/>
                    Panduan Pembayaran
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <modal-default v-if="modalCheckout" @close="modalClosed">
      <template slot="modal-title">Detail Pembelian</template>
      <template slot="modal-close">&nbsp;</template>
      <template slot="modal-content">
        <div class="mb-3">Mohon konfirmasi nama pengguna  anda sudah benar.</div>
        <div class="d-grid gap-3">
          <div class="d-flex align-items-center justify-content-between" v-for="item in details" :key="item.id">
            <div>{{ item.var }}:</div>
            <div class="fw-bold text-end">{{ item.value }}</div>
          </div>
          <div class="d-flex align-items-center justify-content-between">
            <div>Bayar dengan:</div>
            <img id="imgPay" width="100" src="/img/methods/dana.svg">
          </div>
          <div class="divider-dots"></div>
          <div class="d-flex align-items-center justify-content-between">
            <div>Total Pembayaran:</div>
            <div class="fw-bold text-end" id="totalpre">IDR. 0</div>
          </div>
          <div class="divider-dots"></div>
          <h5 class="m-0 text-primary">Info Billing</h5>
          <form>
            <div class="mb-3">
              <input type="text" v-model="emailCust" class="form-control form-control-lg rounded" id="emailInput" placeholder="Masukkan alamat Email">
              <input type="hidden" id="customer_id" value="0" />
              <input type="hidden" id="customer_name" value="" />
              <input type="hidden" id="customer_phone" value="" />
              <small>Masukan alamat email untuk mendapatkan bukti pembayaran</small>
            </div>
            <div class="mb-3">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                <label class="form-check-label" for="flexCheckDefault">
                  Ingat Saya
                </label>
              </div>
            </div>
          </form>
        </div>
      </template>
      <template slot="modal-cta">
        <div class="row w-100">
          <div class="col-12 col-lg-6">
            <button class="btn btn-link btn-lg text-dark rounded px-5 w-100" @click="modalClosed">Batalkan</button>
          </div>
          <div class="col-12 col-lg-6">
            <button class="btn btn-primary btn-lg rounded px-5 w-100" @click="summary">Konfirmasi</button>
          </div>
        </div>


        <div class="text-center text-secondary"><small>Dengan klik "Konfirmasi", berarti Anda setuju dengan <nuxt-link to="">Syarat dan Ketentuan Pengguna.</nuxt-link></small></div>
        <div class="d-flex align-items-center gap-2">
          <Icon icon="bi:shield-fill-check" height="18px" style="color: #27AE60;"/>
          <small>PAYMENT SECURED</small>
        </div>
      </template>
    </modal-default>

    <modal-default v-if="modalHowTo" @close="modalClosed">
      <template slot="modal-title">Panduan Pembayaran</template>
      <template slot="modal-content">
        <ul class="nav nav-pills gap-2 mb-3 howto" id="pills-tab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active rounded" id="pills-1-tab" data-bs-toggle="pill" data-bs-target="#pills-1" type="button" role="tab" aria-controls="pills-1" aria-selected="true"><img src="/img/methods/bank-bca.svg" height="36px"></button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link rounded" id="pills-2-tab" data-bs-toggle="pill" data-bs-target="#pills-2" type="button" role="tab" aria-controls="pills-2" aria-selected="false"><img src="/img/methods/bank-bni.svg" height="36px"></button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link rounded" id="pills-3-tab" data-bs-toggle="pill" data-bs-target="#pills-3" type="button" role="tab" aria-controls="pills-3" aria-selected="false"><img src="/img/methods/bank-bri.svg" height="36px"></button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link rounded" id="pills-4-tab" data-bs-toggle="pill" data-bs-target="#pills-4" type="button" role="tab" aria-controls="pills-4" aria-selected="true"><img src="/img/methods/bank-btpn.svg" height="36px"></button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link rounded" id="pills-5-tab" data-bs-toggle="pill" data-bs-target="#pills-5" type="button" role="tab" aria-controls="pills-5" aria-selected="false"><img src="/img/methods/bank-cimb.svg" height="36px"></button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link rounded" id="pills-6-tab" data-bs-toggle="pill" data-bs-target="#pills-6" type="button" role="tab" aria-controls="pills-6" aria-selected="false"><img src="/img/methods/gopay.svg" height="36px"></button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link rounded" id="pills-7-tab" data-bs-toggle="pill" data-bs-target="#pills-7" type="button" role="tab" aria-controls="pills-7" aria-selected="true"><img src="/img/methods/ovo.svg" height="36px"></button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link rounded" id="pills-8-tab" data-bs-toggle="pill" data-bs-target="#pills-8" type="button" role="tab" aria-controls="pills-8" aria-selected="false"><img src="/img/methods/shopeepay.svg" height="36px"></button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link rounded" id="pills-9-tab" data-bs-toggle="pill" data-bs-target="#pills-9" type="button" role="tab" aria-controls="pills-9" aria-selected="false"><img src="/img/methods/dana.svg" height="36px"></button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link rounded" id="pills-10-tab" data-bs-toggle="pill" data-bs-target="#pills-10" type="button" role="tab" aria-controls="pills-10" aria-selected="true"><img src="/img/methods/linkaja.svg" height="36px"></button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link rounded" id="pills-11-tab" data-bs-toggle="pill" data-bs-target="#pills-11" type="button" role="tab" aria-controls="pills-11" aria-selected="false"><img src="/img/methods/indomaret.svg" height="36px"></button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link rounded" id="pills-12-tab" data-bs-toggle="pill" data-bs-target="#pills-12" type="button" role="tab" aria-controls="pills-12" aria-selected="false"><img src="/img/methods/alfamart.svg" height="36px"></button>
          </li>
        </ul>
        <div class="tab-content" id="pills-tabContent">
          <div class="tab-pane fade show active" id="pills-1" role="tabpanel" aria-labelledby="pills-1-tab">
            <h5 class="text-primary">BCA Virtual Account</h5>
            <div>
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
          <div class="tab-pane fade" id="pills-2" role="tabpanel" aria-labelledby="pills-2-tab">BNI Virtual Account</div>
          <div class="tab-pane fade" id="pills-3" role="tabpanel" aria-labelledby="pills-3-tab">BRI Virtual Account</div>
          <div class="tab-pane fade" id="pills-4" role="tabpanel" aria-labelledby="pills-4-tab">BTPN Virtual Account</div>
          <div class="tab-pane fade" id="pills-5" role="tabpanel" aria-labelledby="pills-5-tab">CIMB Niaga Virtual Account</div>
          <div class="tab-pane fade" id="pills-6" role="tabpanel" aria-labelledby="pills-6-tab">Gopay</div>
          <div class="tab-pane fade" id="pills-7" role="tabpanel" aria-labelledby="pills-7-tab">OVO</div>
          <div class="tab-pane fade" id="pills-8" role="tabpanel" aria-labelledby="pills-8-tab">ShopeePay</div>
          <div class="tab-pane fade" id="pills-9" role="tabpanel" aria-labelledby="pills-9-tab">DANA</div>
          <div class="tab-pane fade" id="pills-10" role="tabpanel" aria-labelledby="pills-10-tab">LinkAja</div>
          <div class="tab-pane fade" id="pills-11" role="tabpanel" aria-labelledby="pills-511tab">Indomaret</div>
          <div class="tab-pane fade" id="pills-12" role="tabpanel" aria-labelledby="pills-6-12ab">Alfamart</div>
        </div>
      </template>
    </modal-default>

  </section>
</template>

<script>
import { Icon } from '@iconify/vue2';
import ModalDefault from '~/components/ModalDefault.vue';
import ProductDetails from '~/components/ProductDetails.vue';

var idProduk = 0;

export default {

  name: 'single-post',

  components: {
    Icon,
    ProductDetails
  },

  data () {
    return {
      titleProduk : '',
      emailCust : '',
      payCode : 'PAYQRIS',
      hargaProduk : 0,
      detail_prod : {
        id : 1,
        nama : 'ff',
        foto : '/img/games/Garena-Free-Fire.jpeg',
        harga : 10000
      },
      fotoProduk : '',
      modalHowTo: false,
      modalCheckout: false,
      details: [
        {
          id: 1,
          var: 'Item',
          value: '40 Diamonds + 4 Bonus'
        },
        {
          id: 2,
          var: 'ID Pengguna',
          value: '690048783'
        },
        {
          id: 3,
          var: 'Harga',
          value: 'IDR. 0'
        },
        {
          id: 4,
          var: 'Tax (Ppn 10%)',
          value: 'IDR. 10.000'
        },
      ],
      nominal: [
        {
          id: 1,
          nama: '5 Diamonds',
          harga : 0
        },
        {
          id: 2,
          nama: '11 Diamonds + 1 Bonus ',
          harga : 0
        },
        {
          id: 3,
          nama: '17 Diamonds + 2 Bonus',
          harga : 0
        },
        {
          id: 4,
          nama: '22 Diamonds + 3 Bonus',
          harga : 0
        },
        {
          id: 5,
          nama: '27 Diamonds + 4 Bonus',
          harga : 0
        },
        {
          id: 6,
          nama: '34 Diamonds + 5 Bonus',
          harga : 0
        },
        {
          id: 7,
          nama: '40 Diamonds + 6 Bonus',
          harga : 0
        },
        {
          id: 8,
          nama: '46 Diamonds + 7 Bonus',
          harga : 0
        },
      ],
    }
  },

  created(){
      var vuedis = this;
      var pid = this.$route.params.id;

      if (localStorage.getItem('c4Prt7')===null){

      }else{
          var datapartis = localStorage.getItem('c4Prt7');
          var craid = JSON.parse(datapartis);
          var iduser = craid.usrid;
          vuedis.username = craid.nama;
          this.$axios.get('/mobileapi/getProfile/'+iduser).then((result) => {
                vuedis.emailCust = result.data.email;
          });
      }
      this.$axios.get(process.env.apiUrl+'/mobileapi/kategorisingle/'+pid).then((result) => {
            this.fotoProduk = result.data.foto;
            this.titleProduk = result.data.nama;
            $("#imageProd").attr('src', this.fotoProduk);
            $("#descProd").html(result.data.deskripsi);
            $("#playerInput").attr("placeholder", "ID "+result.data.nama);
            if(result.data.zone_usage == 1){
              $("#zoneInput").css("display", "");
            }else{
              $("#zoneInput").remove();
            }
            this.nominal = result.data.produk;

      });
  },

  mounted() {
    $(document).on("click", ".free-label", function(){
        var hargaz = $(this).data("harga");
        var prdid = $(this).data("id");
        idProduk = prdid;
        hargaz = hargaz.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
        $(".priceProd").html("IDR. "+hargaz);
        $(".konfirmTod").attr("data-id", prdid);
    });




    $(".expand-toggle").click(function (e) {
      e.preventDefault();

      var $this = $(this);
      var expandHeight = $this.prev().find(".inner-bit").height();

      if ($this.prev().hasClass("expanded")) {
        $this.prev().removeClass("expanded");
        $this.prev().attr("style", "");
        $this.html("Tampilkan semua");
      } else {
        $this.prev().addClass("expanded");
        $this.prev().css("max-height", expandHeight);
        $this.html("Tutup");
      }
    });
  },

  methods: {
    howTo() {
      this.modalClosed()
      this.modalHowTo = true
      setTimeout(() => $('#modalDefault').modal('show'), 100)
    },
    checkout(codePay='') {
      var playerInputs = $("#playerInput").val();
      if(playerInputs.length){
          this.modalClosed();
          this.modalCheckout = true;
          this.payCode = codePay;
          this.$axios.get(process.env.apiUrl+'/mobileapi/produksingle?pid='+idProduk).then((result) => {
                console.log(result.data);
                var logo_pay = "/img/methods/dana.svg";
                switch(codePay){
                  case 'FPMANDIRI' : logo_pay = "https://i.ibb.co/Wx77Kzf/Asset-6.png";break;
                  case 'FPDANAMON' : logo_pay = "https://i.ibb.co/4J67NZh/Asset-37.png";break;
                  case 'FPCIMB' : logo_pay = "/img/methods/bank-cimb.svg";break;
                  case 'FPPERMATA' : logo_pay = "https://i.ibb.co/tJSsvYy/Asset-39.png";break;
                  case 'FPBNI' : logo_pay = "/img/methods/bank-bni.svg";break;
                  case 'FPSMAS' : logo_pay = "/img/methods/bank-bni.svg";break;
                  case 'PAYQRIS' : logo_pay = "https://i.ibb.co/C1sHN5n/iconQris.png";break;
                  default : logo_pay = "/img/methods/dana.svg";break;
                }
                var realprice = parseFloat(result.data.price);
                var ppn = realprice * (0.1);
                var totalprice = realprice + ppn;

                var sdetails = [
                    {
                      id: 1,
                      var: 'Item',
                      value: result.data.nama
                    },
                    {
                      id: 2,
                      var: 'ID Pengguna',
                      value: playerInputs
                    },
                    {
                      id: 3,
                      var: 'Harga',
                      value: 'IDR. '+realprice.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
                    },
                    {
                      id: 4,
                      var: 'Tax (Ppn 10%)',
                      value: 'IDR. '+ppn.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
                    },
                ];
                this.details = sdetails;
                $("#imgPay").attr("src", logo_pay);
                $("#totalpre").html('IDR. '+totalprice.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.'));
          });
          setTimeout(() => $('#modalDefault').modal('show'), 100)
      }else{
          alert("id pengguna dibutuhkan untuk pembelian");
      }
    },
    summary() {
      var cust_id = $('#customer_id').val();
      var playerInputs = $("#playerInput").val();
      var customer_email = this.emailCust;
      var customer_name = $("#customer_name").val();
      var customer_phone = $("#customer_phone").val();
      var codePay = this.payCode;
      var pid = idProduk;
      var data_check = {
         idproduk : pid,
         cust_number : playerInputs,
         method : codePay,
         customer_id : cust_id,
         customer_name : customer_name,
         customer_email : customer_email,
         customer_phone : customer_phone,
      };
      this.$axios.post(process.env.apiUrl+'/mobileapi/pay_checkout', data_check).then((result)=>{
            if(!result.data.success){
                alert("GAGAL, "+result.data.message);
            }else{
                if(result.data.hasOwnProperty('redirect_url') && result.data.redirect_url != ''){
                  this.$router.push(result.data.redirect_url);
                  $('#modalDefault').modal('hide');
                  setTimeout(() => this.modalCheckout = false, 100);
                }
            }
      });
      $('#modalDefault').modal('hide')
      setTimeout(() => this.modalCheckout = false, 100)
    },
    modalClosed() {
      $('#modalDefault').modal('hide')
    }
  },
}
</script>

<style lang="scss" scoped>
  .accordion-button[aria-expanded="true"] {
    .logo-bank{
      img{
        opacity: 0;
        transition: all .2s ease;
      }
    }
  }
  .content-wrap{
    .card{
      .dropdown-menu{
        min-width: 500px;
      }
    }
  }

  .howto.nav-pills {
    .nav-item{
      flex: 1 1 auto!important;

      .nav-link {
        border: 1px solid #8D99AE;
        width: 100%;
      }
      .nav-link.active {
        color: #fff;
        background-color: #ffffff;
        border: 1px solid #FF5A5F;
      }
    }
  }

  @media only screen and (max-width: 767px){
    .featured-img{
      padding: 0;

      img{
        border-radius: 0!important;
      }

      .expander, .expand-toggle{
        padding: 0 15px;
      }
    }
    .content-wrap{
      padding: 0;

      .card{
        border-radius: 0!important;

        .dropdown-menu{
          min-width: 100vw;
        }
      }
    }
  }
</style>
