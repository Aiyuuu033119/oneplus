<template>
  <div class="container">
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
      <h2 class="text-white fw-bold mb-4 card-title">Flash Top-Up</h2>

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
  </div>
</template>

<script>
import Carousel from 'vue-slick-carousel';

export default {

  name: 'index',

  layout: 'default',

  components: {
    Carousel
  },

  data () {
    return {
      bannerSlider: {
        "dots": true,
        "autoplay": true,
        "autoplaySpeed": 5000,
        "centerMode": true,
        "centerPadding": "250px",
        "focusOnSelect": true,
        "infinite": true,
        "slidesToShow": 1,
        "speed": 500,
        "responsive": [
          {
            "breakpoint": 768,
            "settings": {
              "arrows": false,
              "centerMode": true,
              "centerPadding": '40px',
              "slidesToShow": 3
            }
          },
          {
            "breakpoint": 480,
            "settings": {
              "arrows": false,
              "centerMode": true,
              "centerPadding": '40px',
              "slidesToShow": 1
            }
          }
        ]
      },
      tabsSlider: {
        "slidesToShow": 5,
        "variableWidth": true,
        "responsive": [
          {
            "breakpoint": 768,
            "settings": {
              "arrows": false,
              "centerMode": true,
              "centerPadding": '40px',
              "slidesToShow": 3
            }
          },
          {
            "breakpoint": 480,
            "settings": {
              "arrows": false,
              "infinite": false,
              "centerMode": true,
              "variableWidth": true,
              "slidesToShow": 1
            }
          }
        ]
      },
      gameSlider: {
        "infinite": true,
        "centerMode": true,
        "slidesToShow": 5,
        "speed": 500,
        "rows": 2,
        "slidesPerRow": 1,
        "responsive": [
          {
            "breakpoint": 768,
            "settings": {
              "arrows": false,
              "centerMode": true,
              "centerPadding": '40px',
              "slidesToShow": 3
            }
          },
          {
            "breakpoint": 480,
            "settings": "unslick"
          }
        ]
      },
      slider: [
        {
          id: 1,
          url: '',
          src: '/img/slider/slider-1.png'
        },
        {
          id: 2,
          url: '',
          src: '/img/slider/slider-2.png'
        },
        {
          id: 3,
          url: '',
          src: '/img/slider/slider-3.png'
        }
      ],
      new_product: null,
      popular: null,
      voucherz: null,
    }
  },
  mounted(){
    console.log(this.new_product);
  },
	async fetch() {
      this.popular = await fetch(process.env.apiUrl+'/mobileapi/kategoripopular').then((res) => res.json());
      this.new_product = await fetch(process.env.apiUrl+'/mobileapi/kategori').then((res) => res.json());
      this.voucherz = await fetch(process.env.apiUrl+'/mobileapi/kategorivoucher').then((res) => res.json());

      this.slider = await fetch(process.env.apiUrl+'/mobileapi/slider').then(res => res.json());
  }
}
</script>

<style lang="scss" scoped>
  .tabs-slider{
    a, button{
      background: #fff;
      color: #212529;

      &:hover{
        background: #FF5A5F;
        color: #fff;
      }
    }

    .active{
      background: #FF5A5F;
      color: #fff;
    }
  }
  .games-slider{
    a{
      min-height: 270px;

      &:hover .card-title{
        color: #FF5A5F!important;
      }
    }
  }

  @media only screen and (max-width: 767px){
    .banner-slider{
      margin-left: -15px;
      margin-right: -15px;
    }
    .tabs-slider{
      margin-left: -15px;
      margin-right: -15px;
      padding: 0 15px;
      white-space: nowrap;
      flex-wrap: nowrap;
      overflow-x: scroll;
      overflow-y: hidden;
      -webkit-overflow-scrolling: touch;

      button{
        padding: 10px 25px!important;
      }
    }
    .games-slider{
      margin-left: -15px;
      margin-right: -15px;

      a{
        min-height: 210px;

        .card-body{
          padding: 5px;

          small{
            font-size: 11px;
          }

          .card-title{
            font-size: 14px;
          }
        }
      }
    }
  }
</style>
