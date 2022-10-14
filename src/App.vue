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
    </div>
    <el-select v-model="action" placeholder="操作">
      <el-option
      v-for="item in optionOfAction"
      :key="item.value"
      :label="item.label"
      :value="item.value">
      </el-option>
    </el-select>
    <div>
      <router-view></router-view>
    </div>
    <el-button @click="submit()" type="primary">确认按钮</el-button>
  </div>
</template>

<script>
import {Target as CTarget,WHERE as CWhere} from '../views/Tables/myC.vue'
import {Target as STarget,WHERE as SWhere} from '../views/Tables/myS.vue'
import {Target as SCTarget,WHERE as SCWhere} from '../views/Tables/SC.vue'

export default {
  name: "App",
  data() {
    return {
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
      optionOfAction: [{
        value: 'SELECT',
        label: '查询'
      }, {
        value: 'DELETE',
        label: '删除'
      }, {
        value: 'INSERT',
        label: '增加'
      }, {
        value: 'UPDATE',
        label: '修改'
      }],
      action:'',
      table: '',
      actionTarget:[],
      where:''
    }
  },
  methods: {
    submit() {
      const self = this;
      if(this.table=='学生表S') {
        this.actionTarget = STarget
        this.where = SWhere
      }
      else if(this.table=='课程表C') {
        this.actionTarget = CTarget
        this.where = CWhere
      }
      else if(this.table=='学生选课表SC') {
        this.actionTarget = SCTarget
        this.where = SCWhere
      }
      console.log(this.actionTarget)
      console.log(this.where)
      self.$axios.post('/action/', {
        Table:this.table,
        Action:this.action,
        actionTarget:this.actionTarget,
        Where:this.where
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
</script>

<style lang="less" scoped>
#app {
  height: 100vh;
}
</style>