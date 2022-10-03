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
          <a href="/product-details/Mobile-Legend" title="">
            <div
              class="card-img-top"
              style="
                height: 139px;
                background: url('https://vogame.co.id/cdn/kategori/cat_20220801121105.jpg');
                background-size: cover;
                background-position: center center;
              "
              alt="Mobile Legend"
            ></div>
            <div class="card-body">
              <h5 class="card-title" title="Mobile Legend">Mobile Legend</h5>
              <p class="card-text"></p>
            </div>
          </a>
        </div>
      </div>

      <div class="cardSize">
        <div class="card">
          <a href="/product-details/GoRide" title="">
            <div
              class="card-img-top"
              style="
                height: 139px;
                background: url('https://vogame.co.id/cdn/kategori/cat_20220622153352.jpg');
                background-size: cover;
                background-position: center center;
              "
              alt="GoRide"
            ></div>
            <div class="card-body">
              <h5 class="card-title" title="GoRide">GoRide</h5>
              <p class="card-text"></p>
            </div>
          </a>
        </div>
      </div>

      <div class="cardSize">
        <div class="card">
          <a href="/product-details/GoCar" title="">
            <div
              class="card-img-top"
              style="
                height: 139px;
                background: url('https://vogame.co.id/cdn/kategori/cat_20220622152228.jpg');
                background-size: cover;
                background-position: center center;
              "
              alt="GoCar"
            ></div>
            <div class="card-body">
              <h5 class="card-title" title="GoCar">GoCar</h5>
              <p class="card-text"></p>
            </div>
          </a>
        </div>
      </div>

      <div class="cardSize">
        <div class="card">
          <a href="/product-details/Diva-Karaoke-Express" title="">
            <div
              class="card-img-top"
              style="
                height: 139px;
                background: url('https://vogame.co.id/cdn/kategori/cat_20220622151232.jpg');
                background-size: cover;
                background-position: center center;
              "
              alt="Diva Karaoke Express"
            ></div>
            <div class="card-body">
              <h5 class="card-title" title="Diva Karaoke Express">
                Diva Karaoke Express
              </h5>
              <p class="card-text"></p>
            </div>
          </a>
        </div>
      </div>

      <div class="cardSize">
        <div class="card">
          <a href="/product-details/Skype-Credit" title="">
            <div
              class="card-img-top"
              style="
                height: 139px;
                background: url('https://vogame.co.id/cdn/kategori/cat_20220622140900.jpg');
                background-size: cover;
                background-position: center center;
              "
              alt="Skype Credit"
            ></div>
            <div class="card-body">
              <h5 class="card-title" title="Skype Credit">Skype Credit</h5>
              <p class="card-text"></p>
            </div>
          </a>
        </div>
      </div>

      <div class="cardSize">
        <div class="card">
          <a href="/product-details/eBay-Gift-Card" title="">
            <div
              class="card-img-top"
              style="
                height: 139px;
                background: url('https://vogame.co.id/cdn/kategori/cat_20220620055404.jpg');
                background-size: cover;
                background-position: center center;
              "
              alt="eBay Gift Card"
            ></div>
            <div class="card-body">
              <h5 class="card-title" title="eBay Gift Card">eBay Gift Card</h5>
              <p class="card-text"></p>
            </div>
          </a>
        </div>
      </div>

      <div class="cardSize">
        <div class="card">
          <a href="/product-details/iTunes-Gift-Card-US-Region" title="">
            <div
              class="card-img-top"
              style="
                height: 139px;
                background: url('https://vogame.co.id/cdn/kategori/cat_20220620001149.jpg');
                background-size: cover;
                background-position: center center;
              "
              alt="iTunes Gift Card (US Region)"
            ></div>
            <div class="card-body">
              <h5 class="card-title" title="iTunes Gift Card (US Region)">
                iTunes Gift Card (US Region)
              </h5>
              <p class="card-text"></p>
            </div>
          </a>
        </div>
      </div>

      <div class="cardSize">
        <div class="card">
          <a href="/product-details/H-M" title="">
            <div
              class="card-img-top"
              style="
                height: 139px;
                background: url('https://vogame.co.id/cdn/kategori/cat_20220619224758.jpg');
                background-size: cover;
                background-position: center center;
              "
              alt="H&amp;M"
            ></div>
            <div class="card-body">
              <h5 class="card-title" title="H&amp;M">H&amp;M</h5>
              <p class="card-text"></p>
            </div>
          </a>
        </div>
      </div>

      <div class="cardSize">
        <div class="card">
          <a href="/product-details/OYO-Rooms" title="">
            <div
              class="card-img-top"
              style="
                height: 139px;
                background: url('https://vogame.co.id/cdn/kategori/cat_20220619223834.jpg');
                background-size: cover;
                background-position: center center;
              "
              alt="OYO Rooms"
            ></div>
            <div class="card-body">
              <h5 class="card-title" title="OYO Rooms">OYO Rooms</h5>
              <p class="card-text"></p>
            </div>
          </a>
        </div>
      </div>

      <div class="cardSize">
        <div class="card">
          <a href="/product-details/Saint-Cinnamon" title="">
            <div
              class="card-img-top"
              style="
                height: 139px;
                background: url('https://vogame.co.id/cdn/kategori/cat_20220619223008.jpg');
                background-size: cover;
                background-position: center center;
              "
              alt="Saint Cinnamon"
            ></div>
            <div class="card-body">
              <h5 class="card-title" title="Saint Cinnamon">Saint Cinnamon</h5>
              <p class="card-text"></p>
            </div>
          </a>
        </div>
      </div>

      <div class="cardSize">
        <div class="card">
          <a href="/product-details/OrangeGame" title="">
            <div
              class="card-img-top"
              style="
                height: 139px;
                background: url('https://vogame.co.id/cdn/kategori/cat_20220619004243.jpg');
                background-size: cover;
                background-position: center center;
              "
              alt="OrangeGame"
            ></div>
            <div class="card-body">
              <h5 class="card-title" title="OrangeGame">OrangeGame</h5>
              <p class="card-text"></p>
            </div>
          </a>
        </div>
      </div>

      <div class="cardSize">
        <div class="card">
          <a href="/product-details/Nintendo-US-Region-" title="">
            <div
              class="card-img-top"
              style="
                height: 139px;
                background: url('https://vogame.co.id/cdn/kategori/cat_20220619003223.jpg');
                background-size: cover;
                background-position: center center;
              "
              alt="Nintendo (US Region)"
            ></div>
            <div class="card-body">
              <h5 class="card-title" title="Nintendo (US Region)">
                Nintendo (US Region)
              </h5>
              <p class="card-text"></p>
            </div>
          </a>
        </div>
      </div>
    </div>

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
  props: ['active'],
  layout: "default",

  data() {
    return {};
  },
};
</script>