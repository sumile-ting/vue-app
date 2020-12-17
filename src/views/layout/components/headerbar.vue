<template>
    <el-row id="project-header" class="el-row" :gutter="24" >
        <el-col :span="5" class="title-wrapper">
            <el-row :gutter="24" class="title-box">
                <el-col :span="8" class="logo-img-wrapper">
                    <img class="logo-img" src="../../../assets/logo.png"/>
                </el-col>
                <el-col :span="16">
                    <div class="title-l">综合信息管理系统</div>
                </el-col>
            </el-row>
        </el-col>
        <el-col :span="8">
            <el-row :gutter="24" class="left-menu-box">
                <el-col :span="1" class="home-menu"  >
                    <i class="el-icon-s-home icon-menu" title="我的门户" @click="goMyPortalPage" ></i>
                </el-col>
                <el-col :span="5" v-if="showMainMenu">
                    <el-popover
                            placement="bottom-start"
                            width="560"
                            trigger="hover"
                            @show="showPopoverMenu"
                            @hide="hidePopoverMenu"
                            popper-class="popper-menu-top"
                            v-model="popoverMenuVisible"
                            :visible-arrow=false>
                        <div class="popover-menu">
                            <el-row :gutter="24">
                                <div class="imglist-item" v-for="item in moduleses"
                                     @click="handleSelect(item)"
                                     :key="item.iname"
                                     :style="{backgroundColor: item.bkcolor}"
                                     :class="{'imglist-item-selected': item.mname == $store.state.layout.activeMainMenu}">
                                    <div class="popover-menu-item">
                                        <div>
                                            <i :class="'icfont icon-' + item.icname"></i>
                                            <p class="img-name">{{item.mname}}</p>
                                        </div>
                                    </div>


                                </div>
                            </el-row>
                        </div>
                        <div class="protal-menu" slot="reference"
                             :class="{'protal-menu-hover': protalMenuHovered}"
                             @click="popoverMenuVisible = !popoverMenuVisible">
                            <i class="el-icon-s-grid icon-menu"></i>
                            <div>{{$store.state.layout.activeMainMenu}}</div>
                        </div>
                    </el-popover>

                </el-col>
                <el-col :span="1" class="uses-menu-col">
                    <div class="uses-menu">
                        <i class="el-icon-menu icon-menu" title="常用菜单"></i>
                    </div>

                </el-col>
                <el-col :span="12">
                    <div class="header-quick-search">
                        <div class="header-quick-search-content">
                            <input id="header-quick-search-input" class="header-quick-search-input"
                                   placeholder="请输入关键词搜索">
                        </div>
                        <div class="header-quick-search-icon">
                            <i class="el-icon-search "></i>
                        </div>
                    </div>
                </el-col>
            </el-row>
        </el-col>
        <div  style="float: right;"  class="right-menu-box">
                <div class="right-menu-box-item kaoqin-item">
                    <div class="kaoqin-menu">
                        <i class="fa fa-calendar"></i>
                        <div>考勤</div>
                    </div>
                </div>
                <div class="right-menu-box-item">
                    <span class="fa fa-bell icon-menu-right" title="消息中心">
                        <i class="right-corner-num" style="display: block;">21</i>
                    </span>
                </div>
                <div class="right-menu-box-item">
                    <i class="fa fa-sitemap icon-menu-right" title="结构总图"></i>
                </div>
                <div class="right-menu-box-item">
                    <i class="fa fa-retweet icon-menu-right" title="系统矩阵"></i>
                </div>
                <div class="right-menu-box-item">
                    <i class="fa fa-star icon-menu-right" title="收藏夹"></i>
                </div>
                <div class="right-menu-box-item">
                    <i class="fa fa-commenting icon-menu-right" title="更多"></i>
                </div>
                <div class="right-menu-box-item" style="padding-left: 0px;">
                    <div class="split-right">
                        <el-divider direction="vertical" class="header-quick-search-split"></el-divider>
                    </div>
                </div>
                <div  class="padding-lr-0 user-box-container ">
                    <div class="user-box">
                        <headerbar-user-dropdown-menu @refreshLayout="refreshLayout"></headerbar-user-dropdown-menu>
                    </div>
                </div>

        </div>

    </el-row>
</template>

<script>
    import HeaderbarUserDropdownMenu from "./headerbarUserDropdownMenu";
    import _ from "lodash";
    export default {
        name: "headerbar",
        components: {HeaderbarUserDropdownMenu},
        props: ["moduless", "showMainMenu"],
        data() {
            return {
                popoverMenuVisible: false,//不显示下拉主菜单面板
                protalMenuHovered: false,//是否激活主菜单面板

            }
        },
        computed: {
          moduleses() {
              return this.moduless.filter(item => item.show);
          }

        },
        methods: {
            showPopoverMenu() {
                this.protalMenuHovered = true;
            },
            hidePopoverMenu() {
                this.protalMenuHovered = false;
            },
            refreshLayout() {
                let layout = window.localStorage.getItem('layout');
                if(layout == 'default') {
                    let shows = this.$route.path.split("/")[1];
                    this.$emit('refreshAsideMenu', shows);
                }
                this.$emit('refreshLayout');
            },
            handleSelect(item) {
                this.$router.push('/' + item.iname);
                this.$store.commit('layout/setActiveMainMenu', item.mname);
                this.popoverMenuVisible = false;
                this.$emit('refreshAsideMenu', item.iname);
            },
            goMyPortalPage() {
                let item = {
                    iname: 'myPortal',
                    mname: '我的门户'
                }
                this.handleSelect(item);
            }
        },
        beforeMount: function () {
                //页面初始化确定当前模块添加active类
                let shows = this.$route.path.split("/")[1];
                let item = _.find(this.moduless, item => item.iname == shows);
                this.$store.commit('layout/setActiveMainMenu', item.mname);
        }
    }
