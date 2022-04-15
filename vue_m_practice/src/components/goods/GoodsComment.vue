<template>
    <div class="goods_comment">
        <comment :id="$route.params.id"></comment>
    </div>
</template>

<script>
import Comment from '@/components/common/Comment.vue'
export default {
    components: {
        Comment
    }
}
</script>

<style scoped>
.goods_comment {
    padding: 15px;
}
</style>