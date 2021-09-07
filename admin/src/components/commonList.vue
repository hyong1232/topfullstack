<template>  
    <div class="">
        <el-button type="success" size="default" @click="$router.push(`/curse/create`)">创建课程</el-button>
        <el-table :data="data" border stripe>
            <el-table-column v-for="(col, index) in columns"
                :prop="col.prop"
                :key="index"
                :label="col.label"
                >
            </el-table-column>
            <el-table-column
                label="操作"
                :width="200">
                <template #default="{row}" >
                    <el-button type="primary" size="default" @click="$router.push(`/curse/edit/${row._id}`)">编辑</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
import { getCurses } from '@/server/all';
import { Vue, Component } from 'vue-property-decorator';
@Component({
    components: {}
})
export default class CommonList extends Vue {

    created(){
        this.fetch();
    }

    data() {
        return {
            data: [],
            columns: [
                {
                    prop: '_id',
                    label: 'ID',
                },
                {
                    prop: 'name',
                    label: '课程名称',
                },
                {
                    prop: 'cover',
                    label: '封面',
                },
            ]
        }
    }

    async fetch(){
        try {
            let res = await getCurses();
            this.data = res.data;
        } catch (error) {
            console.error(error);
        }
    }
}
</script>

<style>

</style>