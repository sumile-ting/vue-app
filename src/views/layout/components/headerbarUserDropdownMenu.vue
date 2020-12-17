<template>
    <div style="height: 100%; display: flex;">
        <div style="height: 100%; display: flex; align-items: center;">
            <el-avatar icon="el-icon-user-solid"></el-avatar>
        </div>

        <div class="user-info" style="height: 100%;">

            <el-menu mode="horizontal">
                <el-submenu index="2" popper-class="userInfo-dropdown-menu">
                    <template slot="title">{{user.name}}</template>
                    <el-menu-item index="2-1" @click="layoutSelectorDialogVisible = true">
                        <i class="fa fa-th-list"> </i> 布局选择
                    </el-menu-item>
                    <el-menu-item index="2-2" @click="themeSelectorDialogVisible = true">
                        <i class="fa fa-th-list"> </i> 主题中心
                    </el-menu-item>
                    <el-menu-item index="2-3" @click="logout">
                        <i class="fa fa-sign-out"> </i> 退出
                    </el-menu-item>
                </el-submenu>
            </el-menu>
        </div>
        <!-- 布局选择弹出框 -->
        <div class="layoutSelectorDialog">
            <el-dialog title="布局选择" :visible.sync="layoutSelectorDialogVisible" :width="dialogWidth">
                <el-row>
                    <el-col :span="8" v-for="(item, index) in layoutOptions" :key="index" class="wea-theme-layout">
                        <div class="wea-theme-layout-item " :title="item.title"
                             :class="{ 'wea-theme-layout-selected': item.active }">
                            <div class="wea-theme-layout-img" @click="selectLayout(item)">
                                <div style="width: 100px; height: 100px; position: relative;margin: 0 auto;">
                                    <el-image :src="item.src" alt=""></el-image>
                                    <i class="wea-theme-layout-icon fa fa-check-circle-o" v-if="item.active"></i>
                                </div>

                            </div>
                            <div class="wea-theme-layout-name">{{item.title}}</div>

                        </div>
                    </el-col>

                </el-row>
                <div slot="footer" class="dialog-footer">
                    <el-button @click="layoutSelectorDialogVisible = false">取 消</el-button>
                </div>
            </el-dialog>
        </div>
        <!-- 主题选择弹出框 -->
        <div class="layoutSelectorDialog">
            <el-dialog title="主题选择" :visible.sync="themeSelectorDialogVisible" :width="dialogWidth">
                <el-row>
                    <el-col :span="8" v-for="(item, index) in themeOpts" :key="index" class="wea-theme-layout">
                        <div class="wea-theme-layout-item " :title="item.title"
                             :class="{ 'wea-theme-layout-selected': item.active }">
                            <div class="wea-theme-layout-img" @click="selectTheme(item)">
                                <div style="width: 100px; height: 100px; position: relative;margin: 0 auto;">
                                    <div :class="item.name" class="theme-option ">
                                        <div style="box-shadow: 0 0 2px rgba(0,0,0,0.1);display: flex">
                                            <div style="width: 20%; height: 20px;" class="top-left"></div>
                                            <div style="width: 80%; height: 20px; " class="top-right"></div>
                                        </div>
                                        <div style="display: flex;">
                                            <div style="width: 20%; height: 80px;" class="bottom-left"></div>
                                            <div style="width: 80%; height: 80px; "></div>
                                        </div>
                                    </div>
                                    <i class="wea-theme-layout-icon fa fa-check-circle-o" v-if="item.active"></i>
                                </div>

                            </div>
                            <div class="wea-theme-layout-name">{{item.title}}</div>

                        </div>
                    </el-col>

                </el-row>
                <div slot="footer" class="dialog-footer">
                    <el-button @click="themeSelectorDialogVisible = false">取 消</el-button>
                </div>
            </el-dialog>
        </div>
    </div>
</template>
<script>

    import _ from "lodash";

    export default {
        name: "HeaderbarUserDropDownMenu",
        data() {
            return {
                user: {
                    name: 'admin',
                },
                themeSelectorDialogVisible: false,
                layoutSelectorDialogVisible: false,
                dialogWidth: '730px',
                layoutOpt: [
                    {name: 'default', src: require("../../../assets/images/layout1.png"), title: '默认显示', active: false},
                    {name: 'top', src: require("../../../assets/images/layout3.png"), title: '顶部栏显示', active: false},
                    {name: 'left', src: require("../../../assets/images/layout2.png"), title: '侧边栏显示', active: false}
                ],
                themeOpt: [
                    {name: 'theme1', title: '蓝', active: false},
                    {name: 'theme2', title: '黑', active: false},
                    {name: 'theme3', title: '红', active: false}
                ]
            };
        },
        computed: {
            layoutOptions() {
                let layout = window.localStorage.getItem('layout') || 'default';
                let layoutOption = this.layoutOpt;
                layoutOption.find(item => item.name == layout).active = true;
                return layoutOption;
            },
            themeOpts() {
                let theme = window.localStorage.getItem('theme') || 'theme1';
                let activeTheme = this.themeOpt.find(item => item.name == theme)
                activeTheme.active = true;
                return this.themeOpt;
            }
        },
        methods: {
            selectLayout(item) {
                window.localStorage.setItem('layout', item.name);
                _.forEach(this.layoutOptions, function (item) {
                    item.active = false;
                })
                item.active = true;
                this.layoutSelectorDialogVisible = false;
                this.$emit('refreshLayout');
            },
            selectTheme(item) {
                window.localStorage.setItem('theme', item.name);
                _.forEach(this.themeOpts, function (item) {
                    item.active = false;
                })
                item.active = true;
                window.document.documentElement.setAttribute('data-theme', item.name);
                this.themeSelectorDialogVisible = false;
            },
            // 退出登录
            logout() {
                // 跳转首页
                this.$router.push("/");
            }
        },
    }
</script>

<style lang="scss" scoped>
    @import '../../../assets/css/theme.scss';

    p strong {
        font-size: 15px;
    }

    .wea-theme-layout {
        margin-top: 20px;
    }

    .wea-theme-layout .el-image {
        width: 100px;
        height: 100px;
        border: 2px solid #d7d8d9;
        cursor: pointer;
    }

    .wea-theme-layout-selected .el-image {
        border: 2px solid #2db7f5;
    }

    .wea-theme-layout-selected .wea-theme-layout-icon {
        position: absolute;
        top: 70px;
        right: 8px;
        color: #2db7f5;
        font-size: 22px;
    }

    .theme-option {
        height: 100%;
        box-shadow: 0 0 3px rgba(0, 0, 0, 0.4);
    }

    .theme-option.theme1 .bottom-left {
        background-color: $background-color-theme1-bottomleft;
    }

    .theme-option.theme2 .bottom-left {
        background-color: $background-color-theme2-bottomleft;
    }

    .theme-option.theme3 .bottom-left {
        background-color: $background-color-theme3-bottomleft;
    }

    .theme-option.theme1 .top-left {
        background-color: $background-color-theme1-topleft;
    }

    .theme-option.theme2 .top-left {
        background-color: $background-color-theme2-topleft;
    }

    .theme-option.theme3 .top-left {
        background-color: $background-color-theme3-topleft;
    }
    .theme-option.theme1 .top-right {
        background-color: $background-color-theme1-topright;
    }

    .theme-option.theme2 .top-right {
        background-color: $background-color-theme2-topright;
    }

    .theme-option.theme3 .top-right {
        background-color: $background-color-theme3-topright;
    }
</style>
