<template>
	<div>
		<h1>作业量统计</h1>
		<el-date-picker
		  v-model="year"
		  type="year"
		  placeholder="选择年"
		  value-format='yyyy'
		  @change="fn()">
		</el-date-picker>
		<h2>流程作业量对比图</h2>
		<ve-line :data="chartData"></ve-line>
		<h2>设备类别作业量对比图</h2>
		<ve-histogram :data="chartData2"></ve-histogram>
		<h2>设备作业量对比图</h2>
		<ve-histogram :data="chartData3"></ve-histogram>
	</div>
</template>

<script>
	export default {
		name:'',
		data() {
			return {
				chartData: {columns: [],rows: []},
				chartData2: {columns: [],rows: []},
				chartData3: {columns: [],rows: []},
				year:"2018"
			};
		},
		methods:{
			flowAmount(){
				// 后端网址 
				var url = this.baseUrl+"/jobAmount/flowAmount"
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
			devTypeAmount(){
				// 后端网址 
				var url = this.baseUrl+"/jobAmount/devTypeAmount"
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
			devAmount(){
				// 后端网址 
				var url = this.baseUrl+"/jobAmount/devAmount"
				var data={year:this.year};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
				// res是后端的响应
					this.chartData3=res.data;
				})
			},
			fn(){
				this.flowAmount();
				this.devTypeAmount();
				this.devAmount();
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
