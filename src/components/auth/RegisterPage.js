import React from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import validator from 'validator';
import useForm from '../../hooks/useForm';
import { removeError, setError } from '../../actions/ui';
import { startRegisterWithEmail } from '../../actions/auth';

const RegisterPage = () => {

    const dispatch = useDispatch();
    const { msgError } = useSelector(state => state.ui);

    const [formValue, handleInputChange] = useForm({
        name: '',
        email: '',
        password: '',
        password2: ''
    });

    const { name, email, password, password2 } = formValue;

    const handleFormRegister = (e) => {
        e.preventDefault();
        if (isFormValid()) {
            dispatch(startRegisterWithEmail(email, password, name));
        }
    }

    const isFormValid = () => {
        if (name.trim().length <= 1) {
            dispatch(setError('Name is required'));
            return false;
        } else if (!validator.isEmail(email)) {
            dispatch(setError('Email is not valid'));
            return false;
        } else if (password !== password2 || password.length < 5) {
            dispatch(setError('Passwords should be a equals'));
            return false;
        }

        dispatch(removeError());

        return true;
    }


    return (
        <>
            <h3 className="auth__tittle">Login</h3>
            <form onSubmit={handleFormRegister}>
                {
                    msgError
                    &&
                    <div className="auth__alert-error animate__animated animate__wobble">
                        {msgError}
                    </div>
                }

                <input
                    type="text"
                    placeholder="Ingrese un nombre"
                    name="name"
                    autoComplete="off"
                    className="auth__input"
                    value={name}
                    onChange={handleInputChange}
                />
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
                <input
                    type="password"
                    placeholder="Confirme su contraseña"
                    name="password2"
                    autoComplete="off"
                    className="auth__input"
                    value={password2}
                    onChange={handleInputChange}
                />
                <button
                    className="btn btn-primary btn-block"
                    type="submit"
                >
                    Registrar
                </button>

                <Link
                    className="link mt-5"
                    to='/auth/login'
                >
                    Already Register?
                    </Link>
            </form>
        </>
    )
}

export default RegisterPage;
