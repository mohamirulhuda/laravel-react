import axios from 'axios';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useHistory } from 'react-router';
import { useRecoilState } from 'recoil';
import { authenticated } from '../../middleware';

function Login() {

    // State Declaration
    const setAuth = useRecoilState(authenticated);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState('');

    // Variable Declaration
    const redirect = useHistory();
    const data = { username, password };

    const check = async (e) => {
        e.preventDefault();

        try {
            let response = await axios.post('login', data);
            localStorage.setItem('userToken', response.data.token);
            setAuth({ 
                check : true,
                user: response.data.data
             });
            redirect.push('/');
        } catch (e) {
            setErrors(e.response.data.errors);
        };
    };

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-5">
                    <div className="card mt-5">
                        <div className="card-header text-center py-3"><strong>LOGIN</strong></div>
                        <div className="card-body">
                            <form onSubmit={check}>
                                <div className="form-group mb-4">
                                    <label htmlFor="username" className="form-label">Username</label>
                                    <input onChange={(e) => setUsername(e.target.value)} type="text" name="username" id="username" className={ `form-control ${ errors.username ? 'is-invalid' : '' }` } />
                                    { errors.username ? <div className="invalid-feedback">{ errors.username[0] }</div> : '' }
                                </div>
                                <div className="form-group mb-4">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input onChange={(e) => setPassword(e.target.value)} type="password" name="password" id="password" className={ `form-control ${ errors.password ? 'is-invalid' : '' }` } />
                                    { errors.password ? <div className="invalid-feedback">{ errors.password[0] }</div> : '' }
                                </div>
                                <hr/>
                                <button type="submit" className="btn btn-primary w-100 mb-2">LOGIN</button>
                                <NavLink className="btn btn-primary w-100" to="/register">REGISTER</NavLink>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;