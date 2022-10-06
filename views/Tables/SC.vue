<template>
    <div>
        操作内容
        <el-select v-model="actionTarget" multiple placeholder="请选择">
            <el-option
            v-for="item in options"
            :value="item.value"
            :label="item.label"
            :key="item.value">
            </el-option>
        </el-select>
        <div>
        S#=<el-input
        placeholder="请输入内容"
        v-model="S_"
        clearable>
        </el-input></div>
        <div>
        C#=<el-input
        placeholder="请输入内容"
        v-model="C_"
        clearable>
        </el-input></div>
        <div>
        G=<el-input
        placeholder="请输入内容"
        v-model="G"
        clearable>
        </el-input>
        </div>
    </div>
</template>
<script>
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
        }
    }
</script>