<template>
    <div class="rootdiv">
        <el-container class="rootContainer">
            <el-container class="rootContainer" >
                <el-main class="videos video-main"  v-model="selected">
                    <div class="block" style="height:100%;width:100%" >
                        <div style="height:100%;width:100%" v-if="selected == 0">
                            <!-- 1*1布局 -->
                            <el-row :gutter="10" type="flex" class="grid-one-contentheight" justify="center">
                                <el-col :span="24"><h1>{{$store.state.itemNum}}</h1></el-col>
                            </el-row>
                        </div>
                        <!-- 2*1布局 -->
                        <div style="height:100%;width:100%" v-else-if="selected == 1">
                            <el-row :gutter="10" type="flex" class="row-bg el-row-two" justify="space-between">
                                <el-col :span="12">
                                    <div class="grid-contentA"></div>
                                </el-col>
                                <el-col :span="12">
                                    <div class="grid-contentA"></div>
                                </el-col>
                            </el-row>
                        </div>
                        <!-- 2*2 -->
                        <div style="height:100%;width:100%" v-else-if="selected == 2">
                            <el-row :gutter="10" type="flex" class="row-bg" justify="center">
                                <el-col :span="12">
                                    <div class="grid-content"></div>
                                </el-col>
                                <el-col :span="12">
                                    <div class="grid-content"></div>
                                </el-col>
                            </el-row>
                            <br />
                            <el-row :gutter="10" type="flex" class="row-bg" justify="center">
                                <el-col :span="12">
                                    <div class="grid-content"></div>
                                </el-col>
                                <el-col :span="12">
                                    <div class="grid-content"></div>
                                </el-col>
                            </el-row>
                        </div>
                        <!-- 3*2布局 -->
                        <div style="height:100%;width:100%" v-else-if="selected == 3">
                            <el-row :gutter="10" type="flex" class="row-bg" justify="center">
                                <el-col :span="12">
                                    <div class="grid-content"></div>
                                </el-col>
                                <el-col :span="12">
                                    <div class="grid-content"></div>
                                </el-col>
                                <el-col :span="12">
                                    <div class="grid-content"></div>
                                </el-col>
                            </el-row>
                            <br />
                            <el-row :gutter="10" type="flex" class="row-bg" justify="center">
                                <el-col :span="12">
                                    <div class="grid-content"></div>
                                </el-col>
                                <el-col :span="12">
                                    <div class="grid-content"></div>
                                </el-col>
                                <el-col :span="12">
                                    <div class="grid-content"></div>
                                </el-col>
                            </el-row>
                        </div>
                        <!-- 3*3模式 -->
                        <div style="height:100%;width:100%" v-else-if="selected == 4">
                            <el-row :gutter="10" type="flex" class="row-bg" justify="center">
                                <el-col :span="8">
                                    <div class="grid-a-contentWidth"></div>
                                </el-col>
                                <el-col :span="8">
                                    <div class="grid-a-contentWidth"></div>
                                </el-col>
                                <el-col :span="8">
                                    <div class="grid-a-contentWidth"></div>
                                </el-col>
                            </el-row>
                            <br />
                            <el-row :gutter="10" type="flex" class="row-bg" justify="center">
                                <el-col :span="8">
                                    <div class="grid-a-contentWidth"></div>
                                </el-col>
                                <el-col :span="8">
                                    <div class="grid-a-contentWidth"></div>
                                </el-col>
                                <el-col :span="8">
                                    <div class="grid-a-contentWidth"></div>
                                </el-col>
                            </el-row>
                            <br />
                            <el-row :gutter="10" type="flex" class="row-bg" justify="center">
                                <el-col :span="8">
                                    <div class="grid-a-contentWidth"></div>
                                </el-col>
                                <el-col :span="8">
                                    <div class="grid-a-contentWidth"></div>
                                </el-col>
                                <el-col :span="8">
                                    <div class="grid-a-contentWidth"></div>
                                </el-col>
                            </el-row>
                        </div>
                        <!-- 模式 -->
                        <div style="height:100%;width:100%" v-else>
                            <el-row :gutter="10" type="flex" class="row-bg" justify="start">
                                <el-col :span="8">
                                    <div class="grid-a-contentWidth"></div>
                                </el-col>
                                <el-col :span="8">
                                    <div class="grid-a-contentWidth"></div>
                                </el-col>
                                <el-col :span="8">
                                    <div class="grid-a-contentWidth"></div>
                                </el-col>
                            </el-row>
                            <br />
                            <el-row :gutter="10" type="flex" class="row-bg" justify="start">
                                <el-col :span="8">
                                    <div class="grid-a-contentWidth"></div>
                                    <br />
                                    <div class="grid-a-contentWidth"></div>
                                </el-col>
                                <el-col :span="16">
                                    <div class="grid-a-content-a-Width"></div>
                                </el-col>
                            </el-row>
                        </div>
                    </div>
                </el-main>
                <el-footer class="cap-pic" >
                <el-container direction="vertaical" style="flex-wrap: nowrap">
                    <div style="flex:1;"> 
                        <span color="#ffffff">抓拍结果</span>
                        <el-button style="float: right; padding: 3px 0" type="text">更多</el-button>
                    </div>
                    <div v-for="o in 10" :key="o" style="flex:1;"> 
                        <el-card class="cap-box-card" shadow="hover" style="flex:1;">
                            <img src="http://10.20.20.90:880/capImg/650938" class="image" />
                        </el-card>
                    </div>
                </el-container>
                </el-footer>
            </el-container>
            <el-aside width="300px" class="compare-pic">
                <el-container style="height:100%;width:100%;overflow:hidden">
                    <el-header class="discriminate-header" style="height:10px;">
                        <div>
                            <span color="#ffffff">识别结果</span>
                            <el-button style="float: right; padding: 3px 0" type="text">更多</el-button>
                        </div>
                    </el-header>
                    <el-main>
                        <el-scrollbar style="overflow-x:hidden;height:100%;">
                            <div v-for="o in 8" :key="o">
                                <el-card class="box-card" shadow="hover">
                                    <el-row :gutter="15">
                                        <el-col :span="12">
                                            <img src="http://10.20.20.90:880/capImg/650923" class="image" />
                                        </el-col>
                                        <el-col :span="12">
                                            <img src="http://10.20.20.90:880/capImg/650908" class="image" />
                                        </el-col>
                                    </el-row>
                                </el-card>
                            </div>
                        </el-scrollbar>
                    </el-main>
                </el-container>
            </el-aside>
        </el-container>
    </div>
