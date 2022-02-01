import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import UserActions from "../../../actions/Users"
import AlertComponent from '../../../components/alert';
import { useStyles } from './style.js';
import { TextField, Button } from '@material-ui/core';
import loginVector from '../../../assets/login1.png'
import AppAnimate from '../../../components/AppAnimate';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const StyledButton = withStyles((theme) => ({
	root: {
		padding: '10px 60px',
		borderRadius: '30px',
	},
}))(Button);

const Login = (props) => {
	const classes = useStyles()
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [remember, setRemember] = useState("")

	const [error, setError] = useState("")
	const dispatch = useDispatch()
	//here we watch for the loading prop in the redux store. every time it gets updated, our component will reflect it
	const isLoading = useSelector((state) => state.user.loading);
	const stateError = useSelector((state) => state.user.error);
	const userAuthToken = useSelector((state) => state.user.userAuthToken || null);
	const login = (e) => {
		e.preventDefault()
		e.stopPropagation()
		if (!email || !password) {
			setError("Email and Password required")
			return
		}
		setError("")
		dispatch(UserActions.loginUser(email, password, remember))
	}
	const dismissError = (e) => {
		e.preventDefault()
		setError("")
	}
	useEffect(() => {
		if (userAuthToken) props.history.push("/")
		if (stateError) setError(stateError)
	}, [userAuthToken, stateError, props.history])
	useEffect(() => {
		setError("")
	}, [])
	return (
		<AppAnimate animation='transition.slideUpIn' delay={200} >
			<div className={`${classes.fullHeight} ${classes.justifyEvenly}`}>
				<div className={`${classes.formSection}`}>
					<div className={`${classes.loginForm}`}>
						<div className={`${classes.inlineDisplay} ${classes.flexColumn}`}>
							<h1 className={classes.mb0}>Let's sign you in</h1>
							<p className="">Welcome back. You've been missed.</p>
						</div>
						<div className="">
							<div className="">
								{error && <AlertComponent className={classes.mt20} message={error} onClose={dismissError} isError />}
								<form className="" action="#" method="POST">
									<div>
										<div className={classes.mt20}>
											<TextField onChange={(event) => setEmail(event.target.value)}
												label="Email"
												variant="outlined"
												id="email"
												name="email"
												type="email"
												autoComplete="email"
												className={classes.fullWidth}
											/>
										</div>
									</div>
									<div>
										<div className={classes.mt20}>
											<TextField
												label="Password"
												variant="outlined"
												onChange={(event) => setPassword(event.target.value)}
												id="password"
												name="password"
												type="password"
												autoComplete="current-password"
												className={classes.fullWidth} />
										</div>
									</div>

									<div className={clsx(classes.mt20, classes.spaceBetween)}>
										<div className="">
											<input
												onChange={(e) => setRemember(e.target.checked)}
												id="remember_me"
												name="remember_me"
												type="checkbox"
												className=""
											/>
											<label htmlFor="remember_me" className={classes.mt20}>
												Remember me
                </label>
										</div>
									</div>

									<div className={clsx([classes.mt20, classes.inlineDisplay])}>
										<StyledButton color='primary' variant='contained' disabled={isLoading} onClick={login}>
											{isLoading ? "Signing in..." : "Sign in"}
										</StyledButton>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>

				<div className={classes.pictureSection}>
					<img src={loginVector} height={600} alt={'login'} />
				</div>


			</div >
		</AppAnimate>

	);

}

export default Login
