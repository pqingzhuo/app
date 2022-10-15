<template>
  <div>
    <div>
      <el-radio-group @change="chooseTable" v-model="table">
        <el-radio 
          v-for="item in optionOfTable"
          :label="item.label"
          :value="item.key"
          :key="item.key">
        </el-radio>
      </el-radio-group>
      <el-table
      :data="STable"
      style="width: 100%"
      v-if="table=='学生表S'">
        <el-table-column
          prop="S_"
          label="S#"
          width="150">
        </el-table-column>
        <el-table-column
          prop="SN"
          label="SN"
          width="150">
        </el-table-column>
        <el-table-column
          prop="SA"
          label="SA"
          width="150">
        </el-table-column>
        <el-table-column
          prop="SD"
          label="SD"
          width="150">
        </el-table-column>
      </el-table>
      <el-table
      :data="CTable"
      style="width: 100%"
      v-if="table=='课程表C'">
        <el-table-column
          prop="C_"
          label="C#"
          width="150">
        </el-table-column>
        <el-table-column
          prop="CN"
          label="CN"
          width="150">
        </el-table-column>
        <el-table-column
          prop="PC#"
          label="PC#"
          width="150">
        </el-table-column>
      </el-table>
      <el-table
      :data="SCTable"
      style="width: 100%"
      v-if="table=='学生选课表SC'">
        <el-table-column
          prop="S_"
          label="S#"
          width="150">
        </el-table-column>
        <el-table-column
          prop="C_"
          label="C#"
          width="150">
        </el-table-column>
        <el-table-column
          prop="G"
          label="G"
          width="150">
        </el-table-column>
      </el-table>
    </div>
    <div>
      <router-view></router-view>
    </div>
    <el-button @click="submit()" type="primary">确认按钮</el-button>
  </div>
</template>

<script>
import {Target as CTarget,WHERE as CWhere,UP as CUp,Action as CAction} from '../views/Tables/myC.vue'
import {Target as STarget,WHERE as SWhere,UP as SUp,Action as SAction} from '../views/Tables/myS.vue'
import {Target as SCTarget,WHERE as SCWhere,UP as SCUp,Action as SCAction} from '../views/Tables/SC.vue'
let isUpdate
export default {
  name: "App",
  data() {
    return {
      STable: [],
      CTable: [],
      SCTable: [],
      optionOfTable: [{
        key: 'S',
        label: '学生表S'
      },{
        key: 'C',
        label: '课程表C'
      },{
        key: 'SC',
        label: '学生选课表SC'
      }],
      action:'',
      table: '',
      actionTarget:[],
      where:'',
      updata:''
    }
  },
  methods: {
    submit() {
      const self = this;
      if(this.table=='学生表S') {
        this.actionTarget = STarget
        this.where = SWhere
        this.action = SAction
        this.updata = SUp
      }
      else if(this.table=='课程表C') {
        this.actionTarget = CTarget
        this.where = CWhere
        this.action = CAction
        this.updata = CUp
      }
      else if(this.table=='学生选课表SC') {
        this.actionTarget = SCTarget
        this.where = SCWhere
        this.action = SCAction
        this.updata = SCUp
      }
      console.log(this.actionTarget)
      console.log(this.where)
      self.$axios.post('/action/', {
        Table:this.table,
        Action:this.action,
        actionTarget:this.actionTarget,
        Where:this.where,
        Update:this.updata
      }).then(res => {
        if(this.table=='学生表S') {
          this.STable=res.data
        }
        else if(this.table=='课程表C') {
          this.CTable=res.data
        }
        else if(this.table=='学生选课表SC') {
          this.SCTable=res.data
        }
      })
    },
    chooseTable(name) {
      console.log(name)
      if(name=='学生表S') {
        this.$router.push('/myS')
      }
      else if(name=='课程表C') {
        this.$router.push('/myC')
      }
      else if(name=='学生选课表SC') {
        this.$router.push('/SC')
      }
    }
  }
}
export{
  isUpdate
}
</script>

<style lang="less" scoped>
#app {
  height: 100vh;
}
</style>