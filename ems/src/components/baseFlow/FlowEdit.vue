<template>
	<div style='text-align: center;'>
		<h1>修改流程信息</h1>
		<el-row>
		  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='请修改流程名称' v-model='flowname'></el-input> </el-col>
		  <el-col :span="12"> 
		   <el-select v-model="dljid" style='width:300px;margin-top: 20px;' placeholder="请选择斗轮机">
				<el-option
				  v-for="obj in arr1"
				  :key="obj.devid"
				  :label="obj.devname"
				  :value="obj.devid">
				</el-option>
		   </el-select>
		  </el-col>
		</el-row>
		<el-row>
		  <el-col :span="12"> 
			<el-select v-model="zcjid" style='width:300px;margin-top: 20px;' placeholder="请选择装船机">
				<el-option
				  v-for="obj in arr2"
				  :key="obj.devid"
				  :label="obj.devname"
				  :value="obj.devid">
				</el-option>
			</el-select>
		  </el-col> 
		  <el-col :span="12"> 
		   <el-select v-model="pdjid" style='width:300px;margin-top: 20px;' placeholder="请选择皮带机">
			<el-option
			  v-for="obj in arr3"
			  :key="obj.devid"
			  :label="obj.devname"
			  :value="obj.devid">
			</el-option>
		   </el-select>
		   </el-col>
		</el-row>
		<el-row>
		  <el-col :span="12"> 
		   <el-select v-model="compid" style='width:300px;margin-top: 20px;' placeholder="请选择所属企业">
				<el-option
				  v-for="obj in arr"
				  :key="obj.compid"
				  :label="obj.compname"
				  :value="obj.compid">
				</el-option>
				</el-select>
		   </el-col>
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
				flowid:'',
				flowname:'',
				dljid:'',
				zcjid:'',
				pdjid:'',
				compid:'',
				arr:'',
				arr1:'',
				arr2:'',
				arr3:'',
			}
		},
		methods:{
			saveAdd(){
				// 后端网址
				var url = this.baseUrl+"/baseFlow/update"
				// 传递给后端的数据
				var data = {flowid:this.flowid,flowname:this.flowname,dljid:this.dljid,zcjid:this.zcjid,pdjid:this.pdjid,compid:this.compid};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					// res是后端的响应
					this.$message("修改成功");
					this.$router.push({path:'/FlowList'});
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
			this.flowid = row.flowid;
			this.flowname = row.flowname;
			this.dljid = row.dljid;
			this.zcjid = row.zcjid;
			this.pdjid = row.pdjid;
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
			
			// 后端网址 斗轮机
			var url = this.baseUrl+"/baseDevice/findDljByCompid"
			// 传递给后端的数据
			var data = {typeid:this.dljid};
			this.$axios.post(url,this.$qs.stringify(data),{
				headers: {
					'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
				}
			}).then(res=>{
			// res是后端的响应
				this.arr1=res.data;
			})
			
			// 后端网址 装船机
			var url = this.baseUrl+"/baseDevice/findCzjByCompid"
			// 传递给后端的数据
			var data = {typeid:this.zcjid};
			this.$axios.post(url,this.$qs.stringify(data),{
				headers: {
					'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
				}
			}).then(res=>{
			// res是后端的响应
				this.arr2=res.data;
			})
			
			// 后端网址 皮带机
			var url = this.baseUrl+"/baseDevice/findPdjByCompid"
			// 传递给后端的数据
			var data = {typeid:this.pdjid};
			this.$axios.post(url,this.$qs.stringify(data),{
				headers: {
					'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
				}
			}).then(res=>{
			// res是后端的响应
				this.arr3=res.data;
			})
		}
	}
	
</script>

<style>

</style>
