<template>  
  <div id="photelist-container">
      <!-- 分类 -->
    <div id="slider" class="mui-slider" data-slider="4">
      <div
        id="sliderSegmentedControl"
        class="
          mui-slider-indicator
          mui-segmented-control
          mui-segmented-control-inverted
          mui-scroll-wrapper
        "
      >
        <div class="mui-scroll">
            <a @click="getPhotoList(item.id)" v-for="item in categoryList" :key="item.id" href="#">
                {{ item.title }} 
            </a>
        </div>
      </div>
    </div>

    <!-- 图文 -->
    <ul id="photo-list">
        <router-link
            tag="li" 
            :to="'/home/photoInfo/' + item.id" 
            v-for="item in photoList" 
            :key="item.id">
                <img v-lazy="item.img_url">
                <div class="info">
                    <h2 class="info-title">{{ item.title }}</h2>
                    <p class="info-body">{{ item.zhaiyao }}</p>
                </div>
        </router-link>
    </ul>
  </div>
</template>

<script>
import mui from '@/lib/mui/js/mui.js'
export default {
    data() {
        return {
            categoryList: [],
            photoList: []
        }
    },
    created() {
        this.getAllCategory()
        this.getPhotoList(0)
    },
    mounted() {
        mui('.mui-scroll-wrapper').scroll()
    },
    methods: {
        getAllCategory() {
            this.$axios.get('/api/getimgcategory')
            .then(result => {
                if(result.data.status === 0) {
                    result.data.message.unshift({ title: '全部分类', id: 0 })
                    this.categoryList = result.data.message
                }
            })
        },
        getPhotoList(categoryId) {
            this.$axios.get('/api/getimages/' + categoryId)
            .then(result => {
                if(result.data.status === 0) {
                    this.photoList = result.data.message
                }
            })
        }
    },
};
</script>

<style scoped>
    #photelist-container {
        padding-top: 40px;
    }
    /* 分类 */
    #slider {
        line-height: 40px;
        border-bottom: 1px solid #ccc;
        padding: 0 5px;
        position: fixed;
        top: 40px;
        background-color: #fff;
    }
    #slider .mui-scroll a {
        font-size: 14px;
        color: #666;
        width: 85px;
        height: 40px;
        display: inline-block;
    }
    /* 图文 */
    #photo-list {
        list-style: none;
        margin: 0;
        padding: 10px;
        padding-bottom: 0;
    }
    #photo-list li {
        text-align: center;
        margin-bottom: 10px;
        box-shadow: 0 0 9px #ccc;
        position: relative;
    }
    #photo-list li img {
        width: 100%;
        display: block;
    }
     #photo-list li img[lazy=loading] {
        width: 40px;
        height: 300px;
        margin: auto;
        }
    #photo-list li .info {
        width: 100%;
        color: #fff;
        text-align: left;
        position: absolute;
        bottom: 0;
        background-color: rgba(0, 0, 0, .4);
        padding: 9px;
    }
    #photo-list li .info .info-title {
        font-size: 16px;
        letter-spacing: 0.13em;
        line-height: 24px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    #photo-list li .info .info-body {
        font-size: 12px;
        letter-spacing: .1em;
        line-height: 18px;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        text-overflow: ellipsis;
        color: #fff;
    }
</style>