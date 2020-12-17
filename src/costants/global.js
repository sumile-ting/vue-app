/* 系统全局变量维护 */

/*  */
const Pattern = {
    yyyy_MM: 'yyyy-MM',
    yyyyMM: 'yyyyMM',
    yyyy_MM_dd: 'yyyy-MM-dd',
    yyyyMMdd: 'yyyyMMdd',
    yyyy_MM_dd_HH_mm_ss: 'yyyy-MM-dd HH:mm:ss',
    yyyyMMddHHmmss: 'yyyyMMddHHmmss',
    yyyy_MM_dd_HH_mm_ss_zh: 'yyyy年MM月dd日HH时mm分ss秒',
    yyyy_MM_dd_HH_mm_ss_SSS: 'yyyy-MM-dd HH:mm:ss.SSS',
    yyyy_MM_dd_zh: 'yyyy年MM月dd日',
    yyyy_MM_dd_HH_mm_zh: 'yyyy年MM月dd日HH时mm分',
}

const ASIDE_ITEMS = {
    marketMgt: [
        {
            url: "/marketMgt/market",
            name: "市场管理",
            icon: "el-icon-document",
            children: [
                {
                    url: "/marketMgt/market/marketWeeklyReport",
                    name: "市场周报",
                    children: [
                        {
                            url: "/marketMgt/market/marketWeeklyReport/marketWeeklyReport/周报",
                            name: "基层单位周报"
                        },
                        {
                            url: "/marketMgt/market/companyRevenueWeeklyReport/周报",
                            name: "公司创收周报"
                        },
                        {
                            url: "/marketMgt/market/revenueSamePeriodComparison",
                            name: "创收同期对比"
                        },
                    ]
                },
                {
                    url: "/marketMgt/market/marketMonthlyReport",
                    name: "市场月报",
                    children: [{
                        url: "/marketMgt/market/marketWeeklyReport/marketWeeklyReport/月报",
                        name: "基层单位月报"
                    }, {
                        url: "/marketMgt/market/companyRevenueWeeklyReport/月报",
                        name: "公司市场月报"
                    }]
                },
                {
                    url: "/marketMgt/market/marketDynamicRelease",
                    name: "市场动态发布"
                },
                {
                    url: "/marketMgt/market/marketMgtBase",
                    name: "基础数据管理",
                    children: [
                        {
                            url: "/marketMgt/market/marketIndicators",
                            name: "市场指标"
                        },
                        {
                            url: "/marketMgt/market/revenueStandardMgt",
                            name: "收入标准项管理"
                        },
                        {
                            url: "/marketMgt/market/projectListOfBasicUnits",
                            name: "基层单位标准项目"
                        },
                        {
                            url: "/marketMgt/market/firstPartyUnits",
                            name: "甲方单位管理"
                        },
                        {
                            url: "/marketMgt/customer/customerInfo",
                            name: "甲方项目对接管理"
                        },
                        {
                            url: "/marketMgt/market/qualificationMgt",
                            name: "资质管理"
                        },
                    ]
                },
                // {
                //     url: "/marketMgt/market/basicUnitDaily",
                //     name: "基层单位日报"
                // },
            ]
        },
        {
            url: "/marketMgt/customer",
            name: "客户管理",
            icon: "el-icon-document",
            children: [
                /* {
                   url: "/marketMgt/customer/customerVisitRecord",
                   name: "客户拜访记录"
                 },*/
                {
                    url: "/marketMgt/customer/returnVisitRecord",
                    name: "回访记录"
                },
                /* {
                   url: "/marketMgt/customer/importantClientDynamics",
                   name: "重要客户动态"
                 },*/
                {
                    url: "/marketMgt/customer/satisfaction",
                    name: "客户满意度调查"
                },
                {
                    url: "/marketMgt/customer/companyHonor",
                    name: "公司荣誉"
                },
                {
                    url: "/marketMgt/customer/clientList",
                    name: "客户名录"
                },
            ]
        },
        {
            url: "/marketMgt/bidding",
            name: "投标管理",
            icon: "el-icon-document",
            children: [
                {
                    url: "/marketMgt/bidding/biddingMgt",
                    name: "对标管理"
                },
                {
                    url: "/marketMgt/bidding/biddingMgtStatistics",
                    name: "对标统计"
                },
                {
                    url: "/marketMgt/bidding/biddingInfo",
                    name: "投标信息"
                },
                {
                    url: "/marketMgt/bidding/biddingInfoStatistical",
                    name: "投标统计表"
                },
                {
                    url: "/marketMgt/bidding/successfulBiddingInfo",
                    name: "中标信息"
                }
            ]
        },
        {
            url: "/marketMgt/bargain",
            name: "合同管理",
            icon: "el-icon-document",
            children: [
                {
                    url: "/marketMgt/bargain/bargainInfo",
                    name: "收入合同"
                },
                {
                    url: "/marketMgt/bargain/bargainInfoOut",
                    name: "支出合同"
                },
                {
                    url: "/marketMgt/bargain/contractSummary",
                    name: "合同统计表"
                },
                // {
                //   url: "/marketMgt/bargain/contractSettlementStatistics",
                //   name: "合同结算统计"
                // }
            ]
        },
        {
            url: "/marketMgt/contractor",
            name: "承包商管理",
            icon: "el-icon-document",
            children: [
                {
                    url: "/marketMgt/contractor/contractorInfo",
                    name: "承包商信息"
                },
                // {
                //   url: "/marketMgt/contractor/registrationDocIssuance",
                //   name: "文件发放登记"
                // }
            ]
        },
        {
            url: "/marketMgt/statisticalAnalysis",
            name: "统计分析",
            icon: "el-icon-document",
            children: [
                {
                    url: "/marketMgt/statisticalAnalysis/dataListStatistical",
                    name: "统计分析表(一)"
                },
            ]
        }
    ],
    hrManagement: [
        {
            url: "/hrManagement/personInfo",
            name: "人员信息",
            icon: "el-icon-document",
            children: [
                {
                    url: "/hrManagement/personInfo/personInfo",
                    name: "个人信息"
                },
                {
                    url: "/hrManagement/personInfo/infoManage/信息管理",
                    name: "信息管理"
                },
                {
                    url: "/hrManagement/personInfo/personDynamic",
                    name: "一线人员动态大表"
                },
                {
                    url: "/hrManagement/personInfo/erXianPersonDynamic",
                    name: "二线人员动态大表"
                },
                {
                    url: "/hrManagement/personInfo/personStatisticsMain",
                    name: "综合统计数据"
                },
            ]
        },
        {
            url: "/hrManagement/Attendance",
            name: "考勤管理",
            icon: "el-icon-document",
            children: [
                {
                    url: "/hrManagement/personManage/timeSheetManagement",
                    name: "员工考勤"
                },
                {
                    url: "/hrManagement/personManage/timeSheetExamine",
                    name: "考勤卡审核管理"
                },
                {
                    url: "/hrManagement/personManage/timeSheetManagementCard",
                    name: "员工考勤卡"
                },
                {
                    url: "/hrManagement/personManage/businessTrip",
                    name: "出差申请"
                },
                {
                    url: "/hrManagement/personManage/takeLeave",
                    name: "请假审批"
                },
                {
                    url: "/hrManagement/personManage/takeLeaveReview",
                    name: "销假审批"
                },
                {
                    url: "/hrManagement/personManage/timeSheetManagementStatistics",
                    name: "一线考勤统计"
                },
            ]
        },
        {
            url: "/hrManagement/personManage/skill",
            name: "技能鉴定",
            icon: "el-icon-document",
            children: [
                // {
                //   url: "/hrManagement/personManage/skillAppraisal",
                //   name: "技能鉴定登记"
                // },
                {
                    url: "/hrManagement/personManage/skillLevelDeclare",
                    name: "技能等级申报"
                },
            ]
        },
        {
            url: "/hrManagement/mobilize",
            name: "人员调动",
            icon: "el-icon-document",
            children: [
                /*  {
                    url: "/hrManagement/personManage/abilityEvaluation",
                    name: "能力评价登记"
                  },
                  {
                    url: "/hrManagement/personManage/postChange",
                    name: "岗位变更登记"
                  },*/
                {
                    url: "/hrManagement/personManage/personTransfer",
                    name: "人员调动管理"
                },
                {
                    url: "/hrManagement/personManage/internalRetreat",
                    name: "内退离岗登记"
                },
                {
                    url: "/hrManagement/personManage/retire",
                    name: "人员退休登记"
                },
                {
                    url: "/hrManagement/personManage/contractTermination",
                    name: "合同解除登记"
                }
            ]
        },
        {
            url: "/hrManagement/trainManage",
            name: "培训管理",
            icon: "el-icon-document",
            children: [
                {
                    url: "/hrManagement/trainManage/trainplanMgt",
                    name: "培训计划管理",
                    children: [
                        {
                            url: "/hrManagement/trainManage/demand",
                            name: "培训需求登记"
                        },
                     /*   {
                            url: "/hrManagement/trainManage/demandCheck",
                            name: "培训需求审核"
                        },*/
                        {
                            url: "/hrManagement/trainManage/demandSummary",
                            name: "培训需求汇总上报"
                        },
                        {
                            url: "/hrManagement/trainManage/safety",
                            name: "安全矩阵"
                        },
                        // {
                        //   url: "/hrManagement/trainManage/safetySummary",
                        //   name: "安全矩阵汇总"
                        // },
                        {
                            url: "/hrManagement/trainManage/self",
                            name: "自我培训"
                        },
                        {
                            url: "/hrManagement/trainManage/annualPlan",
                            name: "公司年度培训计划"
                        },
                    ]
                },

                {
                    url: "/hrManagement/trainManage/trainprocessMgt",
                    name: "培训过程管理",
                    children: [
                        {
                            url: "/hrManagement/trainManage/outOfPlan",
                            name: "计划外培训申请"
                        },
                        {
                            url: "/hrManagement/trainManage/change",
                            name: "培训计划变更"
                        },
                        {
                            url: "/hrManagement/trainManage/outOf",
                            name: "外出培训申请"
                        },
                        {
                            url: "/hrManagement/trainManage/approval",
                            name: "培训班审批"
                        },
                        {
                            url: "/hrManagement/trainManage/application",
                            name: "外聘教师申请表"
                        },
                        {
                            url: "/hrManagement/trainManage/teachPlan",
                            name: "培训教学计划"
                        },
                        {
                            url: "/hrManagement/trainManage/teachSchedule",
                            name: "教学进度表"
                        },
                        {
                            url: "/hrManagement/trainManage/costApproval",
                            name: "授课费审批表"
                        },
                        {
                            url: "/hrManagement/trainManage/projectApproval",
                            name: "培训项目审批"
                        },
                        {
                            url: "/hrManagement/trainManage/attendance",
                            name: "培训考勤"
                        },
                        {
                            url: "/hrManagement/trainManage/employeeSatisfaction",
                            name: "参训员工满意度评价"
                        },
                        {
                            url: "/hrManagement/trainManage/trainingEffect",
                            name: "培训效果评估"
                        },
                        {
                            url: "/hrManagement/trainManage/teachingSatisfaction",
                            name: "授课满意度评测"
                        },
                        {
                            url: "/hrManagement/trainManage/trainingResults",
                            name: "专业路培训结果登记"
                        },
                        {
                            url: "/hrManagement/trainManage/selfTrainingResults",
                            name: "自我培训结果登记"
                        },
                        {
                            url: "/hrManagement/trainManage/trainingFileCard",
                            name: "员工培训档案卡"
                        }
                    ]
                },

            ]
        },
        {
            url: "/hrManagement/workersSalary",
            name: "劳务工薪酬",
            icon: "el-icon-document",
            children: [

                // {
                //   url: "/hrManagement/workersSalary/frontlineAllowance",
                //   name: "一线津贴标准"
                // },
                {
                    url: "/hrManagement/personInfo/infoManage/劳务工人员管理",
                    name: "劳务工人员管理"
                },
                {
                    url: "/hrManagement/workersSalary/pay",
                    name: "工资发放"
                },
                // {
                //   url: "/hrManagement/workersSalary/incomeStats",
                //   name: "收入统计"
                // },
                {
                    url: "/hrManagement/workersSalary/workersSalaryBase",
                    name: "基础信息管理",
                    icon: "el-icon-document",
                    children: [
                        {
                            url: "/hrManagement/workersSalary/dispatchCompanyMgt",
                            name: "派遣公司管理"
                        },
                        {
                            url: "/hrManagement/workersSalary/socialSecurityMgt",
                            name: "社保比例管理"
                        },
                        {
                            url: "/hrManagement/workersSalary/postSalaryMgt",
                            name: "岗位工资管理"
                        },
                        {
                            url: "/hrManagement/workersSalary/areaAllowance",
                            name: "地区津贴标准"
                        },
                        {
                            url: "/hrManagement/workersSalary/uniformSubsidy",
                            name: "公司统一补贴管理"
                        },
                    ]
                },
            ]
        },
    ],
    materialProcurement: [
        {
            url: "/materialProcurement/basicData",
            name: "基础数据",
            icon: "el-icon-document",
            children: [
                {
                    url: "/materialProcurement/basicData/supplier",
                    name: "供应商管理"
                },
                {
                    url: "/materialProcurement/basicData/pointSelect",
                    name: "物资管理"
                },
                {
                    url: "/materialProcurement/basicData/code",
                    name: "临时码申请"
                },
                {
                    url: "/materialProcurement/basicData/bid",
                    name: "中标目录"
                }
            ]
        },
        {
            url: "/materialProcurement/shoppingList",
            name: "采购计划",
            icon: "el-icon-document",
            children: [
                {
                    url: "/materialProcurement/shoppingList/team",
                    name: "申请采购"
                },
                {
                    url: "/materialProcurement/shoppingList/unit",
                    name: "基层单位汇总"
                },
                {
                    url: "/materialProcurement/shoppingList/center",
                    name: "设备管理中心汇总"
                },
                {
                    url: "/materialProcurement/shoppingList/station",
                    name: "采购站采购"
                },
                {
                    url: "/materialProcurement/shoppingList/order",
                    name: "采购订单"
                }
            ]
        },
        {
            url: "/materialProcurement/warehouseAcceptance",
            name: "入库验收",
            icon: "el-icon-document",
            children: [
                {
                    url: "/materialProcurement/warehouseAcceptance/delivery",
                    name: "供应商送货"
                },
                {
                    url: "/materialProcurement/warehouseAcceptance/warehouse",
                    name: "验收入库"
                },
                //   {
                //     url: "/materialProcurement/warehouseAcceptance/statistics",
                //     name: "入库统计"
                //   }
            ]
        },
        {
            url: "/materialProcurement/summary",
            name: "统计汇总",
            icon: "el-icon-document",
            children: [

                {
                    url: "/materialProcurement/summary/statisticsMain",
                    name: "统计首页"
                },
                {
                    url: "/materialProcurement/summary/sixPurchase",
                    name: "60大类采购情况统计表"
                },
                {
                    url: "/materialProcurement/summary/order",
                    name: "采购订单统计表"
                },
                {
                    url: "/materialProcurement/summary/material",
                    name: "各单位采购情况统计表"
                },
                // {
                //     url: "/materialProcurement/summary/delivery",
                //     name: "供应商交货情况统计表"
                // },
            ]
        }, {
            url: "/materialProcurement/setting",
            name: "采购相关配置",
            icon: "el-icon-setting",
            children: [
                {
                    url: "/materialProcurement/setting/templateMake",
                    name: "自动化报料模板制作"
                },
                {
                    url: "/materialProcurement/setting/templateConfig",
                    name: "自动化报料模板分配"
                }
            ]
        }
    ],
    materialMgt: [
        {
            url: "/materialMgt/room",
            name: "库房管理",
            icon: "el-icon-document",
            children: [
                {
                    url: "/materialMgt/room/roomInfo",
                    name: "库房信息"
                },
                {
                    url: "/materialMgt/room/stockInfo",
                    name: "库存信息"
                },
                // {
                //   url: "/materialMgt/room/stockAnalysis",
                //   name: "库存分析"
                // }
            ]
        },
        {
            url: "/materialMgt/goods",
            name: "货品管理",
            icon: "el-icon-document",
            children: [
                {
                    url: "/materialMgt/goods/room",
                    name: "按仓库",
                    icon: "el-icon-document",
                    children: []    // 动态结点
                },
                {
                    url: "/materialMgt/goods/wzlb",
                    name: "按类别",
                    icon: "el-icon-document",
                    children: []  // 动态结点
                },
                {
                    url: "/materialMgt/goods/today",
                    name: "今日有变化",
                    icon: "el-icon-document",
                    children: [
                        {
                            url: "/materialMgt/goods/today/all",
                            name: "全部",
                        },
                        {
                            url: "/materialMgt/goods/today/rk",
                            name: "今日有入库",
                        },
                        {
                            url: "/materialMgt/goods/today/ck",
                            name: "今日有出库",
                        },
                    ]
                },
                {
                    url: "/materialMgt/goods/yesterday",
                    name: "昨日有变化",
                    icon: "el-icon-document",
                    children: [
                        {
                            url: "/materialMgt/goods/yesterday/all",
                            name: "全部",
                        },
                        {
                            url: "/materialMgt/goods/yesterday/rk",
                            name: "昨日有入库",
                        },
                        {
                            url: "/materialMgt/goods/yesterday/ck",
                            name: "昨日有出库",
                        },
                    ]
                },
                {
                    url: "/materialMgt/goods/month",
                    name: "本月有变化",
                    icon: "el-icon-document",
                    children: [
                        {
                            url: "/materialMgt/goods/month/all",
                            name: "全部",
                        },
                        {
                            url: "/materialMgt/goods/month/rk",
                            name: "本月有入库",
                        },
                        {
                            url: "/materialMgt/goods/month/ck",
                            name: "本月有出库",
                        },
                    ]
                },
                {
                    url: "/materialMgt/goods/stock",
                    name: "库存量预警",
                    icon: "el-icon-document",
                    children: [
                        {
                            url: "/materialMgt/goods/stock/all",
                            name: "全部",
                        },
                        {
                            url: "/materialMgt/goods/stock/floor",
                            name: "库存不足预警",
                        },
                        {
                            url: "/materialMgt/goods/stock/floorYbwd",
                            name: "库存不足预警(加已报未到)",
                        },
                        {
                            url: "/materialMgt/goods/stock/ceiling",
                            name: "库存上限预警(加已报未到)",
                        },
                        {
                            url: "/materialMgt/goods/stock/validone",
                            name: "有效期预警（不足一个月）",
                        },
                        {
                            url: "/materialMgt/goods/stock/validthree",
                            name: "有效期预警（不足三个月）",
                        },
                        {
                            url: "/materialMgt/goods/stock/alreadyvalid",
                            name: "有效期预警（已过期）",
                        },
                    ]
                },
            ]
        },
        {
            url: "/materialMgt/material",
            name: "出入库单据",
            icon: "el-icon-document",
            children: [
                {
                    url: "/materialMgt/material/rk",
                    name: "入库单",
                    icon: "el-icon-document",
                    children: [
                        {
                            url: "/materialMgt/material/rk/ll",
                            name: "领料入库",
                        },
                        {
                            url: "/materialMgt/material/rk/tl",
                            name: "退料入库"
                        },
                        {
                            url: "/materialMgt/material/rk/ty",
                            name: "退用入库"
                        },
                        {
                            url: "/materialMgt/material/rk/db",
                            name: "调拨入库",
                        },
                        // {
                        //     url: "/materialMgt/material/rk/sc",
                        //     name: "生产入库"
                        // },
                        {
                            url: "/materialMgt/material/rk/cg",
                            name: "采购入库"
                        },
                        {
                            url: "/materialMgt/material/rk/qt",
                            name: "其它入库"
                        }
                    ]
                },
                {
                    url: "/materialMgt/material/ck",
                    name: "出库单",
                    icon: "el-icon-document",
                    children: [
                        {
                            url: "/materialMgt/material/ck/ly",
                            name: "领用出库",
                        },
                        {
                            url: "/materialMgt/material/ck/ll",
                            name: "领料出库"
                        },
                        {
                            url: "/materialMgt/material/ck/tl",
                            name: "退料出库"
                        },
                        {
                            url: "/materialMgt/material/ck/db",
                            name: "调拨出库",
                        }
                    ]
                },
                {
                    url: "/materialMgt/material/dd",
                    name: "调拨单"
                },
                {
                    url: "/materialMgt/material/inventory",
                    name: "盘点单"
                }
            ]
        },
        {
            url: "/materialMgt/analysis",
            name: "分析汇总",
            icon: "el-icon-document",
            children: [
                {
                    url: "/materialMgt/analysis/cktj",
                    name: "出库情况统计"
                },
            ]
        },
        {
            url: "/materialMgt/setting",
            name: "相关配置",
            icon: "el-icon-document",
            children: [
                {
                    url: "/materialMgt/setting/roomShow",
                    name: "库房列表配置"
                },
            ]
        },
    ],
    equipmentMgt: [
        {
            url: "/equipmentMgt/purchase",
            name: "设备购置",
            icon: "el-icon-document",
            children: [
                {
                    url: "/equipmentMgt/purchase/plan",
                    name: "设备需求计划"
                },
                {
                    url: "/equipmentMgt/purchase/apply",
                    name: "设备购置申请"
                },
                {
                    url: "/equipmentMgt/purchase/form",
                    name: "设备购置选型单"
                }
            ]
        },
        {
            url: "/equipmentMgt/mange",
            name: "设备管理",
            icon: "el-icon-document",
            children: [
                {
                    url: "/equipmentMgt/mange/accept",
                    name: "设备验收"
                },
                {
                    url: "/equipmentMgt/mange/initialize",
                    name: "设备初始化"
                },
                {
                    url: "/equipmentMgt/mange/work",
                    name: "设备运转管理"
                },
                {
                    url: "/equipmentMgt/mange/maintain",
                    name: "设备保养"
                },
                {
                    url: "/equipmentMgt/mange/maintenanceQualification",
                    name: "机修鉴定及验收"
                },
                {
                    url: "/equipmentMgt/mange/allot",
                    name: "设备调拨"
                },
                {
                    url: "/equipmentMgt/mange/scrap",
                    name: "设备报废"
                }
            ]
        },
        {
            url: "/equipmentMgt/ledger",
            name: "设备台账",
            icon: "el-icon-document",
            
        },
        {
            url: "/equipmentMgt/measure",
            name: "计量器具管理",
            icon: "el-icon-document",
            children: [
                {
                    url: "/equipmentMgt/measure/survey",
                    name: "测量管理体系"
                },
                {
                    url: "/equipmentMgt/measure/trainingRecords",
                    name: "培训记录"
                },
                {
                    url: "/equipmentMgt/measure/standard",
                    name: "标准计量器具"
                },
                {
                    url: "/equipmentMgt/measure/ledger",
                    name: "计量器具台账"
                },
                {
                    url: "/equipmentMgt/measure/maintain",
                    name: "计量器具检定"
                },
                {
                    url: "/equipmentMgt/measure/standardAddOrUpdate",
                    name: "新增/更新标准器具"
                },
                {
                    url: "/equipmentMgt/measure/statistics",
                    name: "统计分析"
                }

            ]
        },
        {
            url: "/equipmentMgt/statistics",
            name: "设备统计分析",
            icon: "el-icon-document",
            children: [
                {
                    url: "/equipmentMgt/statistics/marketDistribution",
                    name: "设备市场分布"
                },
                {
                    url: "/equipmentMgt/statistics/countStatistics",
                    name: "主要设备统计(一)"
                },
                {
                    url: "/equipmentMgt/statistics/countStatistics2",
                    name: "综合数据统计"
                }

            ]
        }
    ],
    productionMgt: [
        {
            url: "/productionMgt/construction",
            name: "施工准备",
            icon: "el-icon-document",
            children: [
                {
                    url: "/productionMgt/construction/teamManagement",
                    name: "队伍管理"
                },
                {
                    url: "/productionMgt/construction/PersonnelTransfer",
                    name: "人员调剂"
                },
                {
                    url: "/productionMgt/construction/singleWellInfo",
                    name: "单井基本信息"
                },
                // {
                //   url: "/productionMgt/construction/teamStaffing",
                //   name: "队伍人员配置"
                // },
                {
                    url: "/productionMgt/construction/deviceConfiguration",
                    name: "设备配置"
                }
            ]
        },
        {
            url: "/productionMgt/dispatch",
            name: "调度管理",
            icon: "el-icon-document",
            children: [
                {
                    url: "/productionMgt/dispatch/carCoordinator",
                    name: "车辆调度"
                },
                {
                    url: "/productionMgt/dispatch/carExpenses",
                    name: "车辆费用"
                },
                {
                    url: "/productionMgt/dispatch/carReport",
                    name: "车辆报表"
                },
                {
                    url: "/productionMgt/dispatch/carUsePlan",
                    name: "车辆使用计划"
                },
                // {
                //   url: "/productionMgt/dispatch/vehicleStatistics",
                //   name: "车辆统计表"
                // },
                // {
                //   url: "/productionMgt/dispatch/transportRegistration",
                //   name: "外雇车辆出行"
                // },
                // {
                //   url: "/productionMgt/dispatch/equipmentRelocation",
                //   name: "录井设备搬迁"
                // }
            ]
        },
        {
            url: "/productionMgt/process",
            name: "过程管理",
            icon: "el-icon-document",
            children: [
                // {
                //   url: "/productionMgt/process/modificationConstructionData",
                //   name: "施工基础数据修改"
                // },
                {
                    url: "/productionMgt/process/chemicalsUseRegistration",
                    name: "危化品使用登记"
                },
                {
                    url: "/productionMgt/process/productionDaily",
                    name: "项目部生产日报"
                },
                {
                    url: "/productionMgt/process/demaCenterDaily",
                    name: "德玛仪器制造中心日报"
                },
                {
                    url: "/productionMgt/process/surveyCentreDaily",
                    name: "测绘中心日报"
                },
                {
                    url: "/productionMgt/process/evaluationCenterDaily",
                    name: "综合解释评价中心日报"
                },
                // {
                //   url: "/productionMgt/process/materialConsumptionRegister",
                //   name: "材料消耗登记"
                // }
            ]
        },
        {
            url: "/productionMgt/monthly",
            name: "月报管理",
            icon: "el-icon-document",
            children: [
                {
                    url: "/productionMgt/monthly/productionMonthlyReport",
                    name: "生产月报"
                },
                // {
                //     url: "/productionMgt/monthly/aMonthlyReport",
                //     name: "一类月报"
                // },
                // {
                //     url: "/productionMgt/monthly/bMonthlyReport",
                //     name: "二类月报"
                // },
                // {
                //   url: "/productionMgt/monthly/monthlySummaryReport",
                //   name: "月总结报告"
                // }
            ]
        },
        // {
        //   url: "/productionMgt/statisticalReports",
        //   name: "统计报表",
        //   icon: "el-icon-document",
        //   
        // }
        {
            url: "/productionMgt/statisticalReports",
            name: "统计分析",
            icon: "el-icon-document",
            children: [
                {
                    url: "/productionMgt/statisticalReports/dataStatistics",
                    name: "统计分析(一)"
                },

            ]
        },
    ],
    hsse: [
        {
            url: "/hsse/institutions",
            name: "组织机构及职责",
            icon: "el-icon-document",
            children: [
                {
                    url: "/hsse/institutions/managementNetwork",
                    name: "管理网络",
                    
                },
                {
                    url: "/hsse/institutions/duty",
                    name: "责任制",
                    icon: "el-icon-document",
                    children: [
                        {
                            url: "/hsse/institutions/duty/safetyProductionList",
                            name: "安全生产责任清单"
                        }
                    ]
                }
            ]
        },
        {
            url: "/hsse/health",
            name: "职业健康",
            icon: "el-icon-document",
            children: [
                {
                    url: "/hsse/health/baseMgt",
                    name: "基础管理",
                    icon: "el-icon-document",
                    children: [
                        {
                            url: "/hsse/health/baseMgt/jobManagement",
                            name: "接害岗位管理"
                        },
                        {
                            url: "/hsse/health/baseMgt/personnelStatistics",
                            name: "接害岗位人员统计"
                        },
                        {
                            url: "/hsse/health/baseMgt/supplyLedger",
                            name: "劳动防护用品配备台账",
                            icon: "el-icon-document",
                            children: [
                                {
                                    url: "/hsse/health/baseMgt/supplyLedger/records",
                                    name: "个人防护用品发放使用记录"
                                },
                                {
                                    url: "/hsse/health/baseMgt/supplyLedger/checklist",
                                    name: "职业病防护设施一览表"
                                }
                            ]
                        }
                    ]
                },
                {
                    url: "/hsse/health/testMgt",
                    name: "检测管理",
                    icon: "el-icon-document",
                    children: [
                        {
                            url: "/hsse/health/testMgt/siteInspection",
                            name: "接害场所检测"
                        },
                        {
                            url: "/hsse/health/testMgt/healthForm",
                            name: "接害岗位人员体检情况表"
                        }
                    ]
                },
                {
                    url: "/hsse/health/healthRecord",
                    name: "个人职业健康监护档案"
                }
            ]
        },
        {
            url: "/hsse/fireMgt",
            name: "消防管理",
            icon: "el-icon-document",
            children: [
                {
                    url: "/hsse/fireMgt/fireRecord",
                    name: "消防档案",
                    icon: "el-icon-document",
                    children: [
                        {
                            url: "/hsse/fireMgt/fireRecord/officeBuildingFd",
                            name: "机关楼消防档案"
                        },
                        {
                            url: "/hsse/fireMgt/fireRecord/basicUnitFd",
                            name: "基层单位消防档案"
                        },
                        {
                            url: "/hsse/fireMgt/fireRecord/firePlace",
                            name: "公司重点防火场所"
                        }
                    ]
                },
                {
                    url: "/hsse/fireMgt/equipmentTest",
                    name: "消防设施检测",
                    icon: "el-icon-document",
                    children: [
                        {
                            url: "/hsse/fireMgt/equipmentTest/statistics",
                            name: "消防设施检测统计"
                        },
                        {
                            url: "/hsse/fireMgt/equipmentTest/report",
                            name: "消防设施统计报表"
                        }
                    ]
                },
                {
                    url: "/hsse/fireMgt/fireSafetyInspection",
                    name: "消防安全检查",
                    icon: "el-icon-document",
                    children: [
                        {
                            url: "/hsse/fireMgt/fireSafetyInspection/companyFsi",
                            name: "公司消防安全检查"
                        },
                        {
                            url: "/hsse/fireMgt/fireSafetyInspection/basicUnitFsi",
                            name: "基层单位消防安全检查"
                        }
                    ]
                }
            ]
        },
        {
            url: "/hsse/saftyMgt",
            name: "安全设施管理",
            icon: "el-icon-document",
            children: [
                {
                    url: "/hsse/saftyMgt/sensor",
                    name: "传感器",
                    icon: "el-icon-document",
                    children: [
                        {
                            url: "/hsse/saftyMgt/sensor/standingBook",
                            name: "台账"
                        },
                        {
                            url: "/hsse/saftyMgt/sensor/inspectionRecords",
                            name: "检测记录"
                        }
                    ]
                },
                {
                    url: "/hsse/saftyMgt/leakageProtector",
                    name: "漏电保护器",
                    icon: "el-icon-document",
                    children: [
                        {
                            url: "/hsse/saftyMgt/leakageProtector/standingBook",
                            name: "台账"
                        },
                        {
                            url: "/hsse/saftyMgt/leakageProtector/inspectionRecords",
                            name: "检测记录"
                        }
                    ]
                }
            ]
        },
        {
            url: "/hsse/qhse",
            name: "QHSE体系运行管理",
            icon: "el-icon-document",
            children: [
                {
                    url: "/hsse/qhse/systemAuditMgt",
                    name: "体系审核管理",
                    children: [
                        {
                            url: "/hsse/qhse/systemAuditMgt/issueCorrective",
                            name: "问题整改验证"
                        }
                    ]
                },
                {
                    url: "/hsse/qhse/reviewMgt",
                    name: "管理评审管理",
                    icon: "el-icon-document",
                    children: [
                        {
                            url: "/hsse/qhse/reviewMgt/resolution",
                            name: "管理评审决议"
                        },
                        {
                            url: "/hsse/qhse/reviewMgt/review",
                            name: "管理评审"
                        }
                    ]
                },
                {
                    url: "/hsse/qhse/fileMgt",
                    name: "文件管理",
                    icon: "el-icon-document",
                    children: [
                        {
                            url: "/hsse/qhse/fileMgt/controlledFileMgt",
                            name: "受控文件管理"
                        },
                        {
                            url: "/hsse/qhse/fileMgt/recordsMgt",
                            name: "记录管理"
                        }
                    ]
                }
            ]
        },
        {
            url: "/hsse/energy",
            name: "能源管理",
            icon: "el-icon-document",
            children: [
                {
                    url: "/hsse/energy/energyStatistics",
                    name: "节能节水数据统计管理",
                    icon: "el-icon-document",
                    children: [
                        {
                            url: "/hsse/energy/energyStatistics/waterAndElectricitySum",
                            name: "水电汇总"
                        },
                        {
                            url: "/hsse/energy/energyStatistics/gasSum",
                            name: "天然气汇总"
                        },
                        {
                            url: "/hsse/energy/energyStatistics/oilSum",
                            name: "油料汇总"
                        }
                    ]
                },
                {
                    url: "/hsse/energy/evaluationMgt",
                    name: "能源因素识别与评价管理",
                    icon: "el-icon-document",
                    children: [
                        {
                            url: "/hsse/energy/evaluationMgt/identification",
                            name: "能源因素识别"
                        },
                        {
                            url: "/hsse/energy/evaluationMgt/energyFactorList",
                            name: "能源因素清单"
                        }
                    ]
                }
            ]
        },
        {
            url: "/hsse/industrialMgt",
            name: "工业安全管理",
            icon: "el-icon-document",
            children: [
                {
                    url: "/hsse/industrialMgt/hseTargetMgt",
                    name: "HSE目标指标管理",
                    icon: "el-icon-document",
                    children: [
                        {
                            url: "/hsse/industrialMgt/hseTargetMgt/hseTarget",
                            name: "HSE目标"
                        },
                        {
                            url: "/hsse/industrialMgt/hseTargetMgt/monthlyIndicators",
                            name: "月度目标指标完成情况"
                        }
                    ]
                },
                {
                    url: "/hsse/industrialMgt/preventionConstruction",
                    name: "双重预防机制建设",
                    icon: "el-icon-document",
                    children: [
                        {
                            url:
                                "/hsse/industrialMgt/preventionConstruction/hazardFactor",
                            name: "危害因素辨识"
                        },
                        {
                            url:
                                "/hsse/industrialMgt/preventionConstruction/hiddenPerils",
                            name: "隐患排查治理"
                        }
                    ]
                },
                {
                    url: "/hsse/industrialMgt/dangerousChemicalMgt",
                    name: "危险化学品管理",
                    icon: "el-icon-document",
                    children: [
                        {
                            url:
                                "/hsse/industrialMgt/dangerousChemicalMgt/BuyersGuideChem",
                            name: "危险化学品目录"
                        },
                        {
                            url:
                                "/hsse/industrialMgt/dangerousChemicalMgt/chemicalLedger",
                            name: "危险化学品台账"
                        }
                    ]
                },
                {
                    url: "/hsse/industrialMgt/environmentProtection",
                    name: "相关方安全环保协议"
                },
                {
                    url: "/hsse/industrialMgt/safetyExperienceSharing",
                    name: "安全经验分享"
                },
                {
                    url: "/hsse/industrialMgt/communication",
                    name: "安全观察与沟通",
                    icon: "el-icon-document",
                    children: [
                        {
                            url:
                                "/hsse/industrialMgt/communication/communicationStatistic",
                            name: "安全观察与沟通统计表"
                        },
                        {
                            url:
                                "/hsse/industrialMgt/communication/communicationReport",
                            name: "安全观察与沟通报告"
                        }
                    ]
                },
                {
                    url: "/hsse/industrialMgt/hseMonthlySummary",
                    name: "HSE月度总结"
                }
            ]
        },
        {
            url: "/hsse/trafficMgt",
            name: "交通管理",
            icon: "el-icon-document",
            children: [
                {
                    url: "/hsse/trafficMgt/vehicleMgt",
                    name: "车辆管理",
                    children: [
                        {
                            url: "/hsse/trafficMgt/vehicleMgt/vehicleParameter",
                            name: "车辆台账"
                        }
                    ]
                },
                {
                    url: "/hsse/trafficMgt/driverMgt",
                    name: "驾驶员管理",
                    icon: "el-icon-document",
                    children: [
                        {
                            url: "/hsse/trafficMgt/driverMgt/driverParameter",
                            name: "驾驶员台账"
                        },
                        {
                            url: "/hsse/trafficMgt/driverMgt/driverLicense",
                            name: "内部准驾证台账"
                        }
                    ]
                }
            ]
        },
        {
            url: "/hsse/supervision",
            name: "监督检查",
            icon: "el-icon-document",
            children: [
                {
                    url: "/hsse/supervision/supervisionBriefing",
                    name: "监督简报"
                },
                {
                    url: "/hsse/supervision/illegalMgtLedger",
                    name: "违章管理台账"
                }
            ]
        }
    ],
    SRmgt: [
        {
            url: "/SRmgt/projectMgt",
            name: "项目管理",
            icon: "el-icon-document",
            children: [
                {
                    url: "/SRmgt/projectMgt/projectLevy",
                    name: "立项征集"
                },
                {
                    url: "/SRmgt/projectMgt/projectControl",
                    name: "项目管控"
                },
                {
                    url: "/SRmgt/projectMgt/dataCollection",
                    name: "资料归集"
                },
                {
                    url: "/SRmgt/projectMgt/costCollection",
                    name: "费用归集"
                },
                {
                    url: "/SRmgt/projectMgt/parterMgt",
                    name: "协作方管理"
                }
            ]
        },
        {
            url: "/SRmgt/resultMgt",
            name: "成果管理",
            icon: "el-icon-document",
            children: [
                {
                    url: "/SRmgt/resultMgt/achievement",
                    name: "成果"
                },
                {
                    url: "/SRmgt/resultMgt/paperInfo",
                    name: "论文资讯"
                },
                {
                    url: "/SRmgt/resultMgt/intellectualProperty",
                    name: "知识产权"
                }
            ]
        },
        {
            url: "/SRmgt/winMgt",
            name: "报奖管理",
            icon: "el-icon-document",
            children: [
                {
                    url: "/SRmgt/winMgt/intraGroup",
                    name: "集团内部"
                },
                {
                    url: "/SRmgt/winMgt/localGovernment",
                    name: "地方政府"
                },
                {
                    url: "/SRmgt/winMgt/awards",
                    name: "获奖情况"
                }
            ]
        },
        {
            url: "/SRmgt/statistics",
            name: "综合统计",
            icon: "el-icon-document",
            children: [
                {
                    url: "/SRmgt/statistics/statisticalForm",
                    name: "统计报表"
                },
                {
                    url: "/SRmgt/statistics/xmProgress",
                    name: "项目进度对比"
                },
                {
                    url: "/SRmgt/statistics/xmComparison",
                    name: "项目对比"
                }
            ]
        },
        {
            url: "/SRmgt/authorityMgt",
            name: "信息系统权限管理",
            icon: "el-icon-document",
            
        },
        {
            url: "/SRmgt/materialMgt",
            name: "项目物资管理",
            icon: "el-icon-document",
            
        }
    ],
    engTechnology: [
        {
            url: "/engTechnology/wellControl",
            name: "井控管理",
            icon: "el-icon-document",
            children: [
                {
                    url: "/engTechnology/wellControl/certificateLedgerTraining",
                    name: "证件台账与培训"
                },
                {
                    url: "/engTechnology/wellControl/earlyWarning",
                    name: "异常预报统计"
                },
                {
                    url: "/engTechnology/wellControl/wellSummary",
                    name: "井控总结"
                },
                {
                    url: "/engTechnology/wellControl/assessment",
                    name: "井控考核"
                },
                {
                    url: "/engTechnology/wellControl/rectificationReplyForm",
                    name: "整改回复单"
                }
            ]
        },
        {
            url: "/engTechnology/qualityManagement",
            name: "质量管理",
            icon: "el-icon-document",
            children: [
                {
                    url: "/engTechnology/qualityManagement/supervisionAndCheck",
                    name: "监督检查"
                },
                {
                    url: "/engTechnology/qualityManagement/QCGroupActivities",
                    name: "QC小组活动"
                },
                {
                    url:
                        "/engTechnology/qualityManagement/QualityEngineerMonthlyReport",
                    name: "质量、工程技术指标月报"
                },
                {
                    url: "/engTechnology/qualityManagement/qualityLossRateLedger",
                    name: "质量损失率台账"
                },
                {
                    url:
                        "/engTechnology/qualityManagement/qualityLossRateAnalysis",
                    name: "质量损失率分析"
                },
                {
                    url: "/engTechnology/qualityManagement/usingStardardMgt",
                    name: "在用标准管理"
                },
                {
                    url: "/engTechnology/qualityManagement/selfProductReport",
                    name: "自产产品报告"
                },
                {
                    url:
                        "/engTechnology/qualityManagement/qualityAanalysisMeeting",
                    name: "质量分析会"
                },
                {
                    url:
                        "/engTechnology/qualityManagement/keyWellCompletionDataReview",
                    name: "重点井完井资料评审"
                },
                {
                    url:
                        "/engTechnology/qualityManagement/completionDataAcceptance",
                    name: "完井资料验收"
                }
            ]
        },
        {
            url: "/engTechnology/technicalManagement",
            name: "工程技术管理",
            icon: "el-icon-document",
            children: [
                {
                    url: "/engTechnology/technicalManagement/summary",
                    name: "工程技术总结"
                },
                {
                    url: "/engTechnology/technicalManagement/review",
                    name: "施工方案评审"
                },
                {
                    url:
                        "/engTechnology/technicalManagement/keyWellConstructionPlan",
                    name: "重点井施工方案"
                },
                {
                    url: "/engTechnology/technicalManagement/acceptance",
                    name: "设备安装验收"
                },
                {
                    url: "/engTechnology/technicalManagement/statistics",
                    name: "工程师驻井统计"
                },
                {
                    url: "/engTechnology/technicalManagement/wellRecord",
                    name: "驻井记录"
                }
            ]
        },
        {
            url: "/engTechnology/singleWellAssess",
            name: "单井考核",
            icon: "el-icon-document",
            children: [
                {
                    url: "/engTechnology/singleWellAssess/assessmentIndex",
                    name: "单井质量考核指标"
                },
                {
                    url: "/engTechnology/singleWellAssess/earlyWarningSituation",
                    name: "单井井控异常预报情况"
                },
                {
                    url: "/engTechnology/singleWellAssess/applicationSituation",
                    name: "单井技术应用情况"
                }
            ]
        }
    ],
    // 财务管理
    financialMgt: [
        // {
        //   url: "/financialMgt/costProjectManagement",
        //   name: "成本项目管理",
        //   icon: "el-icon-document",
        //   
        // },

        {
            url: "/financialMgt/formLook",
            name: "经营报表查看",
            icon: "el-icon-document",
            
        },
        {
            url: "/financialMgt/guiKouDetails",
            name: "归口详情",
            icon: "el-icon-document",
            
        },

        {
            url: "/financialMgt/planManagement",
            name: "计划管理",
            icon: "el-icon-document",
            
        },
        {
            url: "/financialMgt/operatingStatement",
            name: "经营报表",
            icon: "el-icon-document",
            
        },
        {
            url: "/financialMgt/departmentStatement",
            name: "归口部门报表",
            icon: "el-icon-document",
            
        },
        {
            url: "/financialMgt/basicData",
            name: "基础数据",
            icon: "el-icon-document",
            
        },
        {
            url: "/financialMgt/programManage",
            name: "项目管理",
            icon: "el-icon-document",
            
        },
        {
            url: "/financialMgt/planLook",
            name: "计划查看",
            icon: "el-icon-document",
            
        },
        {
            url: "/financialMgt/planDeal",
            name: "计划分配",
            icon: "el-icon-document",
            
        },
        {
            url: "/financialMgt/basicUnit",
            name: "基层单位",
            icon: "el-icon-document",
            
        },
        {
            url: "/financialMgt/company",
            name: "公司报表",
            icon: "el-icon-document",
            
        },

        {
            url: "/financialMgt/baseValue",
            name: "基础数据",
            icon: "el-icon-document",
            children: [
                // {
                //   url: "/financialMgt/baseValue/programManage",
                //   name: "项目管理"
                // },
                {
                    url: "/financialMgt/baseValue/planManagement",
                    name: "计划管理"
                },
            ]
        }
    ],
    partyBuildingSystem: [
        {
            url: "/partyBuildingSystem/system",
            name: "规章制度",
            icon: "el-icon-document",
            children: [
                {
                    url: "/partyBuildingSystem/system/noticeFile",
                    name: "通知文件"
                },
                {
                    url: "/partyBuildingSystem/system/rules",
                    name: "规章制度"
                }
            ]
        },
        {
            url: "/partyBuildingSystem/organization",
            name: "组织干部工作管理",
            icon: "el-icon-document",
            children: [
                {
                    url: "/partyBuildingSystem/organization/partyOrganizationMgt",
                    name: "党组织管理"
                },
                {
                    url: "/partyBuildingSystem/organization/branchMembersList",
                    name: "支部人员情况表"
                },
                {
                    url: "/partyBuildingSystem/organization/relationshipTurnout",
                    name: "关系转出"
                },
                {
                    url: "/partyBuildingSystem/organization/partyConstructDutyImpl",
                    name: "党建责任落实情况"
                },
                {
                    url:
                        "/partyBuildingSystem/organization/keyWorkOperationMonitoring",
                    name: "重点工作运行监控"
                },
                {
                    url: "/partyBuildingSystem/organization/meetingAndNotification",
                    name: "会议及通知运行监控"
                },
                {
                    url: "/partyBuildingSystem/organization/questionsAndAnswers",
                    name: "问卷、答题"
                }
            ]
        },
        {
            url: "/partyBuildingSystem/cadre",
            name: "干部管理",
            icon: "el-icon-document",
            children: [
                {
                    url: "/partyBuildingSystem/cadre/cadreInformation",
                    name: "干部信息情况"
                },
                {
                    url: "/partyBuildingSystem/cadre/cadreInfoCollection",
                    name: "干部信息采集"
                },
                {
                    url: "/partyBuildingSystem/cadre/reserveCadresMgt",
                    name: "后备干部管理"
                }
            ]
        },
        {
            url: "/partyBuildingSystem/news",
            name: "新闻宣传",
            icon: "el-icon-document",
            children: [
                {
                    url: "/partyBuildingSystem/news/indexMaintenance",
                    name: "指标维护"
                },
                {
                    url: "/partyBuildingSystem/news/performanceAppraisal",
                    name: "考核评比"
                },
                {
                    url: "/partyBuildingSystem/news/manuscriptSubmitted",
                    name: "稿件报送"
                },
                {
                    url: "/partyBuildingSystem/news/paymentStatistics",
                    name: "稿费统计"
                },
                {
                    url: "/partyBuildingSystem/news/ljHome",
                    name: "录井家园"
                }
            ]
        },
        {
            url: "/partyBuildingSystem/political",
            name: "政治理论学习",
            icon: "el-icon-document",
            children: [
                {
                    url: "/partyBuildingSystem/political/studyPlan",
                    name: "学习安排"
                },
                {
                    url: "/partyBuildingSystem/political/aboutContent",
                    name: "宣讲内容"
                }
            ]
        },
        {
            url: "/partyBuildingSystem/disciplinary",
            name: "纪检维稳",
            icon: "el-icon-document",
            children: [
                {
                    url: "/partyBuildingSystem/disciplinary/icacDivision",
                    name: "廉政责任分区"
                },
                {
                    url:
                        "/partyBuildingSystem/disciplinary/MaintenanceStabilityMgt",
                    name: "维稳工作管理"
                }
            ]
        },
        {
            url: "/partyBuildingSystem/group",
            name: "工团工作管理",
            icon: "el-icon-document",
            children: [
                {
                    url: "/partyBuildingSystem/group/youthLeagueOrganizations",
                    name: "工团组织设置"
                },
                {
                    url: "/partyBuildingSystem/group/groupWork/民主管理情况",
                    name: "民主管理情况"
                },
                {
                    url: "/partyBuildingSystem/group/groupWork/群众经济工作",
                    name: "群众经济工作"
                },
                {
                    url: "/partyBuildingSystem/group/groupWork/生活保障工作",
                    name: "生活保障工作"
                },
                {
                    url: "/partyBuildingSystem/group/groupWork/共青团工作",
                    name: "共青团工作"
                }
            ]
        }
    ],
    commonModule: [
        {
            url: "/commonModule/institutional",
            name: "机构管理",
            icon: "el-icon-document",
            
        },
        {
            url: "/commonModule/job",
            name: "岗位管理",
            icon: "el-icon-document",
            
        },
        {
            url: "/commonModule/users",
            name: "用户管理",
            icon: "el-icon-document",
            
        },
        {
            url: "/commonModule/gencyList",
            name: "待办列表",
            icon: "el-icon-document",
            
        },
        {
            url: "/commonModule/workDayMgt",
            name: "工作日管理",
            icon: "el-icon-document",
            
        },
        {
            url: "/commonModule/sourceAdmin",
            name: "资源管理员管理",
            icon: "el-icon-document",
            
        },
        {
            url: "/commonModule/role",
            name: "角色管理",
            icon: "el-icon-document",
            
        },
        {
            url: "/commonModule/powerList",
            name: "页面访问权限",
            icon: "el-icon-document",
            
        },
        {
            url: "/commonModule/dataPower",
            name: "数据访问权限",
            icon: "el-icon-document",
            
        },
        {
            url: "/commonModule/dataDictionaryMgt",
            name: "数据字典管理",
            icon: "el-icon-document",
            
        }
    ],
    myPortal: [
        {
            url: "/myPortal/protal-self",
            name: "个人门户",
            icon: "el-icon-box",
        },
    ]
};

