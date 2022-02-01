import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import firebase from "firebase"
import UserActions from "../../actions/Users"

const Logout = (props) => {
  const dispatch = useDispatch()


  useEffect(() => {
    const logOut = () => {
      firebase.auth().signOut()
      dispatch(UserActions.logOut())
      localStorage.clear()
      props.history.push("/login")
    }
    return logOut()
  }, [dispatch, props.history])

  return (
    "Logging out..."
  )
}

export default Logout
