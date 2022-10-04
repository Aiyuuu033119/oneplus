<template>
  <div
    class="tab-pane fade"
    :class="active === 1 && 'show active'"
    id="one"
    role="tabpanel"
    aria-labelledby="one-tab"
  >
    <div class="section-home-col seven-col mb-5">
      <div class="cardSize">
        <div class="card">
          <nuxt-link :to="'/product-details/Mobile-Legend'">
            <div
              class="card-img-top"
              style="
                height: 139px;
                background-size: cover;
                background-position: center center;
              "
              :style="
                'background-image: url(' +
                './img/kategori/cat_20220801121105.jpg' +
                ');'
              "
              :alt="'Mobile Legend'"
            ></div>
            <div class="card-body">
              <h5 class="card-title text-black" :title="'Mobile Legend'">
                Mobile Legend
              </h5>
            </div>
          </nuxt-link>
        </div>
      </div>
      <div class="cardSize">
        <div class="card">
          <nuxt-link :to="'/product-details/GoRide'">
            <div
              class="card-img-top"
              style="
                height: 139px;
                background-size: cover;
                background-position: center center;
              "
              :style="
                'background-image: url(' +
                './img/kategori/cat_20220622153352.jpg' +
                ');'
              "
              :alt="'GoRide'"
            ></div>
            <div class="card-body">
              <h5 class="card-title text-black" :title="'GoRide'">GoRide</h5>
            </div>
          </nuxt-link>
        </div>
      </div>
      <div class="cardSize">
        <div class="card">
          <nuxt-link :to="'/product-details/GoCar'">
            <div
              class="card-img-top"
              style="
                height: 139px;
                background-size: cover;
                background-position: center center;
              "
              :style="
                'background-image: url(' +
                './img/kategori/cat_20220622152228.jpg' +
                ');'
              "
              :alt="'GoCar'"
            ></div>
            <div class="card-body">
              <h5 class="card-title text-black" :title="'GoCar'">GoCar</h5>
            </div>
          </nuxt-link>
        </div>
      </div>
      <div class="cardSize">
        <div class="card">
          <nuxt-link :to="'/product-details/Diva-Karaoke-Express'">
            <div
              class="card-img-top"
              style="
                height: 139px;
                background-size: cover;
                background-position: center center;
              "
              :style="
                'background-image: url(' +
                './img/kategori/cat_20220622151232.jpg' +
                ');'
              "
              :alt="'Diva Karaoke Express'"
            ></div>
            <div class="card-body">
              <h5 class="card-title text-black" :title="'Diva Karaoke Express'">
                Diva Karaoke Express
              </h5>
            </div>
          </nuxt-link>
        </div>
      </div>
      <div class="cardSize">
        <div class="card">
          <nuxt-link :to="'/product-details/Skype-Credit'">
            <div
              class="card-img-top"
              style="
                height: 139px;
                background-size: cover;
                background-position: center center;
              "
              :style="
                'background-image: url(' +
                './img/kategori/cat_20220622140900.jpg' +
                ');'
              "
              :alt="'Skype Credit'"
            ></div>
            <div class="card-body">
              <h5 class="card-title text-black" :title="'Skype Credit'">
                Skype Credit
              </h5>
            </div>
          </nuxt-link>
        </div>
      </div>
      <div class="cardSize">
        <div class="card">
          <nuxt-link :to="'/product-details/eBay-Gift-Card'">
            <div
              class="card-img-top"
              style="
                height: 139px;
                background-size: cover;
                background-position: center center;
              "
              :style="
                'background-image: url(' +
                './img/kategori/cat_20220620055404.jpg' +
                ');'
              "
              :alt="'eBay Gift Card'"
            ></div>
            <div class="card-body">
              <h5 class="card-title text-black" :title="'eBay Gift Card'">
                eBay Gift Card
              </h5>
            </div>
          </nuxt-link>
        </div>
      </div>
      <div class="cardSize">
        <div class="card">
          <nuxt-link :to="'/product-details/iTunes-Gift-Card-US-Region-'">
            <div
              class="card-img-top"
              style="
                height: 139px;
                background-size: cover;
                background-position: center center;
              "
              :style="
                'background-image: url(' +
                './img/kategori/cat_20220620001149.jpg' +
                ');'
              "
              :alt="'iTunes Gift Card (US Region)'"
            ></div>
            <div class="card-body">
              <h5
                class="card-title text-black"
                :title="'iTunes Gift Card (US Region)'"
              >
                iTunes Gift Card (US Region)
              </h5>
            </div>
          </nuxt-link>
        </div>
      </div>
      <div class="cardSize">
        <div class="card">
          <nuxt-link :to="'/product-details/H-M'">
            <div
              class="card-img-top"
              style="
                height: 139px;
                background-size: cover;
                background-position: center center;
              "
              :style="
                'background-image: url(' +
                './img/kategori/cat_20220619224758.jpg' +
                ');'
              "
              :alt="'H&M'"
            ></div>
            <div class="card-body">
              <h5 class="card-title text-black" :title="'H&M'">H&M</h5>
            </div>
          </nuxt-link>
        </div>
      </div>
      <div class="cardSize">
        <div class="card">
          <nuxt-link :to="'/product-details/OYO-Rooms'">
            <div
              class="card-img-top"
              style="
                height: 139px;
                background-size: cover;
                background-position: center center;
              "
              :style="
                'background-image: url(' +
                './img/kategori/cat_20220619223834.jpg' +
                ');'
              "
              :alt="'OYO Rooms'"
            ></div>
            <div class="card-body">
              <h5 class="card-title text-black" :title="'OYO Rooms'">
                OYO Rooms
              </h5>
            </div>
          </nuxt-link>
        </div>
      </div>
      <div class="cardSize">
        <div class="card">
          <nuxt-link :to="'/product-details/Saint-Cinnamon'">
            <div
              class="card-img-top"
              style="
                height: 139px;
                background-size: cover;
                background-position: center center;
              "
              :style="
                'background-image: url(' +
                './img/kategori/cat_20220619223008.jpg' +
                ');'
              "
              :alt="'Saint Cinnamon'"
            ></div>
            <div class="card-body">
              <h5 class="card-title text-black" :title="'Saint Cinnamon'">
                Saint Cinnamon
              </h5>
            </div>
          </nuxt-link>
        </div>
      </div>
      <div class="cardSize">
        <div class="card">
          <nuxt-link :to="'/product-details/OrangeGame'">
            <div
              class="card-img-top"
              style="
                height: 139px;
                background-size: cover;
                background-position: center center;
              "
              :style="
                'background-image: url(' +
                './img/kategori/cat_20220619004243.jpg' +
                ');'
              "
              :alt="'OrangeGame'"
            ></div>
            <div class="card-body">
              <h5 class="card-title text-black" :title="'OrangeGame'">
                OrangeGame
              </h5>
            </div>
          </nuxt-link>
        </div>
      </div>
      <div class="cardSize">
        <div class="card">
          <nuxt-link :to="'/product-details/Nintendo-US-Region-'">
            <div
              class="card-img-top"
              style="
                height: 139px;
                background-size: cover;
                background-position: center center;
              "
              :style="
                'background-image: url(' +
                './img/kategori/cat_20220619003223.jpg' +
                ');'
              "
              :alt="'Nintendo (US Region)'"
            ></div>
            <div class="card-body">
              <h5 class="card-title text-black" :title="'Nintendo (US Region)'">
                Nintendo (US Region)
              </h5>
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
    <!-- <div
        class="section-home-col seven-col mb-5"
        v-if="new_product != null && new_product.length"
      >
        <div class="cardSize" v-for="item in new_product" :key="item.id">
          <div class="card">
            <nuxt-link :to="'/product-details/' + item.url">
              <div
                class="card-img-top"
                style="
                  height: 139px;
                  background-size: cover;
                  background-position: center center;
                "
                :style="'background-image: url(' + item.foto + ');'"
                :alt="item.nama"
              ></div>
              <div class="card-body">
                <h5 class="card-title text-black" :title="item.nama">
                  {{ item.nama }}
                </h5>
              </div>
            </nuxt-link>
          </div>
        </div>
      </div> -->
    <!-- <div class="section-home-col seven-col mb-5" v-else>
        <div class="col-12 text-center m-tb-40">
          <h2 class="text-primary"><mark>Produk Kosong</mark></h2>
        </div>
      </div> -->

    <!-- Pagination -->
    <div class="pagination flex-m flex-w p-t-26">
      <div class="flex-c flex-w w-full p-t-10 m-lr--7">
        <a
          href="javascript:void(0)"
          class="flex-c-m how-pagination1 trans-04 m-all-7 active-pagination1"
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
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "store",
  props: ["active"],
  layout: "default",

  data() {
    return {
      new_product: null,
    };
  },
  // async fetch() {
  //   this.new_product = await fetch(
  //     process.env.apiUrl + "/mobileapi/kategori"
  //   ).then((res) => res.json());
  // },
};
</script>