</template>

<script>
import Schart from 'vue-schart';
import bus from '../common/bus';
import { getUsername } from '../../api/auth'
export default {
    name: 'dashboard',
    data() {
        return {
            selected:0,
            layouts: [
                { name: '1x1模式', value: '0' },
                { name: '2x1模式', value: '1' },
                { name: '2x2模式', value: '2' },
                { name: '3x2模式', value: '3' },
                { name: '3x3模式', value: '4' },
                { name: '1+5模式', value: '5' }
            ],
           // name: localStorage.getItem('ms_username')
           name: getUsername()
        };
    },
    components: {
        Schart
    },
    computed: {
        role() {
            return this.name === 'admin' ? '超级管理员' : '普通用户';
        }
    },
    // created() {
    //     this.handleListener();
    //     this.changeDate();
    // },
    // activated() {
    //     this.handleListener();
    // },
    // deactivated() {
    //     window.removeEventListener('resize', this.renderChart);
    //     bus.$off('collapse', this.handleBus);
    // },
    methods: {
        changeDate() {
            const now = new Date().getTime();
            this.data.forEach((item, index) => {
                const date = new Date(now - (6 - index) * 86400000);
                item.name = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
            });
        }
        // handleListener() {
        //     bus.$on('collapse', this.handleBus);
        //     // 调用renderChart方法对图表进行重新渲染
        //     window.addEventListener('resize', this.renderChart);
        // },
        // handleBus(msg) {
        //     setTimeout(() => {
        //         this.renderChart();
        //     }, 200);
        // },
        // renderChart() {
        //     this.$refs.bar.renderChart();
        //     this.$refs.line.renderChart();
        // }
    }
};
</script>

<style>
.rootdiv {
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
}
.el-footer {
    /* background-color: #b3c0d1; */
    color: #333;
    text-align: center;
    padding: 10px;
    /* border: 1px solid green; */
}
.cap-pic {
    height: 190px !important; 
    /* flex:1;  */
    justify-content: space-between;
    overflow: hidden; 
    flex-wrap: nowrap
}

.compare-pic {
    background-color: #d3dce6;
    color: #333;
    text-align: center;   
    /* border: 1px solid red; */
    overflow: hidden;
}

.videos{
    /* background-color: #e9eef3; */
    color: #333;
    /* border: 1px solid blue; */
}

.rootContainer {
    margin-bottom: 182px; 
    height: 100%;
    display: flex;
    flex: 1;
    /* border: 1px solid black; */
}
.cap-box-card {
    width: 110px;
}
.image {
    width: 100%;
    display: block;
}

/* .video-main {
    height: 300px;
}
.video-capture-container {
    height: 190px;
    margin: 12px 0;
    margin-left: 5px;
    margin-right: 5px;
    overflow: hidden;
    flex: 1;
    flex-wrap: nowrap;
} */
/*------------------------------ */
.box-card {
    width: 100%;
    margin: 4px auto;
}
.block {
    padding: 0px 0px;
    background-color: transparent;
}
.alert-item {
    margin-bottom: 10px;
}
.tag-item {
    margin-right: 15px;
}
.link-title {
    margin-left: 35px;
}
.components-container {
    position: relative;
    height: 100%;
}

.left-container {
    background-color: #f38181;
    height: 100%;
}

.right-container {
    background-color: #fce38a;   
}

.top-container {
    background-color: #fce38a;
    width: 100%;
    height: 100%;
}

.bottom-container {
    width: 100%;
    background-color: #95e1d3;
    height: 100%;
}

.left-container-twoOne {
    background-color: rgb(110, 75, 75);
    height: 100%;
}

.container-onetoOne {
    background-color: rgb(47, 80, 74);
    height: 100%;
    width: 50%;
}

.container-onetoTwo {
    background-color: rgb(61, 19, 56);
    height: 100%;
    width: 50%;
}

.el-col {
    border-radius: 4px;
}
.bg-purple-dark {
    background: #57926b;
}
.bg-purple {
    background: #7e2970;
}
.bg-purple-light {
    background: #071c4d;
}
.grid-content {
    background-color: rgb(44, 143, 121);
    border-radius: 4px;
    min-height: 300px;
    min-width: 100px;
}
.grid-contentA {    
    background-color: #ffffff;
    border-radius: 4px;
    min-height: 600px;
    min-width: 100px;
}
.grid-contentB {
    background-color: rgb(64, 56, 134);
    border-radius: 4px;    
}
.grid-a-contentWidth {
    background-color: rgb(44, 143, 121);
    border-radius: 4px;
}
.grid-a-content-a-Width {
    background-color: rgb(44, 143, 121);
    border-radius: 4px;
}

.grid-one-contentheight {
    background-color: #ffffff;
    border-radius: 4px;
    min-height: 100%;
}

.el-row-two {
    min-height: 100%;
}




</style>
