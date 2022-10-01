<template>
  <div class="featured-img">
    <div class="ratio ratio-16x9 mb-3">
      <img id="imageProd" class="object-cover rounded">
    </div>
    <div class="expander">
      <div id="descProd" class="inner-bit">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate vulputate arcu, etiam porttitor ullamcorper non. Dolor donec venenatis eleifend eros, lectus purus, volutpat lacus.   Tortor, lacinia diam mi, id fermentum est eu enim. Bibendum aliquam nulla consectetur sed feugiat. Viverra porttitor cras tellus, bibendum nulla eu etiam egestas. Morbi nisl, turpis id sit non nulla. In arcu a dui elementum vitae et scelerisque. Et blandit cursus aenean arcu.</p>

        <p>Tincidunt faucibus non, sagittis, posuere adipiscing arcu pellentesque lectus vulputate. Sit et, velit est non ut. In ultrices cursus semper semper viverra varius. Nec et euismod condimentum sapien porttitor dui id. At proin nisi aliquet parturient aenean bibendum eu tellus. Proin tortor sapien eu pulvinar ut sem est. Maecenas mattis sapien molestie dapibus ac. Viverra metus donec massa lorem feugiat bibendum. Sagittis, est nunc maecenas phasellus vitae, ipsum odio. Nulla nec venenatis iaculis ut cras scelerisque. Purus sit volutpat fermentum consectetur aliquam. Tristique tristique nec sodales condimentum nam fringilla tincidunt volutpat odio. Lacus, quisque non sit velit sed arcu luctus. Risus auctor nunc aliquet quis dolor. Purus id ornare sed ac leo a eleifend sapien tincidunt.</p>

        <p>Proin libero, accumsan mauris pulvinar tristique bibendum purus. Vel velit elementum pulvinar tortor, suspendisse. Praesent consequat convallis phasellus morbi vitae eu metus. Fringilla rhoncus, elementum vel gravida commodo faucibus. Massa amet ipsum nunc nisl, pulvinar ac est, at in. Id in vestibulum aliquam eget lectus tellus. Mi neque massa et faucibus. Augue ante convallis mattis odio mauris malesuada pulvinar. Justo, amet ut ac a. Imperdiet tortor arcu scelerisque ullamcorper ultrices sagittis. Et, in massa nunc lorem sed magna amet phasellus cursus.</p>

        <p>Velit rhoncus ultrices pretium elit tincidunt suscipit amet vitae. Neque non risus facilisis sapien. Scelerisque mauris neque, tortor interdum arcu ipsum. Dui purus amet dolor egestas lobortis morbi. Egestas id cras viverra quisque nibh. In auctor id vulputate id lobortis. Mauris nunc pulvinar in condimentum ultrices faucibus dolor fames nullam.</p>
      </div>
    </div>
    <button class="btn btn-link text-primary expand-toggle" href="javascript:void(0)">Tampilkan semua</button>
  </div>
</template>

<script>
export default {

  name: 'ProductDetails',

  data () {
    return {

    }
  },

}
</script>

<style lang="scss" scoped>
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
  }
</style>
