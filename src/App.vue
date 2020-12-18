<template>
  <div id="app" v-bind:class="{'bigScreen': isBigScreen, 'smallScreen': !isBigScreen}">
    <router-view keep-alive transition="fade" transition-mode="out-in" v-if="RouterState" ></router-view>
  </div>
</template>

<script>
  export default {
    name: "app",
    components: {
      //Layout
    },
    provide(){
      return {
        reload:this.reload
      }
    },
    data(){
      return{
        RouterState:true,
        isBigScreen: null //是否大屏幕分辨率
      }
    },
    methods:{
       reload(){
          this.RouterState = false;
        this.$nextTick(() => {
          this.RouterState = true;
        })
       },

    },
     created () {
      //页面初始化确定当前屏幕分辨率添加相应的class
      var screeHeight = document.body.clientHeight;
      if(screeHeight < 800) {
        this.isBigScreen = false;
      } else {
        this.isBigScreen = true;
      }
    }

  }
</script>

<style>
@import '../src/assets/css/global.css';
@import '../src/assets/css/iconfont/iconfont.css';

</style>
