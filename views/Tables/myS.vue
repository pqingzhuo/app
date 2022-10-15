<template>
    <div>
        <el-select v-model="action" @change="chooseAction" placeholder="操作">
            <el-option
                v-for="item in optionOfAction"
                :key="item.value"
                :label="item.label"
                :value="item.value">
            </el-option>
        </el-select>
        <div>操作内容</div>
        <el-select v-model="actionTarget" @change="update" multiple placeholder="请选择">
            <el-option
            v-for="item in options"
            :value="item.value"
            :label="item.label"
            :key="item.value">
            </el-option>
        </el-select>
        <div>操作条件</div>
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
        <div><el-tag v-if="action=='UPDATE'">修改值</el-tag></div>
        <div>
        <el-tag v-if="action=='UPDATE'">S#=</el-tag>
        <el-input
        @change="XSinput"
        placeholder="请输入内容"
        v-model="XS_"
        clearable
        v-if="action=='UPDATE'">
        </el-input></div>
        <div>
        <el-tag v-if="action=='UPDATE'">SN=</el-tag>    
        <el-input
        @change="XSNinput"
        placeholder="请输入内容"
        v-model="XSN"
        clearable
        v-if="action=='UPDATE'">
        </el-input></div>
        <div>
        <el-tag v-if="action=='UPDATE'">SA=</el-tag>   
        <el-input
        @change="XSAinput"
        placeholder="请输入内容"
        v-model="XSA"
        clearable
        v-if="action=='UPDATE'">
        </el-input>
        <el-tag v-if="action=='UPDATE'">SD=</el-tag> 
        <el-input
        @change="XSDinput"
        placeholder="请输入内容"
        v-model="XSD"
        clearable
        v-if="action=='UPDATE'">
        </el-input></div>
    </div>
</template>
<script>
    let Target
    let WHERE={}
    let UP={}
    let Action
    export default{
        name: 'S',
        data() {
            return {
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
                options: [{
                    value: '*',
                    label: '*'
                },{
                    value: 'S_',
                    label: 'S#'
                },{
                    value: 'SN',
                    label: 'SN'
                },{
                    value: 'SA',
                    label: 'SA'
                },{
                    value: 'SD',
                    label: 'SD'
                }],
                S_: '',
                SN: '',
                SA: '',
                SD: '',
                XS_: '',
                XSN: '',
                XSA: '',
                XSD: '',
                actionTarget: [],
                action: ''
            }
        },
        methods:{
            update(actionTarget) {
                Target = actionTarget
            },
            chooseAction(action) {
                Action = action 
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
            },
            XSinput(S_) {
                UP.S_=S_
            },
            XSNinput(SN) {
                UP.SN=SN
            },
            XSAinput(SA) {
                UP.SA=SA
            },
            XSDinput(SD) {
                UP.SD=SD
            }
        }
    }
    export {
        Target,
        WHERE,
        UP,
        Action
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