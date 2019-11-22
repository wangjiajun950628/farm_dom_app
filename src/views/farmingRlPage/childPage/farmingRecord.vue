<template>
    <div class="co-main">
        <!--标头导航-->
        <van-row type="flex" justify="center">
            <van-col class="co-box1" span="24">
                <nav-bar></nav-bar>
            </van-col>
        </van-row>
        <!--表单数据-->
        <div style="margin-top: 15px">
            <van-row type="flex" justify="center">
                <van-col class="co-box2" span="23">
                    <el-form :model="formData"  ref="formData" :rules="rulesForm" label-width="80px" label-position="left" class="demo-ruleForm">
                        <el-form-item label="种植作物" prop="plantingName">
                            <el-input
                                    v-model="formData.plantingName"
                                    @focus="getPlantingName('plantingName')"
                                    suffix-icon="el-icon-arrow-down"
                                    placeholder="种植作物"
                                    autocomplete="off"
                                    :disabled="getReadOnlyState"
                                    :validate-event="false">
                            </el-input>
                        </el-form-item>
                        <el-form-item label="操作内容" prop="operationContent">
                            <el-input
                                    v-model="formData.operationContent"
                                    @focus="getOperationContent('operationContent')"
                                    suffix-icon="el-icon-arrow-down"
                                    placeholder="操作内容"
                                    autocomplete="off"
                                    :disabled="getReadOnlyState"
                                    :validate-event="false">
                            </el-input>
                        </el-form-item>
                        <el-form-item label="操作日期" prop="startDate">
                            <el-input
                                    v-model="formData.startDate"
                                    @focus="getStartDate('startDate')"
                                    suffix-icon="el-icon-date"
                                    placeholder="操作日期">
                            </el-input>
                        </el-form-item>
                        <el-form-item label="操作人" prop="operationPeople">
                            <el-input
                                    v-model="formData.operationPeople"
                                    @focus="getOperationPeople('operationPeople')"
                                    suffix-icon="el-icon-arrow-down"
                                    placeholder="操作人"
                                    autocomplete="off"
                                    :validate-event="false">
                            </el-input>
                        </el-form-item>
                        <el-form-item label="状态" prop="state">
                            <el-input
                                    v-model="formData.state"
                                    @focus="getState('state')"
                                    suffix-icon="el-icon-arrow-down"
                                    placeholder="状态"
                                    autocomplete="off"
                                    :validate-event="false">
                            </el-input>
                        </el-form-item>
                        <el-form-item label="备注" prop="note">
                            <el-input type="textarea" v-model.number="formData.note"></el-input>
                        </el-form-item>
                    </el-form>
                </van-col>
            </van-row>
        </div>
        <!--按钮-->
        <van-row type="flex" justify="center">
            <van-col class="co-box2" span="24">
                <div class="co-btn-box">
                    <div style="padding: 1rem">
                        <el-button type="primary" style="width: 100%" @click="submitForm('formData')">确认</el-button>
                    </div>
                </div>
            </van-col>
        </van-row>
        <!--弹框数据-->
        <data-time @setDate="setDateInfo"></data-time>
        <select-module :columns="columns" @setData="setSelectData"></select-module>
    </div>
</template>

<script>
    import NavBar from "../../../components/navBar/navBar";
    import { mapGetters } from 'vuex'
    import DataTime from "../../../components/dateModule/data-time";
    import SelectModule from "../../../components/selectModule/selectModule";
    export default {
        name: 'farmingRecord',
        components: {SelectModule, DataTime, NavBar},
        data() {
            // 自定义表单验证
            const rulesPlantingName = (rule, value, callback) => {
                const that = this
                if (!value) {
                    that.$toast('种植作物不能为空')
                } else {
                    callback();
                }
            };// 种植作物验证
            const rulesContent = (rule, value, callback) => {
                const that = this
                if (!value) {
                    that.$toast('操作内容不能为空')
                } else {
                    callback();
                }
            }; // 操作内容验证
            return {
                inputName: '', // 输入框名称（用于标识当前输入框的变量名称）
                columns: [], // 下拉弹框数据
                formData: {
                    plantingName: '', // 种植作物
                    operationContent: '', // 操作内容
                    operationPeople: '',  // 操作人员
                    startDate: '', // 操作日期
                    state: '', // 状态
                    note: '' // 备注
                }, // 表单数据
                rulesForm: {
                    plantingName: [{ validator: rulesPlantingName, trigger: 'blur' }], // 种植作物
                    operationContent: [{ validator: rulesContent, trigger: 'blur' }], // 操作内容
                    operationPeople: [],  // 操作人员
                    startDate:[], // 操作日期
                    demand: [], // 农事要求
                    note: [] // 备注
                } // 表单验证
            }
        },
        computed: {
            ...mapGetters({
                getReadOnlyState: 'getReadOnly',
                getRepeatRadioState: 'getIsRepeatRadio'
            })
        },
        methods: {
            // 提交表单
            submitForm (formName) {
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
            // 获取种植作物
            getPlantingName (name) {
                // 请求数据
                this.columns = [ '草莓', '玉米', '水稻', '苹果' ]
                // 显示弹框数据
                this.$store.commit('setSelectPopShow', true)
                // 当前输入框变量名称
                this.inputName = name
            },
            // 获取操作内容
            getOperationContent (name) {
                // 请求数据
                this.columns = [ '播种', '施肥', '浇水', '除虫' ]
                // 显示弹框数据
                this.$store.commit('setSelectPopShow', true)
                // 当前输入框变量名称
                this.inputName = name
            },
            // 获取操作人
            getOperationPeople (name) {
                // 请求数据
                this.columns = [ '张三', '李四', '王五', '赵六' ]
                // 显示弹框数据
                this.$store.commit('setSelectPopShow', true)
                // 当前输入框变量名称
                this.inputName = name
            },
            // 获取操作日期
            getStartDate (name) {
                // 显示弹框
                this.$store.commit('setPopIsShow', true)
                // 当前输入框变量名称
                this.inputName = name
            },
            // 获取状态
            getState (name) {
                // 请求数据
                this.columns = [ '进行中', '采集中', '播种中', '空地' ]
                // 显示弹框数据
                this.$store.commit('setSelectPopShow', true)
                // 当前输入框变量名称
                this.inputName = name
            },
            // 绑定时间数据
            setDateInfo (data) {
                if (this.inputName === 'startDate') {
                    this.formData.startDate = data
                } else if (this.inputName === 'endDate') {
                    this.formData.endDate = data
                }
            },
            // 绑定下拉数据
            setSelectData (data) {
                if (this.inputName === 'plantingName') {
                    this.formData.plantingName = data
                } else if (this.inputName === 'operationContent') {
                    this.formData.operationContent = data
                } else if (this.inputName === 'operationPeople') {
                    this.formData.operationPeople = data
                } else if (this.inputName === 'state') {
                    this.formData.state = data
                }
            }
        }
    }
</script>

<style scoped>
    .co-form-box {
        width: 100%;
        height: 100%;
    }
    .co-box1{
        margin-top: 46px;
    }
    .co-btn-box {
        width: 100%;
        position: fixed;
        bottom: 0;
    }
</style>
