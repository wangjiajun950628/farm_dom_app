<template>
    <div class="co-main">
        <!--标头导航-->
        <van-row type="flex" justify="center">
            <van-col class="co-box1" span="24">
                <nav-bar></nav-bar>
            </van-col>
        </van-row>
        <!--表单数据-->
        <el-form :model="formData" ref="formData" :rules="rulesForm" label-width="80px"
                 label-position="left" class="demo-ruleForm">
            <!--基本信息-->
            <div style="margin-top: 5px; background-color: white">
                <van-row type="flex" justify="center">
                    <van-col class="co-box2" span="24">
                        <van-cell>
                            <div slot="default">
                                <span class="co-base-title">基本信息</span>
                            </div>
                        </van-cell>
                        <!--基本信息-->
                        <div style="margin-top: 15px">
                            <van-row type="flex" justify="center">
                                <van-col class="co-box2" span="23">
                                    <el-form-item label="地块" prop="land">
                                        <el-input
                                                v-model="formData.land"
                                                @focus="getLand('land')"
                                                suffix-icon="el-icon-arrow-down"
                                                placeholder="地块"
                                                autocomplete="off"
                                                :disabled="getReadOnlyState"
                                                :validate-event="false">
                                        </el-input>
                                    </el-form-item>
                                    <el-form-item label="作物种类" prop="cropsType">
                                        <el-input
                                                v-model="formData.cropsType"
                                                @focus="getCropsType('cropsType')"
                                                suffix-icon="el-icon-arrow-down"
                                                placeholder="作物种类"
                                                autocomplete="off"
                                                :disabled="getReadOnlyState"
                                                :validate-event="false">
                                        </el-input>
                                    </el-form-item>
                                    <el-form-item label="种植品种" prop="plantingVarieties">
                                        <el-input
                                                v-model="formData.plantingVarieties"
                                                @focus="getPlantingVarieties('plantingVarieties')"
                                                suffix-icon="el-icon-arrow-down"
                                                placeholder="种植品种"
                                                autocomplete="off"
                                                :validate-event="false">
                                        </el-input>
                                    </el-form-item>
                                    <el-form-item label="种植标准" prop="plantingStandard">
                                        <el-input
                                                v-model="formData.plantingStandard"
                                                @focus="getPlantingStandard('plantingStandard')"
                                                suffix-icon="el-icon-arrow-down"
                                                placeholder="种植标准"
                                                autocomplete="off"
                                                :validate-event="false">
                                        </el-input>
                                    </el-form-item>
                                    <el-form-item label="种苗来源" prop="seedlingsSource">
                                        <el-input
                                                v-model="formData.seedlingsSource"
                                                @focus="getSeedlingsSource('seedlingsSource')"
                                                suffix-icon="el-icon-arrow-down"
                                                placeholder="种苗来源"
                                                autocomplete="off"
                                                :validate-event="false">
                                        </el-input>
                                    </el-form-item>
                                </van-col>
                            </van-row>
                        </div>
                    </van-col>
                </van-row>
            </div>
            <!--采集信息-->
            <div style="margin-top: 5px; background-color: white">
                <van-row type="flex" justify="center">
                    <van-col class="co-box2" span="24">
                        <van-cell>
                            <div slot="default">
                                <span class="co-base-title">采集信息</span>
                            </div>
                        </van-cell>
                        <!--采集信息-->
                        <div style="margin-top: 15px">
                            <van-row type="flex" justify="center">
                                <van-col class="co-box2" span="23">
                                    <el-form-item label="定植时间" prop="timingDate">
                                        <el-input
                                                v-model="formData.timingDate"
                                                @focus="getTimingDate('timingDate')"
                                                suffix-icon="el-icon-date"
                                                placeholder="定植时间"
                                                :validate-event="false">
                                        </el-input>
                                    </el-form-item>
                                    <el-form-item label="采收开始" prop="collectStart">
                                        <el-input
                                                v-model="formData.collectStart"
                                                @focus="getCollectStart('collectStart')"
                                                suffix-icon="el-icon-date"
                                                placeholder="采收开始">
                                        </el-input>
                                    </el-form-item>
                                    <el-form-item label="种植结束" prop="plantingEnd">
                                        <el-input
                                                v-model="formData.plantingEnd"
                                                @focus="getPlantingEnd('plantingEnd')"
                                                suffix-icon="el-icon-date"
                                                :validate-event="false"
                                                placeholder="种植结束">
                                        </el-input>
                                    </el-form-item>
                                    <el-form-item label="种植面积" prop="plantingArea">
                                        <el-input
                                                v-model="formData.plantingArea"
                                                placeholder="种植面积">
                                            <span slot="suffix">{{useArea}} 亩可用</span>
                                        </el-input>
                                    </el-form-item>
                                    <el-form-item label="状态" prop="sate">
                                        <el-input
                                                v-model="formData.sate"
                                                @focus="getState('sate')"
                                                suffix-icon="el-icon-arrow-down"
                                                placeholder="状态"
                                                autocomplete="off"
                                                :disabled="getReadOnlyState"
                                                :validate-event="false">
                                        </el-input>
                                    </el-form-item>
                                    <el-form-item label="一月份" prop="January">
                                        <el-input
                                                v-model="formData.January"
                                                placeholder="一月份">
                                        </el-input>
                                    </el-form-item>
                                    <el-form-item label="二月份" prop="February">
                                        <el-input
                                                v-model="formData.February"
                                                placeholder="二月份">
                                        </el-input>
                                    </el-form-item>
                                    <el-form-item label="三月份" prop="March">
                                        <el-input
                                                v-model="formData.March"
                                                placeholder="三月份">
                                        </el-input>
                                    </el-form-item>
                                    <el-form-item label="四月份" prop="April">
                                        <el-input
                                                v-model="formData.April"
                                                placeholder="四月份">
                                        </el-input>
                                    </el-form-item>
                                    <el-form-item label="五月份" prop="May">
                                        <el-input
                                                v-model="formData.May"
                                                placeholder="五月份">
                                        </el-input>
                                    </el-form-item>
                                    <el-form-item label="六月份" prop="June">
                                        <el-input
                                                v-model="formData.June"
                                                placeholder="六月份">
                                        </el-input>
                                    </el-form-item>
                                    <el-form-item label="七月份" prop="July">
                                        <el-input
                                                v-model="formData.July"
                                                placeholder="七月份">
                                        </el-input>
                                    </el-form-item>
                                    <el-form-item label="八月份" prop="August">
                                        <el-input
                                                v-model="formData.August"
                                                placeholder="八月份">
                                        </el-input>
                                    </el-form-item>
                                    <el-form-item label="九月份" prop="September">
                                        <el-input
                                                v-model="formData.September"
                                                placeholder="九月份">
                                        </el-input>
                                    </el-form-item>
                                    <el-form-item label="十月份" prop="October">
                                        <el-input
                                                v-model="formData.October"
                                                placeholder="十月份">
                                        </el-input>
                                    </el-form-item>
                                    <el-form-item label="十一月份" prop="November">
                                        <el-input
                                                v-model="formData.November"
                                                placeholder="十一月份">
                                        </el-input>
                                    </el-form-item>
                                    <el-form-item label="十二月份" prop="December">
                                        <el-input
                                                v-model="formData.December"
                                                placeholder="十二月份">
                                        </el-input>
                                    </el-form-item>
                                </van-col>
                            </van-row>
                        </div>
                    </van-col>
                </van-row>
            </div>
        </el-form>
        <!--按钮-->
        <van-row type="flex" justify="center">
            <van-col class="co-box2" span="24">
                <div style="height: 50px; background-color: white">
                    <div class="co-btn-box">
                        <div style="padding-left: .3rem; padding-right: .3rem; padding-bottom: .4rem">
                            <el-button type="success" style="width: 100%" @click="sourceInfo('formData')">保存</el-button>
                        </div>
                    </div>
                </div>
            </van-col>
        </van-row>
        <!--弹框操作-->
        <data-time @setDate="setDateInfo"></data-time>
        <select-module :columns="columns" @setData="setSelectData"></select-module>
    </div>
