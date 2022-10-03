<template>
  <main>
    <section class="container">
      <div class="row">
        <div class="col-lg-8 offset-lg-2">
          <div class="gameInfo">
            <div class="gameImg">
              <img
                src="https://vogame.id/cdn/kategori/cat_20220801121105.jpg"
                alt="Games 1"
              />
            </div>
            <div class="gameTitle">
              <h3 class="text-primary">{{getRoute()}}</h3>
              <p>Game</p>
            </div>
          </div>
          <div class="expander">
            <div class="inner-bit"></div>
          </div>
          <button class="btn btn-link expand-toggle" href="javascript:void(0)">
            Tampilkan semua
          </button>
        </div>

        <div class="col-lg-8 offset-lg-2">
          <div class="gameVoucher">
            <div class="card shadow-1">
              <div class="payment-desc-container">
                <i class="fas fa-info-circle text-warning"></i>
                <p class="m-0">
                  Top up Mobile Legend! Cukup dengan memasukkan ID otomatis
                  dikirim tanpa perlu redeem kode voucher. Solusi Pembayaran
                  untuk iOS dan Android. Di halaman ini kamu dapat top up
                  langsung ke akun kamu.
                </p>
              </div>
              <div class="payment-step-container">
                <form>
                  <div class="form-group m-0">
                    <h6 class="d-block" for="userID">
                      Masukkan ID Pengguna
                      <button
                        type="button"
                        class="btn btn-secondary formTips"
                        data-toggle="tooltip"
                        data-placement="right"
                        title=""
                        data-original-title="Anda dapat menemukannya ID di halaman profil atau di bawah pengaturan."
                      >
                        <i class="fas fa-question"></i>
                      </button>
                    </h6>
                    <input
                      type="text"
                      class="form-control formRounded"
                      id="userID"
                      aria-describedby="userID"
                      placeholder="ID Pengguna"
                    />
                    <small class="form-text text-muted"
                      >Anda bisa mendapatkan ID di bawah username Anda di profil
                      aplikasi anda.</small
                    >
                  </div>
                </form>
              </div>

              <div class="payment-step-container">
                <form class="form">
                  <div class="form-group m-0">
                    <h6 class="d-block" for="selectDenom">Pilih Denominasi</h6>
                    <div class="plan">
                      <div class="plan-item">
                        <input
                          type="radio"
                          name="radio1"
                          data-harga="10500"
                          id="Mobile Legends 33 Diamonds	"
                          value="962"
                        />
                        <label
                          class="free-label four col"
                          for="Mobile Legends 33 Diamonds	"
                          >Mobile Legends 33 Diamonds
                        </label>
                      </div>
                      <div class="plan-item">
                        <input
                          type="radio"
                          name="radio1"
                          data-harga="5250"
                          id="Mobile Legends 17 Diamonds"
                          value="963"
                        />
                        <label
                          class="free-label four col"
                          for="Mobile Legends 17 Diamonds"
                          >Mobile Legends 17 Diamonds</label
                        >
                      </div>
                      <div class="plan-item">
                        <input
                          type="radio"
                          name="radio1"
                          data-harga="21000"
                          id="Mobile Legends 67 Diamonds"
                          value="964"
                        />
                        <label
                          class="free-label four col"
                          for="Mobile Legends 67 Diamonds"
                          >Mobile Legends 67 Diamonds</label
                        >
                      </div>
                      <div class="plan-item">
                        <input
                          type="radio"
                          name="radio1"
                          data-harga="3150"
                          id="Mobile Legends 10 Diamonds"
                          value="965"
                        />
                        <label
                          class="free-label four col"
                          for="Mobile Legends 10 Diamonds"
                          >Mobile Legends 10 Diamonds</label
                        >
                      </div>
                      <div class="plan-item">
                        <input
                          type="radio"
                          name="radio1"
                          data-harga="158550"
                          id="Mobile Legends Season Pass (Premiun)"
                          value="966"
                        />
                        <label
                          class="free-label four col"
                          for="Mobile Legends Season Pass (Premiun)"
                          >Mobile Legends Season Pass (Premiun)</label
                        >
                      </div>
                      <div class="plan-item">
                        <input
                          type="radio"
                          name="radio1"
                          data-harga="157500"
                          id="Mobile Legends Twilight Pass"
                          value="967"
                        />
                        <label
                          class="free-label four col"
                          for="Mobile Legends Twilight Pass"
                          >Mobile Legends Twilight Pass</label
                        >
                      </div>
                      <div class="plan-item">
                        <input
                          type="radio"
                          name="radio1"
                          data-harga="514500"
                          id="Mobile Legends Starlight Seasonal Member"
                          value="968"
                        />
                        <label
                          class="free-label four col"
                          for="Mobile Legends Starlight Seasonal Member"
                          >Mobile Legends Starlight Seasonal Member</label
                        >
                      </div>
                      <div class="plan-item">
                        <input
                          type="radio"
                          name="radio1"
                          data-harga="156450"
                          id="Mobile Legends Starlight Member"
                          value="969"
                        />
                        <label
                          class="free-label four col"
                          for="Mobile Legends Starlight Member"
                          >Mobile Legends Starlight Member</label
                        >
                      </div>
                      <div class="plan-item">
                        <input
                          type="radio"
                          name="radio1"
                          data-harga="1050000"
                          id="Mobile Legends 3383 Diamonds"
                          value="970"
                        />
                        <label
                          class="free-label four col"
                          for="Mobile Legends 3383 Diamonds"
                          >Mobile Legends 3383 Diamonds</label
                        >
                      </div>
                      <div class="plan-item">
                        <input
                          type="radio"
                          name="radio1"
                          data-harga="525000"
                          id="Mobile Legends 1708 Diamonds"
                          value="971"
                        />
                        <label
                          class="free-label four col"
                          for="Mobile Legends 1708 Diamonds"
                          >Mobile Legends 1708 Diamonds</label
                        >
                      </div>
                      <div class="plan-item">
                        <input
                          type="radio"
                          name="radio1"
                          data-harga="262500"
                          id="Mobile Legends 836 Diamonds"
                          value="972"
                        />
                        <label
                          class="free-label four col"
                          for="Mobile Legends 836 Diamonds"
                          >Mobile Legends 836 Diamonds</label
                        >
                      </div>
                      <div class="plan-item">
                        <input
                          type="radio"
                          name="radio1"
                          data-harga="105000"
                          id="Mobile Legends 333 Diamonds"
                          value="973"
                        />
                        <label
                          class="free-label four col"
                          for="Mobile Legends 333 Diamonds"
                          >Mobile Legends 333 Diamonds</label
                        >
                      </div>
                      <div class="plan-item">
                        <input
                          type="radio"
                          name="radio1"
                          data-harga="63000"
                          id="Mobile Legends 200 Diamonds"
                          value="974"
                        />
                        <label
                          class="free-label four col"
                          for="Mobile Legends 200 Diamonds"
                          >Mobile Legends 200 Diamonds</label
                        >
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div class="payment-step-container">
                <h6 class="d-block" for="totalPrice">Harga</h6>
                <div class="section-price">
                  <h3 id="hargaPilih" class="text-dark my-2 myharga text-primary">
                    Rp. 3.150 - 1.050.000
                  </h3>
                  <a
                    href="javascript:void(0)"
                    title="Bayar"
                    class="btn btn-success btn-lg px-5 btnPayment"
                    >Bayar</a
                  >
                  <input type="hidden" name="idproduk" value="184" />
                  <input type="hidden" id="priceBuy" value="0" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="container">
      <div class="row">
        <div class="col-12">
          <!-- Flash Topup -->
          <div class="flashTopup">
            <div class="section-title-col">
              <h3 class="home-title text-primary">Produk Game Lainnya</h3>
            </div>
            <div class="section-home-col seven-col">
              <div class="cardSize">
                <div class="card">
                  <a
                    href="https://vogame.id/produk/PLAYSTATION-US-REGION-"
                    title="PLAYSTATION (US REGION)"
                  >
                    <div
                      class="card-img-top"
                      style="
                        height: 139px;
                        background: url('https://vogame.id/cdn/kategori/cat_20220619013926.jpg');
                        background-size: cover;
                        background-position: center center;
                      "
                    ></div>
                    <div class="card-body">
                      <h5 class="card-title text-primary" title="PLAYSTATION (US REGION)">
                        PLAYSTATION (US REGION)
                      </h5>
                      <p class="card-text">Game</p>
                    </div>
                  </a>
                </div>
              </div>
              <div class="cardSize">
                <div class="card">
                  <a href="https://vogame.id/produk/Lokapala" title="Lokapala">
                    <div
                      class="card-img-top"
                      style="
                        height: 139px;
                        background: url('https://vogame.id/cdn/kategori/cat_20220617130111.jpeg');
                        background-size: cover;
                        background-position: center center;
                      "
                    ></div>
                    <div class="card-body">
                      <h5 class="card-title text-primary" title="Lokapala">Lokapala</h5>
                      <p class="card-text">Game</p>
                    </div>
                  </a>
                </div>
              </div>
              <div class="cardSize">
                <div class="card">
                  <a
                    href="https://vogame.id/produk/Garena-Shell-New"
                    title="Garena Shell New"
                  >
                    <div
                      class="card-img-top"
                      style="
                        height: 139px;
                        background: url('https://vogame.id/cdn/kategori/cat_20220617111652.jpg');
                        background-size: cover;
                        background-position: center center;
                      "
                    ></div>
                    <div class="card-body">
                      <h5 class="card-title text-primary" title="Garena Shell New">
                        Garena Shell New
                      </h5>
                      <p class="card-text">Game</p>
                    </div>
                  </a>
                </div>
              </div>
              <div class="cardSize">
                <div class="card">
                  <a
                    href="https://vogame.id/produk/PUBG-FOR-PC-STEAM-"
                    title="PUBG FOR PC (STEAM)"
                  >
                    <div
                      class="card-img-top"
                      style="
                        height: 139px;
                        background: url('https://vogame.id/cdn/kategori/cat_20220617153322.jpg');
                        background-size: cover;
                        background-position: center center;
                      "
                    ></div>
                    <div class="card-body">
                      <h5 class="card-title text-primary" title="PUBG FOR PC (STEAM)">
                        PUBG FOR PC (STEAM)
                      </h5>
                      <p class="card-text">Game</p>
                    </div>
                  </a>
                </div>
              </div>
              <div class="cardSize">
                <div class="card">
                  <a
                    href="https://vogame.id/produk/OrangeGame"
                    title="OrangeGame"
                  >
                    <div
                      class="card-img-top"
                      style="
                        height: 139px;
                        background: url('https://vogame.id/cdn/kategori/cat_20220619004243.jpg');
                        background-size: cover;
                        background-position: center center;
                      "
                    ></div>
                    <div class="card-body">
                      <h5 class="card-title text-primary" title="OrangeGame">OrangeGame</h5>
                      <p class="card-text">Game</p>
                    </div>
                  </a>
                </div>
              </div>
              <div class="cardSize">
                <div class="card">
                  <a
                    href="https://vogame.id/produk/Free-Fire-Voucher"
                    title="Free Fire Voucher"
                  >
                    <div
                      class="card-img-top"
                      style="
                        height: 139px;
                        background: url('https://vogame.id/cdn/kategori/cat_20220617111337.jpg');
                        background-size: cover;
                        background-position: center center;
                      "
                    ></div>
                    <div class="card-body">
                      <h5 class="card-title text-primary" title="Free Fire Voucher">
                        Free Fire Voucher
                      </h5>
                      <p class="card-text">Game</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  methods: {
    getRoute() {
    console.log(this._routerRoot._route.params.name);
      return this._routerRoot._route.params.name.replace(/-/g,' ');
    },
  },

};
</script>