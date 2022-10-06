<template>
  <div>
    <div>
      <el-radio-group @change="chooseTable" v-model="radio">
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
    <el-button @click="change()" type="primary">确认按钮</el-button>
  </div>
</template>

<script>

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
      radio: ''
    }
  },
  methods: {
    change() {
      this.$router.push('/user')
    },
    chooseTable(name) {
      console.log(name)
      if(name=='学生表S') {
        this.$router.push('/S')
      }
      else if(name=='课程表C') {
        this.$router.push('/C')
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