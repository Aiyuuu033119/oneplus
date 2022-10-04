<!-- <div class="container">
    <div class="py-3">
      <Carousel v-bind="bannerSlider" class="banner-slider">
        <div class="p-2" v-for="item in slider" :key="item.id">
          <nuxt-link :to="item.url">
            <div class="ratio ratio-16x9">
              <img :src="item.src" class="object-cover rounded">
            </div>
          </nuxt-link>
        </div>
      </Carousel>
    </div>
    <section>
      <h5 class="text-white mb-2 card-subtitle">GAME DAN VOUCHER</h5>
      <h2 class="text-primary" class="text-white fw-bold mb-4 card-title">Flash Top-Up</h2>

      <ul class="tabs-slider nav nav-pills gap-2 mb-3 howto overflow-auto" id="pills-tab" role="tablist">
        <li class="nav-item" role="presentation">
          <button class="nav-link active p-3 px-5 rounded-pill" id="pills-1-tab" data-bs-toggle="pill" data-bs-target="#pills-1" type="button" role="tab" aria-controls="pills-1" aria-selected="true"><h6 class="m-0">Populer</h6></button>
        </li>
        <li class="nav-item" role="presentation">
          <button class="nav-link p-3 px-5 rounded-pill" id="pills-2-tab" data-bs-toggle="pill" data-bs-target="#pills-2" type="button" role="tab" aria-controls="pills-2" aria-selected="true"><h6 class="m-0">Game Baru</h6></button>
        </li>
        <li class="nav-item" role="presentation">
          <button class="nav-link p-3 px-5 rounded-pill" id="pills-3-tab" data-bs-toggle="pill" data-bs-target="#pills-3" type="button" role="tab" aria-controls="pills-3" aria-selected="true"><h6 class="m-0">Voucher</h6></button>
        </li>

      </ul>
      <div class="tab-content" id="pills-tabContent">
        <div v-if="popular != null && popular.length > 0" class="tab-pane fade show active" id="pills-1" role="tabpanel" aria-labelledby="pills-1-tab">
          <Carousel v-bind="gameSlider" class="games-slider">
            <div class="p-2" v-for="item in popular" :key="item.id">
              <nuxt-link :to="{ path: 'product/'+item.url }" class="card rounded border-0">
                <div class="card-body">
                  <div class="ratio ratio-1x1 mb-2">
                    <img :src="item.foto" :alt="item.nama" class="object-cover rounded">
                  </div>
                  <div class="d-grid gap-1 text-center">
                    <small class="text-secondary">{{ item.publisher }}</small>
                    <div class="card-title text-dark fw-bold mb-0">{{ item.nama }}</div>
                  </div>
                </div>
              </nuxt-link>
            </div>
          </Carousel>
        </div>
        <div v-if="popular == null || popular.length == 0" class="tab-pane fade show active" id="pills-1" role="tabpanel" aria-labelledby="pills-1-tab">
        Produk tidak ada
        </div>
        <div v-if="new_product != null && new_product.length > 0" class="tab-pane fade" id="pills-2" role="tabpanel" aria-labelledby="pills-2-tab">
        <Carousel v-bind="gameSlider" class="games-slider">
          <div class="p-2" v-for="newp in new_product" :key="newp.id">
            <nuxt-link :to="{ path: 'product/'+newp.url }" class="card rounded border-0">
              <div class="card-body">
                <div class="ratio ratio-1x1 mb-2">
                  <img :src="newp.foto" :alt="newp.nama" class="object-cover rounded">
                </div>
                <div class="d-grid gap-1 text-center">
                  <small class="text-secondary">{{ newp.publisher }}</small>
                  <div class="card-title text-dark fw-bold mb-0">{{ newp.nama }}</div>
                </div>
              </div>
            </nuxt-link>
          </div>
        </Carousel>
        </div>
        <div v-if="new_product == null" class="tab-pane fade" id="pills-2" role="tabpanel" aria-labelledby="pills-2-tab">
        Produk tidak ada
        </div>

        <div v-if="voucherz != null && voucherz.length"  class="tab-pane fade" id="pills-3" role="tabpanel" aria-labelledby="pills-3-tab">
        <Carousel v-bind="gameSlider" class="games-slider">
          <div class="p-2" v-for="vouch in voucherz" :key="vouch.id">
            <nuxt-link :to="{ path: 'product/'+vouch.url }" class="card rounded border-0">
              <div class="card-body">
                <div class="ratio ratio-1x1 mb-2">
                  <img :src="vouch.foto" :alt="vouch.nama" class="object-cover rounded">
                </div>
                <div class="d-grid gap-1 text-center">
                  <small class="text-secondary">{{ vouch.publisher }}</small>
                  <div class="card-title text-dark fw-bold mb-0">{{ vouch.nama }}</div>
                </div>
              </div>
            </nuxt-link>
          </div>
        </Carousel>
        </div>
        <div v-if="voucherz == null"  class="tab-pane fade" id="pills-3" role="tabpanel" aria-labelledby="pills-3-tab">
        Voucher tidak ada
        </div>
        <div class="tab-pane fade" id="pills-4" role="tabpanel" aria-labelledby="pills-4-tab">Product Not Found</div>
      </div>

    </section>
  </div> -->


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