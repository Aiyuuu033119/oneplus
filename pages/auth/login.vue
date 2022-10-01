<template>
    <div class="container w-50">
        <Login/>
    </div>
</template>
<script>
    import Login from '~/components/Login.vue';
    export default {
    
      name: 'login',
    
      layout: 'pages',
    
      components: {
        Login
      },
    
      data () {
        return {
            // news : null,
        }
      },
    //   async fetch() {
    //       this.news = await fetch(process.env.apiUrl+'/mobileapi/news_all').then((res) => res.json());
    //       console.log(this.news);
    //   }
    }
    </script>