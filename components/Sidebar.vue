<template>
  <div class="offcanvas offcanvas-start bg-primary" tabindex="-1" id="offcanvas1" aria-labelledby="offcanvas1L">
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="offcanvas1L"><img src="/img/sikoma-white.png" style="max-width:150px"></h5>
      <button type="button" class="btn p-0 text-white" data-bs-dismiss="offcanvas" aria-label="Close"><Icon icon="ci:close-big" height="24px"/></button>
    </div>
    <div class="offcanvas-body">
      <Login v-if="state == 'login'" v-on:changeState="changeState"/>
      <Register v-if="state == 'register'" v-on:changeState="changeState"/>
      <EmailConfirmation v-if="state == 'success-register'" v-on:changeState="changeState" />
      <MainMenu v-if="state == 'loggedin'" v-on:changeState="changeState"/>
    </div>
  </div>

</template>

<script>
import { Icon } from '@iconify/vue2';
import Login from '~/components/Login';
import Register from '~/components/Register';
import EmailConfirmation from '~/components/EmailConfirmation';
import MainMenu from '~/components/MainMenu';

var stateisLog = 0;

export default {

  name: 'Sidebar',

  components: {
    Icon,
    Login,
    Register,
    EmailConfirmation,
    MainMenu
  },

  data () {
    return {
       state: 'login'
    }
  },

  filters :{
      formUang(money){
        return money.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
      }
  },

  created(){
      var aid = null;
      if (localStorage.getItem('c4Prt7')===null){
          stateisLog = 0;
      }else{
          var dataparti = localStorage.getItem('c4Prt7');
          aid = JSON.parse(dataparti);
          stateisLog = 1;
      }

      if(stateisLog == 1 && aid != null){
          this.state = 'loggedin';
      }else{
          this.state = 'login';
      }
  },

  methods: {
    changeState(state) {
      this.state = state
    }
  }
}
</script>

<style lang="scss" scoped>
@media only screen and (max-width: 767px){
  .offcanvas{
    .offcanvas-header{
      img{
        height: 18px;
      }
    }
  }
}
</style>
