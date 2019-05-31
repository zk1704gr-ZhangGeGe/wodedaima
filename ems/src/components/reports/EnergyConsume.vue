<template>
	<div>
		<h1>企业用能模型</h1>
		<el-date-picker
		  v-model="year"
		  type="year"
		  placeholder="选择年"
		  value-format='yyyy'
		  @change="fn()">
		</el-date-picker>
		<h2>流程能耗比对比图</h2>
		<ve-line :data="chartData1"></ve-line>
		<h2>设备类别能耗比对比图</h2>
		<ve-histogram :data="chartData2"></ve-histogram>
		<h2>设备能耗比对比图</h2>
		<ve-line :data="chartData3"></ve-line>
		<h2>设备单位作业量耗电量对比图</h2>
		<ve-histogram :data="chartData4"></ve-histogram>
		<h2>设备单位作业量耗水量对比图</h2>
		<ve-line :data="chartData5"></ve-line>
		<h2>设备单位作业量耗油量对比图</h2>
		<ve-histogram :data="chartData6"></ve-histogram>
	</div>
</template>

<script>
	export default {
		name:'',
		data() {
			return {
				chartData1: {columns: [],rows: []},
				chartData2: {columns: [],rows: []},
				chartData3: {columns: [],rows: []},
				chartData4: {columns: [],rows: []},
				chartData5: {columns: [],rows: []},
				chartData6: {columns: [],rows: []},
				year:"2018"
			};
		},
		methods:{
			flowConsume(){
				// 后端网址 
				var url = this.baseUrl+"/energyConsume/flowConsume"
				var data={year:this.year};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
				// res是后端的响应
					this.chartData1=res.data;
				})
			},
			devTypeConsume(){
				// 后端网址 
				var url = this.baseUrl+"/energyConsume/devTypeConsume"
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
			devConsume(){
				// 后端网址 
				var url = this.baseUrl+"/energyConsume/devConsume"
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
			electricConsume(){
				// 后端网址 
				var url = this.baseUrl+"/energyConsume/electricConsume"
				var data={year:this.year};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
				// res是后端的响应
					this.chartData4=res.data;
				})
			},
			waterConsume(){
				// 后端网址 
				var url = this.baseUrl+"/energyConsume/waterConsume"
				var data={year:this.year};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
				// res是后端的响应
					this.chartData5=res.data;
				})
			},
			oilConsume(){
				// 后端网址 
				var url = this.baseUrl+"/energyConsume/oilConsume"
				var data={year:this.year};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
				// res是后端的响应
					this.chartData6=res.data;
				})
			},
			fn(){
				this.flowConsume();
				this.devTypeConsume();
				this.devConsume();
				this.electricConsume();
				this.waterConsume();
				this.oilConsume();
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
