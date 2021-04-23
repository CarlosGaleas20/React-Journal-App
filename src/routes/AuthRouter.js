import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import LoginPage from '../components/auth/LoginPage';
import RegisterPage from '../components/auth/RegisterPage';

const AuthRouter = () => {
    return (
        <>

            <div className="auth__main">
                <div className="auth__box-container animate__animated animate__fadeInLeft">
                    <Switch>
                        <Route path='/auth/login' component={LoginPage} />
                        <Route path='/auth/register' component={RegisterPage} />
                        <Redirect to='/auth/login' />
                    </Switch>
                </div>
            </div>

        </>
    )
}

export default AuthRouter;
