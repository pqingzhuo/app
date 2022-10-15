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
        C#=<el-input
        @change="Cinput"
        placeholder="请输入内容"
        v-model="C_"
        clearable>
        </el-input></div>
        <div>
        G=<el-input
        @change="Ginput"
        placeholder="请输入内容"
        v-model="G"
        clearable>
        </el-input>
        </div>
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
        <el-tag v-if="action=='UPDATE'">C#=</el-tag> 
        <el-input
        @change="XCinput"
        placeholder="请输入内容"
        v-model="XC_"
        clearable
        v-if="action=='UPDATE'">
        </el-input></div>
        <div>
        <el-tag v-if="action=='UPDATE'">G=</el-tag> 
        <el-input
        @change="XGinput"
        placeholder="请输入内容"
        v-model="XG"
        clearable
        v-if="action=='UPDATE'">
        </el-input>
        </div>
    </div>
</template>
<script>
    let Target
    let WHERE={}
    let UP={}
    let Action
    export default{
        name: 'SC',
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
                    value: 'C_',
                    label: 'C#'
                },{
                    value: 'G',
                    label: 'G'
                }],
                S_: '',
                C_: '',
                G: '',
                XS_: '',
                XC_: '',
                XG: '',
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
            Cinput(C_) {
                WHERE.C_=C_
            },
            Sinput(S_) {
                WHERE.S_=S_
            },
            Ginput(G) {
                WHERE.G=G
            },
            XCinput(C_) {
                UP.C_=C_
            },
            XSinput(S_) {
                UP.S_=S_
            },
            XGinput(G) {
                UP.G=G
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