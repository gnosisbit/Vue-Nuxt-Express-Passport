import { ADD_MESSAGE, ADD_NOTIFICATION, SET_USER,USER, SESSION, LOGIN, LOGOUT, LOGIN_SUCCESS, LOGIN_ERROR, LOGIN_FAILED, ISLOGGEDIN} from "./types";

export default {
  USER:state=> state.user,
  getSession: state => state.session,
  getLoggedInUser: state => state.user,
  getMessages: state => state.messages,
  getNotifications: state => state.notifications,
	ISLOGGEDIN: state => state.isLoggedIn&&state.user,
	getErrorMesg: state => state.errormesg
}
