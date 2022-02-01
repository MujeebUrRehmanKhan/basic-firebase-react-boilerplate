import { takeLatest } from "redux-saga/effects";
import { UserTypes } from '../actions/Users'
import { ConfTypes } from '../actions/Conf'
import { loginUser, processLoginUser } from "./userSagas"
import { setSideBarStatusOpen, setSideBarStatusClose } from "./confSagas"
export default function* rootSaga() {
    yield takeLatest(UserTypes.LOGIN_USER, loginUser)
    yield takeLatest(UserTypes.PROCESS_LOGIN_USER, processLoginUser)
    yield takeLatest(ConfTypes.SET_SIDE_BAR_STATUS_OPEN, setSideBarStatusOpen)
    yield takeLatest(ConfTypes.SET_SIDE_BAR_STATUS_CLOSE, setSideBarStatusClose)
}