<template>
  <div
    class="tab-pane fade"
    :class="active === 3 && 'show active'"
    id="four"
    role="tabpanel"
    aria-labelledby="four-tab"
  >
    <div
      class="section-home-col seven-col mb-5"
    >
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
      <div class="cardSize">
        <div class="card">
          <nuxt-link :to="'/product-details/Mojang-Minecraft'">
            <div
              class="card-img-top"
              style="
                height: 139px;
                background-size: cover;
                background-position: center center;
              "
              :style="
                'background-image: url(' +
                './img/kategori/cat_20220619001318.jpg' +
                ');'
              "
              :alt="'Mojang Minecraft'"
            ></div>
            <div class="card-body">
              <h5 class="card-title text-black" :title="'Mojang Minecraft'">
                Mojang Minecraft
              </h5>
            </div>
          </nuxt-link>
        </div>
      </div>
      <div class="cardSize">
        <div class="card">
          <nuxt-link :to="'/product-details/Marvel-Super-War'">
            <div
              class="card-img-top"
              style="
                height: 139px;
                background-size: cover;
                background-position: center center;
              "
              :style="
                'background-image: url(' +
                './img/kategori/cat_20220618220253.jpg' +
                ');'
              "
              :alt="'Marvel Super War'"
            ></div>
            <div class="card-body">
              <h5 class="card-title text-black" :title="'Marvel Super War'">
                Marvel Super War
              </h5>
            </div>
          </nuxt-link>
        </div>
      </div>
      <div class="cardSize">
        <div class="card">
          <nuxt-link :to="'/product-details/Blizzard'">
            <div
              class="card-img-top"
              style="
                height: 139px;
                background-size: cover;
                background-position: center center;
              "
              :style="
                'background-image: url(' +
                './img/kategori/cat_20220617192340.jpg' +
                ');'
              "
              :alt="'Blizzard'"
            ></div>
            <div class="card-body">
              <h5 class="card-title text-black" :title="'Blizzard'">
                Blizzard
              </h5>
            </div>
          </nuxt-link>
        </div>
      </div>
      <div class="cardSize">
        <div class="card">
          <nuxt-link :to="'/product-details/XBOX-US-REGION-'">
            <div
              class="card-img-top"
              style="
                height: 139px;
                background-size: cover;
                background-position: center center;
              "
              :style="
                'background-image: url(' +
                './img/kategori/cat_20220620000511.jpg' +
                ');'
              "
              :alt="'XBOX (US REGION)'"
            ></div>
            <div class="card-body">
              <h5 class="card-title text-black" :title="'XBOX (US REGION)'">
                XBOX (US REGION)
              </h5>
            </div>
          </nuxt-link>
        </div>
      </div>
      <div class="cardSize">
        <div class="card">
          <nuxt-link :to="'/product-details/WAWA-GAMES'">
            <div
              class="card-img-top"
              style="
                height: 139px;
                background-size: cover;
                background-position: center center;
              "
              :style="
                'background-image: url(' +
                './img/kategori/cat_20220617162508.jpg' +
                ');'
              "
              :alt="'WAWA GAMES'"
            ></div>
            <div class="card-body">
              <h5 class="card-title text-black" :title="'WAWA GAMES'">
                WAWA GAMES
              </h5>
            </div>
          </nuxt-link>
        </div>
      </div>
      <div class="cardSize">
        <div class="card">
          <nuxt-link :to="'/product-details/-SPEED-DRIFTERS'">
            <div
              class="card-img-top"
              style="
                height: 139px;
                background-size: cover;
                background-position: center center;
              "
              :style="
                'background-image: url(' +
                './img/kategori/cat_20220921174424.jpg' +
                ');'
              "
              :alt="'SPEED DRIFTERS'"
            ></div>
            <div class="card-body">
              <h5 class="card-title text-black" :title="'SPEED DRIFTERS'">
                SPEED DRIFTERS
              </h5>
            </div>
          </nuxt-link>
        </div>
      </div>
      <div class="cardSize">
        <div class="card">
          <nuxt-link :to="'/product-details/SKYEGRID'">
            <div
              class="card-img-top"
              style="
                height: 139px;
                background-size: cover;
                background-position: center center;
              "
              :style="
                'background-image: url(' +
                './img/kategori/cat_20220619011309.jpg' +
                ');'
              "
              :alt="'SKYEGRID'"
            ></div>
            <div class="card-body">
              <h5 class="card-title text-black" :title="'SKYEGRID'">
                SKYEGRID
              </h5>
            </div>
          </nuxt-link>
        </div>
      </div>
      <div class="cardSize">
        <div class="card">
          <nuxt-link :to="'/product-details/Razer-Pin'">
            <div
              class="card-img-top"
              style="
                height: 139px;
                background-size: cover;
                background-position: center center;
              "
              :style="
                'background-image: url(' +
                './img/kategori/cat_20220619010958.jpg' +
                ');'
              "
              :alt="'Razer-Pin'"
            ></div>
            <div class="card-body">
              <h5 class="card-title text-black" :title="'Razer-Pin'">
                Razer-Pin
              </h5>
            </div>
          </nuxt-link>
        </div>
      </div>
      <div class="cardSize">
        <div class="card">
          <nuxt-link :to="'/product-details/PUBG-FOR-PC-STEAM-'">
            <div
              class="card-img-top"
              style="
                height: 139px;
                background-size: cover;
                background-position: center center;
              "
              :style="
                'background-image: url(' +
                './img/kategori/cat_20220617153322.jpg' +
                ');'
              "
              :alt="'PUBG FOR PC (STEAM)'"
            ></div>
            <div class="card-body">
              <h5 class="card-title text-black" :title="'PUBG FOR PC (STEAM)'">
                PUBG FOR PC (STEAM)
              </h5>
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
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
      game: null,
    };
  },
  async fetch() {
    this.game = await fetch(process.env.apiUrl + "/mobileapi/kategori").then(
      (res) => res.json()
    );
  },
};
</script>

<style lang="scss" scoped>
</style>
