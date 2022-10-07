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
    </div>
</template>
<script>
    let Target
    let WHERE={}
    export default{
        name: 'C',
        data() {
            return {
                options: [{
                    value: '*',
                    label: '*'
                },{
                    value: 'C#',
                    label: 'C#'
                }, {
                    value: 'COUNT(C#)',
                    label: 'COUNT(C#)'
                }, {
                    value: 'CN',
                    label: 'CN'
                }, {
                    value: 'COUNT(CN)',
                    label: 'COUNT(CN)'
                }, {
                    value: 'PC#',
                    label: 'PC#'
                }, {
                    value: 'COUNT(PC#)',
                    label: 'COUNT(PC#)'
                }],
                C_: '',
                CN: '',
                PC_: '',
                actionTarget: []
            }
        },
        methods:{
            update(actionTarget) {
                Target = actionTarget
            },
            Cinput(C_) {
                WHERE.C_=C_
            },
            CNinput(CN) {
                WHERE.CN=CN
            },
            PCinput(PC_) {
                WHERE.PC_=PC_
            }
        }
    }
    export {
        Target,
        WHERE
    }
</script>