</template>

<script>
    import NavBar from "../../../../components/navBar/navBar";
    import DataTime from "../../../../components/dateModule/data-time";
    import SelectModule from "../../../../components/selectModule/selectModule";
    import {mapGetters} from 'vuex'

    export default {
        name: 'createPlantingPage',
        components: {SelectModule, DataTime, NavBar},
        data() {
            // 自定义表单验证
            const rulesLand = (rule, value, callback) => {
                const that = this
                if (!value) {
                    that.$toast('地块不能为空')
                } else {
                    callback();
                }
            };// 地块验证
            const rulesCropsType = (rule, value, callback) => {
                const that = this
                if (!value) {
                    that.$toast('作物种类不能为空')
                } else {
                    callback();
                }
            }; // 作物种类验证
            const rulesPlantingVarieties = (rule, value, callback) => {
                const that = this
                if (!value) {
                    that.$toast('种植品种不能为空')
                } else {
                    callback();
                }
            }; // 种植品种验证
            const rulesTimingDate = (rule, value, callback) => {
                const that = this
                if (!value) {
                    that.$toast('定植日期不能为空')
                } else {
                    callback();
                }
            }; // 定植日期验证
            const rulesPlantingEnd = (rule, value, callback) => {
                const that = this
                if (!value) {
                    that.$toast('种植结束不能为空')
                } else {
                    callback();
                }
            }; // 种植结束验证
            return {
                inputName: '', // 输入框名称（用于标识当前输入框的变量名称）
                useArea: '10', // 可用土地信息
                columns: [], // 下拉弹框数据
                formData: {
                    land: '', // 地块
                    cropsType: '', // 作物种类
                    plantingVarieties: '', // 种植品种
                    plantingStandard: '', // 种植标准
                    seedlingsSource: '', // 种苗来源
                    timingDate: '', // 定植日期
                    collectStart: '', // 采集开始
                    plantingEnd: '', // 种植结束
                    plantingArea: '', // 种植面积
                    sate: '', // 状态
                    January: '', // 一月份
                    February: '', // 二月份
                    March: '', // 三月份
                    April: '', // 四月份
                    May: '', // 五月份
                    June: '', // 六月份
                    July: '', // 七月份
                    August: '', // 八月份
                    September: '', // 九月份
                    October: '', // 十月份
                    November: '', // 十一月份
                    December: '' // 十二月份
                }, // 表单数据
                rulesForm: {
                    land: [{ validator: rulesLand, required: true }], // 地块
                    cropsType: [{ validator: rulesCropsType, required: true }], // 作物种类
                    plantingVarieties: [{ validator: rulesPlantingVarieties, required: true }],  // 种植品种
                    timingDate: [{ validator: rulesTimingDate, required: true }], // 定植日期
                    plantingEnd: [{ validator: rulesPlantingEnd, required: true }] // 种植结束
                } // 表单验证
            }
        },
        computed: {
            ...mapGetters({
                getReadOnlyState: 'getReadOnly',
                getRepeatRadioState: 'getIsRepeatRadio'
            })
        },
        mounted() {
        },
        methods: {
            // 保存数据
            sourceInfo(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.$toast('提交成功')
                        console.log(this.formData)
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                })
            },
            // 获取地块信息
            getLand(name) {
                // 请求数据
                this.columns = ['池塘', '水田', '土地']
                // 显示弹框数据
                this.$store.commit('setSelectPopShow', true)
                // 当前输入框变量名称
                this.inputName = name
            },
            // 获取作物种类信息
            getCropsType(name) {
                // 请求数据
                this.columns = ['水稻', '植物', '水果', '其他']
                // 显示弹框数据
                this.$store.commit('setSelectPopShow', true)
                // 当前输入框变量名称
                this.inputName = name
            },
            // 获取种植品种信息
            getPlantingVarieties(name) {
                // 请求数据
                this.columns = ['上好', '中良', '上品', '下品']
                // 显示弹框数据
                this.$store.commit('setSelectPopShow', true)
                // 当前输入框变量名称
                this.inputName = name
            },
            // 获取种植标准信息
            getPlantingStandard (name) {
                // 请求数据
                this.columns = ['一般', '中等']
                // 显示弹框数据
                this.$store.commit('setSelectPopShow', true)
                // 当前输入框变量名称
                this.inputName = name
            },
            // 获取种苗来源信息
            getSeedlingsSource (name) {
                // 请求数据
                this.columns = ['自培', '国家', '企业']
                // 显示弹框数据
                this.$store.commit('setSelectPopShow', true)
                // 当前输入框变量名称
                this.inputName = name
            },
            // 获取状态
            getState (name) {
                // 请求数据
                this.columns = ['播种', '成长', '除虫', '收获']
                // 显示弹框数据
                this.$store.commit('setSelectPopShow', true)
                // 当前输入框变量名称
                this.inputName = name
            },
            // 获取定植日期
            getTimingDate(name) {
                // 显示弹框
                this.$store.commit('setPopIsShow', true)
                // 当前输入框变量名称
                this.inputName = name
            },
            // 获取采收开始日期信息
            getCollectStart(name) {
                // 显示弹框
                this.$store.commit('setPopIsShow', true)
                // 当前输入框变量名称
                this.inputName = name
            },
            // 获取种植结束信息
            getPlantingEnd (name) {
                // 显示弹框
                this.$store.commit('setPopIsShow', true)
                // 当前输入框变量名称
                this.inputName = name
            },
            // 绑定日期数据
            setDateInfo(data) {
                if (this.inputName === 'timingDate') {
                    this.formData.timingDate = data
                } else if (this.inputName === 'collectStart') {
                    this.formData.collectStart = data
                } else if (this.inputName === 'plantingEnd') {
                    this.formData.plantingEnd = data
                }
            },
            // 绑定下拉数据
            setSelectData(data) {
                if (this.inputName === 'land') {
                    this.formData.land = data
                } else if (this.inputName === 'cropsType') {
                    this.formData.cropsType = data
                } else if (this.inputName === 'plantingVarieties') {
                    this.formData.plantingVarieties = data
                } else if (this.inputName === 'plantingStandard') {
                    this.formData.plantingStandard = data
                } else if (this.inputName === 'seedlingsSource') {
                    this.formData.seedlingsSource = data
                } else if (this.inputName === 'sate') {
                    this.formData.sate = data
                }
            }
        }
    }
