import React, { Component } from "react";
import { connect } from "react-redux";
import UserActions from "../actions/Users"
import { firebase_app } from "../firbaseApp"
import { $getOne } from "../services/FirestoreService";

function Authenticate(ComposedComponent) {

  class Authenticate extends Component {

    componentDidMount() {
      firebase_app.auth().onAuthStateChanged(async (user) => {

        if (user && user.uid) {
          const idToken = await user.getIdToken()
          if (!idToken) {
            this.logOut();
          } else {
            const userData = await $getOne("users", user.uid)
            if (!userData || !userData.isAdmin) {
              this.logOut();
            }
          }
        } else {
          this.logOut()
        }
      });
    }

    logOut() {
      this.props.logOut();
      this.props.history.push("/login");
    }

    render() {
      return (<ComposedComponent {...this.props} />);
    }

  }

  const mapStateToProps = ({ user }) => ({
    userAuthToken: user.userAuthToken
  });

  const mapDispatchToProps = dispatch => ({
    logOut: () => dispatch(UserActions.logOut()),
  });

  return connect(mapStateToProps, mapDispatchToProps)(Authenticate);
}
export default Authenticate