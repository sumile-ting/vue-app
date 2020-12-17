<template>
    <ul :class="[position == 'top' ? 'top-nav-menu-ul' : 'left-nav-menu-ul']">
        <li v-for="menuitem in asideNames" class="nav-menu-item"
            :key="menuitem.url"
            @mouseenter="hoverSubMenu(menuitem)"
            @mouseleave="hideSubMenu(menuitem)"
            @click="goRoute(menuitem, mainMenu)"
            :class="{'nav-menu-item-selected': menuitem.active }">
            <span>{{menuitem.name}}</span>
            <i class="el-icon-arrow-right icon-arrow"
               v-if="menuitem.children && menuitem.children.length"></i>
            <transition>
                <div v-show="menuitem.visible"
                     class="menu-submenu-placement-rightTop">
                    <div>
                        <menuList :aside-names="menuitem.children" :main-menu="mainMenu" :position="position" v-if="menuitem.children"></menuList>
                    </div>
                </div>
            </transition>
        </li>
    </ul>
</template>

<script>
    export default {
        name: "menuList",
        props: [
            'asideNames',
            'mainMenu',
            'position'
        ],
        methods: {
            hideSubMenu(item) {
                item.visible = false;
            },
            hoverSubMenu(item) {
                item.visible = true;
            },
            goRoute(item, activeMenu) {
                function getLeafNode(item) {
                    if (!item.children || item.children.length == 0) {
                        return item;
                    }
                    return getLeafNode(item.children[0]);
                }

                try {
                    activeMenu.hovered = false;
                    let leafNode = getLeafNode(item);
                    this.$store.commit('layout/setActiveMainMenu', activeMenu.mname);
                    this.$router.push(leafNode.url);
                } catch (e) {
                    activeMenu.hovered = false;
                }

            },
        }
    }
</script>

<style scoped>

    .nav-menu-item {
        list-style: none;
        margin: 0px;
        padding: 10px 8px 10px 15px;
        overflow: hidden;
        cursor: pointer;
    }

    .top-nav-menu-ul {
        margin: 0px;
        padding: 0px;
        width: 180px;
        background-color: #ffffff;
    }

    .menu-submenu-placement-rightTop {
        position: absolute;
        left: 180px;
        margin-top: -26px;
        margin-left: 2px;
    }

    .nav-menu-item:hover, .nav-menu-item-selected {
        background-color: #eaf8fe;
    }

    .icon-arrow {
        right: 0px;
        position: absolute;
        font-size: 15px;
        color: #000;
    }

    .left-nav-menu-ul {
        margin: 0px;
        padding: 0px;
        width: 180px;
        background-color: #ffffff;
        position: relative;
    }

</style>