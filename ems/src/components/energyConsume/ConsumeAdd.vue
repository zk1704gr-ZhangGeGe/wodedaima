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
		  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='请添加电耗' v-model='electric'></el-input> </el-col>
		</el-row>
		<el-row>
		  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='请添加水耗' v-model='water'></el-input> </el-col>
		  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='请添加油耗' v-model='oil'></el-input> </el-col>
		</el-row>
		<el-row>
		  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='请添加报岗ID' v-model='reportid'></el-input> </el-col>
		  <el-col :span="12"><span></span></el-col>
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
				consumeid:'',
				devid:'',
				electric:'',
				water:'',
				oil:'',
				reportid:'',
				arr:[{devid:'',devname:''}]
			}
		},
		methods:{
			saveAdd(){
				// 后端网址
				var url = this.baseUrl+"/energyConsume/insert"
				// 传递给后端的数据
				var data = {consumeid:this.consumeid,devid:this.devid,electric:this.electric,water:this.water,oil:this.oil,reportid:this.reportid};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					// res是后端的响应
					this.$message("添加成功");
					this.$router.push({path:'/ConsumeList'});
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
				this.arr=this.arr.concat(res.data);
			})
		}
	}
	
</script>

<style>

</style>
