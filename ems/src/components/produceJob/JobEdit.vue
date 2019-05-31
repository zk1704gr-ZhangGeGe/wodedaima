<template>
	<div style='text-align: center;'>
		<h1>修改设备信息</h1>
		<el-row>
		  <el-col :span="12"> 
			  <el-select v-model="devid" style='width:300px;margin-top: 20px;' placeholder="请选择设备名称">
					<el-option
					  v-for="obj in arr"
					  :key="obj.devid"
					  :label="obj.devname"
					  :value="obj.devid">
					</el-option>
				</el-select> 
			</el-col>
		    <el-col :span="12"> 
			 <el-date-picker
			   style='width:300px;margin-top: 20px;'
			   v-model="starttime"
			   type="datetime"
			   value-format="yyyy-MM-dd HH:mm:ss"
			   placeholder="请修改开始作业时间">
			 </el-date-picker>
			</el-col>
		</el-row>
		<el-row>
		  <el-col :span="12">
			  <el-date-picker
			    style='width:300px;margin-top: 20px;'
			    v-model="completetime"
			    type="datetime"
			    value-format="yyyy-MM-dd HH:mm:ss"
			    placeholder="请修改结束作业时间">
			  </el-date-picker>
		  </el-col>
		  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='请修改运行时长' v-model='duration'></el-input> </el-col>
		</el-row>
		<el-row>
		  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='请修改作业量' v-model='amount'></el-input> </el-col>
		  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='请修改报岗ID' v-model='reportid'></el-input> </el-col>
		</el-row>
		<el-row style='margin-top: 20px;text-align: center;'>
		  <el-col :span="24" > <el-button type='primary' @click='saveAdd'>确定</el-button> <el-button @click='cancel'>取消</el-button> </el-col>
		</el-row>
	</div>
</template>

<script>
	export default {
		name:'',
		data() {
			return {
				jobid:'',
				devid:'',
				starttime:'',
				completetime:'',
				duration:'',
				amount:'',
				reportid:'',
				arr:[{devid:'',devname:''}]
			}
		},
		methods:{
			saveAdd(){
				// 后端网址
				var url = this.baseUrl+"/produceJob/update"
				// 传递给后端的数据
				var data = {jobid:this.jobid,devid:this.devid,starttime:this.starttime,completetime:this.completetime,duration:this.duration,amount:this.amount,reportid:this.reportid};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					// res是后端的响应
					this.$message("修改成功");
					this.$router.push({path:'/JobList'});
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
			this.jobid = row.jobid;
			this.devid = row.devid;
			this.starttime = row.starttime;
			this.completetime = row.completetime;
			this.duration = row.duration;
			this.amount = row.amount;
			this.reportid = row.reportid;
			
			// 后端网址 设备名称
			var url = this.baseUrl+"/baseDevice/list"
			this.$axios.post(url,this.$qs.stringify(),{
				headers: {
					'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
				}
			}).then(res=>{
			// res是后端的响应
				this.arr=this.arr.concat(res.data);
			})
		}
	}
	
</script>

<style>

</style>
