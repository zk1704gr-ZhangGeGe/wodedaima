<template>
	<div style='text-align: center;'>
		<h1>修改设备故障记录</h1>
		<el-row>
		  <el-col :span="12"> 
		  			<el-select v-model="devid" style='width:300px;margin-top: 20px;' placeholder="请选择修改设备名称">
		  			<el-option
		  			  v-for="obj in arr"
		  			  :key="obj.devid"
		  			  :label="obj.devname"
		  			  :value="obj.devid">
		  			</el-option>
		  </el-select>
		  </el-col> 
		  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='请修改故障原因' v-model='cause'></el-input> </el-col>
		</el-row>
		<el-row>
		  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='请修改报告人' v-model='faultuser'></el-input> </el-col>
		  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='请修改故障时间(分钟)' v-model='faulttime'></el-input> </el-col>
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
				faultId:'',
				devid:'',
				cause:'',
				faultuser:'',
				faulttime:'',
				arr:'',

			}
		},
		methods:{
			saveUpdate(){
				// 后端网址
				var url = this.baseUrl+"/produceFault/update"
				// 传递给后端的数据
				var data = {faultId:this.faultId,devid:this.devid,cause:this.cause,faultuser:this.faultuser,faulttime:this.faulttime};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					// res是后端的响应
					this.$message("修改成功");
					this.$router.push({path:'/FaultList'});
				})
			},
			cancel(){
				this.$router.go(-1);
			}
		},
		mounted:function(){
			// 接收路由传递的数据
			var row = this.$route.params.row;
			// 回显
			this.faultId = row.faultId;
			this.devid = row.devid;
			this.cause = row.cause;
			this.faultuser = row.faultuser;
			this.faulttime = row.faulttime;
			
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
