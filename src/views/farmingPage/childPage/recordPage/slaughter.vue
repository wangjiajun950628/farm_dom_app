<template>
    <div class="co-main">
        <van-row type="flex" justify="center">
            <van-col class="co-box1" span="23">
                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="80px" label-position="top" class="demo-ruleForm">
                    <el-form-item label="屠宰时间" prop="slaughterDate">
                        <el-date-picker
                                v-model="ruleForm.slaughterDate"
                                type="date"
                                style="width: 100%"
                                placeholder="选择日期">
                        </el-date-picker>
                    </el-form-item>
                    <el-form-item label="检疫部门" prop="department">
                        <el-input v-model="ruleForm.department" placeholder="请输入内容"></el-input>
                    </el-form-item>
                    <el-form-item label="检测内容" prop="content">
                        <el-input
                                type="textarea"
                                :rows="2"
                                placeholder="请输入内容"
                                v-model="ruleForm.content">
                        </el-input>
                    </el-form-item>
                    <el-form-item label="检疫结果" prop="delivery">
                        <el-radio v-model="ruleForm.results" label="1">合格</el-radio>
                        <el-radio v-model="ruleForm.results" label="2">不合格</el-radio>
                    </el-form-item>
                    <el-form-item label="检疫报告">
                        <el-upload
                                class="avatar-uploader"
                                action="https://jsonplaceholder.typicode.com/posts/"
                                list-type="picture-card"
                                :file-list="ruleForm.report"
                                :limit="1"
                                :on-exceed="handleExceed"
                                :on-preview="handlePictureCardPreview"
                                :on-remove="handleRemove">
                            <i class="el-icon-plus"></i>
                        </el-upload>
                    </el-form-item>
                    <el-button type="primary" style="width: 100%" @click="submitForm('ruleForm')">保存</el-button>
                </el-form>
            </van-col>
        </van-row>
    </div>
</template>

<script>
    import bj from '../../../../assets/image/xiaomai.jpg'
    import { ImagePreview } from 'vant'
    export default {
        name: 'slaughter',
        data() {
            // 自定义表单验证
            const slaughterDate = (rule, value, callback) => {
                if (!value) {
                    this.$toast('出栏时间不能为空')
                } else {
                    callback()
                }
            }; // 出栏时间验证
            const department = (rule, value, callback) => {
                if (!value) {
                    this.$toast('检疫部门不能为空')
                } else {
                    callback()
                }
            }; // 检疫部门
            const content= (rule, value, callback) => {
                if (!value) {
                    this.$toast('检测内容不能为空')
                } else {
                    callback()
                }
            }; // 检测内容验证
            const results = (rule, value, callback) => {
                if (!value) {
                    this.$toast('检疫结果不能为空')
                } else {
                    callback()
                }
            }; // 检疫结果验证
            return {
                ruleForm: {
                    slaughterDate: '', // 屠宰时间
                    department: '', // 检疫部门
                    content: '', // 检测内容
                    results: '', // 检疫结果
                    report: [{ url: bj}] // 检疫报告
                }, // 表单字段
                rules: {
                    slaughterDate: [
                        { validator: slaughterDate, trigger: 'blur' },
                    ],
                    department: [
                        { validator: department, trigger: 'blur' }
                    ],
                    content: [
                        { validator: content, trigger: 'blur' }
                    ],
                    results: [
                        { validator: results, trigger: 'blur' }
                    ]
                } // 表单验证
            }
        },
        methods: {
            // 提交
            submitForm (formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        alert('submit!');
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            // 点击文件列表中已上传的文件时的钩子
            handlePictureCardPreview (file) {
                const that = this
                ImagePreview({
                    images: [file.url],
                    showIndex: false
                })
            },
            // 文件列表移除文件时的钩子
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            // 点击文件列表中已上传的文件时的钩子
            handlePreview(file) {
                console.log(file);
            },
            // 文件超出个数限制时的钩子
            handleExceed(files, fileList) {
                this.$toast('最多只能上传1张')
                console.log(`当前限制选择 2 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`)
            },
            // 删除文件之前的钩子
            beforeRemove(file, fileList) {
                console.log(`确定移除 ${ file.name }？`)
            }
        }
    }
</script>

<style scoped>
    .co-main {
        background-color: white;
        padding-top: 1rem;
        padding-bottom: 1rem;
    }
    .avatar-uploader {
        text-align: left;
    }
    .avatar-uploader .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }
    .avatar-uploader .el-upload:hover {
        border-color: #409EFF;
    }
    .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 120px;
        height: 120px;
        line-height: 120px;
        text-align: center;
    }
    .avatar {
        width: 120px;
        height: 120px;
        display: block;
    }
    .el-form-item {
        text-align: left;
    }
</style>
