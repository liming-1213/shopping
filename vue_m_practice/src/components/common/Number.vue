<template>
    <div>
        <div class="mui-numbox" data-numbox-min="1" :data-numbox-max="maxNum">
			<button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
			<input id="test" class="mui-input-numbox" type="number" value="1" @change="countChangeHandle" ref="num">
			<button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
		</div>
    </div>
</template>

<script>
import mui from '@/lib/mui/js/mui.js'
export default {
    props: [
		'maxNum'
	],
	mounted() {
		mui('.mui-numbox').numbox()
	},
	methods: {
		countChangeHandle() {
			// console.log(this.$refs.num.value);
			this.$emit('getCount', parseInt(this.$refs.num.value))
		}
	},
	watch: {
		maxNum: function(newVal, oldVal) {
			// console.log(newVal, oldVal);
			mui('.mui-numbox').numbox().setOption('max', newVal)
		}
	}
}
</script>

<style scoped>
.mui-numbox {
	margin-right: 60px;
	transform: scale(.8);
	transform-origin: left;
}
</style>