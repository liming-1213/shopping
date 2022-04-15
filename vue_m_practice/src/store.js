// 导入
import Vue from 'vue'
import vue from 'vue'
import Vuex from 'vuex'

// 使用
Vue.use(Vuex)

// 每次加载页面从本地缓存中获取数据
let cart = JSON.parse(localStorage.getItem('shoppingCart') || "[]")

// 仓库
export const store = new Vuex.Store({
    state: {
        cart: cart
    },
    mutations: {
        // 点击加入购物车
        addToCart(state, goodsList) {
            // 有对应的商品信息，更新数据
            // 没有就push进去
            let flag = true
            state.cart.forEach(item  => {
                if(item.id === goodsList.id) {
                    item.count += parseInt(goodsList.count)
                    flag = false
                    return true
                }
            });
            if(flag) {
                state.cart.push(goodsList)
            }
            // 本地存储
            localStorage.setItem('shoppingCart', JSON.stringify(state.cart))
        },
        // 修改购物车中商品数量
        updateGoods(state, goodsList) {
            state.cart.some(item => {
                if(item.id === goodsList.id) {
                    item.count = parseInt(goodsList.count)
                    return true
                }
            })
            // 把修改数量后的商品保存到本地存储中
            localStorage.setItem('shoppingCart', JSON.stringify(state.cart))
        },
        // 删除商品
        removeGoodsList(state, id) {
            state.cart.some((item, index) => {
                if(item.id === id) {
                    state.cart.splice(index, 1)
                    return true
                }
            })
            // 把删除完毕后的商品保存到本地存储中
            localStorage.setItem('shoppingCart', JSON.stringify(state.cart))
        },
        // 更新商品状态
        updateGoodsSelected(state, info) {
            state.cart.some(item => {
                if(item.id === info.id) {
                    item.selected = info.selected
                    return true
                }
            })
            // 把状态更新后的商品保存到本地存储中
            localStorage.setItem('shoppingCart', JSON.stringify(state.cart))
        }
    },
    getters: {
        // 计算徽标数量
        getAllCount(state) {
            let count = 0
            state.cart.forEach(item => {
                count += item.count
            })
            return count
        },
        // 获取商品数量
        getGoodsCount(state) {
            let num = {}
            state.cart.forEach(item => {
                num[item.id] = item.count
            })
            return num
        },
        // 设置商品状态
        getGoodsSelected(state) {
            let selectedState = {}
            state.cart.forEach(item => {
                selectedState[item.id] = item.selected
            })
            return selectedState
        },
        // 计算选中商品总数及总价
        getGoodsTotal(state) {
            let num = {
                // 勾选数量
                count: 0,
                // 勾选总价
                amount: 0
            }
            state.cart.forEach(item => {
                // 判断商品选中的状态
                if(item.selected) {
                    // 计算总数量
                    num.count += item.count
                    // 计算总价
                    num.amount += item.price * item.count
                }
            })
            return num
        }
    }
})