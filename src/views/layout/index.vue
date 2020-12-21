<template>
    <div>
        <el-container >
            <el-header class="app-header" style="height: 55px;">
                <headerBar :showMainMenu="layout == 'defaultlayout'"  @refreshAsideMenu="refreshChild" @refreshLayout="refreshLayout"></headerBar>
            </el-header>
            <topNavBar v-if="layout == 'toplayout'" ref="topNavBar"></topNavBar>
            <el-container>
                <!-- v-if满足条件加载子组件 -->
                <asideBar :moduleName="shows" v-if="layout == 'defaultlayout'"></asideBar>
                <leftNavBar v-if="layout == 'leftlayout'" ref="leftNavBar"></leftNavBar>
                <el-container>
                    <el-main class="app-main" style="height:90vh;">

                        <!-- 路由出口 -->
                        <!-- 路由匹配到的组件将渲染在这里 -->
                        <!-- 用 :key 来阻止复用组件 -->
                        <div style="padding: 10px;">
                            <router-view :key="key"></router-view>
                        </div>
                    </el-main>
                    <el-footer style="height: 3%; line-height: 32px;">版权所有&copy; 中国石油渤海钻探工程有限公司第一录井分公司</el-footer>
                </el-container>
            </el-container>
        </el-container>
    </div>
</template>

<script>
    import headerBar from "./components/headerbar";
    import topNavBar from "./components/topnavbar";
    import leftNavBar from "./components/asidebarLeftLayout";
    import asideBar from "./components/asidebarDefaultLayout";

    import $ from "jquery";

    export default {
        name: "layout",
        components: {asideBar, headerBar, topNavBar, leftNavBar},
        data() {
            return {
                layout: 'defaultlayout',
                shows: "",
                // 模块树结点--初始。最终还要经过权限控制
                moduless: this.GLOBAL.TOP_MENUES
            };
        },
        computed: {
            username() {
                // 我们很快就会看到 `params` 是什么
                return this.$route.params.username;
            },
            // 阻止复用组件
            key() {
                return this.$route.fullPath;
            },
        },
        methods: {
            goBack() {
                window.history.length > 1 ? this.$router.go(-1) : this.$router.push("/");
            },
            refreshLayout: function() {
              this.layout = (window.localStorage.getItem('layout') || 'default')  + 'layout';

              this.$nextTick(() => {
                    this.calcLayout();
                });
            },
            refreshChild: function (shows) {
                this.shows = shows;
            },
            calcLayout: function () {
                //计算并设置顶部导航、中间内容高度
                let screeHeight = document.body.clientHeight;
                let asideHeight;
                asideHeight = screeHeight - 55 - 32 - 5;
                let topnav = $('#toplayout-nav');
                if(topnav.length > 0) {
                    asideHeight -= topnav.height();
                }
                $(".app-main").height(asideHeight + 5);
            }
        },
        mounted: function () {
            this.calcLayout();
        },
        beforeMount: function () {
            this.layout = (window.localStorage.getItem('layout') || 'default')  + 'layout';
            this.shows = this.$route.path.split("/")[1];
            let theme = window.localStorage.getItem('theme') || 'theme1';
            window.document.documentElement.setAttribute('data-theme', theme);
        },
        created() {
             this.$store.dispatch('layout/getPermissions');
        }
    };
</script>

<style scoped>

</style>
