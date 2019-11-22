<template>
    <div class="co-login-main" :style="{ height: visualHeight + 'px'}">
        <!--logo-->
        <van-row type="flex" justify="center">
            <van-col class="co-box1" span="23">
                <img src="../assets/logo.png">
            </van-col>
        </van-row>
        <!--公司名称-->
        <van-row type="flex" justify="center">
            <van-col class="co-box2" span="23">智慧农场APP</van-col>
        </van-row>
        <!--登录框-->
        <van-row type="flex" justify="center">
            <van-col class="co-box3" span="23">
                <!--表单数据-->
                <el-form ref="ruleForm" :model="ruleForm" :rules="rules">
                    <!--用户名-->
                    <el-form-item prop="userName">
                        <el-input
                                v-model="ruleForm.userName"
                                prefix-icon="el-icon-user-solid"
                                size="large"
                                placeholder="用户名">
                        </el-input>
                    </el-form-item>
                    <!--密码-->
                    <el-form-item prop="passWord">
                        <el-input
                                v-model="ruleForm.passWord"
                                prefix-icon="el-icon-lock"
                                :show-password="true"
                                size="large"
                                placeholder="密码">
                        </el-input>
                    </el-form-item>
                    <!--登录按钮-->
                    <el-form-item>
                        <el-button
                                @click="submitLogin('ruleForm')"
                                type="success"
                                size="medium"
                                style="width: 100%; height: 3rem;">
                            登录
                        </el-button>
                    </el-form-item>
                </el-form>
            </van-col>
        </van-row>
    </div>
</template>

<script>
    export default {
        name: 'login',
        data() {
            const validateUser = (rule, value, callback) => {
                const that = this
                if (!value) {
                    that.$toast('用户名不能为空')
                } else {
                    callback()
                }
            }
            const validatePass = (rule, value, callback) => {
                const that = this
                if (!value) {
                    that.$toast('密码不能为空')
                } else {
                    callback()
                }
            }
            return {
                visualHeight: null,
                ruleForm: {
                    userName: '',
                    passWord: ''
                }, // 表单提交
                rules: {
                    userName: [
                        { validator: validateUser, trigger: 'blur' }
                    ],
                    passWord: [
                        { validator: validatePass, trigger: 'blur' }
                    ]
                } // 表单验证
            }
        },
        mounted () {
            const that = this
            that.visualHeight = document.documentElement.clientHeight
        },
        methods: {
            // 提交登录
            submitLogin (formName) {
                const that = this
                that.$refs[formName].validate((valid) => {
                    if (valid) {
                        console.log('登录成功')
                        // 页面跳转
                        that.$router.push({
                            name: 'index'
                        })
                    } else {
                        console.log('用户名或者密码不能为空')
                        return false;
                    }
                });
            }
        }
    }
</script>

<style scoped>
    .co-login-main {
        height: 100%;
        text-align: center;
        background-image: url("../assets/image/bj.jpg");
        background-size: 100% 100%;
    }
    .co-box1{
        margin-top: 60px;
        padding: 1rem;
    }
    .co-box1 > img {
        max-width: 5rem;
        max-height: 5rem;
    }
    .co-box2 {
        margin-bottom: 1rem;
        padding: 1rem;
        font: bold 2rem Helvetica, Arial, sans-serif;
        color: #00ba66;
        text-shadow:2px 1px 6px #000;
        text-align-last: justify;
    }
    .co-box3 {
        /*background-color: #004ea2;*/
        /*box-shadow: 0 0 5px #333333;*/
        border-radius: 10px;
        padding: 1rem;
    }
</style>
