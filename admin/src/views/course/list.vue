<template>
    <div class="list">
        <el-button type="success" size="small" @click="$router.push(`/course/create`)" > 添加课程</el-button>
        <el-table :data=courseList >
            <el-table-column v-for="(feild, index) in feildData" :key="index" :prop="feild.prop" :label="feild.label" >
            </el-table-column>
            <el-table-column label="操作" prop="options" >
                <template #default="{row}" >
                    <el-button type="success" size="small" @click="$router.push(`/course/edit/${row._id}`)" >编辑</el-button>
                    <el-button type="danger" size="small" @click="removeCourse(row)" >删除</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
@Component({

})
export default class CourseList extends Vue {

    feildData = [
        {
            prop: 'name',
            label: '名称'
        },
        {
            prop: 'cover',
            label: '封面'
        }
    ]

    async removeCourse(row) {
        try {
            await this.$confirm('确认删除此课程？', '警告', {
                type: 'warning',
                center: true,
            })            
        } catch (error) {
            return
        }
        const res = await this.$http.delete(`courses/${row._id}`)
        if (res) {
            this.$message({type: 'success', message: `删除课程${row.name}成功`})  
            this.fetchCourseListData();
        }else {
            this.$message({type: 'error', message: `删除课程${row.name}失败`})
        }
    }

    courseList = [];

    async fetchCourseListData() {
        try {
            const res = await this.$http.get('courses')
            if (res.data.length) {
                this.courseList = res.data
            }
        } catch (error) {
            console.error(error);
        }
    }

    created(){
        this.fetchCourseListData();
    }

}
</script>

<style>

</style>