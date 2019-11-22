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
                        <el-form-item label="所属类型" prop="belongType">
                            <el-input
                                    v-model="formData.belongType"
                                    @focus="getBelongType('belongType')"
                                    suffix-icon="el-icon-arrow-down"
                                    placeholder="所属类型"
                                    autocomplete="off"
                                    :validate-event="false">
                            </el-input>
                        </el-form-item>
                        <el-form-item label="品种名称" prop="varietiesName">
                            <el-input
                                    v-model="formData.varietiesName"
                                    @focus="getVarietiesName('varietiesName')"
                                    suffix-icon="el-icon-arrow-down"
                                    placeholder="品种名称"
                                    autocomplete="off"
                                    :validate-event="false">
                            </el-input>
                        </el-form-item>
                        <el-form-item label="名称" prop="name">
                            <el-input v-model="formData.name" placeholder="名称" autocomplete="off"></el-input>
                        </el-form-item>
                        <el-form-item label="编号" prop="number">
                            <el-input v-model="formData.number" placeholder="编号" autocomplete="off"></el-input>
                        </el-form-item>
                        <el-form-item label="所在圈舍" prop="roomNumber">
                            <el-input
                                    v-model="formData.roomNumber"
                                    @focus="getRoomNumber('roomNumber')"
                                    suffix-icon="el-icon-arrow-down"
                                    placeholder="所在圈舍"
                                    autocomplete="off"
                                    :validate-event="false">
                            </el-input>
                        </el-form-item>
                        <el-form-item label="出生日期" prop="bornDate">
                            <el-input v-model="formData.bornDate" @focus="getBornDate('bornDate')" suffix-icon="el-icon-date" placeholder="出生日期"></el-input>
                        </el-form-item>
                        <el-form-item label="养殖人员" prop="farmingPersonnel">
                            <el-input
                                    v-model="formData.farmingPersonnel"
                                    @focus="getPersonnel('farmingPersonnel')"
                                    suffix-icon="el-icon-arrow-down"
                                    placeholder="养殖人员"
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
                        <el-form-item label="养殖方式" prop="farmingWay">
                            <el-input
                                    v-model="formData.farmingWay"
                                    @focus="getFarmingWay('farmingWay')"
                                    suffix-icon="el-icon-arrow-down"
                                    placeholder="养殖方式"
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
                        <el-button type="primary" style="width: 100%" @click="submitForm('formData')">保存</el-button>
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
        name: 'farmingCreate',
        components: {SelectModule, DataTime, NavBar},
        data() {
            // 自定义表单验证
            const rulesBelongType = (rule, value, callback) => {
                const that = this
                if (!value) {
                    that.$toast('所属类型不能为空')
                } else {
                    callback();
                }
            };// 所属类型
            const rulesVarietiesName = (rule, value, callback) => {
                const that = this
                if (!value) {
                    that.$toast('品种名称不能为空')
                } else {
                    callback();
                }
            }; // 品种名称
            const rulesNumber = (rule, value, callback) => {
                const that = this
                if (!value) {
                    that.$toast('编号不能为空')
                } else {
                    callback();
                }
            }; // 编号
            const rulesRoomNumber = (rule, value, callback) => {
                const that = this
                if (!value) {
                    that.$toast('所属圈舍不能为空')
                } else {
                    callback();
                }
            };// 所在圈舍
            const rulesFarmingPersonnel = (rule, value, callback) => {
                const that = this
                if (!value) {
                    that.$toast('养殖人员不能为空')
                } else {
                    callback();
                }
            }; // 养殖人员
            const rulesState = (rule, value, callback) => {
                const that = this
                if (!value) {
                    that.$toast('状态不能为空')
                } else {
                    callback();
                }
            }; // 状态
            const rulesFarmingWay = (rule, value, callback) => {
                const that = this
                if (!value) {
                    that.$toast('养殖方式不能为空')
                } else {
                    callback();
                }
            }; // 养殖方式
            return {
                inputName: '', // 输入框名称（用于标识当前输入框的变量名称）
                columns: [], // 下拉弹框数据
                formData: {
                    belongType: '', // 所属类型
                    varietiesName: '', // 品种名称
                    name: '', // 名称
                    number: '', // 编号
                    roomNumber: '', // 所属圈舍
                    bornDate: '', // 出生日期
                    farmingPersonnel: '', // 养殖人员
                    state: '', // 状态
                    farmingWay: '', // 养殖方式
                    note: '' // 备注
                }, // 表单数据
                rulesForm: {
                    belongType: [{ validator: rulesBelongType, required: true }], // 所属类型
                    varietiesName: [{ validator: rulesVarietiesName, required: true }], // 品种名称
                    number: [{ validator: rulesNumber, required: true }], // 编号
                    roomNumber: [{ validator: rulesRoomNumber, required: true }], // 所属圈舍
                    farmingPersonnel: [{ validator: rulesFarmingPersonnel, required: true}], // 养殖人员
                    state: [{ validator: rulesState , required: true }], // 状态
                    farmingWay: [{ validator: rulesFarmingWay, required: true }], // 养殖方式
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
            // 获取所属类型
            getBelongType (name) {
                // 请求数据
                this.columns = [ '家禽类', '禽类', '水产类', '特种类' ]
                // 显示弹框数据
                this.$store.commit('setSelectPopShow', true)
                // 当前输入框变量名称
                this.inputName = name
            },
            // 获取品种名称
            getVarietiesName (name) {
                // 请求数据
                this.columns = [ '品种1', '品种2', '品种3', '品种4' ]
                // 显示弹框数据
                this.$store.commit('setSelectPopShow', true)
                // 当前输入框变量名称
                this.inputName = name
            },
            // 获取所在圈舍
            getRoomNumber (name) {
                // 请求数据
                this.columns = [ '所在圈舍1', '所在圈舍2', '所在圈舍3', '所在圈舍4' ]
                // 显示弹框数据
                this.$store.commit('setSelectPopShow', true)
                // 当前输入框变量名称
                this.inputName = name
            },
            // 获取养殖操作员
            getPersonnel (name) {
                // 请求数据
                this.columns = [ '养殖人员1', '养殖人员2', '养殖人员3', '养殖人员4' ]
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
            // 获取养殖方式
            getFarmingWay (name) {
                // 请求数据
                this.columns = [ '养殖方式1', '养殖方式2', '养殖方式3', '养殖方式4' ]
                // 显示弹框数据
                this.$store.commit('setSelectPopShow', true)
                // 当前输入框变量名称
                this.inputName = name
            },
            // 下拉弹框数据赋值
            setSelectData (data) {
                // 判断当前输入框名称是否真确，并进行赋值 this.inputName === ''
                if (this.inputName === 'belongType') { // 所属类型
                    this.formData.belongType = data
                } else if (this.inputName === 'varietiesName') { // 品种名称
                    this.formData.varietiesName = data
                } else if (this.inputName === 'roomNumber') { // 所在圈舍
                    this.formData.roomNumber = data
                } else if (this.inputName === 'farmingPersonnel') { // 养殖人员
                    this.formData.farmingPersonnel = data
                } else if (this.inputName === 'state') { // 状态
                    this.formData.state = data
                } else if (this.inputName === 'farmingWay') { // 养殖方式
                    this.formData.farmingWay = data
                }
            },
            // 绑定时间弹框数据
            setDateInfo (data) {
                // 判断inputName的值是否是当前触发变量
                if (this.inputName === 'bornDate') {
                    this.formData.bornDate = data
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
