<template>
    <div id="shopping_cart">
        <!-- 商品列表 -->
        <div class="mui-card goods-list" v-for="(item, index) in goodsList" :key="item.id">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <img :src="item.thumb_path">
                    <div class="info">
                        <h2>{{ item.title }}</h2>
                        <!-- <p>商品数量</p> -->
                        <cart-number
                            :count="$store.getters.getGoodsCount[item.id]"
                            :maxNum="$store.state.cart[index].stock_quantity"
                            :goodsId="item.id"
                        ></cart-number>
                        <p>
                            <a @click="removeHandle(index, item.id)" href="javascript:;">删除</a>
                            <span class="price">￥{{ item.sell_price }}</span>
                        </p>
                    </div>
                    <mt-switch
                        v-model="$store.getters.getGoodsSelected[item.id]"
                        @change="selectedhandle(item.id, $store.getters.getGoodsSelected[item.id])"
                    ></mt-switch>
                </div>
            </div>
        </div>  

        <!-- 商品结算 -->
        <div class="mui-card settle-accounts">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <div class="left">
                        <p>总计（不含运费）</p>
                        <p>
                            已勾选商品
                            <span class="red">{{ $store.getters.getGoodsTotal.count }}</span>
                            件，总计
                            <span class="red">￥{{ $store.getters.getGoodsTotal.amount }}</span>
                        </p>
                    </div>
                    <mt-button type="danger">去结算</mt-button>
                </div>
            </div>
        </div>  
    </div>
</template>

<script>
import CartNumber from '@/components/common/CartNumber.vue'
export default {
    components: {
        CartNumber
    },
    data() {
        return {
            // 购物车中的所有商品数据
            goodsList: []
        }
    },
    created() {
        this.getGoodsList()
    },
    methods: {
        // 获取购物车商品列表
        getGoodsList() {
            // 获取store中所有商品的id
            let idArr = []
            this.$store.state.cart.forEach(item => idArr.push(item.id))
            // console.log(idArr);
            if(idArr.length <= 0) return
            // 获取购物车商品列表
            this.$axios.get('api/goods/getshopcarlist/' + idArr.join(","))
            .then(result => {
                if(result.data.status === 0) {
                    this.goodsList = result.data.message
                }
            })
        },
        // 删除商品
        removeHandle(index, id) {
            this.goodsList.splice(index, 1)
            // 调用store中删除数据的方法
            this.$store.commit('removeGoodsList', id)
        },
        // 更新商品状态
        selectedhandle(id, status) {
            // console.log(id, status);
            // 调用store更新状态的方法
            this.$store.commit('updateGoodsSelected', { id: id, selected: status })
        }
    },
}
</script>

<style scoped>
/* 商品列表 */
#shopping_cart .goods-list .mui-card-content-inner {
    display: flex;
    align-items: center;
    padding-left: 10px;
}
#shopping_cart .goods-list img {
    width: 70px;
}
#shopping_cart .goods-list .info {
    width: 70%;
    height: 100%;
    padding: 0 15px;
    flex-grow: 1;
}
#shopping_cart .goods-list .info>h2 {
    width: 100%;
    font-size: 14px;
    line-height: 2;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
#shopping_cart .goods-list .info>p {
    display: flex;
    justify-content: right;
    margin-top: 20px;
}
#shopping_cart .goods-list .info>p>a {
    color: lightseagreen;
    font-size: 13px;
}
#shopping_cart .goods-list .info .price {
    color: pink;
    margin-left: 10px;
}
#shopping_cart .mint-switch {
    transform: scale(0.7);
}
/* 商品结算 */
#shopping_cart .settle-accounts .mui-card-content-inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
#shopping_cart .settle-accounts p {
    font-size: 12px;
}
#shopping_cart .settle-accounts .red {
    color: pink;
    font-weight: bolder;
    font-size: 14px;
}
#shopping_cart .settle-accounts .mint-button--danger {
    background-color: pink;
    font-size: 14px;
    line-height: 2;
}
</style>