<template>
    <div>
        <ul class="mui-table-view">
			<li v-for="item in newsList" :key="item.id" class="mui-table-view-cell mui-media">
				<router-link :to="'/home/newsInfo/' + item.id">
					<!-- <img class="mui-media-object mui-pull-right" :src="item.img_url"> -->
					<img class="mui-media-object mui-pull-right" src="@/images/menu05.png">
					<div class="mui-media-body">
                        {{ item.title }}
						<p class="mui-ellipsis">{{ item.zhaiyao }}</p>
                        <p class="my_mui_ellipsis">
                            <span>发表时间：{{ item.add_time | dateFormat("YYYY-MM-DD") }}</span>
                            <span>点击次数: {{ item.click }}</span>
                        </p>
					</div>
				</router-link>
			</li>
		</ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            newsList: []
        }
    },
    created() {
        this.getNewsList();
    },
    methods: {
        getNewsList() {
            this.$axios.get('/api/getnewslist')
            .then(result => {
                if(result.data.status === 0) {
                    this.newsList = result.data.message
                }
            })
        }
    },
}
</script>

<style scoped>
.mui-table-view .mui-media-object {
    max-width: 66px;
    height: 66px;
}
.mui-table-view .mui-media-object.mui-pull-right {
    margin-left: 20px;
}
.mui-media-body {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.mui-media-body .mui-ellipsis{
    font-size: 12px;
    width: 75%;
    margin-top: 7px;
}
.mui-media-body .my_mui_ellipsis {
    font-size: 12px;
    color: pink;
    display: flex;
    justify-content: space-between;
    margin-top: 18px;
}
</style>>
    
