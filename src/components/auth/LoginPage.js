import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import validator from 'validator';
import useForm from '../../hooks/useForm';
import { startGoogleLogin, startLoginEP } from '../../actions/auth';
import { removeError, setError } from '../../actions/ui';

const LoginPage = () => {

    const dispatch = useDispatch();
    const { loading, msgError } = useSelector(state => state.ui);

    const [formValue, handleInputChange] = useForm({
        email: '',
        password: ''
    });

    const {email, password} = formValue;

    const handleLogin = (e) => {
        e.preventDefault();
        if (isFormValid()) {
            dispatch(startLoginEP(email, password));
        } 
    }

    const isFormValid = () => {
        if (!validator.isEmail(email)) {
            dispatch(setError('Email is not valid'));
            return false;
        } else if ( password.length < 5) {
            dispatch(setError('Passwords not valid'));
            return false;
        }

        dispatch(removeError());

        return true;
    }

    const handleLoginWithGoogle = (e) => {
        dispatch(startGoogleLogin());
    }
    return (
        <>
            <h3 className="auth__tittle">Login</h3>
            <form onSubmit={handleLogin}>

                {
                    msgError
                    &&
                    <div className="auth__alert-error animate__animated animate__wobble">
                        {msgError}
                    </div>
                }
                <input
                    type="text"
                    placeholder="Ingrese un correo"
                    name="email"
                    autoComplete="off"
                    className="auth__input"
                    value={email}
                    onChange={handleInputChange}
                />
                <input
                    type="password"
                    placeholder="Ingrese su contraseña"
                    name="password"
                    autoComplete="off"
                    className="auth__input"
                    value={password}
                    onChange={handleInputChange}
                />
                <button
                    className="btn btn-primary btn-block"
                    type="submit"
                    disabled={loading}
                >
                    Ingresar
                </button>

                <hr />

                <div className="auth__social-networks">
                    <p className="mb-1">Login with Social Media</p>
                    <div
                        className="google-btn"
                        onClick={handleLoginWithGoogle}
                    >
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with google</b>
                        </p>
                    </div>
                </div>
                <Link 
                    className="link"
                    to='/auth/register'
                    >
                        Create a new Acount
                    </Link>
            </form>
        </>
    )
}

export default LoginPage;
