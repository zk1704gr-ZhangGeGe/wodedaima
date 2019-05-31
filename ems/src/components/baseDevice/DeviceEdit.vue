<template>
	<div style='text-align: center;'>
		<h1>修改设备信息</h1>
		<el-row>
		  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='请修改设备名称' v-model='devname'></el-input> </el-col>
		  <el-col :span="12"> 
		   <el-select v-model="typeid" style='width:300px;margin-top: 20px;' placeholder="请选择设备类别">
			<el-option
			  v-for="obj in arr1"
			  :key="obj.typeid"
			  :label="obj.typename"
			  :value="obj.typeid">
			</el-option>
		   </el-select>
		  </el-col>
		</el-row>
		<el-row>
		  <el-col :span="12"> 
			<el-select v-model="compid" style='width:300px;margin-top: 20px;' placeholder="请修改所属企业">
			<el-option
			  v-for="obj in arr"
			  :key="obj.compid"
			  :label="obj.compname"
			  :value="obj.compid">
			</el-option>
		  </el-select>
		  </el-col> 
		  <el-col :span="12"> <el-date-picker v-model="devdate" type="date" placeholder="请修改投入日期" style='width:300px;margin-top: 20px;' value-format='yyyy-MM-dd'> </el-date-picker> </el-col>
		</el-row>
		<el-row>
		  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='请修改责任人' v-model='devuser'></el-input> </el-col>
		  <el-col :span="12"> <span></span> </el-col>
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
				devid:'',
				devname:'',
				typeid:'',
				devdate:'',
				devuser:'',
				compid:'',
				arr:'',
				arr1:''
			}
		},
		methods:{
			saveAdd(){
				// 后端网址
				var url = this.baseUrl+"/baseDevice/update"
				// 传递给后端的数据
				var data = {devid:this.devid,devname:this.devname,typeid:this.typeid,devdate:this.devdate,devuser:this.devuser,compid:this.compid};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					// res是后端的响应
					this.$message("修改成功");
					this.$router.push({path:'/DeviceList'});
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
			this.devid = row.devid;
			this.devname = row.devname;
			this.typeid = row.typeid;
			this.devdate = row.devdate;
			this.devuser = row.devuser;
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
			
			// 后端网址 设备类别
			var url = this.baseUrl+"/baseDevtype/list"
			this.$axios.post(url,this.$qs.stringify(),{
				headers: {
					'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
				}
			}).then(res1=>{
			// res是后端的响应
				this.arr1=res1.data;
			})
		}
	}
	
</script>

<style>

</style>
