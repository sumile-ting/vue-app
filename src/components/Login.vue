<template>
  <el-container>
    <!-- 背景图片 -->
    <div style="width: 100%;height: 100%" class="building"></div>

    <!-- 登录页面 -->
    <div style="width:500px;height:300px;box-shadow: 0 2px 12px 0 rgba(0,0,0,0.3);position: fixed;left: 35%;top: 25%">
      <div class="fontTitle" style="width:100%;height:60px;background: #39a1de;overflow: hidden">
        <p style="line-height: 30px">
          <!-- <strong>大港录井生产运行管理系统</strong> -->
          <strong>综合管理系统</strong>
        </p>
      </div>

      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px"
               style="width:100%;height:220px;margin-top: 20px">
        <el-form-item label="帐号：" prop="userName" style="margin-left: 5%">
          <el-input @keyup.enter.native="login('ruleForm')" style="float:left;width: 70%" v-model="ruleForm.userName"
                    placeholder="员工编号/账号" :disabled="canUse" clearable></el-input>
        </el-form-item>
        <el-form-item label="密码：" prop="password" style="margin-left: 5%">
          <el-input @keyup.enter.native="login('ruleForm')" type="password" style="float:left;width: 70%"
                    v-model="ruleForm.password" placeholder="请填写" clearable :disabled="canUse"></el-input>
        </el-form-item>
        <el-form-item style="margin-left: -15%">
          <el-button type="primary" @click="login('ruleForm')" :disabled="canUse">登录</el-button>
          <el-button @click="reset('ruleForm')" :disabled="canUse">重置</el-button>
        </el-form-item>
      </el-form>

    </div>
  </el-container>
</template>

<script>

export default {
  data() {
    return {
      users: [],
      ruleForm: {
        userName: "",
        password: "",
      },
      rules: {
        userName: [{ required: true, message: "请输入用户名或员工编号", trigger: "blur" }],
        password: [{ required: true, message: "请填写密码", trigger: "blur" }],
      },
      canUse: false,
    };
  },
  methods: {
    login(formName) {
      this.$refs[formName].validate((valid) => {
        if (!valid) {
          return false;
        }
        // 开始进行登录
        this.$router.push("/myPortal"); // 跳转到首页
      });
    },
    reset(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<style scoped>
.fontTitle {
  width: 100%;
  color: #ffffff;
}

.building {
  background: rgba(255, 255, 255, 0.1) url("../assets/images/logo-bg.jpg") no-repeat;
  background-size: 100% 100%;
  -webkit-filter: blur(5px);
  -moz-filter: blur(5px);
  -o-filter: blur(5px);
  -ms-filter: blur(5px);
  filter: blur(5px);
}
</style>
