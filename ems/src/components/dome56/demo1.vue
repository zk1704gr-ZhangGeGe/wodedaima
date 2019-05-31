<!-- html部分 -->
<template>
	<div id="app">
		<el-select v-model="value" placeholder="请选择">
			<el-option
			  v-for="item in options"
			  :key="item.value"
			  :label="item.label"
			  :value="item.value">
			</el-option>
		</el-select>
	</div>
</template>
<!-- js部分 -->
<script>
	export default {
		name:'',
		data() {
			return {
				options: [
					{value: '选项1',label: '黄金糕'}, {value: '选项2',label: '双皮奶'}, {value: '选项3',label: '蚵仔煎'}, {value: '选项4',label: '龙须面'}
					],
				value:''
			};
		},
		methods:{
			
		}
	}
</script>
<!-- css部分 -->
<style>

</style>
