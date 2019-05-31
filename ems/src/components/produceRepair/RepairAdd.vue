<template>
	<div style='text-align: center;'>
		<h1>添加设备维修记录</h1>
		<el-row>
		  <el-col :span="12"> 
		  			<el-select v-model="devid" style='width:300px;margin-top: 20px;' placeholder="请选择添加设备名称">
		  			<el-option
		  			  v-for="obj in arr"
		  			  :key="obj.devid"
		  			  :label="obj.devname"
		  			  :value="obj.devid">
		  			</el-option>
		  </el-select>
		  </el-col> 
		  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='请添加维修原因' v-model='cause'></el-input> </el-col>
		</el-row>
		<el-row>
		  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='请添加费用' v-model='cost'></el-input> </el-col>
		  <el-col :span="12"> <el-date-picker v-model="repairdate" type="date" placeholder="请选择维修日期" style='width:300px;margin-top: 20px;' value-format='yyyy-MM-dd'> </el-date-picker> </el-col>
		</el-row>
		<el-row style='margin-top: 20px;text-align: center;'>
		  <el-col :span="24" > <el-button type='primary' @click='saveUpdate'>确定</el-button> <el-button @click='cancel'>取消</el-button> </el-col>
		</el-row>
	</div>
</template>

<script>
	export default {
		name:'',
		data() {
			return {
				repairid:'',
				devid:'',
				cause:'',
				cost:'',
				repairdate:'',
				arr:'',

			}
		},
		methods:{
			saveUpdate(){
				// 后端网址
				var url = this.baseUrl+"/produceRepair/insert"
				// 传递给后端的数据
				var data = {repairid:this.repairid,devid:this.devid,cause:this.cause,cost:this.cost,repairdate:this.repairdate};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					// res是后端的响应
					this.$message("添加成功");
					this.$router.push({path:'/RepairList'});
				})
			},
			cancel(){
				this.$router.go(-1);
			}
		},
		mounted:function(){
			// 后端网址 设备名称
			var url = this.baseUrl+"/baseDevice/list"
			this.$axios.post(url,this.$qs.stringify(),{
				headers: {
					'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
				}
			}).then(res=>{
			// res是后端的响应
				this.arr=res.data;
			})
		}
	}
	
</script>

<style>

</style>
