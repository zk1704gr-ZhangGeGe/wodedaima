<template>
	<div>
		<h1 style="text-align: center">故障信息</h1>
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
				<el-table-column prop="faultId" label="ID" width="80"></el-table-column>
				<el-table-column prop="devname" label="设备名称" width="120"></el-table-column>
				<el-table-column prop="cause" label="故障原因" width="120"></el-table-column>
				<el-table-column prop="faultuser" label="报告人" width="120"></el-table-column>
				<el-table-column prop="faulttime" label="故障时间(分钟) " width="180"></el-table-column>
				<el-table-column label="操作" width="180">
				  <template slot-scope="scope">
					<el-button size="mini" @click="update(scope.row)">编辑</el-button>
					<el-button size="mini" type='danger' @click="del(scope.row.devid)">删除</el-button>
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
				this.$router.push({name:'FaultEdit',params:{row:row}})
			},
			del(faultId){
				// 后端网址
				var url = this.baseUrl+"/produceFault/delete"
				// 传递给后端的数据
				var data = {faultId:faultId};
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
				this.$router.push({path:'/FaultAdd'})
			},
			search(){
				// 后端网址
				var url = this.baseUrl+"/produceFault/search"
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
