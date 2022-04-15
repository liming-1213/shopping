<template>
  <div>
    <!-- Swipe 轮播 -->
    <!-- <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in swiper" :key="item.id">
        <img :src="item.img" alt="" />
      </mt-swipe-item>
    </mt-swipe> -->
    <swiper :swiper="swiper"></swiper>

    <!-- grad  6个格子 -->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            <router-link to="/home/newsList" href="#">
                <img src="@/images/menu01.png" alt="">
                <div class="mui-media-body">新闻资讯</div>
            </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            <router-link to="/home/photoList">
                <img src="@/images/menu02.png" alt="">
                <div class="mui-media-body">图片分享</div>
            </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            <router-link to="/home/goodsList">
                <img src="@/images/menu03.png" alt="">
                <div class="mui-media-body">商品购买</div>
            </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            <a href="#">
                <img src="@/images/menu04.png" alt="">
                <div class="mui-media-body">留言反馈</div>
            </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            <a href="#">
                <img src="@/images/menu05.png" alt="">
                <div class="mui-media-body">视频专区</div>
            </a>
        </li><li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            <a href="#">
                <img src="@/images/menu06.png" alt="">
                <div class="mui-media-body">联系我们</div>
            </a>
        </li>

    </ul>
  </div>
</template>

<script>
import Swiper from '@/components/common/Swiper.vue';
export default {
  components: {
    Swiper
  },
  data() {
    return {
      swiper: [
        {
          id: 1,
          url: "https://m.zztion.com/",
          img: "http://wangxiao.zztion.com/static/course/20200516/fddd41a35418417507afc0a60cc58bed.png",
        },
        {
          id: 2,
          url: "https://m.zztion.com/",
          img: "http://wangxiao.zztion.com/static/course/20200516/75b7e3d68507c95fa725374c1dc560c2.png",
        },
        {
          id: 3,
          url: "https://m.zztion.com/",
          img: "http://wangxiao.zztion.com/static/course/20200516/83eba24f22e2c1426be628984b24dc6a.jpg",
        },
      ],
    };
  },
};
</script>

<style scoped>
.mint-swipe {
  height: 200px;
  background-color: pink;
}
.mint-swipe img {
  width: 100%;
  height: 100%;
}
.mui-grid-view.mui-grid-9 .mui-media {
    background-color: #fff;
}
.mui-grid-view.mui-grid-9 .mui-media img {
    width: 60px;
    height: 60px;
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell {
    border: none;
}
</style>