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
        C#=<el-input
        @change="Cinput"
        placeholder="请输入内容"
        v-model="C_"
        clearable>
        </el-input></div>
        <div>
        CN=<el-input
        @change="CNinput"
        placeholder="请输入内容"
        v-model="CN"
        clearable>
        </el-input></div>
        <div>
        PC#=<el-input
        @change="PCinput"
        placeholder="请输入内容"
        v-model="PC_"
        clearable>
        </el-input></div>
        <div><el-tag v-if="action=='UPDATE'">修改值</el-tag></div>
        <div>
        <el-tag v-if="action=='UPDATE'">C#=</el-tag>
        <el-input
        @change="XCinput"
        placeholder="请输入内容"
        v-model="XC_"
        clearable
        v-if="action=='UPDATE'">
        </el-input></div>
        <div>
        <el-tag v-if="action=='UPDATE'">CN=</el-tag>
        <el-input
        @change="XCNinput"
        placeholder="请输入内容"
        v-model="XCN"
        clearable
        v-if="action=='UPDATE'">
        </el-input></div>
        <div>
        <el-tag v-if="action=='UPDATE'">PC#=</el-tag>
        <el-input
        @change="XPCinput"
        placeholder="请输入内容"
        v-model="XPC_"
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
        name: 'C',
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
                action:'',
                options: [{
                    value: '*',
                    label: '*'
                },{
                    value: 'C_',
                    label: 'C#'
                },{
                    value: 'CN',
                    label: 'CN'
                },{
                    value: 'PC_',
                    label: 'PC#'
                }],
                C_: '',
                CN: '',
                PC_: '',
                XC_: '',
                XCN: '',
                XPC_: '',
                actionTarget: [],
                action:''
            }
        },
        methods:{
            update(actionTarget) {
                Target = actionTarget
            },
            chooseAction(action) {
                Action = action 
            },
            Cinput(C_) {
                WHERE.C_=C_
            },
            CNinput(CN) {
                WHERE.CN=CN
            },
            PCinput(PC_) {
                WHERE.PC_=PC_
            },
            XCinput(C_) {
                UP.C_=C_
            },
            XCNinput(CN) {
                UP.CN=CN
            },
            XPCinput(PC_) {
                UP.PC_=PC_
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