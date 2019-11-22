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
                    <el-form :model="formData"  ref="formData" :rules="rulesForm" label-width="80px" label-position="right" class="demo-ruleForm">
                        <el-form-item label="种植作物" prop="plantingCrops">
                            <el-input
                                    v-model="formData.plantingCrops"
                                    @focus="getPlantingCrops('plantingCrops')"
                                    suffix-icon="el-icon-arrow-down"
                                    placeholder="种植作物"
                                    autocomplete="off"
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
                                    :validate-event="false">
                            </el-input>
                        </el-form-item>
                        <el-form-item label="操作日期" prop="operationDate">
                            <el-input v-model="formData.bornDate" @focus="getBornDate('operationDate')" suffix-icon="el-icon-date" placeholder="操作日期"></el-input>
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
                        <el-form-item label="备注" prop="note">
                            <el-input type="textarea" v-model.number="formData.note" autocomplete="off"></el-input>
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
                        <el-button type="primary" style="width: 100%" @click="submitForm('formData')">确定</el-button>
                    </div>
                </div>
            </van-col>
        </van-row>
        <!--弹框-->
        <data-time @setDate="setDateInfo"></data-time>
        <select-module :columns="columns" @setData="setSelectData"></select-module>
    </div>
</template>

<script>
    import NavBar from "../../../../components/navBar/navBar";
    import DataTime from "../../../../components/dateModule/data-time";
    import SelectModule from "../../../../components/selectModule/selectModule";
    export default {
        name: 'farmingMGTCreate',
        components: {SelectModule, DataTime, NavBar},
        data() {
            // 自定义表单验证
            const rulesPlantingCrops = (rule, value, callback) => {
                const that = this
                if (!value) {
                    that.$toast('种植作物不能为空')
                } else {
                    callback();
                }
            };// 种植作物
            const rulesOperationContent = (rule, value, callback) => {
                const that = this
                if (!value) {
                    that.$toast('操作内容不能为空')
                } else {
                    callback();
                }
            }; // 操作内容
            const rulesState = (rule, value, callback) => {
                const that = this
                if (!value) {
                    that.$toast('状态不能为空')
                } else {
                    callback();
                }
            }; // 状态
            const rulesOperationPeople = (rule, value, callback) => {
                const that = this
                if (!value) {
                    that.$toast('操作人不能为空')
                } else {
                    callback();
                }
            }; // 操作人
            return {
                inputName: '', // 输入框名称（用于标识当前输入框的变量名称）
                columns: [], // 下拉弹框数据
                formData: {
                    plantingCrops: '', // 种植作物
                    operationContent: '', // 操作内容
                    operationDate: '', // 操作日期
                    state: '', // 状态
                    operationPeople: '', // 操作人
                    note: '' // 备注
                }, // 表单数据
                rulesForm: {
                    plantingCrops: [{ validator: rulesPlantingCrops, required: true }], // 种植作物
                    operationContent: [{ validator: rulesOperationContent, required: true }], // 操作内容
                    state: [{ validator: rulesState, required: true }], // 状态
                    operationPeople: [{ validator: rulesOperationPeople, required: true}], // 操作人
                } // 表单验证
            }
        },
        mounted () {},
        methods: {
            // 表单提交
            submitForm (formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.$toast('提交成功')
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                })
            },
            // 出生日期选择
            getBornDate (name) {
                // 显示弹框
                this.$store.commit('setPopIsShow', true)
                // 当前输入框变量名称
                this.inputName = name
            },
            // 获取种植作物
            getPlantingCrops (name) {
                // 请求数据
                this.columns = [ '草莓', '香蕉', '苹果', '蔬菜' ]
                // 显示弹框数据
                this.$store.commit('setSelectPopShow', true)
                // 当前输入框变量名称
                this.inputName = name
            },
            // 获取操作内容
            getOperationContent (name) {
                // 请求数据
                this.columns = [ '翻地', '播种', '施肥', '除虫', '浇水' ]
                // 显示弹框数据
                this.$store.commit('setSelectPopShow', true)
                // 当前输入框变量名称
                this.inputName = name
            },
            // 获取状态
            getState (name) {
                // 请求数据
                this.columns = [ '状态1', '状态2', '状态3', '状态4' ]
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
            // 下拉弹框数据赋值
            setSelectData (data) {
                // 判断当前输入框名称是否真确，并进行赋值 this.inputName === ''
                if (this.inputName === 'plantingCrops') { // 种植作物
                    this.formData.plantingCrops = data
                } else if (this.inputName === 'operationContent') { // 操作内容
                    this.formData.operationContent = data
                } else if (this.inputName === 'state') { // 状态
                    this.formData.state = data
                } else if (this.inputName === 'operationPeople') { // 操作人
                    this.formData.operationPeople = data
                }
            },
            // 绑定时间弹框数据
            setDateInfo (data) {
                // 判断inputName的值是否是当前触发变量
                if (this.inputName === 'operationDate') {
                    this.formData.operationDate = data
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
        /*position: fixed;*/
        /*bottom: 0;*/
    }
</style>
