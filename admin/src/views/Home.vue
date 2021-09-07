<template>
  <el-container direction="vertical">
    <el-container direction="horizontal">
      <el-aside width="200px">
        <el-menu
          style="height:100vh;"
          mode="vertical"
          :default-active="$route.path"
          router
        >
          <el-submenu
            v-for="(items, index) in menu"
            :index="index + '1'"
            :key="`menu-${index}`"
          >
            <template slot="title">{{ items.title }}</template>
            <el-menu-item
              v-for="(item, subIndex) in items.items"
              :index="item.path"
              :key="`menu${index}-item${subIndex}`"
            >
              {{ item.title }}
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container direction="vertical">
        <el-header height="40px">
          topfullstack - 后台管理界面
        </el-header>
        <el-main height="">
            <router-view :key="$route.path" ></router-view>
        </el-main>
        <el-footer height="">
          <!-- Footer content -->
        </el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class Home extends Vue {
  data() {
    return {
      menu: [
        {
          title: "内容管理",
          items: [
            { title: "首页", path: "/" },
            { title: "课程管理", path: "/curse/list" },
            { title: "课时管理", path: "/episode/list" },
          ],
        },
        {
          title: "运营管理",
          items: [
            {
              title: "用户管理",
              path: "/user/list",
            },
          ],
        },
      ],
    };
  }
}
</script>
