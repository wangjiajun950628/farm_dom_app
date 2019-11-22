<template>
    <div class="co-main">
        <!--标头导航-->
        <van-row type="flex" justify="center">
            <van-col class="co-box1" span="24">
                <nav-bar></nav-bar>
            </van-col>
        </van-row>
        <!--数据展示-->
        <div style="margin-top: 1rem">
            <van-row type="flex" justify="center">
                <van-col class="co-box2" span="23">
                    <el-form ref="farmingForm" :model="farmingForm" :rules="rulesData" label-width="80px" label-position="left">
                        <el-form-item label="种植作物">
                            <span class="co-data-span">草莓</span>
                        </el-form-item>
                        <el-form-item label="操作内容">
                            <span class="co-data-span">土地处理</span>
                        </el-form-item>
                        <el-form-item label="操作日期" prop="operationDate">
                            <el-input v-model="farmingForm.operationDate" suffix-icon="el-icon-time" :readonly="true" @focus="openData"></el-input>
                        </el-form-item>
                        <el-form-item label="操作人员" prop="operationPersonnel">
                            <el-input v-model="farmingForm.operationPersonnel" suffix-icon="el-icon-arrow-down" @focus="getPersonnelList"></el-input>
                        </el-form-item>
                        <el-form-item label="状态" prop="thisState">
                            <el-input v-model="farmingForm.thisState" suffix-icon="el-icon-arrow-down" @focus="getState"></el-input>
                        </el-form-item>
                        <el-form-item label="备注" prop="note">
                            <el-input type="textarea" v-model="farmingForm.note"></el-input>
                        </el-form-item>
                    </el-form>
                </van-col>
            </van-row>
        </div>
        <!--提交按钮-->
        <van-row type="flex" justify="center">
            <van-col class="co-box2" span="24">
                <div class="co-btn-box">
                    <div style="padding: 1rem">
                        <el-button type="primary" style="width: 100%" @click="onSubmit('farmingForm')">确认</el-button>
                    </div>
                </div>
            </van-col>
        </van-row>
        <!--日期弹框组件-->
        <data-time @getDate="getDate"></data-time>
        <!--操作人员选择-->
        <van-popup v-model="personnelPicker" position="bottom">
            <van-picker
                    show-toolbar
                    title="操作人员"
                    :columns="personnelList"
                    @cancel="personnelPicker = false"
                    @confirm="confirmPersonnel">
            </van-picker>
        </van-popup>
        <!--状态选择-->
        <van-popup v-model="thisStatePicker" position="bottom">
            <van-picker
                    show-toolbar
                    title="状态"
                    :columns="thisStateList"
                    @cancel="thisStatePicker = false"
                    @confirm="confirmthisState">
            </van-picker>
        </van-popup>
    </div>
</template>

<script>
    import NavBar from "../../../components/navBar/navBar";
    import DataTime from "../../../components/dateModule/data-time";
    export default {
        name: 'farmingMGTDetailed',
        components: {DataTime, NavBar},
        data() {
            return {
                personnelPicker: false, // 操作人员弹框选择
                personnelList: [], // 操作人员列表
                thisStatePicker: false, // 当前状态弹框选择
                thisStateList: [], // 当前状态列表
                selectTitle: '', // 单选弹框标题
                farmingForm: {
                    operationDate: null, // 操作日期
                    operationPersonnel: null, // 操作人员
                    thisState: null, // 当前状态
                    note: null // 备注
                }, // 表单数据
                rulesData: {
                    operationDate: [
                        { required: true, message: '请输入操作日期' }
                    ],
                    operationPersonnel: [
                        { required: true, message: '请输入操作人员' }
                    ],
                    thisState: [
                        { required: true, message: '请输入当前状态' }
                    ],
                    note: [
                        { required: true, message: '请输入备注', trigger: 'blur' }
                    ]
                }, // 表单验证数据
                columns: [] // 单选弹框列表数据
            }
        },
        methods: {
            // 提交数据
            onSubmit(name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                    } else {
                        return false;
                    }
                })
            },
            // 请求获取数据
            getRequstData () {},
            // 打开日期弹框
            openData () {
                this.$store.commit('setPopIsShow', true)
            },
            // 获取日期弹框的数据
            getDate (data) {
                this.farmingForm.operationDate = data
            },
            // 获取操作人员列表
            getPersonnelList () {
                this.personnelPicker = true
                this.personnelList = ['张三', '李四', '王五', '赵六', '青冥']
            },
            // 确认操作人员信息
            confirmPersonnel (value) {
                this.personnelPicker = false
                this.farmingForm.operationPersonnel = value
            },
            // 获取状态列表信息
            getState () {
                this.thisStatePicker = true
                this.thisStateList = ['未进行', '进行中', '完成']
            },
            // 确认状态信息
            confirmthisState (value) {
                this.thisStatePicker = false
                this.farmingForm.thisState = value
            }
        }
    }
</script>

<style scoped>
    .co-main{
        background-color: white;
    }
    .co-box1{
        margin-top: 46px;
    }
    .co-box2 > span{
        font-size: 1.2rem;
    }
    .co-data-span {
        width: 100%; display: block; text-align: right
    }
    .co-btn-box {
        width: 100%;
        position: fixed;
        bottom: 0;
    }
</style>
