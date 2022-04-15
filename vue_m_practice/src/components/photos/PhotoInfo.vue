<template>
    <div>
        <div class="photoinfo_container">
            <!-- 大标题 -->
            <h3 class="title">{{ photoInfo.title }}</h3>
            <!-- 子标题 -->
            <p class="subtitle">
                <span>作者：Liming</span>
                <span>点击:{{ photoInfo.click }}次</span>
                <span>发表时间：{{ photoInfo.add_time | dateFormat("YYYY-MM-DD") }}</span>
            </p>
            <hr>
            <!-- 缩略图 -->
            <vue-preview :slides="thumbList" @close="handleClose" class="preview"></vue-preview>
            <!-- 内容 -->
            <div class="content" v-html="photoInfo.content"></div>
            <!-- 评论区 -->
            <comment :id="this.id"></comment>
        </div>
    </div>
</template>

<script>
// 导入公共组件模板---底部评论Comment.vue
import Comment from '@/components/common/Comment.vue'
export default {
    // 注册子组件
    components: {
        Comment
    },
    data() {
        return {
            id: this.$route.params.id,
            // 图文详情
            photoInfo: {},
            // 缩略图
            thumbList: []
        }
    },
    created() {
        this.getPhotoInfo()
        this.getThumbs()
    },
    methods: {
        // 图文详情
        getPhotoInfo() {
            this.$axios.get('/api/getimageInfo/' + this.id)
            .then(result => {
                if(result.data.status === 0) {
                    this.photoInfo = result.data.message[0];
                }
            })
        },
        // 缩略图
        getThumbs() {
            this.$axios.get('/api/getthumimages/' + this.id)
            .then(result => {
                if(result.data.status === 0) {
                    // 循环每个图片数据，补全msrc和图片宽高
                    result.data.message.forEach(item => {
                        item.msrc = item.src
                        item.w = 200
                        item.h = 200
                    })
                    this.thumbList = result.data.message
                }
            })
        },
        handleClose () {
            // console.log('close event')
      }
    },
}
</script>

<style scoped>
    .photoinfo_container {
        padding: 0 10px;
    }
    .photoinfo_container .title {
        font-size: 18px;
        font-weight: 400;
        text-align: center;
        color: #666;
        text-shadow: 1px -1px 1px #eee;
        margin: 15px 0;
        padding: 0 60px;
        line-height: 1.5;
    }
    .photoinfo_container .subtitle {
        font-size: 12px;
        color: pink;
        display: flex;
        justify-content: space-around;
        margin-bottom: 0;
    }
    .photoinfo_container hr {
        margin-top: 0;
    }
    .photoinfo_container .content {
        padding: 6px;
        text-indent: 2em;
        font-size: 8px;
    }
</style>