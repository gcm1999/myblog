<template>
  <div class="main">
    <div class="banner">
      <h1>欢迎来到F6博客</h1>
      <p>世界既不黑也不白，而是一道精致的灰</p>
      <!-- <img class="visible-xs" src="@/assets/images/banner.jpeg" alt="" /> -->
      <!-- <div class="circle hidden-xs"></div> -->
      <div class="triangle hidden-xs"></div>
      <ul class="donghua">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
    <div class="contents">
      <div class="slider">
        <div>诺克萨斯</div>
        <div>诺克萨斯</div>
        <div>诺克萨斯</div>
        <div>诺克萨斯</div>
        <div>诺克萨斯</div>
        <div>诺克萨斯</div>
      </div>
      <div class="con">
        <div>德玛西亚</div>
        <div>德玛西亚</div>
        <div>德玛西亚</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "",
  setup() {},
};
</script>
<style scoped lang="stylus">
.main
  .contents
    max-width 1440px
    height 900px
    background-color #eeeeee
    margin 0 auto
    overflow hidden
    .slider
      width 300px
      background-color pink
      float right
    .con
      margin-right 300px
      background-color skyblue
  .banner
    height 360px
    background-color #eaeaea
    background url("@/assets/images/banner.webp") no-repeat
    background-size 100% 100%
    position relative
    overflow hidden
    h1
      text-align center
    p
      text-align center
      font-size 22px
    img
      width 100%
    .circle
      position absolute
      width 100px
      height 100px
      display inline-block
      border-radius 50%
      background-color: #999;
      animation circleMove 10s linear infinite;
    .triangle
      width 0
      height 0
      border-top 141px solid white
      border-bottom 100px solid transparent
      border-left 100px solid transparent
      border-right 100px solid transparent
      animation triMove 18s linear infinite
    .donghua
      position absolute
      bottom 0
      left 0
      height 50px
      width 360px
      display flex
      overflow hidden
      margin 0
      align-items flex-end
      li
        height 100%
        width 10px
        background-color #000
        margin-left 10px
        flex-shrink 0
        animation: loading 6s infinite;
      li:nth-of-type(2)
        animation-delay -5s
      li:nth-of-type(3)
        animation-delay -4s
      li:nth-of-type(4)
        animation-delay -3s
      li:nth-of-type(5)
        animation-delay -2s
      li:nth-of-type(6)
        animation-delay -1s
      li:nth-of-type(7)
        animation-delay -6s
      li:nth-of-type(8)
        animation-delay -5s
      li:nth-of-type(9)
        animation-delay -4s
      li:nth-of-type(10)
        animation-delay -3s
      li:nth-of-type(11)
        animation-delay -2s
      li:nth-of-type(12)
        animation-delay -1s
      li:nth-of-type(13)
        animation-delay -6s
      li:nth-of-type(14)
        animation-delay -5s
      li:nth-of-type(15)
        animation-delay -4s
      li:nth-of-type(16)
        animation-delay -3s
      li:nth-of-type(17)
        animation-delay -2s
      li:nth-of-type(18)
        animation-delay -1s

@keyframes triMove
  100%
    transform rotate(360deg)
// @keyframes circleMove
@keyframes loading
  50%
    height 0
  100%
    height 100%
@media screen and (max-width: 760px)
  p
    font-size 12px!important
</style>