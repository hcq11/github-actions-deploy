<template>
    <div>
        <div id="zone_joystick"></div>
        <!-- <canvas id="video-canvas"></canvas> -->
        <el-row>
            <el-button @click="clickTestBtn">默认按钮</el-button>
            <el-button icon="el-icon-position" type="primary" circle></el-button>
            <el-button type="success" circle>返</el-button>
            <el-button type="info" :class="{ plain: !autoRotationStatus }" circle @click="autoRotation">旋转抓拍</el-button>
            <el-button icon="el-icon-microphone" type="warning" circle></el-button>
            <el-button type="danger" circle>回 充</el-button>
        </el-row>

        <el-row>
            <el-button @click="clickdelMapBtn">朴素按钮</el-button>
            <el-button
                icon="el-icon-sunrise"
                type="primary"
                :class="{ plain: !headLightStatus }"
                @click="clickHeadLightBtn"
                circle
            ></el-button>
            <el-button type="success" :class="{ plain: !flashLightStatus }" @click="clickFlashLightBtn" circle>闪</el-button>
            <el-button type="info" plain @click="clickStronVoice">强声驱散</el-button>
            <el-button type="warning" @click="getMusicList" plain>获取音频列表</el-button>
            <el-button type="danger" :loading="emergencyStopStatus" @click="clickEmergencyStop">紧急制动</el-button>
        </el-row>
        <h1>{{ $store.state.itemNum }}</h1>
    </div>
</template>

<script>
import axios from 'axios';
// import { JSMpeg } from '../../assets/js/jsmpeg.min'
import { requestContronLight, getAudioList, switchFlashLight, switchHeadLight, deleteMaps, move,ptzMove,autoRotation} from '../../api/robotapi';
import { currRobotSn, base } from '../../constant';
import bus from '../common/bus';
import { getToken } from '../../api/auth';
import nipplejs from 'nipplejs';

