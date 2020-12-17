<template>
    <div class="toplayout-nav" id="toplayout-nav">
        <ul class="toplayout-nav-ul">
            <li v-for="item in modulese" class="toplayout-nav-item"
                @click="handleSelect(item)"
                :key="item.iname"
                :class="{'toplayout-nav-item-selected': item.mname == $store.state.layout.activeMainMenu || item.hovered}"
                @mouseenter="hoverMainMenu(item)">

                <el-popover
                        placement="bottom-start"
                        width="180"
                        trigger="hover"
                        @show="showPopoverMenu(item)"
                        @hide="hidePopoverMenu(item)"
                        popper-class="popper-menu-top-list"
                        :visible-arrow=false>
                    <div class="popover-menu top-nav-popover">
                        <menuList :aside-names="asideNames" :main-menu="item" position="top"> </menuList>
                    </div>
                    <div class="toplayout-nav-title" slot="reference">
                        <span class="toplayout-nav-icon">
                            <i :class="'icfont icon-' + item.icname"></i>
                            <span class="img-name">{{item.mname}}</span>
                        </span>

                    </div>
                </el-popover>


            </li>
        </ul>

    </div>
</template>


<script>
    import menuList from "./hoveredSubMenuList";
    import _ from "lodash";
    import asideItemsUtil from '@/utils/asideItemsUtil';

    export default {
        name: "topnavbar",
        components: {menuList},
        props: ['modulese'],
        data() {
            return {
                asideNames: [],
            };
        },
        methods: {
            hoverMainMenu(item) {
                let sideItems =  _.defaultsDeep({}, this.GLOBAL.ASIDE_ITEMS);
                let sideItem = sideItems[item.iname];

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
            handleSelect(item) {
                this.$router.push('/' + item.iname);
                this.$store.commit('layout/setActiveMainMenu', item.mname);
            }
        }

    };
</script>

<style scoped>
    .toplayout-nav-ul {
        list-style: none;
        display: flex;
        height: 55px;
        line-height: 55px;
        margin: 0px;
        color: #333;
        border: none;
        background-color: #ffffff;
        justify-content: center;
        box-shadow: 0 0 4px #e2e2e2;
    }

    .toplayout-nav-item {
        height: 35px;
        line-height: 35px;
        margin: 8px;
        padding: 0;
        cursor: pointer;
        outline: none;
    }

    .toplayout-nav-title {
        padding: 0 10px;
        cursor: pointer;
        white-space: nowrap;
    }

    .toplayout-nav-icon span {
        margin-left: 5px;
        font-size: 13px;
    }

    .toplayout-nav-item-selected .toplayout-nav-title, .toplayout-nav-item:hover .toplayout-nav-title {
        color: #fff;
        background: #0270c1;
        border-radius: 4px;
    }

</style>

