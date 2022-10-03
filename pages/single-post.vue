<template>
  <div>
    <div class="container">
      <div class="ratio ratio-36x9">
        <img src="/img/image-2.png" class="object-cover">
      </div>
      <section>
        <div class="text-primary"><small>19 OCT 2021 • Promo</small></div>
        <h1 class="text-primary">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa tempus, ac aliquet et quis enim lobortis. </h1>
        <div class="text-dark mb-3">
          <p>Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc porta tellus vel diam imperdiet, ut commodo nisi tincidunt. Nullam eros arcu, laoreet et eleifend non, vehicula vel nisl. Etiam blandit dignissim ligula nec pretium. Curabitur at mauris viverra, mollis nulla porttitor, commodo nulla. Nunc et pellentesque urna. Nunc posuere, mi quis mattis sodales, ligula turpis suscipit odio, at lobortis turpis magna aliquam dui. Sed posuere, tortor id sollicitudin gravida, neque tortor gravida lorem, ac posuere quam ex sed ex. Donec scelerisque ac turpis at facilisis. Aliquam metus ligula, egestas in rutrum sit amet, elementum vitae diam. Etiam condimentum cursus pharetra. Duis non sagittis lorem.</p>

          <p>Praesent vitae laoreet diam, mattis viverra elit. Curabitur ut efficitur nunc, a vestibulum magna. Quisque mollis enim vel aliquam elementum. Vivamus suscipit felis in nibh porta, et ornare lorem eleifend. Ut auctor tristique ante sit amet tincidunt. Donec tincidunt lacinia justo eu maximus. Sed eget turpis eu tellus volutpat vulputate quis ac mi. Nullam ultricies facilisis elit et laoreet. Aliquam interdum magna nibh, a lobortis augue euismod et. Quisque sagittis risus a nibh rhoncus, eget maximus neque dapibus. Sed pretium posuere orci, ut commodo libero finibus ut. Ut massa nisi, tempor dapibus vulputate sed, eleifend vitae sem. Nunc quis urna tellus.</p>

          <p>Suspendisse pretium ligula euismod eros euismod, ultrices dignissim ligula egestas. Aliquam erat volutpat. Duis viverra erat eget justo tincidunt rutrum. Donec porttitor pretium nulla eget elementum. Aliquam eu leo quis tellus tristique scelerisque. Fusce congue, mauris pulvinar malesuada pulvinar, metus mauris ultricies mi, eu consectetur purus ex a dolor. Quisque tristique vestibulum justo, at viverra orci fringilla ut. Nunc non nibh nisi. Nulla nisi neque, viverra eget felis at, scelerisque tincidunt tellus. Praesent congue rutrum egestas. Etiam egestas est vitae turpis ultrices tincidunt. Quisque pulvinar auctor est, in mattis sem elementum sed. Quisque at mauris auctor, lacinia erat eget, venenatis ante. Donec condimentum nec sapien malesuada rutrum.</p>
        </div>
        <div class="btn-share">
          <button class="btn btn-link bg-transparent border-0"><Icon icon="logos:whatsapp" height="36px"/></button>
          <button class="btn btn-link bg-transparent border-0"><Icon icon="logos:facebook" height="36px"/></button>
          <button class="btn btn-link bg-transparent border-0"><Icon icon="logos:twitter" height="36px"/></button>
          <button class="btn btn-link bg-transparent border-0"><Icon icon="akar-icons:link-chain" height="36px"/></button>     
        </div>
      </section>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from '~/components/Footer.vue';
import { Icon } from '@iconify/vue2';
export default {

  name: 'single-post',

  layout: 'pages',

  components: {
    Footer,
    Icon
  },

  data () {
    return {

    }
  }
}
</script>

<style lang="css" scoped>
</style>