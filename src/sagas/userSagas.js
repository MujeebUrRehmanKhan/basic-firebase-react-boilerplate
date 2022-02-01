
import { put } from "redux-saga/effects"
import UserActions from "../actions/Users"
import firebase from "firebase"
import { firebase_app } from "../firbaseApp"
import { $getOne } from "../services/FirestoreService";

export function* loginUser(action) {
  try {
    const userCredential = yield firebase_app
      .auth()
      .signInWithEmailAndPassword(action.email, action.password);
    firebase.auth().setPersistence(action.remember ? firebase.auth.Auth.Persistence.LOCAL : firebase.auth.Auth.Persistence.SESSION)
    console.log('userCredential:==', userCredential)
    if (userCredential?.user?.uid) {
      yield put(UserActions.processLoginUser(userCredential.user.uid));
    } else {
      yield put(UserActions.loginUserFailure(userCredential.message));
    }
  } catch (error) {
    yield put(UserActions.loginUserFailure(error.message));
  }

}

export function* processLoginUser(action) {
  try {
    console.log('action===>', action)
    const user = yield $getOne("users", action.id)
    console.log('user: ====> ', user)
    if (!user || !user.isAdmin) {
      yield put(UserActions.loginUserFailure("Only admin user can login here"));
    } else {
      const userAuthToken = yield firebase_app.auth().currentUser?.getIdToken()
      if (!userAuthToken) {
        yield put(UserActions.loginUserFailure("your session was expired"));
      }
      yield put(UserActions.loginUserSuccess({ ...user, _id: action.id, userAuthToken }));
    }
  } catch (error) {
    yield put(UserActions.loginUserFailure(error.message));
  }

}