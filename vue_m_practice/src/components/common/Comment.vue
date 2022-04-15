<template>
    <div id="comment_container">
        <h3>发表评论</h3>
        <hr>
        <textarea v-model="msg" placeholder="请输入评论内容(最多120字)" maxlength="120" @keyup.enter="postCommentHandle()"></textarea>
        <mt-button type="primary" size="large" @click="postCommentHandle()">发表评论</mt-button>

        <!-- 评论区 -->
        <div class="comment_list">
            <div class="comment_item" v-for="(item, index) in comments" :key="item.id">
                <div class="comment_title">
                    <strong>第{{ index + 1 }}楼</strong>
                    <span>用户：{{ item.user_name }}</span>
                    <span>发表时间：{{ item.add_time | dateFormat }}</span>
                </div>
                <div class="comment_body">{{ item.content }}</div>
            </div>
        </div>

        <!-- 加载更多 -->
        <mt-button type=danger size="large" plain @click="getMoreHandle()">加载更多</mt-button>
    </div>
</template>

<script>
import { Toast } from 'mint-ui'
export default {
    data() {
        return {
            comments: [],
            msg: "",
            pageIndex:1
        }
    },
    props: [
        'id'
    ],
    // 页面初始化获取评论
    created() {
        this.getComments()
    },
    methods: {
        // 获取评论
        getComments() {
            this.$axios.get('/api/getcomments/' + this.id + '?pageindex=' + this.pageIndex)
            .then(result => {
                if(result.data.status === 0) {
                    if(result.data.message.length != 0) {
                        this.comments = this.comments.concat(result.data.message);
                    }else {
                        Toast('没有更多评论！')
                    }
                }else {
                    Toast('获取评论失败！')
                }
            })
        },
        // 点击发表评论
        postCommentHandle() {
            if(this.msg.trim().length === 0) {
                return Toast("评论内容不能为空！")
            }
            // 参数一：请求的URL
            // 参数二：提交给服务器的数据对象
            this.$axios.post('/api/postcomment/' + this.id, {
                content: this.msg.trim()
            }).then(result => {
                if(result.data.status === 0) {
                    let cmt = {
                        user_name: "匿名用户",
                        add_time: Date.now(),
                        content: this.msg.trim()
                    }
                    this.comments.unshift(cmt)
                    this.msg = ""
                }
            })
        },
        // 加载更多
        getMoreHandle() {
            this.pageIndex++
            this.getComments()
        }
    },
}
</script>

<style scoped>
/* 发表评论 */
#comment_container h3 {
    font-size: 16px;
    color: #666;
    font-weight: 500;
}
#comment_container textarea {
    font-size: 12px;
    height: 120px;
    margin: 0;
}
#comment_container button {
    background-color: pink;
    font-size: 16px;
}
/* 评论区 */
#comment_container .comment_list {
    margin: 10px 0 5px;
}
#comment_container .comment_list .comment_item {
    font-size: 12px;
    margin-top: 5px;
}
#comment_container .comment_list .comment_item .comment_title {
    display: flex;
    justify-content: space-around;
    background-color: #ccc;
    opacity: .9;
}
#comment_container .comment_list .comment_item .comment_body {
    padding: 10px;
    line-height: 1.5;
    letter-spacing: .1em;
    text-indent: 2em;
    border: 1px solid #ccc;
    border-top: none;
    opacity: .9;
    min-height: 40px;
}
#comment_container .mint-button--danger.is-plain {
    background-color: transparent;
    font-size: 14px;
    border-color: pink;
    color: pink;
    margin-bottom: 10px;
}
</style>