<template>
    <div>
        操作内容
        <el-select v-model="actionTarget" @change="update" multiple placeholder="请选择">
            <el-option
            v-for="item in options"
            :value="item.value"
            :label="item.label"
            :key="item.value">
            </el-option>
        </el-select>
        <div>
        S#=<el-input
        @change="Sinput"
        placeholder="请输入内容"
        v-model="S_"
        clearable>
        </el-input></div>
        <div>
        SN=<el-input
        @change="SNinput"
        placeholder="请输入内容"
        v-model="SN"
        clearable>
        </el-input></div>
        <div>
        SA=<el-input
        @change="SAinput"
        placeholder="请输入内容"
        v-model="SA"
        clearable>
        </el-input>
        SD=<el-input
        @change="SDinput"
        placeholder="请输入内容"
        v-model="SD"
        clearable>
        </el-input></div>
    </div>
</template>
<script>
    let Target
    let WHERE={}
    export default{
        name: 'S',
        data() {
            return {
                options: [{
                    value: '*',
                    label: '*'
                },{
                    value: 'S#',
                    label: 'S#'
                }, {
                    value: 'COUNT(S#)',
                    label: 'COUNT(S#)'
                }, {
                    value: 'SN',
                    label: 'SN'
                }, {
                    value: 'COUNT(SN)',
                    label: 'COUNT(SN)'
                }, {
                    value: 'SA',
                    label: 'SA'
                }, {
                    value: 'COUNT(SA)',
                    label: 'COUNT(SA)'
                }, {
                    value: 'SUM(SA)',
                    label: 'SUM(SA)'
                }, {
                    value: 'AVG(SA)',
                    label: 'AVG(SA)'
                }, {
                    value: 'SD',
                    label: 'SD'
                }, {
                    value: 'COUNT(SD)',
                    label: 'COUNT(SD)'
                }],
                S_: '',
                SN: '',
                SA: '',
                SD: '',
                actionTarget: []
            }
        },
        methods:{
            update(actionTarget) {
                Target = actionTarget
            },
            Sinput(S_) {
                WHERE.S_=S_
            },
            SNinput(SN) {
                WHERE.SN=SN
            },
            SAinput(SA) {
                WHERE.SA=SA
            },
            SDinput(SD) {
                WHERE.SD=SD
            }
        }
    }
    export {
        Target,
        WHERE
    }
</script>
<style lang="less" scoped>
.el-header{
    background-color: rgb(243, 175, 175);
}
.el-main{
    padding-top: 0;
}
</style>