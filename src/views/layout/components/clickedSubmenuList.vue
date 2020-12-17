<template>
    <div>
    <template v-for="item in asideNames">
        <el-submenu
                v-if="item.children && item.children.length"
                :index="item.url"
                :key="item.url"
        >
            <template slot="title">
                <i :class="item.icon"></i>
                <span :title="item.name">{{ item.name }}</span>
            </template>
            <clicked-submenu-list :aside-names="item.children" v-if="item.children"></clicked-submenu-list>

        </el-submenu>
        <el-menu-item v-else v-bind:index="item.url" :key="item.url">
            <i :class="item.icon"></i>
            <span slot="title">{{ item.name }}</span>
        </el-menu-item>
    </template>
        </div>
</template>

<script>
    export default {
        name: "clickedSubmenuList",
        props: [
            'asideNames',
        ],
    }
</script>

<style scoped>

</style>