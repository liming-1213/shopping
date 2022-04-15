<template>
    <div>
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in swiper" :key="item.id">
                <img :src="item.img" alt="" />
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>

<script>
export default {
    props: [
        'swiper'
    ]
}
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
</style>