const TOP_MENUES = [
    {iname: "myPortal", mname: "我的门户", icname: "a", bkcolor: "#1c83ce", hovered: false, show: false},
    {iname: "marketMgt", mname: "市场管理", icname: "suizuan", bkcolor: "#df583a", hovered: false, show: true},
    {iname: "hrManagement", mname: "人事管理", icname: "rizhi", bkcolor: "#008272", hovered: false, show: true},
    {iname: "materialProcurement", mname: "物资采购", icname: "pingjia", bkcolor: "#2c579b", hovered: false, show: true},
    {iname: "materialMgt", mname: "物资管理", icname: "duoxuan", bkcolor: "#008272", hovered: false, show: true},
    {iname: "equipmentMgt", mname: "设备管理", icname: "shuju", bkcolor: "#64e", hovered: false, show: true},
    {iname: "productionMgt", mname: "生产管理", icname: "ziliao", bkcolor: "#df583a", hovered: false, show: true},
    {iname: "hsse", mname: "HSSE", icname: "xiaoxi", bkcolor: "#0078d7", hovered: false, show: true},
    {iname: "engTechnology", mname: "工程技术", icname: "home", bkcolor: "#2a569f", hovered: false, show: true},
    {iname: "financialMgt", mname: "财务管理", icname: "zhishiku", bkcolor: "#008272", hovered: false, show: true},
    {iname: "partyBuildingSystem", mname: "党建系统", icname: "a", bkcolor: "#2a569f", hovered: false, show: true},
    {iname: "SRmgt", mname: "科研管理", icname: "b", bkcolor: "#008272", hovered: false, show: true},
    {iname: "commonModule", mname: "公共模块", icname: "fuwu", bkcolor: "#1c83ce", hovered: false, show: true},
];

export default { Pattern,  ASIDE_ITEMS, TOP_MENUES};

