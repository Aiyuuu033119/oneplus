<template>
  <main>
    <section class="container-fluid">
      <div class="row">
        <div class="col-12 p-0" :class="slider.length != 0 ? 'true' : 'false'" v-if="slider.length != 0">
          <Carousel v-if="slider.length != 0" v-bind="bannerSlider" class="featuredBanner slick-dotted" :class="slider.length === 0 ? 'd-none' : ''">
            <nuxt-link v-for="(item, key) in slider" :key="item.id" :to="item.url">
                <img :src="'/img/slider/slider-'+(key+1).toString()+'.png'" class="rounded">
            </nuxt-link>
          </Carousel>
          <!-- Featured Banner -->
        </div>
      </div>
    </section>
    <section class="container">
      <div class="row">
        <div class="col-12">
          <!-- Faveourite Games -->
          <div class="favGames">
            <div class="section-title-col sticky-top">
              <h3 class="home-title text-primary">Produk Favourite</h3>
              <ul class="nav justify-content-center" id="myTab" role="tablist">
                <li class="nav-item">
                  <a
                    @click="setActiveProductFavorite(1)"
                    class="btn btn-tab"
                    :class="active_product_favorite === 1 ? 'btn-light bg-white bg-white text-secondary' : ''"
                    id="one-tab"
                    data-toggle="tab"
                    role="tab"
                    aria-controls="one"
                    aria-selected="true"
                    >Paling Populer</a
                  >
                </li>
                <li class="nav-item">
                  <a
                    @click="setActiveProductFavorite(2)"
                    class="btn btn-tab"
                    :class="active_product_favorite === 2 ? 'btn-light bg-white text-secondary' : ''"
                    id="two-tab"
                    data-toggle="tab"
                    role="tab"
                    aria-controls="two"
                    aria-selected="false"
                    >Rilis Baru</a
                  >
                </li>
              </ul>
            </div>

            <div class="tab-content" id="myTabContent">
              <div
                class="tab-pane fade"
                :class="active_product_favorite === 1 ? 'show active' : 'd-none'"
                id="one"
                role="tabpanel"
                aria-labelledby="one-tab"
              >
                <div class="section-home-col three-col">
                  <div class="cardSize">
                    <div class="card">
                      <nuxt-link :to="'/product-details/Call-of-Duty-Mobile'">
                        <div
                          class="imgWrap all-product"
                          :style="'background-image: url(' + './img/games/bggames.png' + ');'"
                        >
                          <div class="card-img-top game-dp" style="background-image: url('./img/kategori/cat_20220617110224.jpg');"></div>
                          <div class="card-body">
                            <h5 class="card-title text-white" title="Free Fire">
                              Call of Duty Mobile
                            </h5>
                          </div>
                        </div>
                        <div class="textWrap">
                          <p class="text-center">Harga mulai dari</p>
                          <a class="btn btn-light bg-white border-2 products-btn">
                            RP 22.201
                          </a>
                        </div>
                      </nuxt-link>
                    </div>
                  </div>
                  <div class="cardSize">
                    <div class="card">
                      <nuxt-link :to="'/product-details/Mobile-Legend'">
                        <div
                          class="imgWrap all-product"
                          :style="'background-image: url(' + './img/games/bggames.png' + ');'"
                        >
                          <div class="card-img-top game-dp" style="background-image: url('./img/kategori/cat_20220801121105.jpg');"></div>
                          <div class="card-body">
                            <h5 class="card-title text-white" title="Free Fire">
                              Mobile Legend
                            </h5>
                          </div>
                        </div>
                        <div class="textWrap">
                          <p class="text-center">Harga mulai dari</p>
                          <a class="btn btn-light bg-white border-2 products-btn">
                            RP 3.150
                          </a>
                        </div>
                      </nuxt-link>
                    </div>
                  </div>
                </div>
                 
                <!-- <div class="section-home-col three-col" v-if="popular != null && popular.length > 0">
                  <div class="cardSize" v-for="item in popular" :key="item.id">
                    <div class="card">
                      <nuxt-link :to="'/product-details/'+ item.url">
                        <div
                          class="imgWrap all-product"
                          :style="'background-image: url(' + 'https://vogame.id/assets/img/games/bggames.png' + ');'"
                        >
                          <div class="card-img-top game-dp" style="background-image: url(https://vogame.id/cdn/kategori/cat_20220617110224.jpg);"></div>
                          <div class="card-body">
                            <h5 class="card-title text-white" title="Free Fire">
                              {{ item.nama }}
                            </h5>
                          </div>
                        </div>
                        <div class="textWrap">
                          <p class="text-center">Harga mulai dari</p>
                          <a class="btn btn-light bg-white border-2 products-btn">
                            RP 22.201
                          </a>
                        </div>
                      </nuxt-link>
                    </div>
                  </div>
                </div>
                <div class="section-home-col three-col" v-else>
                  Produk tidak ada -->
                </div>
              </div>
              <div
                class="tab-pane fade"
                :class="active_product_favorite === 2 ? 'show active' : 'd-none'"
                id="two"
                role="tabpanel"
                aria-labelledby="two-tab"
              >
                <div class="section-home-col three-col">
                  <div class="cardSize">
                    <div class="card">
                      <nuxt-link :to="'/product-details/Mobile-Legend'">
                        <div
                          class="imgWrap all-product"
                          :style="'background-image: url(' + './img/games/bggames.png' + ');'"
                        >
                          <div class="card-img-top game-dp" style="background-image: url('./img/kategori/cat_20220801121105.jpg');"></div>
                          <div class="card-body">
                            <h5 class="card-title text-white" title="Free Fire">
                              Mobile Legend
                            </h5>
                          </div>
                        </div>
                        <div class="textWrap">
                          <p class="text-center">Harga mulai dari</p>
                          <a class="btn btn-light bg-white border-2 products-btn">
                            RP 3.150
                          </a>
                        </div>
                      </nuxt-link>
                    </div>
                  </div>
                  <div class="cardSize">
                    <div class="card">
                      <nuxt-link :to="'/product-details/GoRide'">
                        <div
                          class="imgWrap all-product"
                          :style="'background-image: url(' + './img/games/bggames.png' + ');'"
                        >
                          <div class="card-img-top game-dp" style="background-image: url('./img/kategori/cat_20220622153352.jpg');"></div>
                          <div class="card-body">
                            <h5 class="card-title text-white" title="Free Fire">
                              GoRide
                            </h5>
                          </div>
                        </div>
                        <div class="textWrap">
                          <p class="text-center">Harga mulai dari</p>
                          <a class="btn btn-light bg-white border-2 products-btn">
                            RP 10.000
                          </a>
                        </div>
                      </nuxt-link>
                    </div>
                  </div>
                  <div class="cardSize">
                    <div class="card">
                      <nuxt-link :to="'/product-details/GoCar'">
                        <div
                          class="imgWrap all-product"
                          :style="'background-image: url(' + './img/games/bggames.png' + ');'"
                        >
                          <div class="card-img-top game-dp" style="background-image: url('./img/kategori/cat_20220622152228.jpg');"></div>
                          <div class="card-body">
                            <h5 class="card-title text-white" title="Free Fire">
                              GoCar
                            </h5>
                          </div>
                        </div>
                        <div class="textWrap">
                          <p class="text-center">Harga mulai dari</p>
                          <a class="btn btn-light bg-white border-2 products-btn">
                            RP 25.000
                          </a>
                        </div>
                      </nuxt-link>
                    </div>
                  </div>
                  <div class="cardSize">
                    <div class="card">
                      <nuxt-link :to="'/product-details/Diva-Karaoke-Express'">
                        <div
                          class="imgWrap all-product"
                          :style="'background-image: url(' + './img/games/bggames.png' + ');'"
                        >
                          <div class="card-img-top game-dp" style="background-image: url('./img/kategori/cat_20220622151232.jpg');"></div>
                          <div class="card-body">
                            <h5 class="card-title text-white" title="Free Fire">
                              Diva Karaoke Express
                            </h5>
                          </div>
                        </div>
                        <div class="textWrap">
                          <p class="text-center">Harga mulai dari</p>
                          <a class="btn btn-light bg-white border-2 products-btn">
                            RP 90.000
                          </a>
                        </div>
                      </nuxt-link>
                    </div>
                  </div>
                  <div class="cardSize">
                    <div class="card">
                      <nuxt-link :to="'/product-details/Skype-Credit'">
                        <div
                          class="imgWrap all-product"
                          :style="'background-image: url(' + './img/games/bggames.png' + ');'"
                        >
                          <div class="card-img-top game-dp" style="background-image: url('./img/kategori/cat_20220622140900.jpg');"></div>
                          <div class="card-body">
                            <h5 class="card-title text-white" title="Free Fire">
                              Skype Credit
                            </h5>
                          </div>
                        </div>
                        <div class="textWrap">
                          <p class="text-center">Harga mulai dari</p>
                          <a class="btn btn-light bg-white border-2 products-btn">
                            RP 156.800
                          </a>
                        </div>
                      </nuxt-link>
                    </div>
                  </div>
                  <div class="cardSize">
                    <div class="card">
                      <nuxt-link :to="'/product-details/eBay-Gift-Card'">
                        <div
                          class="imgWrap all-product"
                          :style="'background-image: url(' + './img/games/bggames.png' + ');'"
                        >
                          <div class="card-img-top game-dp" style="background-image: url('./img/kategori/cat_20220620055404.jpg');"></div>
                          <div class="card-body">
                            <h5 class="card-title text-white" title="Free Fire">
                              eBay Gift Card
                            </h5>
                          </div>
                        </div>
                        <div class="textWrap">
                          <p class="text-center">Harga mulai dari</p>
                          <a class="btn btn-light bg-white border-2 products-btn">
                            RP 80.000
                          </a>
                        </div>
                      </nuxt-link>
                    </div>
                  </div>
                </div>
                
                <!-- <div class="section-home-col three-col" v-if="new_product != null && new_product.length > 0">
                  <div class="cardSize" v-for="item in new_product" :key="item.id">
                    <div class="card">
                      <nuxt-link :to="'/product-details/'+ item.url">
                        <div
                          class="imgWrap all-product"
                          :style="'background-image: url(' + 'https://vogame.id/assets/img/games/bggames.png' + ');'"
                        >
                          <div class="card-img-top game-dp" style="background-image: url(https://vogame.id/cdn/kategori/cat_20220617110224.jpg);"></div>
                          <div class="card-body">
                            <h5 class="card-title text-white" title="Free Fire">
                              {{ item.nama }}
                            </h5>
                          </div>
                        </div>
                        <div class="textWrap">
                          <p class="text-center">Harga mulai dari</p>
                          <a class="btn btn-light bg-white border-2 products-btn">
                            RP 22.201
                          </a>
                        </div>
                      </nuxt-link>
                    </div>
                  </div>
                </div>
                <div class="section-home-col three-col" v-else>
                  Produk tidak ada
                </div> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="container">
      <div class="row">
        <div class="col-12">
          <!-- Voucher List -->
          <div class="voucherList home-title">
            <div class="section-title-col sticky-top">
              <h3 class="home-title text-primary">Semua Produk</h3>
              <div class="cta">
                <a
                  href="/store"
                  title=""
                  class="btn btn-secondary btn-tab bg-white text-secondary"
                  >Lihat Lainnya</a
                >
              </div>
            </div>
            <div class="section-home-col six-col">
              <div class="cardSize">
                <div class="card">
                  <a
                    href="/product-details/Arena-of-Valor"
                    title="Arena of Valor"
                  >
                    <div
                      class="card-img-top"
                      style="
                        background: url('https://vogame.id/cdn/kategori/cat_20220615194520.png');
                        background-size: cover;
                        background-position: center center;
                      "
                      alt="Arena of Valor"
                    >
                      <div class="card-body overlay-bg">
                        <h5 class="card-title text-white" title="Arena of Valor">
                          Arena of Valor
                        </h5>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div class="cardSize">
                <div class="card">
                  <a
                    href="/product-details/Point-Blank-DIRECT"
                    title="Point Blank DIRECT"
                  >
                    <div
                      class="card-img-top"
                      style="
                        background: url('https://vogame.id/cdn/kategori/cat_20220616115322.jpeg');
                        background-size: cover;
                        background-position: center center;
                      "
                      alt="Point Blank DIRECT"
                    >
                      <div class="card-body overlay-bg">
                        <h5 class="card-title text-white" title="Point Blank DIRECT">
                          Point Blank DIRECT
                        </h5>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div class="cardSize">
                <div class="card">
                  <a
                    href="/product-details/Battlenet-Card"
                    title="Battlenet Card"
                  >
                    <div
                      class="card-img-top"
                      style="
                        background: url('https://vogame.id/cdn/kategori/cat_20220616153733.png');
                        background-size: cover;
                        background-position: center center;
                      "
                      alt="Battlenet Card"
                    >
                      <div class="card-body overlay-bg">
                        <h5 class="card-title text-white" title="Battlenet Card">
                          Battlenet Card
                        </h5>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div class="cardSize">
                <div class="card">
                  <a
                    href="/product-details/Grab-Voucher"
                    title="Grab Voucher"
                  >
                    <div
                      class="card-img-top"
                      style="
                        background: url('https://vogame.id/cdn/kategori/cat_20220616154909.png');
                        background-size: cover;
                        background-position: center center;
                      "
                      alt="Grab Voucher"
                    >
                      <div class="card-body overlay-bg">
                        <h5 class="card-title text-white" title="Grab Voucher">
                          Grab Voucher
                        </h5>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div class="cardSize">
                <div class="card">
                  <a
                    href="/product-details/Dairy-Queen"
                    title="Dairy Queen"
                  >
                    <div
                      class="card-img-top"
                      style="
                        background: url('https://vogame.id/cdn/kategori/cat_20220616160023.png');
                        background-size: cover;
                        background-position: center center;
                      "
                      alt="Dairy Queen"
                    >
                      <div class="card-body overlay-bg">
                        <h5 class="card-title text-white" title="Dairy Queen">
                          Dairy Queen
                        </h5>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div class="cardSize">
                <div class="card">
                  <a
                    href="/product-details/Bakmi-Gm-"
                    title="Bakmi Gm "
                  >
                    <div
                      class="card-img-top"
                      style="
                        background: url('https://vogame.id/cdn/kategori/cat_20220617103654.png');
                        background-size: cover;
                        background-position: center center;
                      "
                      alt="Bakmi Gm "
                    >
                      <div class="card-body overlay-bg">
                        <h5 class="card-title text-white" title="Bakmi Gm ">Bakmi Gm</h5>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div class="cardSize">
                <div class="card">
                  <a href="/product-details/Excelso" title="Excelso">
                    <div
                      class="card-img-top"
                      style="
                        background: url('https://vogame.id/cdn/kategori/cat_20220617103909.jpg');
                        background-size: cover;
                        background-position: center center;
                      "
                      alt="Excelso"
                    >
                      <div class="card-body overlay-bg">
                        <h5 class="card-title text-white" title="Excelso">Excelso</h5>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div class="cardSize">
                <div class="card">
                  <a
                    href="/product-details/GREYHOUND-CAFE"
                    title="GREYHOUND CAFE"
                  >
                    <div
                      class="card-img-top"
                      style="
                        background: url('https://vogame.id/cdn/kategori/cat_20220617104333.png');
                        background-size: cover;
                        background-position: center center;
                      "
                      alt="GREYHOUND CAFE"
                    >
                      <div class="card-body overlay-bg">
                        <h5 class="card-title text-white" title="GREYHOUND CAFE">
                          GREYHOUND CAFE
                        </h5>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div class="cardSize">
                <div class="card">
                  <a
                    href="/product-details/Haagen-Dazs"
                    title="Haagen Dazs"
                  >
                    <div
                      class="card-img-top"
                      style="
                        background: url('https://vogame.id/cdn/kategori/cat_20220617104829.jpg');
                        background-size: cover;
                        background-position: center center;
                      "
                      alt="Haagen Dazs"
                    >
                      <div class="card-body overlay-bg">
                        <h5 class="card-title text-white" title="Haagen Dazs">
                          Haagen Dazs
                        </h5>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div class="cardSize">
                <div class="card">
                  <a
                    href="/product-details/Hong-Kong-Cafe"
                    title="Hong Kong Cafe"
                  >
                    <div
                      class="card-img-top"
                      style="
                        background: url('https://vogame.id/cdn/kategori/cat_20220617105344.png');
                        background-size: cover;
                        background-position: center center;
                      "
                      alt="Hong Kong Cafe"
                    >
                      <div class="card-body overlay-bg">
                        <h5 class="card-title text-white" title="Hong Kong Cafe">
                          Hong Kong Cafe
                        </h5>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div class="cardSize">
                <div class="card">
                  <a
                    href="/product-details/Kafe-Betawi"
                    title="Kafe Betawi"
                  >
                    <div
                      class="card-img-top"
                      style="
                        background: url('https://vogame.id/cdn/kategori/cat_20220619235425.jpg');
                        background-size: cover;
                        background-position: center center;
                      "
                      alt="Kafe Betawi"
                    >
                      <div class="card-body overlay-bg">
                        <h5 class="card-title text-white" title="Kafe Betawi">
                          Kafe Betawi
                        </h5>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div class="cardSize">
                <div class="card">
                  <a
                    href="/product-details/Kantin-Kendal"
                    title="Kantin Kendal"
                  >
                    <div
                      class="card-img-top"
                      style="
                        background: url('https://vogame.id/cdn/kategori/cat_20220617110141.jpg');
                        background-size: cover;
                        background-position: center center;
                      "
                      alt="Kantin Kendal"
                    >
                      <div class="card-body overlay-bg">
                        <h5 class="card-title text-white" title="Kantin Kendal">
                          Kantin Kendal
                        </h5>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div class="cardSize">
                <div class="card">
                  <a
                    href="/product-details/Call-of-Duty-Mobile"
                    title="Call of Duty Mobile"
                  >
                    <div
                      class="card-img-top"
                      style="
                        background: url('https://vogame.id/cdn/kategori/cat_20220617110224.jpg');
                        background-size: cover;
                        background-position: center center;
                      "
                      alt="Call of Duty Mobile"
                    >
                      <div class="card-body overlay-bg">
                        <h5 class="card-title text-white" title="Call of Duty Mobile">
                          Call of Duty Mobile
                        </h5>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div class="cardSize">
                <div class="card">
                  <a
                    href="/product-details/Kimukatsu"
                    title="Kimukatsu"
                  >
                    <div
                      class="card-img-top"
                      style="
                        background: url('https://vogame.id/cdn/kategori/cat_20220617110407.png');
                        background-size: cover;
                        background-position: center center;
                      "
                      alt="Kimukatsu"
                    >
                      <div class="card-body overlay-bg">
                        <h5 class="card-title text-white" title="Kimukatsu">Kimukatsu</h5>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="howTo">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h3 class="text-white fw-bold mb-4">Top-up atau Beli item game, termurah dan tercepat di Vogame</h3>
          </div>
        </div>
        <div class="row">
          <div class="col-12 col-lg-4 howToItem">
            <img
              src="../assets/img/icon/ill1.png"
              title="illustration 1"
              width="120"
            />
            <h5 class="text-white fw-bold">Top Up Game Favoritmu</h5>
            <p class="card-text text-white">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
          </div>
          <div class="col-12 col-lg-4 howToItem">
            <img
              src="../assets/img/icon/ill2.png"
              title="illustration 2"
              width="120"
            />
            <h5 class="text-white fw-bold">Pilih Nominal Dan Bayar</h5>
            <p class="card-text text-white">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
          </div>
          <div class="col-12 col-lg-4 howToItem">
            <img
              src="../assets/img/icon/ill3.png"
              title="illustration 3"
              width="120"
            />
            <h5 class="text-white fw-bold">Dapatkan Item/Voucher</h5>
            <p class="card-text text-white">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="container promotion">
      <div class="row">
        <div class="col-12">
          <!-- News & Promo -->
          <div class="newsPromo home-title">
            <div class="section-title-col sticky-top">
              <h3 class="home-title text-primary">BERITA DAN PROMOSI</h3>
              <div class="cta">
                <a
                  href="https://vogame.id/blog"
                  title=""
                  class="btn btn-secondary btn-tab bg-white text-secondary"
                  >Artikel Lainnya</a
                >
              </div>
            </div>
            <div class="section-home-col two-col">
              <div class="cardSize">
                <div class="card">
                  <div class="float-rt">
                    <a href="#" title="">
                      <i class="fas fa-share-alt"></i>
                    </a>
                  </div>
                  <a class="newsThumb" href="https://vogame.id/blog/Ini-Dia-Hero-Mage-Terbaik-Yang-Bisa-Kamu-Gunakan-Di-Akhir-Season-20-MLBB-" title="">
                    <img
                      class="card-img-top"
                      src="https://vogame.id/cdn/uploads/blogpost_120210603110507.jpg"
                      alt="Ini Dia Hero Mage Terbaik Yang Bisa Kamu Gunakan Di Akhir Season 20 MLBB !"
                  /></a>
                  <div class="card-body">
                    <h5
                      class="text-black"
                      title="Ini Dia Hero Mage Terbaik Yang Bisa Kamu Gunakan Di Akhir Season 20 MLBB !"
                    >
                      <a href="#" title=""
                        >Ini Dia Hero Mage Terbaik Yang Bisa Kamu Gunakan Di
                        Akhir Season 20 MLBB !</a
                      >
                    </h5>
                    <p class="card-text">
                      <a href="#" title="">Berita &amp; Promosi</a> - 03 Jun
                      2021
                    </p>
                  </div>
                </div>
              </div>
              <div class="cardSize">
                <div class="card">
                  <div class="float-rt">
                    <a href="#" title="">
                      <i class="fas fa-share-alt"></i>
                    </a>
                  </div>
                  <a
                    class="newsThumb"
                    href="https://vogame.id/blog/Kamu-Di-Tier-Warrior-Ingin-Naik-Ke-Epic-Pakai-Hero-Hero-Ini-"
                    title=""
                    ><img
                      class="card-img-top"
                      src="https://vogame.id/cdn/uploads/blogpost_120210602170823.jpg"
                      alt="Kamu Di Tier Warrior Ingin Naik Ke Epic ? Pakai Hero-Hero Ini !"
                  /></a>
                  <div class="card-body">
                    <h5
                    class="text-black"
                      title="Kamu Di Tier Warrior Ingin Naik Ke Epic ? Pakai Hero-Hero Ini !"
                    >
                      <a href="#" title=""
                        >Kamu Di Tier Warrior Ingin Naik Ke Epic ? Pakai
                        Hero-Hero Ini !</a
                      >
                    </h5>
                    <p class="card-text">
                      <a href="#" title="">Berita &amp; Promosi</a> - 02 Jun
                      2021
                    </p>
                  </div>
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
import Carousel from "vue-slick-carousel";

