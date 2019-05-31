import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/home/Index'
import Login from '@/components/home/Login'
import Welcome from '@/components/home/Welcome'
import MainTable from '@/components/home/MainTable'
import CompList from '@/components/baseInfo/CompList'
import CompAdd from '@/components/baseInfo/CompAdd'
import CompEdit from '@/components/baseInfo/CompEdit'
import DevtypeList from '@/components/baseDevtype/DevtypeList'
import DevtypeAdd from '@/components/baseDevtype/DevtypeAdd'
import DevtypeEdit from '@/components/baseDevtype/DevtypeEdit'
import UserList from '@/components/baseUser/UserList'
import UserAdd from '@/components/baseUser/UserAdd'
import UserEdit from '@/components/baseUser/UserEdit'
import DeviceList from '@/components/baseDevice/DeviceList'
import DeviceAdd from '@/components/baseDevice/DeviceAdd'
import DeviceEdit from '@/components/baseDevice/DeviceEdit'
import FlowList from '@/components/baseFlow/FlowList'
import FlowAdd from '@/components/baseFlow/FlowAdd'
import FlowEdit from '@/components/baseFlow/FlowEdit'
import FaultList from '@/components/produceFault/FaultList'
import FaultAdd from '@/components/produceFault/FaultAdd'
import FaultEdit from '@/components/produceFault/FaultEdit'
import RepairList from '@/components/produceRepair/RepairList'
import RepairAdd from '@/components/produceRepair/RepairAdd'
import RepairEdit from '@/components/produceRepair/RepairEdit'
import ReportList from '@/components/produceReport/ReportList'
import ReportAdd from '@/components/produceReport/ReportAdd'
import ReportEdit from '@/components/produceReport/ReportEdit'
import Control from '@/components/baseControl/Control'
import JobAmount from '@/components/reports/JobAmount'
import EnergyConsume from '@/components/reports/EnergyConsume'
import EnergyModel from '@/components/reports/EnergyModel'
import StandradcoalList from '@/components/energyStandradcoal/StandradcoalList'
import StandradcoalAdd from '@/components/energyStandradcoal/StandradcoalAdd'
import StandradcoalEdit from '@/components/energyStandradcoal/StandradcoalEdit'
import ConsumeList from '@/components/energyConsume/ConsumeList'
import ConsumeAdd from '@/components/energyConsume/ConsumeAdd'
import ConsumeEdit from '@/components/energyConsume/ConsumeEdit'
import JobList from '@/components/produceJob/JobList'
import JobAdd from '@/components/produceJob/JobAdd'
import JobEdit from '@/components/produceJob/JobEdit'
import consume from '@/components/devInfo/consume'
import intactRatio from '@/components/devInfo/intactRatio'
import usage from '@/components/devInfo/usage'
import cost from '@/components/devInfo/cost'
Vue.use(Router)

export default new Router({
	mode:'history',
	routes: [
		 {path: '/Login',name: 'Login',component: Login},
		 {path: '/',name: 'Index',component: Index,
			children:[
					{path:'/',component:Welcome},
					{path:'MainTable',component:MainTable},
					{path:'CompList',component:CompList,name:'CompList'},
					{path:'CompAdd',component:CompAdd},
					{path:'CompEdit',component:CompEdit,name:'CompEdit'},
					{path:'DevtypeList',component:DevtypeList,name:'DevtypeList'},
					{path:'DevtypeAdd',component:DevtypeAdd},
					{path:'DevtypeEdit',component:DevtypeEdit,name:'DevtypeEdit'},
					{path:'UserList',component:UserList,name:'UserList'},
					{path:'UserAdd',component:UserAdd},
					{path:'UserEdit',component:UserEdit,name:'UserEdit'},
					{path:'DeviceList',component:DeviceList,name:'DeviceList'},
					{path:'DeviceAdd',component:DeviceAdd},
					{path:'DeviceEdit',component:DeviceEdit,name:'DeviceEdit'},
					{path:'FlowList',component:FlowList,name:'FlowList'},
					{path:'FlowAdd',component:FlowAdd},
					{path:'FlowEdit',component:FlowEdit,name:'FlowEdit'},
					{path:'FaultList',component:FaultList,name:'FaultList'},
					{path:'FaultAdd',component:FaultAdd},
					{path:'FaultEdit',component:FaultEdit,name:'FaultEdit'},
					{path:'RepairList',component:RepairList,name:'RepairList'},
					{path:'RepairAdd',component:RepairAdd},
					{path:'RepairEdit',component:RepairEdit,name:'RepairEdit'},
					{path:'ReportList',component:ReportList,name:'ReportList'},
					{path:'ReportAdd',component:ReportAdd},
					{path:'ReportEdit',component:ReportEdit,name:'ReportEdit'},
					{path:'Control',component:Control,name:'Control'},
					{path:'JobAmount',component:JobAmount,name:'JobAmount'},
					{path:'EnergyConsume',component:EnergyConsume,name:'EnergyConsume'},
					{path:'EnergyModel',component:EnergyModel,name:'EnergyModel'},
					{path:'StandradcoalList',component:StandradcoalList,name:'StandradcoalList'},
					{path:'StandradcoalAdd',component:StandradcoalAdd},
					{path:'StandradcoalEdit',component:StandradcoalEdit,name:'StandradcoalEdit'},
					{path:'ConsumeList',component:ConsumeList,name:'ConsumeList'},
					{path:'ConsumeAdd',component:ConsumeAdd},
					{path:'ConsumeEdit',component:ConsumeEdit,name:'ConsumeEdit'},
					{path:'JobList',component:JobList,name:'JobList'},
					{path:'JobAdd',component:JobAdd},
					{path:'JobEdit',component:JobEdit,name:'JobEdit'},
					{path:'consume',component:consume,name:'consume'},
					{path:'intactRatio',component:intactRatio,name:'intactRatio'},
					{path:'usage',component:usage,name:'usage'},
					{path:'cost',component:cost,name:'cost'},
			]
    }
		
		
  ]
})