</script>

<style scoped>
    .co-main {
        background-color: #f0f3f6;
    }

    .co-box1 {
        margin-top: 46px;
    }

    .co-data-info-box, .co-data-info-box2 {
        padding: 1rem;
        background-color: white;
    }

    .co-data-info-box2 {
        text-align: justify;
        text-indent: 2em;
    }

    .co-data-box > li {
        display: flex;
        justify-content: space-between;
        line-height: 1.8rem;
    }

    .co-base-title {
        display: flex;
        flex-flow: row;
        line-height: 1.2rem;
        color: #369aff;
        font-size: 1rem;
    }

    .co-base-title:before {
        content: '';
        display: block;
        background-color: #00ba66;
        height: 1rem;
        width: .2rem;
        margin-right: .5rem;
    }

    .co-data-value {
        text-align: right;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        color: #999;
    }

    .co-data-info-box > span {
        display: block;
        width: 5rem;
        height: 5rem;
        background-size: 100% 100%;
        border-radius: 50%;
        border: 4px solid #CCDF93;
    }

    .co-data-info-box > span {
        margin: auto;
        margin-bottom: 1rem;
    }

    .co-other-data {
        width: 100%;
        height: 100%;
    }

    .co-other-data > li {
        display: flex;
        justify-content: space-between;
    }

    .co-other-value {
        color: #999;
    }

    .co-btn-box {
        width: 100%;
        position: fixed;
        bottom: 0;
    }
</style>