export default {
  name: "index",

  layout: "default",

  components: {
    Carousel,
  },

  data() {
    return {
      bannerSlider: {
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
        centerMode: true,
        centerPadding: "40px",
        focusOnSelect: true,
        infinite: true,
        slidesToShow: 1,
        speed: 500,
        variableWidth: true,
        // responsive: [
        //   {
        //     breakpoint: 768,
        //     settings: {
        //       arrows: false,
        //       centerMode: true,
        //       centerPadding: "0px",
        //       slidesToShow: 3,
        //     },
        //   },
        //   {
        //     breakpoint: 480,
        //     settings: {
        //       arrows: false,
        //       centerMode: true,
        //       centerPadding: "40px",
        //       slidesToShow: 1,
        //     },
        //   },
        // ],
      },
      // tabsSlider: {
      //   slidesToShow: 5,
      //   variableWidth: true,
      //   responsive: [
      //     {
      //       breakpoint: 768,
      //       settings: {
      //         arrows: false,
      //         centerMode: true,
      //         centerPadding: "40px",
      //         slidesToShow: 3,
      //       },
      //     },
      //     {
      //       breakpoint: 480,
      //       settings: {
      //         arrows: false,
      //         infinite: false,
      //         centerMode: true,
      //         variableWidth: true,
      //         slidesToShow: 1,
      //       },
      //     },
      //   ],
      // },
      // gameSlider: {
      //   infinite: true,
      //   centerMode: true,
      //   slidesToShow: 5,
      //   speed: 500,
      //   rows: 2,
      //   slidesPerRow: 1,
      //   responsive: [
      //     {
      //       breakpoint: 768,
      //       settings: {
      //         arrows: false,
      //         centerMode: true,
      //         centerPadding: "40px",
      //         slidesToShow: 3,
      //       },
      //     },
      //     {
      //       breakpoint: 480,
      //       settings: "unslick",
      //     },
      //   ],
      // },
      slider: [
        {
          id: 1,
          url: "",
          src: "/img/slider/slider-1.png",
        },
        {
          id: 2,
          url: "",
          src: "/img/slider/slider-2.jpg",
        },
        {
          id: 3,
          url: "",
          src: "/img/slider/slider-3.jpg",
        },
      ],
      new_product: null,
      popular: null,
      voucherz: null,
      active_product_favorite: 1,
    };
  },
  methods: {
    setActiveProductFavorite(index) {
      this.active_product_favorite = index;
    },
  },
  // mounted() {
  //   console.log(this.new_product);
  // },
  // async fetch() {
  //   this.popular = await fetch(
  //     process.env.apiUrl + "mobileapi/kategoripopular"
  //   ).then((res) => res.json());
  //   this.new_product = await fetch(
  //     process.env.apiUrl + "mobileapi/kategorinew"
  //   ).then((res) => res.json());
  //   this.voucherz = await fetch(
  //     process.env.apiUrl + "mobileapi/kategorivoucher"
  //   ).then((res) => res.json());

  //   this.slider = await fetch(process.env.apiUrl + "mobileapi/slider").then(
  //     (res) => res.json()
  //   );
  // },
};
</script>
