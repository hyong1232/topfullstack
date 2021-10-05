<template>
    <div class="edit">
        <h3>{{isNewCourse ? '创建' : '编辑'}}课程</h3>
        <el-form :rules="rules" :model="formData" ref="form" >
            <el-form-item label="名称" prop="name" >
                <el-input v-model="formData.name" ></el-input>
            </el-form-item>
            <el-form-item label="封面" prop="cover" >
                <el-input v-model="formData.cover" ></el-input>
            </el-form-item>
            <el-form-item width="180px" >
                <el-button type="submit" @click="onSubmit" >提交</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
@Component({

})
export default class CourseEdit extends Vue {

    rules = {
        name: [
            {type: 'string', required: true, message: '请输入课程名称'},
        ],
        cover: [
            {
                validator(rule, value, callback){
                    if (value && !value.includes('/')) {
                        callback(new Error('请输入正确的课程封面链接'))
                    }else {
                        callback()
                    }
                }, 
                trigger: 'blur'},
        ]
    }

    formData = {
        name: '',
        cover: '',
    }
    
    @Prop(String) id!: string;

    get isNewCourse () {
        return  !this.id;
    }

    async onSubmit() {
        try {
            const valid = await this.$refs.form.validate();
            if (valid) {
                const res = await this.$http.post(`courses`,this.formData)
                if (res) {
                    this.$message({type: 'success', message: '添加课程成功'})
                    this.$router.push(`/course/list`)
                }
            }
        } catch (error) {
            console.error(error);
        }
    }

    async fetchCourseInfo() {
        try {
            const res = await this.$http.get(`courses/${this.id}`)
            console.log(res);
        } catch (error) {
            console.error(error);
        }
    }

    created() {
        !this.isNewCourse && this.fetchCourseInfo()
    }

}
</script>

<style>

</style>