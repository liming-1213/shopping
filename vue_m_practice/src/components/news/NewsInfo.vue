<template>
    <div>
        <div class="newsinfo_container">
            <!-- 大标题 -->
            <h3 class="title">{{ newsInfo.title }}</h3>
            <!-- 子标题 -->
            <p class="subtitle">
                <span>作者：Liming</span>
                <span>点击:{{ newsInfo.click }}次</span>
                <span>发表时间：{{ newsInfo.add_time | dateFormat }}</span>
            </p>
            <hr>
            <!-- 内容 -->
            <div class="content" v-html="newsInfo.content"></div>
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
            newsInfo: {}
        }
    },
    created() {
        this.getNewsInfo();
    },
    methods: {
        getNewsInfo() {
            this.$axios.get('/api/getnew/' + this.id)
            .then(result => {
                if(result.data.status === 0) {
                    this.newsInfo = result.data.message[0];
                }
            })
        }
    },
}
</script>

<style scoped>
    .newsinfo_container {
        padding: 0 10px;
    }
    .newsinfo_container .title {
        font-size: 18px;
        font-weight: 400;
        text-align: center;
        color: #666;
        text-shadow: 1px -1px 1px #eee;
        margin: 15px 0;
        padding: 0 60px;
        line-height: 1.5;
    }
    .newsinfo_container .subtitle {
        font-size: 12px;
        color: pink;
        display: flex;
        justify-content: space-around;
        margin-bottom: 0;
    }
    .newsinfo_container hr {
        margin-top: 0;
    }
    .newsinfo_container .content {
        padding: 15px;

    }
    .newsinfo_container .content img {
        width: 100%;
        margin: 10px 0;
    }
</style>