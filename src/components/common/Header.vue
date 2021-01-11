<template>
    <div class="header">
        <!-- 折叠按钮 -->
        <div class="collapse-btn" @click="collapseChage">
            <i v-if="!collapse" class="el-icon-s-fold"></i>
            <i v-else class="el-icon-s-unfold"></i>
        </div>
        <div class="logo">ATRIS</div>
        <div class="header-nav">
            <template>
            <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="机器人控制" name="robotCtrl">机器人控制</el-tab-pane>
            <el-tab-pane label="实时监控" name="realtimeVideo">实时监控</el-tab-pane>
             <el-tab-pane label="人脸识别" name="faceDetect">人脸识别</el-tab-pane>
             <el-tab-pane label="地图管理" name="mapManager">地图管理</el-tab-pane>
            <!--el-tab-pane label="任务管理" name="fifth">任务管理</el-tab-pane-->
            </el-tabs>
            </template>
        </div>        
        <div class="header-right">
            <div class="header-user-con">
                <!-- 全屏显示 -->
                <div class="btn-fullscreen" @click="handleFullScreen">
                    <el-tooltip effect="dark" :content="fullscreen?`取消全屏`:`全屏`" placement="bottom">
                        <i class="el-icon-rank"></i>
                    </el-tooltip>
                </div>
                <!-- 消息中心 -->
                <div class="btn-bell">
                    <el-tooltip
                        effect="dark"
                        :content="message?`有${message}条未读消息`:`消息中心`"
                        placement="bottom"
                    >
                        <router-link to="/tabs">
                            <i class="el-icon-bell"></i>
                        </router-link>
                    </el-tooltip>
                    <span class="btn-bell-badge" v-if="message"></span>
                </div>
                <!-- 用户头像 -->
                <div class="user-avator">
                    <img src="../../assets/img/profile.png" />
                </div>
                <!-- 用户名下拉菜单 -->
                <el-dropdown class="user-name" trigger="click" @command="handleCommand">
                    <span class="el-dropdown-link">
                        {{username}}
                        <i class="el-icon-caret-bottom"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <a
                            href="https://web.ubtrobot.com/abis-web/index.html#/user/login"
                            target="_blank"
                        >
                            <el-dropdown-item>平台系统</el-dropdown-item>
                        </a>
                        <el-dropdown-item divided command="loginout">退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
        </div>
    </div>
</template>
<script>
import bus from '../common/bus';
import { getUsername,removeUserInfo } from '../../api/auth'
export default {
    data() {
        return {
            collapse: false,
            fullscreen: false,
            name: 'demo',
            message: 2,
            activeIndex: '1',
            activeIndex2: '1',
            activeName: 'second'
        };
    },
    computed: {
        username() {
           // let username = localStorage.getItem('ms_username');
            let username = getUsername();
            return username ? username : this.name;
        }
    },
    methods: {
        handleClick(tab, event) {
            console.log(tab, this.activeName);
            switch(this.activeName){                
                case "robotCtrl":
                    console.log('robot')
                  this.$router.push('/robot');
                    break;
                case "realtimeVideo":
                    console.log('real')
                    this.$router.push('/realtimeVideo');
                    break;
                case "faceDetect":
                    console.log('face')
                   // this.$router.push('/icon');
                    break;
                case "mapManager":
                    console.log('mapManager')
                    //localStorage.removeItem('ms_username');
                    removeUserInfo();
                   // this.$router.push('/login');
                    break;
                default:
                    console.log('warnning: unknow nav item!')
            }            
        },
        handleSelect(key, keyPath) {
        console.log(key, keyPath);
        },
        // 用户名下拉菜单选择事件
        handleCommand(command) {
            if (command == 'loginout') {
                //localStorage.removeItem('ms_username');
                removeUserInfo();
                this.$router.push('/login');
            }
        },
        // 侧边栏折叠
        collapseChage() {
            this.collapse = !this.collapse;
            bus.$emit('collapse', this.collapse);
        },
        // 全屏事件
        handleFullScreen() {
            let element = document.documentElement;
            if (this.fullscreen) {
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                } else if (document.webkitCancelFullScreen) {
                    document.webkitCancelFullScreen();
                } else if (document.mozCancelFullScreen) {
                    document.mozCancelFullScreen();
                } else if (document.msExitFullscreen) {
                    document.msExitFullscreen();
                }
            } else {
                if (element.requestFullscreen) {
                    element.requestFullscreen();
                } else if (element.webkitRequestFullScreen) {
                    element.webkitRequestFullScreen();
                } else if (element.mozRequestFullScreen) {
                    element.mozRequestFullScreen();
                } else if (element.msRequestFullscreen) {
                    // IE11
                    element.msRequestFullscreen();
                }
            }
            this.fullscreen = !this.fullscreen;
        }
    },
    mounted() {
        if (document.body.clientWidth < 1500) {
            this.collapseChage();
        }
    }
};
</script>
<style>
.header {
    position: relative;
    box-sizing: border-box;
    width: 100%;
    height: 70px;
    font-size: 22px;
    color: #fff;
}
.collapse-btn {
    float: left;
    padding: 0 21px;
    cursor: pointer;
    line-height: 70px;
}
.header .logo {
    float: left;
    width: 250px;
    line-height: 70px;
}
.header-nav {
    float: left;
    /* padding-left: 50px; */    
    width: 550px;
    line-height: 72px;
    color: #fff;
}
.el-tabs__item{
    color: #fff;
    font-size:18px;
}
.el-tabs__active-bar{
   /* background-color: #409EFF; */
   background-color: transparent;
}
.el-tabs__item.is-active{
    color: #409eff;
    /* color: #FFCC00; */
}
.header-right {
    float: right;
    padding-right: 50px;
}

.header-user-con {
    display: flex;
    height: 70px;
    align-items: center;
}
.btn-fullscreen {
    transform: rotate(45deg);
    margin-right: 5px;
    font-size: 24px;
}
.btn-bell,
.btn-fullscreen {
    position: relative;
    width: 30px;
    height: 30px;
    text-align: center;
    border-radius: 15px;
    cursor: pointer;
}
.btn-bell-badge {
    position: absolute;
    right: 0;
    top: -2px;
    width: 8px;
    height: 8px;
    border-radius: 4px;
    background: #f56c6c;
    color: #fff;
}
.btn-bell .el-icon-bell {
    color: #fff;
}
.user-name {
    margin-left: 10px;
}
.user-avator {
    margin-left: 20px;
}
.user-avator img {
    display: block;
    width: 40px;
    height: 40px;
    border-radius: 50%;
}
.el-dropdown-link {
    color: #fff;
    cursor: pointer;
}
.el-dropdown-menu__item {
    text-align: center;
}
</style>
