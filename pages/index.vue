<template>
  <main>
    <section class="container-fluid">
      <div class="row">
        <div class="col-12 p-0" :class="slider.length != 0 ? 'true' : 'false'" v-if="slider.length != 0">
          <Carousel v-if="slider.length != 0" v-bind="bannerSlider" class="featuredBanner slick-dotted" :class="slider.length === 0 ? 'd-none' : ''">
            <!-- <div class="p-2" v-for="item in slider" :key="item.id"> -->
              <nuxt-link v-for="(item, key) in slider" :key="item.id" :to="item.url">
                <!-- <div class="ratio ratio-16x9"> -->
                  <img :src="'/img/slider/slider-'+(key+1).toString()+'.png'" class="rounded">
                <!-- </div> -->
              </nuxt-link>
            <!-- </div> -->
          </Carousel>
          <!-- Featured Banner -->
          <!-- <div
            class="featuredBanner slick-initialized slick-slider slick-dotted"
          >
            <button
              class="slick-prev slick-arrow"
              aria-label="Previous"
              type="button"
              style=""
            >
              Previous
            </button>
            <div class="slick-list draggable" style="padding: 0px 350px">
              <div
                class="slick-track"
                style="
                  opacity: 1;
                  width: 9616px;
                  transform: translate3d(-4808px, 0px, 0px);
                  transition: transform 300ms ease 0s;
                "
              >
                <div
                  class="slideItem slick-slide slick-cloned"
                  data-slick-index="-2"
                  id=""
                  aria-hidden="true"
                  tabindex="-1"
                  style="width: 1202px"
                >
                  <a href="https://vogame.id" title="banner 1" tabindex="-1"
                    ><img
                      src="https://vogame.id/cdn/promo/promo_upl20210107092612.jpg"
                      alt=""
                  /></a>
                </div>
                <div
                  class="slideItem slick-slide slick-cloned slick-center"
                  data-slick-index="-1"
                  id=""
                  aria-hidden="true"
                  tabindex="-1"
                  style="width: 1202px"
                >
                  <a href="https://vogame.id" title="banner 1" tabindex="-1"
                    ><img
                      src="https://vogame.id/cdn/promo/promo_upl20210105105750.png"
                      alt=""
                  /></a>
                </div>
                <div
                  class="slideItem slick-slide"
                  data-slick-index="0"
                  aria-hidden="true"
                  tabindex="-1"
                  role="tabpanel"
                  id="slick-slide00"
                  aria-describedby="slick-slide-control00"
                  style="width: 1202px"
                >
                  <a href="https://vogame.id" title="banner 1" tabindex="-1"
                    ><img
                      src="https://vogame.id/cdn/promo/promo_upl20210107092722.jpg"
                      alt=""
                  /></a>
                </div>
                <div
                  class="slideItem slick-slide"
                  data-slick-index="1"
                  aria-hidden="true"
                  tabindex="0"
                  role="tabpanel"
                  id="slick-slide01"
                  aria-describedby="slick-slide-control01"
                  style="width: 1202px"
                >
                  <a href="https://vogame.id" title="banner 1" tabindex="0"
                    ><img
                      src="https://vogame.id/cdn/promo/promo_upl20210107092612.jpg"
                      alt=""
                  /></a>
                </div>
                <div
                  class="
                    slideItem
                    slick-slide slick-current slick-active slick-center
                  "
                  data-slick-index="2"
                  aria-hidden="false"
                  tabindex="-1"
                  role="tabpanel"
                  id="slick-slide02"
                  aria-describedby="slick-slide-control02"
                  style="width: 1202px"
                >
                  <a href="https://vogame.id" title="banner 1" tabindex="-1"
                    ><img
                      src="https://vogame.id/cdn/promo/promo_upl20210105105750.png"
                      alt=""
                  /></a>
                </div>
                <div
                  class="slideItem slick-slide slick-cloned"
                  data-slick-index="3"
                  id=""
                  aria-hidden="true"
                  tabindex="-1"
                  style="width: 1202px"
                >
                  <a href="https://vogame.id" title="banner 1" tabindex="-1"
                    ><img
                      src="https://vogame.id/cdn/promo/promo_upl20210107092722.jpg"
                      alt=""
                  /></a>
                </div>
                <div
                  class="slideItem slick-slide slick-cloned"
                  data-slick-index="4"
                  id=""
                  aria-hidden="true"
                  tabindex="-1"
                  style="width: 1202px"
                >
                  <a href="https://vogame.id" title="banner 1" tabindex="-1"
                    ><img
                      src="https://vogame.id/cdn/promo/promo_upl20210107092612.jpg"
                      alt=""
                  /></a>
                </div>
                <div
                  class="slideItem slick-slide slick-cloned"
                  data-slick-index="5"
                  id=""
                  aria-hidden="true"
                  tabindex="-1"
                  style="width: 1202px"
                >
                  <a href="https://vogame.id" title="banner 1" tabindex="-1"
                    ><img
                      src="https://vogame.id/cdn/promo/promo_upl20210105105750.png"
                      alt=""
                  /></a>
                </div>
              </div>
            </div>

            <button
              class="slick-next slick-arrow"
              aria-label="Next"
              type="button"
              style=""
            >
              Next
            </button>
            <ul class="slick-dots" style="" role="tablist">
              <li class="" role="presentation">
                <button
                  type="button"
                  role="tab"
                  id="slick-slide-control00"
                  aria-controls="slick-slide00"
                  aria-label="1 of 3"
                  tabindex="-1"
                >
                  1
                </button>
              </li>
              <li role="presentation" class="">
                <button
                  type="button"
                  role="tab"
                  id="slick-slide-control01"
                  aria-controls="slick-slide01"
                  aria-label="2 of 3"
                  tabindex="0"
                  aria-selected="true"
                >
                  2
                </button>
              </li>
              <li role="presentation" class="slick-active">
                <button
                  type="button"
                  role="tab"
                  id="slick-slide-control02"
                  aria-controls="slick-slide02"
                  aria-label="3 of 3"
                  tabindex="-1"
                >
                  3
                </button>
              </li>
            </ul>
          </div> -->
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
                    class="btn"
                    :class="active_product_favorite === 1 ? 'btn-light' : ''"
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
                    class="btn"
                    :class="active_product_favorite === 2 ? 'btn-light' : ''"
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
                :class="active_product_favorite === 1 ? 'show active' : ''"
                id="one"
                role="tabpanel"
                aria-labelledby="one-tab"
              >
                <div class="section-home-col three-col" v-if="popular != null && popular.length > 0">
                  <div class="cardSize" v-for="item in popular" :key="item.id">
                    <div class="card">
                      <nuxt-link :to="'/product-details/'+ item.url">
                        <div
                          class="imgWrap"
                          :style="'background-image: url(' + 'https://vogame.id/assets/img/games/bggames.png' + ');'"
                        >
                          <img
                            class="card-img-top"
                            :src="'https://vogame.id/cdn/kategori/cat_20220617110224.jpg'"
                            alt="Games 1"
                          />
                          <div class="card-body">
                            <h5 class="card-title text-white" title="Free Fire">
                              {{ item.nama }}
                            </h5>
                          </div>
                        </div>
                        <div class="textWrap">
                          <p>{{ item.publisher ? newp.publisher :  "Lorem Ipsum"}}</p>
                        </div>
                      </nuxt-link>
                    </div>
                  </div>
                </div>
                <div class="section-home-col three-col" v-else>
                  Produk tidak ada
                </div>
              </div>
              <div
                class="tab-pane fade"
                :class="active_product_favorite === 2 ? 'show active' : ''"
                id="two"
                role="tabpanel"
                aria-labelledby="two-tab"
              >
                <div class="section-home-col three-col" v-if="new_product != null && new_product.length > 0">
                  <div class="cardSize" v-for="newp in new_product" :key="newp.id">
                    <div class="card">
                      <nuxt-link :to="'/product-details/'+newp.url">
                        <div
                          class="imgWrap"
                          :style="'background-image: url(' + 'https://vogame.id/assets/img/games/bggames.png' + ');'"
                        >
                          <img
                            class="card-img-top"
                            :src="'https://vogame.id/cdn/kategori/cat_20220617110224.jpg'"
                            alt="Games 1"
                          />
                          <div class="card-body">
                            <h5 class="card-title text-white" title="Free Fire">
                              {{ newp.nama }}
                            </h5>
                          </div>
                        </div>
                        <div class="textWrap">
                          <p>{{ newp.publisher ? newp.publisher :  "Lorem Ipsum"}}</p>
                        </div>
                      </nuxt-link>
                    </div>
                  </div>
                </div>
                <div class="section-home-col three-col" v-else>
                  Produk tidak ada
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
          <!-- Voucher List -->
          <div class="voucherList home-title">
            <div class="section-title-col sticky-top">
              <h3 class="home-title text-primary">Semua Produk</h3>
              <div class="cta">
                <a
                  href="/store"
                  title=""
                  class="btn btn-primary"
                  >Lihat Lainnya</a
                >
              </div>
            </div>
            <div class="section-home-col seven-col">
              <div class="cardSize">
                <div class="card">
                  <a
                    href="/product-details/Arena-of-Valor"
                    title="Arena of Valor"
                  >
                    <div
                      class="card-img-top"
                      style="
                        height: 139px;
                        background: url('https://vogame.id/cdn/kategori/cat_20220615194520.png');
                        background-size: cover;
                        background-position: center center;
                      "
                      alt="Arena of Valor"
                    ></div>
                    <div class="card-body">
                      <h5 class="card-title text-primary" title="Arena of Valor">
                        Arena of Valor
                      </h5>
                      <p class="card-text"></p>
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
                        height: 139px;
                        background: url('https://vogame.id/cdn/kategori/cat_20220616115322.jpeg');
                        background-size: cover;
                        background-position: center center;
                      "
                      alt="Point Blank DIRECT"
                    ></div>
                    <div class="card-body">
                      <h5 class="card-title text-primary" title="Point Blank DIRECT">
                        Point Blank DIRECT
                      </h5>
                      <p class="card-text"></p>
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
                        height: 139px;
                        background: url('https://vogame.id/cdn/kategori/cat_20220616153733.png');
                        background-size: cover;
                        background-position: center center;
                      "
                      alt="Battlenet Card"
                    ></div>
                    <div class="card-body">
                      <h5 class="card-title text-primary" title="Battlenet Card">
                        Battlenet Card
                      </h5>
                      <p class="card-text"></p>
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
                        height: 139px;
                        background: url('https://vogame.id/cdn/kategori/cat_20220616154909.png');
                        background-size: cover;
                        background-position: center center;
                      "
                      alt="Grab Voucher"
                    ></div>
                    <div class="card-body">
                      <h5 class="card-title text-primary" title="Grab Voucher">
                        Grab Voucher
                      </h5>
                      <p class="card-text"></p>
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
                        height: 139px;
                        background: url('https://vogame.id/cdn/kategori/cat_20220616160023.png');
                        background-size: cover;
                        background-position: center center;
                      "
                      alt="Dairy Queen"
                    ></div>
                    <div class="card-body">
                      <h5 class="card-title text-primary" title="Dairy Queen">
                        Dairy Queen
                      </h5>
                      <p class="card-text"></p>
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
                        height: 139px;
                        background: url('https://vogame.id/cdn/kategori/cat_20220617103654.png');
                        background-size: cover;
                        background-position: center center;
                      "
                      alt="Bakmi Gm "
                    ></div>
                    <div class="card-body">
                      <h5 class="card-title text-primary" title="Bakmi Gm ">Bakmi Gm</h5>
                      <p class="card-text"></p>
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
                        height: 139px;
                        background: url('https://vogame.id/cdn/kategori/cat_20220617103909.jpg');
                        background-size: cover;
                        background-position: center center;
                      "
                      alt="Excelso"
                    ></div>
                    <div class="card-body">
                      <h5 class="card-title text-primary" title="Excelso">Excelso</h5>
                      <p class="card-text"></p>
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
                        height: 139px;
                        background: url('https://vogame.id/cdn/kategori/cat_20220617104333.png');
                        background-size: cover;
                        background-position: center center;
                      "
                      alt="GREYHOUND CAFE"
                    ></div>
                    <div class="card-body">
                      <h5 class="card-title text-primary" title="GREYHOUND CAFE">
                        GREYHOUND CAFE
                      </h5>
                      <p class="card-text"></p>
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
                        height: 139px;
                        background: url('https://vogame.id/cdn/kategori/cat_20220617104829.jpg');
                        background-size: cover;
                        background-position: center center;
                      "
                      alt="Haagen Dazs"
                    ></div>
                    <div class="card-body">
                      <h5 class="card-title text-primary" title="Haagen Dazs">
                        Haagen Dazs
                      </h5>
                      <p class="card-text"></p>
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
                        height: 139px;
                        background: url('https://vogame.id/cdn/kategori/cat_20220617105344.png');
                        background-size: cover;
                        background-position: center center;
                      "
                      alt="Hong Kong Cafe"
                    ></div>
                    <div class="card-body">
                      <h5 class="card-title text-primary" title="Hong Kong Cafe">
                        Hong Kong Cafe
                      </h5>
                      <p class="card-text"></p>
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
                        height: 139px;
                        background: url('https://vogame.id/cdn/kategori/cat_20220619235425.jpg');
                        background-size: cover;
                        background-position: center center;
                      "
                      alt="Kafe Betawi"
                    ></div>
                    <div class="card-body">
                      <h5 class="card-title text-primary" title="Kafe Betawi">
                        Kafe Betawi
                      </h5>
                      <p class="card-text"></p>
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
                        height: 139px;
                        background: url('https://vogame.id/cdn/kategori/cat_20220617110141.jpg');
                        background-size: cover;
                        background-position: center center;
                      "
                      alt="Kantin Kendal"
                    ></div>
                    <div class="card-body">
                      <h5 class="card-title text-primary" title="Kantin Kendal">
                        Kantin Kendal
                      </h5>
                      <p class="card-text"></p>
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
                        height: 139px;
                        background: url('https://vogame.id/cdn/kategori/cat_20220617110224.jpg');
                        background-size: cover;
                        background-position: center center;
                      "
                      alt="Call of Duty Mobile"
                    ></div>
                    <div class="card-body">
                      <h5 class="card-title text-primary" title="Call of Duty Mobile">
                        Call of Duty Mobile
                      </h5>
                      <p class="card-text"></p>
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
                        height: 139px;
                        background: url('https://vogame.id/cdn/kategori/cat_20220617110407.png');
                        background-size: cover;
                        background-position: center center;
                      "
                      alt="Kimukatsu"
                    ></div>
                    <div class="card-body">
                      <h5 class="card-title text-primary" title="Kimukatsu">Kimukatsu</h5>
                      <p class="card-text"></p>
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
            <h3 class="text-primary">Top-up atau Beli item game, termurah dan tercepat di Vogame</h3>
          </div>
        </div>
        <div class="row">
          <div class="col-12 col-lg-4 howToItem">
            <img
              src="../assets/img/icon/ill1.png"
              title="illustration 1"
              width="120"
            />
            <h5 class="text-primary">Top Up Game Favoritmu</h5>
            <p class="card-text">
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
            <h5 class="text-primary">Pilih Nominal Dan Bayar</h5>
            <p class="card-text">
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
            <h5 class="text-primary">Dapatkan Item/Voucher</h5>
            <p class="card-text">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="container">
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
                  class="btn btn-primary"
                  >Artikel Lainnya</a
                >
              </div>
            </div>
            <div class="section-home-col two-col">
              <div class="cardSize">
                <div class="card">
                  <div class="float-rt">
                    <a href="#" title="">
                      <svg class="svg-inline--fa fa-share-alt fa-w-14" aria-hidden="true" data-prefix="fas" data-icon="share-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M352 320c-22.608 0-43.387 7.819-59.79 20.895l-102.486-64.054a96.551 96.551 0 0 0 0-41.683l102.486-64.054C308.613 184.181 329.392 192 352 192c53.019 0 96-42.981 96-96S405.019 0 352 0s-96 42.981-96 96c0 7.158.79 14.13 2.276 20.841L155.79 180.895C139.387 167.819 118.608 160 96 160c-53.019 0-96 42.981-96 96s42.981 96 96 96c22.608 0 43.387-7.819 59.79-20.895l102.486 64.054A96.301 96.301 0 0 0 256 416c0 53.019 42.981 96 96 96s96-42.981 96-96-42.981-96-96-96z"></path></svg>
                    </a>
                  </div>
                  <a class="newsThumb" href="https://vogame.id/blog/Ini-Dia-Hero-Mage-Terbaik-Yang-Bisa-Kamu-Gunakan-Di-Akhir-Season-20-MLBB-" title="">
                    <img
                      style="height: 180px;"
                      class="card-img-top"
                      src="https://vogame.id/cdn/uploads/blogpost_120210603110507.jpg"
                      alt="Ini Dia Hero Mage Terbaik Yang Bisa Kamu Gunakan Di Akhir Season 20 MLBB !"
                  /></a>
                  <div class="card-body">
                    <h5
                      class="text-primary"
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
                    <a href="#" title=""
                      ><svg
                        class="svg-inline--fa fa-share-alt fa-w-14"
                        aria-hidden="true"
                        data-prefix="fas"
                        data-icon="share-alt"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                        data-fa-i2svg=""
                      >
                        <path fill="currentColor" d="M352 320c-22.608 0-43.387 7.819-59.79 20.895l-102.486-64.054a96.551 96.551 0 0 0 0-41.683l102.486-64.054C308.613 184.181 329.392 192 352 192c53.019 0 96-42.981 96-96S405.019 0 352 0s-96 42.981-96 96c0 7.158.79 14.13 2.276 20.841L155.79 180.895C139.387 167.819 118.608 160 96 160c-53.019 0-96 42.981-96 96s42.981 96 96 96c22.608 0 43.387-7.819 59.79-20.895l102.486 64.054A96.301 96.301 0 0 0 256 416c0 53.019 42.981 96 96 96s96-42.981 96-96-42.981-96-96-96z"></path></svg>
                      </a>
                  </div>
                  <a
                    class="newsThumb"
                    href="https://vogame.id/blog/Kamu-Di-Tier-Warrior-Ingin-Naik-Ke-Epic-Pakai-Hero-Hero-Ini-"
                    title=""
                    ><img
                      style="height: 180px;"
                      class="card-img-top"
                      src="https://vogame.id/cdn/uploads/blogpost_120210602170823.jpg"
                      alt="Kamu Di Tier Warrior Ingin Naik Ke Epic ? Pakai Hero-Hero Ini !"
                  /></a>
                  <div class="card-body">
                    <h5
                      class="text-primary"
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
        centerPadding: "250px",
        focusOnSelect: true,
        infinite: true,
        slidesToShow: 1,
        speed: 500,
        variableWidth: true,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: "40px",
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: "40px",
              slidesToShow: 1,
            },
          },
        ],
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
        // {
        //   id: 1,
        //   url: "",
        //   src: "/img/slider/slider-1.png",
        // },
        // {
        //   id: 2,
        //   url: "",
        //   src: "/img/slider/slider-2.jpg",
        // },
        // {
        //   id: 3,
        //   url: "",
        //   src: "/img/slider/slider-3.jpg",
        // },
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
  mounted() {
    console.log(this.new_product);
  },
  async fetch() {
    this.popular = await fetch(
      process.env.apiUrl + "/mobileapi/kategoripopular"
    ).then((res) => res.json());
    this.new_product = await fetch(
      process.env.apiUrl + "/mobileapi/kategori"
    ).then((res) => res.json());
    this.voucherz = await fetch(
      process.env.apiUrl + "/mobileapi/kategorivoucher"
    ).then((res) => res.json());

    this.slider = await fetch(process.env.apiUrl + "/mobileapi/slider").then(
      (res) => res.json()
    );
  },
};
</script>
