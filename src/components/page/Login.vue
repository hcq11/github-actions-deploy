<template>
    <div class="login-wrap">
        <div class="ms-login">
            <div class="ms-title">ATRIS</div>
            <el-form :model="params" :rules="rules" ref="login" label-width="0px" class="ms-content">
                <el-form-item prop="username">
                    <el-input v-model="params.username" placeholder="username">
                        <el-button slot="prepend" icon="el-icon-lx-people"></el-button>
                    </el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input type="password" placeholder="password" v-model="params.password" @keyup.enter.native="submitForm()">
                        <el-button slot="prepend" icon="el-icon-lx-lock"></el-button>
                    </el-input>
                </el-form-item>
                <div class="login-btn">
                    <el-button type="primary" @click="login()">登录</el-button>
                </div>
                <!--p class="login-tips">Tips : 用户名和密码随便填。</p-->
            </el-form>
        </div>
    </div>
</template>

<script>
import { requestLogin } from '../../api/robotapi';
import { saveUserInfo } from '../../api/auth';
import { base } from '../../constant';
export default {
    data: function() {
        return {
            params: {
                username: 'eden',
                password: 'eden@Ubtech'
            },
            rules: {
                username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
                password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
            }
        };
    },
    methods: {
        submitForm() {
            let bRet = false;
            this.$refs.login.validate(valid => {
                if (valid) {
                    bRet = true;
                } else {
                    this.$message.error('请输入账号和密码');
                    console.log('error submit!!');
                    bRet = false;
                }
            });
            return bRet;
        },
        async login() {
            let bRet = this.submitForm();
            if (!bRet) {
                return;
            }
          const userinfo = {
            username:this.params.username,
            token: "payload"
          };
          saveUserInfo(userinfo);
          //localStorage.setItem('ms_username', this.params.username);
          this.$message.success('登录成功');
          this.$router.push('/');

          return
            requestLogin(this.params).then(res => {                
                let { code, payload } = res.data;
                if (code !== 0) {
                    this.$message.error('用户名或密码错');
                } else {
                    const userinfo = {
                        username:this.params.username,
                        token: payload
                    };
                    saveUserInfo(userinfo);
                    //localStorage.setItem('ms_username', this.params.username);
                    this.$message.success('登录成功');
                    this.$router.push('/');
                }
            });            
        }
    }
};
</script>

<style scoped>
.login-wrap {
    position: relative;
    width: 100%;
    height: 100%;
    /* background-image: url(../../assets/img/login-bg.png); */
    background-size: 100%;
}
.ms-title {
    width: 100%;
    line-height: 50px;
    text-align: center;
    font-size: 20px;
    color: #fff;
    border-bottom: 1px solid #ddd;
}
.ms-login {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 350px;
    margin: -190px 0 0 -175px;
    border-radius: 5px;
    background: rgba(255, 255, 255, 0.3);
    overflow: hidden;
}
.ms-content {
    padding: 30px 30px;
}
.login-btn {
    text-align: center;
}
.login-btn button {
    width: 100%;
    height: 36px;
    margin-bottom: 10px;
}
.login-tips {
    font-size: 12px;
    line-height: 30px;
    color: #fff;
}
</style>
