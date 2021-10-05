<template>
    <div class="loading" 
    v-loading:body="true" 
    element-loading-text="努力加载中。。。"
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0,0,0,0.8)"
    >
    </div>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator';
@Component({
    
})
export default class LoadingComponent extends Vue{

}
</script>

<style>

</style>