<template>
    <div class="leftlayout-nav">
        <ul class="leftlayout-nav-ul">
            <li v-for="item in modulese" class="leftlayout-nav-item"
                @click="handleSelect(item)"
                :key="item.iname"
                :class="{'leftlayout-nav-item-selected': item.mname == $store.state.layout.activeMainMenu || item.hovered}"
                @mouseover="hoverMainMenu(item)">

                <el-popover
                        placement="right-start"
                        width="180"
                        trigger="hover"
                        @show="showPopoverMenu(item)"
                        @hide="hidePopoverMenu(item)"
                        popper-class="popper-menu-left-list"
                        :visible-arrow=false>
                    <div class="popover-menu left-nav-popover">
                        <menuList :aside-names="asideNames" :main-menu="item" position="left"> </menuList>
                    </div>
                    <div class="leftlayout-nav-title" slot="reference">
                         <span class="leftlayout-nav-icon">
                             <i :class="'icfont icon-' + item.icname"></i>
                             <span class="img-name">{{item.mname}}</span>
                             <i class="el-icon-arrow-right icon-arrow leftnav-icon-arrow"></i>
                         </span>

                    </div>
                </el-popover>


            </li>
        </ul>
    </div>
</template>

<script>
    import menuList from "./hoveredSubMenuList";
    import asideItemsUtil from '@/utils/asideItemsUtil';
    import _ from "lodash";

    export default {
        name: "leftnavbar",
        components: {menuList},
        data() {
            return {
                asideNames: [],
            };
        },
        computed: {
          modulese() {
              return this.$store.getters["layout/getModules"];
          },
          sideItems() {
              return _.defaultsDeep({}, this.$store.getters["layout/getAsideItems"]);
          }
        },
        methods: {
            hoverMainMenu(item) {
                let sideItem = this.sideItems[item.iname];
                let path = this.$route.path;

                function extendObj(item) {
                    _.forEach(item, child => {
                        child.visible = false;
                        let active = asideItemsUtil(child.children, path);
                        child.active = child.url == decodeURI(path) || active; //若在子节点中查找到匹配的路由，让其active为true
                        extendObj(child.children);
                    })
                }

                extendObj(sideItem);
                this.asideNames = sideItem;
            },
            showPopoverMenu(item) {
                item.hovered = true;
            },
            hidePopoverMenu(item) {
                item.hovered = false;
            },
            goBack() {
                window.history.length > 1 ? this.$router.go(-1) : this.$router.push("/");
            },
            handleSelect(item) {
                this.$router.push('/' + item.iname);
                this.$store.commit('layout/setActiveMainMenu', item.mname);
            }
        }
    }
</script>

<style scoped>

    .leftlayout-nav {
        min-width: 197px;
        position: relative;
    }

    .leftlayout-nav-ul {
        list-style: none;
        /*height: 55px;*/
        /*line-height: 55px;*/
        margin: 0px 0px 10px 0px;
        color: #333;
        border: none;
        background-color: #ffffff;
        justify-content: center;
        padding: 5px 0;
        text-align: left;
        box-shadow: 0 0 4px #e2e2e2;
    }

    .leftlayout-nav-item {
        height: 35px;
        line-height: 35px;
        margin: 6px;
        padding: 0;
        cursor: pointer;
        outline: none !important;

    }

    .leftlayout-nav-title {
        padding: 0 10px;
        cursor: pointer;
        white-space: nowrap;
    }

    .leftlayout-nav-icon span {
        margin-left: 10px;
        font-size: 13px;
    }

    .leftlayout-nav-item-selected, .leftlayout-nav-item:hover {
        background-color: #eaf8fe;
    }

    .leftlayout-nav-item-selected .leftlayout-nav-title, .leftlayout-nav-item:hover .leftlayout-nav-title {
        color: #fff;
        background: #0270c1;
        border-radius: 4px;
    }


    .icon-arrow {
        right: 0px;
        position: absolute;
        font-size: 15px;
        color: #000;
    }

    .leftnav-icon-arrow {
        height: 35px;
        line-height: 35px;
        right: 12px;
    }
</style>
