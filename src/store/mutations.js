const ADD_ITEMNUM = 'ADD_ITEMNUM'
const REMBER_ANSWER = 'REMBER_ANSWER'
const REMBER_TIME = 'REMBER_TIME'
const INITIALIZE_DATA = 'INITIALIZE_DATA'
const SOCKET_CONNECT = 'SOCKET_CONNECT'
const SOCKET_USER_MESSAGE = 'SOCKET_USER_MESSAGE'
const SOCKET_sub = 'SOCKET_sub'
export default {
	[SOCKET_sub](state,msg){
		console.log('recv data sub mutation :',msg);
	},
	[SOCKET_CONNECT](state,status){
		state.connect = true;
		console.log('SOCKET_CONNECT is true')
	},
	[SOCKET_USER_MESSAGE](state,message){
		state.message = message;
	},
	//点击进入下一题
	[ADD_ITEMNUM](state, num) {
		state.itemNum += num;
	},
	//记录答案
	[REMBER_ANSWER](state, id) {
		state.answerid.push(id);
	},
	/*
	记录做题时间
	 */
	[REMBER_TIME](state) {
		state.timer = setInterval(() => {
			state.allTime++;
		}, 1000)
	},
	/*
	初始化信息，
	 */
	[INITIALIZE_DATA](state) {
		state.itemNum = 1;
		state.allTime = 0;
		state.answerid = [];
	},
}