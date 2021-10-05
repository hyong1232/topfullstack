<template>
  <div class="">
      <h3 style="padding-bottom:10px;" >{{id ? '编辑' : '新建'}}课程</h3>
    <el-form :model="form" ref="form" label-width="80px" size="normal">
      <el-form-item label="课程名称">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="课程封面">
        <el-input v-model="form.cover"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { createCurse, getCurseById } from "@/server/all";
import { Vue, Component, Prop } from "vue-property-decorator";
@Component({})
export default class CommonList extends Vue {
    @Prop(String) id;
  async onSubmit() {
    try {
      await createCurse(this.form);
      this.$message({ type: "success", message: "creat success~" });
    } catch (error) {
      console.error(error);
    }
  }
  data() {
    return {
      form: {
        name: "",
        cover: "",
      },
    };
  }

  async fetch(){
      let res = await getCurseById(this.id);
      this.form = res
  }

  created(){
      this.id && this.fetch();
  }
}
</script>

<style></style>
