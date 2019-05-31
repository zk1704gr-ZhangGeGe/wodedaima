<template>
	<div>
		<h1>设备利用率</h1>
		<el-date-picker
		  v-model="year"
		  type="year"
		  placeholder="选择年"
		  value-format='yyyy'
		  @change="fn()">
		</el-date-picker>
		<center>
			<el-table :data="list">
				<el-table-column prop="devname" label="设备名称" width="120"></el-table-column>
				<el-table-column prop="amount" label="作业量" width="120"></el-table-column>
				<el-table-column prop="consume" label="能耗(折标煤)" width="120"></el-table-column>
				<el-table-column prop="cost" label="维修成本" width="120"></el-table-column>
			</el-table>
		</center>
	</div>
</template>

<script>
	export default {
		name:'',
		data() {
			return {
				list: [],
				year:"2018"
			};
		},
		methods:{
			cost(){
				// 后端网址 
				var url = this.baseUrl+"/devInfo/cost"
				var data={year:this.year};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
				// res是后端的响应
					this.list=res.data;
				})
			},
			fn(){
				this.cost();
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