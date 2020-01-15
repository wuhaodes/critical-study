<template>
<view class="content">
  <image class="logo" src="../../static/logo.png"></image>
  <view class="title-view">
    <text class="title">{{title}}</text>
  </view>
</view>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      title: 'Hello World'
    }
  },
  onLoad () {

  },
  methods: {}
})
</script>

<style lang="scss">


.content {
  text-align: center;
  height: 400px;

  .logo {
    height: 200px;
    width: 200px;
    margin-top: 200px;
  }

  .title-view {
    margin-top: 100px;
    width: 100%;
    box-sizing: border-box;

    .title {
      font-size: 36px;
      color: rgba(100, 200, 255, 1);
    }
  }
}

</style>
