<template>
    <div class="goods_description">
        <h3>{{ descriptionInfo.title }}</h3>
        <hr>
        <div class="content" v-html="descriptionInfo.content"></div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            id: this.$route.params.id,
            descriptionInfo: {}
        }
    },
    created() {
        this.getGoodsDescription()
    },
    methods: {
        getGoodsDescription() {
            this.$axios.get('/api/goods/getdesc/' + this.id)
            .then(result => {
                if(result.data.status === 0) {
                    this.descriptionInfo = result.data.message[0]
                }
            })
        }
    },
}
</script>

<style scoped>
.goods_description {
    padding: 0 10px;
}
.goods_description h3 {
    font-size: 18px;
    font-weight: 400;
    text-align: center;
    color: #666;
    text-shadow: 1px -1px 1px #eee;
    margin: 15px 0;
    padding: 0 60px;
    line-height: 1.5;
}
.goods_description .content {
    padding: 15px;
    text-indent: 2em;
    line-height: 2;
}
</style>