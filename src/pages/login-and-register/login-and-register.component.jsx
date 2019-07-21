import React from 'react';
import './login-and-register.styles.scss';
import LogIn from '../../components/log-in/log-in.component';
import Register from '../../components/register/register.component';

const LoginAndRegisterPage = () => (
	<div className="login-and-register">
		<LogIn />
		<Register />
	</div>
);

export default LoginAndRegisterPage;
