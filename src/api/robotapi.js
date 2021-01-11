import Vue from 'vue'
import { base } from '../constant'

const http = Vue.prototype.$http;

//Account
export const requestLogin = params => {
    return http.get(`/token?id=` + params.username + `&secret=` + params.password).then(res => res);
};
export const requestLogout = params => {
    return http.delete(`/token?id=` + params.username + `&secret=` + params.password).then(res => res);
};

//Robot
export const switchFlashLight = params => {
    return http.put(`/robot/` + params.id + `/ctrl/flashlight?status=` + params.status).then(res => res);
};
export const switchHeadLight = params => {
    return http.put(`/robot/` + params.id + `/ctrl/headlight?status=` + params.status).then(res => res);
};
export const getWebSockTicket = params => {
    return http.get(`/robot/` + params.id + `ticket`).then(res => res);
};
export const move = params => {
    return http.put(`/robot/` + params.id + `/ctrl/move?linea =` + params.linear + `angular=` + params.angular).then(res => res);
};

//face AI
export const addPerson = params => {
    return http.put(`/robot/` + params.id + `/ai/face/person`, params).then(res => res);
};
export const getFaceReporterChannel = params => {
    return http.get(`/robot/` + params.id + `/ai/face/ticket`, params).then(res => res);
};

//PZT angle -180~180  ,angle(zoom) -128~128
export const ptzMove = params => {
    return http.put(`/robot/` + params.id + `/ctrl/ptz/rotation?status=` + params.status + `&direction=` + params.direction + `&step=` + params.step).then(res => res);
};
export const autoRotation = params => {
    return http.put(`/robot/` + params.id + `/ctrl/ptz/autoRotation?status=` + params.status).then(res => res);
};
export const ptzHMove = params => {
    return http.put(`/robot/` + params.id + `/ctrl/ptz/horizontal?angle=` + params.angle).then(res => res);
};
export const ptzVMove = params => {
    return http.put(`/robot/` + params.id + `/ctrl/ptz/vertical?angle=` + params.angle).then(res => res);
};
export const ptzResetPosition = params => {
    return http.put(`/robot/` + params.id + `/ctrl/ptz/reset`).then(res => res);
};
export const ptzZoom = params => {
    return http.put(`/robot/` + params.id + `/ctrl/ptz/zoom?angle=` + params.angle).then(res => res);
};

//audio
export const getAudioList = params => {
    return http.get(`${base}/musics`, { params: params });
};
export const uploadAudios = params => {
    return http.get(`${base}/user/remove`, { params: params });
};
export const deleteAudios = params => {
    return http.get(`${base}/user/batchremove`, { params: params });
};
export const playAudio = params => {
    return http.get(`${base}/user/edit`, { params: params });
};
export const stopAudio = params => {
    return http.get(`${base}/user/add`, { params: params });
};

//map
export const deleteMaps = params => {
    return http.delete(`/robot/` + params.id + `/map`, { params: params }).then(res => res);
};