export default {
    name: 'robot',
    created() {
        console.log('created');
        // this.handleListener();
        // this.changeDate();
    },
    activated() {
        console.log('activated');
        //this.handleListener();
    },
    deactivated() {
        console.log('deactivated');
        // window.removeEventListener('resize', this.renderChart);
        // bus.$off('collapse', this.handleBus);
    },
    mounted() {
        console.log('mounted');
        this.$socket.open();        
        this.$socket.emit('connect', 1);
        this.sockets.subscribe('notice', function(data) {
            console.log('recv sub:', data);
            this.$socket.emit('chat',"how are you")
        });
        // axios.interceptors.request.use(
        //     async config => {
        //         if (config.url !== '/token') {
        //             console.log('get token:', getToken());
        //             config.headers['Authorization'] = getToken();
        //         }
        //         return config;
        //     },
        //     error => {
        //         return Promise.reject(error);
        //     }
        // );
        const options = {
            zone: document.getElementById('zone_joystick'),
            //mode: 'dynamic',
            mode: 'semi',
            //mode:'static',
            size: 100,
            color: 'transparent',
            threshold: 0.5,
            restOpacity: 0.5,
            position: {
                left: '50%',
                top: '50%'
            }
        };
        var manager = nipplejs.create(options);
        manager
            .on('added', function(evt, nipple) {
                const orgin = {
                    x: nipple.position.x,
                    y: nipple.position.y
                };
                nipple.on('move', function(evt, data) {
                    console.log(
                        'x:',
                        data.position.x - orgin.x,
                        ' y:',
                        data.position.y - orgin.y,
                        ' distance:',
                        data.distance,
                        ' angle:',
                        data.angle.degree
                    );
                    // const params = {
                    //     id: currRobotSn,
                    //     linear: ((orgin.y - data.position.y) / 50).toFixed(1),
                    //     angular: ((orgin.x - data.position.x) / 50).toFixed(1)
                    // };
                    // move(params)
              
                    const params = {
                        id: currRobotSn,
                        status:"on",
                        direction:"left",
                        step:Math.round(data.distance/50 * 8)
                    };
                    if (params.step == 0) {
                        return
                    }
                    if (data.angle.degree < 45 || data.angle.degree >315) {
                        params.direction = "right";
                    } else if (data.angle.degree >= 45 && data.angle.degree < 135 ) {
                        params.direction = "up";
                    } else if (data.angle.degree >= 135 && data.angle.degree < 225) {
                        params.direction = "left"
                    } else {
                        params.direction = "down"
                    }
                    ptzMove(params)
                });
                console.log('orgin:', nipple.position);
            })
            .on('removed', function(evt, nipple) {
                nipple.off('start move end dir plain');
            })
            .on('end',function(evt,data){
             console.log('end');
                    const params = {
                        id: currRobotSn,
                        status:"off",
                        direction:"left",
                        step:1
                    };
                    ptzMove(params)
            });

        // manager.on('move',function(evt,data) {
        //     if(data.direction){
        //         console.log(data.direction);
        //         console.log('distance:',data.distance,' size:',manager.options.size)
        //         console.log('position:',data.position)
        //         console.log('id:',manager.id);
        //     }
        // })
        // manager.on('end',function(evt,data){
        //     console.log('end');
        // })
    },
    components: {
        // Schart
    },
    computed: {
        role() {
            return this.name === 'admin' ? '超级管理员' : '普通用户';
        }
    },
    sockets: {
        connect: function() {
            console.log('socket connected:', this.$socket.id);
            // this.sockid = this.$socket.id;
            //  this.$store.commit('SOCKET_CONNECT',true);
        },
        sentToClient: function(data) {
            console.log('this method was fired by the socket server. eg: io.emit("sentToClient", data)');
            console.log(data);
        },
        // connect() {
        //     console.log('连接成功');
        // },
        disconnect() {
            console.log('断开链接');
        }, //检测socket断开链接
        reconnect() {
            console.log('重新链接');
        },
        // ping() {
        //     console.log('pinged')
        // },
        // pong() {
        //     console.log('ponded')
        // },
        connect_error() {
            console.log('conn error');
        },
        sub(data) {
            console.log('recv sub:', data);
        },
        //客户端接收后台传输的socket事件
        message(data) {
            this.$notify({
                title: '新消息',
                message: data,
                type: 'warning',
                duration: 10000
            });
            console.log('data', data); //接收的消息
        }
    },
    data() {
        return {
            emergencyStopStatus: false,
            flashLightStatus: false,
            headLightStatus: false,
            autoRotationStatus:false,
            sockid: ''
        };
    },
    methods: {
        clickTestBtn() {
            const params = {
                Ip: '10.20.20.156',
                Channel: 1,
                Subtype: 0
            };
            this.$http.post('http://10.20.20.140:3000/stream/playDahua', params).then(res => {
                var url = res.data.data.path;
                var canvas = document.getElementById('video-canvas');
                console.log('url:', url);
                var player = new JSMpeg.Player(url, { canvas: canvas });
            });
        },
        clickHeadLightBtn() {
            const params = {
                id: currRobotSn,
                status: this.headLightStatus ? 'off' : 'on'
            };
            switchHeadLight(params).then(res => {
                this.headLightStatus = !this.headLightStatus;
            });
        },
        clickFlashLightBtn() {
            const params = {
                id: currRobotSn,
                status: this.flashLightStatus ? 'off' : 'on'
            };
            switchFlashLight(params).then(res => {
                this.flashLightStatus = !this.flashLightStatus;
            });
        },
        getTicket() {
            this.$http.get(`/robot/` + currRobotSn + `/ticket`).then(res => {
                console.log(res.data);
            });
        },
        clickdelMapBtn() {
            const params = {
                id: currRobotSn,
                maps: ['atris1', 'atris2']
            };
            deleteMaps(params).then(res => {
                //this.flashLightStatus = !this.flashLightStatus;
            });
        },
        clickEmergencyStop() {
            console.log('click emergency stop');
            this.emergencyStopStatus = true;
            setTimeout(() => {
                this.emergencyStopStatus = false;
                this.isplain = !this.isplain;
            }, 200);

            this.$socket.emit('sendToServer', { a: 1, b: true, c: 'hello' });
        },
        clickStronVoice() {
            //this.$store.dispatch();
        },
        autoRotation() {
            const params = {
                id: currRobotSn,
                status: this.autoRotationStatus ? 'off' : 'on'
            };
            autoRotation(params).then(res => {
                this.autoRotationStatus = !this.autoRotationStatus;
            });
        },
        getMusicList() {
            console.log('click get music list');
            getMusicList({}).then(res => {
                console.log(res.data.musics);
                this.$message.success(res.data.musics[1]);
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
.front {
    background-image: url('../../assets/img/button.png') !important;
    background-size: cover !important;
    opacity: 1 !important;
    /* background-color: #fff; */
    /* user-select: none; */
}
.back {
    background-image: url('../../assets/img/canvas.png') !important;
    background-size: cover !important;
    opacity: 1 !important;
    /*user-select: none; */
}
.plain {
    color: #e6a23c;
    background: #fdf6ec;
    border-color: #f5dab1;
}

#zone_joystick {
    height: 100%;
    width: 100%;
    background-image: url('../../assets/img/ch3.png');
    background-size: contain;
    background-repeat: no-repeat;
    /* background-color: transparent; */
    position: absolute;
}
#video-canvas {
    height: 100%;
    width: 100%;
    position: absolute;
}
</style>
