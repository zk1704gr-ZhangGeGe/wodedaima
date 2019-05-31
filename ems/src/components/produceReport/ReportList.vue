<template>
	<div>
		<h1 style="text-align: center">报岗</h1>
		<div style="text-align: left;margin:0 0 20px 50px;">
			<el-input style='width:160px' placeholder='船队名称' v-model='shipname'></el-input>
			<el-select v-model="compid" style='width:160px' placeholder="所属企业">
				<el-option
				  v-for="obj in arr"
				  :key="obj.compid"
				  :label="obj.compname"
				  :value="obj.compid">
				</el-option>
			</el-select>
			<el-button @click='search'>查询</el-button>
			<el-button @click='add'>添加</el-button>
		</div>
		<center>
			<el-table :data="list">
				<el-table-column prop="reportid" label="ID" width="80"></el-table-column>
				<el-table-column prop="shipname" label="船队名称" width="100"></el-table-column>
				<el-table-column prop="capacity" label="装载量(吨)" width="100"></el-table-column>
				<el-table-column prop="planjobtime" label="预计到港时间 " width="180"></el-table-column>
				<el-table-column prop="startjobtime" label="实际到港时间 " width="180"></el-table-column>
				<el-table-column prop="completetime" label="完成时间 " width="180"></el-table-column>
				<el-table-column prop="flowname" label="流程 " width="120"></el-table-column>
				<el-table-column prop="reportuser" label="报岗人 " width="120"></el-table-column>
				<el-table-column prop="compname" label="所属企业 " width="120"></el-table-column>
				<el-table-column label="操作" width="160">
				  <template slot-scope="scope">
					<el-button size="mini" @click="update(scope.row)">编辑</el-button>
					<el-button size="mini" type='danger' @click="del(scope.row.reportid)">删除</el-button>
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
				compid:'',
				shipname:'',
				list:[],
				arr:[{compid:'',compname:''}]
			};
		},
		methods:{
			update(row){
				// 跳转
				this.$router.push({name:'ReportEdit',params:{row:row}})
			},
			del(reportid){
				// 后端网址
				var url = this.baseUrl+"/produceReport/delete"
				// 传递给后端的数据
				var data = {reportid:reportid};
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
				this.$router.push({path:'/ReportAdd'})
			},
			search(){
				// 后端网址
				var url = this.baseUrl+"/produceReport/search"
				// 传递给后端的数据
				var data = {compid:this.compid,shipname:this.shipname};
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
			
			// 后端网址 所属企业
			var url = this.baseUrl+"/baseCompany/list"
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