</script>

<style scoped>
    .title-wrapper {
        width: 230px;
        padding-left: 0px;
    }
    .smallScreen .title-wrapper {
        width: 192px;
    }
    .home-menu {
        width: auto;
        padding-right: 0px !important;
    }
    .title-box {
        /*position: absolute;*/
        z-index: 10;
        color: #ffffff;
        width: 230px;
        height: 55px;
        background-color: #008df7;
        margin-left: -50px !important;
    }

    .smallScreen .title-box {
        height: 55px;
        width: 162px;
        margin-left: -23px !important;
    }

    .user-box {
        line-height: 45px;
        color: #ffffff;
        width: 100%;
        height: 55px;
    }

    .smallScreen .user-box {
        line-height: 30px;
        height: 55px;
    }

    .logo-img {
        display: block;
        width: 35px;
        height: 35px;
    }

    /*.smallScreen .logo-img {*/
    /*  margin-top: 10px;*/
    /*}*/

    .title-s {
        height: 25px;
        font-size: 18px;
        margin-top: 12px;
        font-weight: bold;
    }

    .smallScreen .title-s {
        height: 20px;
        font-size: 14px;
        margin-top: 8px;
    }

    .title-l {
        line-height: 55px;
        margin-left: -20px;
        font-size: 18px;
        font-weight: bold;
    }

    .smallScreen .title-l {
        font-size: 14px;
        line-height: 55px;
        margin-left: -28px;
    }

    .active {
        background: #1b68c1;
        color: #ffffff;
    }

    .logo-img-wrapper {
        display: flex;
        align-items: center;
        height: 55px;
        justify-content: flex-end;
    }

    .icon-menu {
        line-height: 55px;
        font-size: 25px;
        color: #ffffff;
        cursor: pointer;
    }

    .left-menu-box {
        margin-left: -40px !important;
        font-size: 14px
    }

    .protal-menu {
        cursor: pointer;
    }

    .protal-menu:hover, .protal-menu.protal-menu-hover {
        background-color: #ffffff;
        color: #333333;
    }

    .protal-menu:hover > .icon-menu, .protal-menu.protal-menu-hover > .icon-menu {
        color: #606266;
    }

    .protal-menu, .kaoqin-menu {
        color: #ffffff;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .protal-menu i {
        margin-right: 5px;
    }

    .protal-menu div {
        text-align: left;
        white-space: nowrap;
        overflow: hidden;
        -o-text-overflow: ellipsis;
        text-overflow: ellipsis;
    }

    .uses-menu i {
        font-size: 20px;
    }

    .uses-menu {
        /*line-height: 35px;*/
        background: rgba(0, 0, 0, 0.08);
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 6px;
        height: 20px;
    }

    .uses-menu-col {
        display: flex;
        height: 55px;
        align-items: center;
        margin-right: 20px;
    }

    .header-quick-search {
        background: rgba(0, 0, 0, 0.08);
        height: 35px;
        line-height: 35px;
        margin: 10px 0;
    }

    .header-quick-search-content {
        float: left;
        width: calc(100% - 44px);
        padding-left: 5px;
    }

    .header-quick-search-input {
        width: 100%;
        height: 30px;
        line-height: 30px;
        padding: 0;
        background: transparent;
        border: 0;
        outline: none;
        -webkit-box-shadow: none;
        box-shadow: none;
        color: #ffffff;
    }

    .protal-menu:focus {
        outline: none;
    }

    .header-quick-search-icon {
        float: right;
        width: 14px;
        height: 35px;
        margin: 0 10px;
        cursor: pointer;
        color: #ffffff;

    }

    .header-quick-search-split {
        float: left;
        width: 1px;
        height: 15px;
        margin: 11px 8px;
        background-color: #fff;
        opacity: .3;
        filter: Alpha(opacity=30);
    }

    .right-menu-box {
        font-size: 12px;
    }

    .kaoqin-menu i {
        font-size: 15px;
        line-height: 55px;
        margin-right: 5px;
    }

    .icon-menu-right {
        font-size: 21px;
        color: #ffffff;
        line-height: 55px;
        cursor: pointer;
    }

    .right-corner-num {
        position: absolute;
        top: 5px;
        right: -18px;
        width: 24px;
        height: 24px;
        line-height: 24px;
        text-align: center;
        border: 1px solid #fff;
        border-radius: 50%;
        background-color: #f44336;
        color: #fff;
        font-size: 12px;
        cursor: pointer;
        font-style: normal;
    }

    .fa-bell {
        position: relative;
    }

    .split-right {
        line-height: 55px;
        height: 55px;
    }

    .split-right > .header-quick-search-split {
        float: none;
    }

    .header-quick-search-input {
        font-size: 12px;
    }

    .imglist-item {
        float: left;
        width: 100px;
        height: 100px;
        margin-left: 10px;
        margin-bottom: 10px;
        cursor: pointer;
        box-sizing: border-box;
        color: #ffffff;
    }

    .imglist-item.imglist-item-selected {
        border: 4px solid #98abcc;
    }

    .imglist-item i {
        font-size: 26px;
    }

    .popover-menu-item:hover {
        background: rgba(0, 0, 0, .2);
    }

    .popover-menu-item {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .padding-lr-0 {
        padding-left: 0px !important;
        padding-right: 0px !important;
    }
    .user-box-container {
        float: left;
    }
    .right-menu-box-item {
        float: left;
        padding-left: 12px;
        padding-right: 12px;
    }

    .kaoqin-item {
        margin-right: 30px;
    }
</style>