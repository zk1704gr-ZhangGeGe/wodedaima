<template>
	<div>
		<h1>港口能耗对比</h1>
		<el-date-picker
		  v-model="year"
		  type="year"
		  placeholder="选择年"
		  value-format='yyyy'
		  @change="fn()">
		</el-date-picker>
		<h2>港口作业量对比图</h2>
		<ve-line :data="chartData"></ve-line>
		<h2>港口能耗比对比图</h2>
		<ve-line :data="chartData2"></ve-line>
	</div>
</template>

<script>
	export default {
		name:'',
		data() {
			return {
				chartData: {columns: [],rows: []},
				chartData2: {columns: [],rows: []},
				year:"2018"
			};
		},
		methods:{
			consume(){
				// 后端网址 
				var url = this.baseUrl+"/devInfo/consume"
				var data={year:this.year};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
				// res是后端的响应
					this.chartData=res.data;
				})
			},
			amount(){
				// 后端网址 
				var url = this.baseUrl+"/devInfo/amount"
				var data={year:this.year};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
				// res是后端的响应
					this.chartData2=res.data;
				})
			},
			fn(){
				this.consume();
				this.amount();
			}
		},
		mounted:function(){
			this.fn();
		}
	}
</script>

<style>
h2{
	text-align: center;
}
</style>