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
    </div>
</template>
<script>
    let Target
    let WHERE={}
    export default{
        name: 'SC',
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
                    value: 'C#',
                    label: 'C#'
                }, {
                    value: 'COUNT(C#)',
                    label: 'COUNT(C#)'
                }, {
                    value: 'G',
                    label: 'G'
                }, {
                    value: 'COUNT(G)',
                    label: 'COUNT(G)'
                }, {
                    value: 'SUM(G)',
                    label: 'SUM(G)'
                }, {
                    value: 'AVG(G)',
                    label: 'AVG(G)'
                }],
                S_: '',
                C_: '',
                G: '',
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
            Sinput(S_) {
                WHERE.S_=S_
            },
            Ginput(G) {
                WHERE.G=G
            }
        }
    }
    export {
        Target,
        WHERE
    }
</script>