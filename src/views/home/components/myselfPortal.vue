<template>
    <div>
        <el-row :gutter="24" class="el-row-no-margin">
            <el-col :span="16">
                <el-row :gutter="24" class="el-row-no-margin">
                    <div class="panel panel-custom">
                        <div class="panel-heading">
                            <div class="panel-title">流程中心</div>
                        </div>
                        <div class="panel-body" style="height: 450px;">
                            流程中心
                        </div>
                    </div>
                </el-row>
            </el-col>
            <el-col :span="8">
                <el-row :gutter="24" class="el-row-no-margin">
                    <div class="panel panel-custom">
                        <div class="panel-body">
                            <FullCalendar :options="calendarOptions" />
                        </div>
                    </div>
                    <div class="panel panel-custom">
                        <div class="panel-heading">
                            <div class="panel-title">常用工具</div>
                        </div>
                        <div class="panel-body">
                            常用工具
                        </div>
                    </div>
                </el-row>

            </el-col>
        </el-row>
        <el-row :gutter="24" class="el-row-no-margin">
            <el-col :span="16">
                <el-row :gutter="24" class="el-row-no-margin">
                    <el-col :span="12" class="no-padding-left">
                        <div class="panel panel-custom">
                            <div class="panel-heading">
                                <div class="panel-title">文档中心</div>
                            </div>
                            <div class="panel-body" style="height: 255px;">
                                文档中心
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="12" class="no-padding-right">
                        <div class="panel panel-custom">
                            <div class="panel-heading">
                                <div class="panel-title">重要通知</div>
                            </div>
                            <div class="panel-body" style="height: 255px;">
                                重要通知
                            </div>
                        </div>
                    </el-col>
                </el-row>
            </el-col>
            <el-col :span="8">
                <div class="panel panel-custom">
                    <div class="panel-heading">
                        <div class="panel-title">预警提醒</div>
                    </div>
                    <div class="panel-body" style="height: 255px;">
                        预警提醒
                    </div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import FullCalendar from '@fullcalendar/vue';
    import dayGridPlugin from '@fullcalendar/daygrid';
    import interactionPlugin from '@fullcalendar/interaction';
    export default {
        name: "myselfPortal",
        components: {FullCalendar },
        data() {
            return {
                calendarOptions: {
                    plugins: [ dayGridPlugin, interactionPlugin ],
                    initialView: 'dayGridMonth',
                    locale: 'zh-cn',
                    headerToolbar: false
                }
            }
        },
        methods: {
            query() {
                this.tableData = [];
            }
        },
        mounted() {
            this.query();
        }
    }
</script>

<style scoped>

</style>