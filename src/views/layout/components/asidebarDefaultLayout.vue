<template>
    <div>
        <el-container>
            <el-aside :width="asideWidth" class="app-aside">
                <div @click="isCollapse = !isCollapse" class="menu-switch">
                    <i :class="[ isCollapse ? 'el-icon-s-unfold':'el-icon-s-fold']"></i>
                </div>
                <div class="app-aside-menu-vertical" id="appAsideMenuVertical">
                    <el-menu
                            :collapse=isCollapse
                            :collapse-transition=false
                            :unique-opened=true
                            @close="close"
                            @open="open"
                            router
                    >
                        <clicked-submenu-list :aside-names="asideNames"></clicked-submenu-list>
                    </el-menu>
                </div>


            </el-aside>
        </el-container>
    </div>
</template>

<script>
    import $ from "jquery";
    import _ from "lodash";
    import ClickedSubmenuList from "./clickedSubmenuList";

    export default {
        name: "asideBar",
        props: ["moduleName"],
        components: {ClickedSubmenuList},
        data() {
            return {
                asideWidth: "200px", //初始化侧边导航的宽度
                asideActive: "/hrManagement/personInfo/personInfo",
                asideNames: [],
                isCollapse: false
            };
        },
        methods: {
            open(index, indexPath) {
                if (indexPath.length === 2) {
                    this.asideWidth = "240px"
                }
            },
            close(index, indexPath) {
                if (indexPath.length === 3) {
                    this.asideWidth = "240px"
                } else {
                    this.asideWidth = "200px"
                }
            },
            calcLayout: function () {
                //计算并设置侧边导航高度和宽度
                let screeHeight = document.body.clientHeight;
                let asideHeight;
                if ($("#app").attr("class") === "smallScreen") {
                    this.asideWidth = "160px"; //小屏幕下侧边导航的宽度

                }
                asideHeight = screeHeight - 55 - 40;
                $("#appAsideMenuVertical").height(asideHeight);
            }
        },
        mounted: function () {
            let sideItems = _.defaultsDeep({}, this.GLOBAL.ASIDE_ITEMS);
            let sideItem = sideItems[this.moduleName];

            this.asideNames = sideItem;
            this.asideActive = this.$route.path;
            this.calcLayout();
        },
        watch: {
            isCollapse() {
                if (this.isCollapse) {
                    this.asideWidth = '64px';
                } else {
                    this.asideWidth = $("#app").attr("class") === "smallScreen" ? '160px' : '200px';
                }
            }
        }
    };
</script>

<style scoped>

    .app-aside-menu-vertical {
        overflow-y: auto;
        overflow-x: hidden;
    }

    .menu-switch {
        text-align: center;
        height: 40px;
        cursor: pointer;
        background: #003666;
    }

    .menu-switch i {
        color: rgba(255, 255, 255, 0.6);
        line-height: 40px;
    }

</style>
