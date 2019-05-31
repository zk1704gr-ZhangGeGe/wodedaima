<template>
	<div style='text-align: center;'>
		<h1>修改报岗</h1>
		<el-row>
		  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='船队名称' v-model='shipname'></el-input> </el-col>
		  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='装载量(吨)' v-model='capacity'></el-input> </el-col>
		</el-row>
		<el-row>
		  <el-col :span="12"> 
		    <el-date-picker
			  style='width:300px;margin-top: 20px;' 
		  	  v-model="planjobtime"
		  	  type="datetime"
		  	  placeholder="预计到港时间"
			  value-format='yyyy-MM-dd HH:mm:ss'>
		    </el-date-picker>
		  </el-col>
		  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='报岗人' v-model='reportuser'></el-input> </el-col>
		</el-row>
		<el-row>
			<el-col :span="12"> 
						<el-select v-model="compid" style='width:300px;margin-top: 20px;' placeholder="所属企业">
						<el-option
						  v-for="obj in arr"
						  :key="obj.compid"
						  :label="obj.compname"
						  :value="obj.compid">
						</el-option>
			</el-select>
			</el-col>
			<el-col :span="12"><span></span></el-col>
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
				reportid:'',
				shipname:'',
				capacity:'',
				planjobtime:'',
				reportuser:'',
				compid:'',
				arr:'',
			}
		},
		methods:{
			saveUpdate(){
				// 后端网址
				var url = this.baseUrl+"/produceReport/update"
				// 传递给后端的数据
				var data = {reportid:this.reportid,shipname:this.shipname,capacity:this.capacity,planjobtime:this.planjobtime,reportuser:this.reportuser,
				compid:this.compid};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					// res是后端的响应
					this.$message("修改成功");
					this.$router.push({path:'/ReportList'});
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
			this.reportid = row.reportid;
			this.shipname = row.shipname;
			this.capacity = row.capacity;
			this.reportuser = row.reportuser;
			this.planjobtime = row.planjobtime;
			this.compid = row.compid;
			
			// 后端网址 所属企业
			var url = this.baseUrl+"/baseCompany/list"
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
