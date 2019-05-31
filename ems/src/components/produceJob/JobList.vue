<template>
	<div>
		<h1 style="text-align: center">作业信息</h1>
		<div style="text-align: left;margin:0 0 20px 50px;">
			<el-select v-model="devid" style='width:160px' placeholder="设备名称">
				<el-option
				  v-for="obj in arr"
				  :key="obj.devid"
				  :label="obj.devname"
				  :value="obj.devid">
				</el-option>
			</el-select>
			<el-button @click='search'>查询</el-button>
			<el-button @click='add'>添加</el-button>
		</div>
		<center>
			<el-table :data="list">
				<el-table-column prop="jobid" label="ID" width="80"></el-table-column>
				<el-table-column prop="devname" label="设备名称" width="120"></el-table-column>
				<el-table-column prop="starttime" label="开始作业时间" width="180"></el-table-column>
				<el-table-column prop="completetime" label="结束作业时间" width="180"></el-table-column>
				<el-table-column prop="duration" label="运行时长" width="120"></el-table-column>
				<el-table-column prop="amount" label="作业量" width="120"></el-table-column>
				<el-table-column prop="reportid" label="报岗ID" width="120"></el-table-column>
				<el-table-column label="操作" width="180">
				  <template slot-scope="scope">
					<el-button size="mini" @click="update(scope.row)">编辑</el-button>
					<el-button size="mini" type='danger' @click="del(scope.row.jobid)">删除</el-button>
				  </template>
				</el-table-column>
			</el-table>
		</center>
	</div>
</template>

<script>
	export default {
		name:'',
		data() {
			return {
				devid:'',
				list:[],
				arr:[{devid:'',devname:''}]
			};
		},
		methods:{
			update(row){
				// 跳转
				this.$router.push({name:'JobEdit',params:{row:row}})
			},
			del(jobid){
				// 后端网址
				var url = this.baseUrl+"/produceJob/delete"
				// 传递给后端的数据
				var data = {jobid:jobid};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					// res是后端的响应
					this.$message("删除成功");
					this.search();
				})
			},
			add(){
				// 路由跳转
				this.$router.push({path:'/JobAdd'})
			},
			search(){
				// 后端网址
				var url = this.baseUrl+"/produceJob/search"
				// 传递给后端的数据
				var data = {devid:this.devid};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					this.list = res.data;
				})
			}
		},
		mounted:function(){
			this.search();
			
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
