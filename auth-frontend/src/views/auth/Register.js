import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';

function Register() {

    // State Declaration
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password_confirmation, setPasswordConfirmation] = useState('');
    const [errors, setError] = useState('');

    // Variale Declaration
    const redirect = useHistory();
    const data = { name, username, email, password, password_confirmation };

    // Registration Function
    const save = async (e) => {
        e.preventDefault();
        
        try {
            await axios.post('register', data);
            setName('');
            setUsername('');
            setEmail('');
            setPassword('');
            setPasswordConfirmation('');
            redirect.push('/login')
        } catch (e) {
            setError(e.response.data.errors);
        };
    };

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-5">
                    <div className="card mt-5">
                        <div className="card-header text-center py-3"><strong>USER REGISTRATION</strong></div>
                        <div className="card-body">
                            <form onSubmit={save}>
                                <div className="form-group mb-3">
                                    <label htmlFor="name" className="form-label">Name</label>
                                    <input onChange={(e) => setName(e.target.value)} value={name} type="text" name="name" id="name" className={ `form-control ${ errors.name ? 'is-invalid' : ''}` } />
                                    { errors.name ? <div className="invalid-feedback">{ errors.name[0] }</div> : '' }
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="username" className="form-label">Username</label>
                                    <input onChange={(e) => setUsername(e.target.value)} value={username} type="text" name="username" id="username" className={ `form-control ${ errors.username ? 'is-invalid' : ''}` } />
                                    { errors.username ? <div className="invalid-feedback">{ errors.username[0] }</div> : '' }
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input onChange={(e) => setEmail(e.target.value)} value={email} type="text" name="email" id="email" className={ `form-control ${ errors.email ? 'is-invalid' : ''}` } />
                                    { errors.email ? <div className="invalid-feedback">{ errors.email[0] }</div> : '' }
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" name="password" id="password" className={ `form-control ${ errors.password ? 'is-invalid' : ''}` } />
                                    { errors.password ? <div className="invalid-feedback">{ errors.password[0] }</div> : '' }
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="password_confirmation" className="form-label">Confirm Password</label>
                                    <input onChange={(e) => setPasswordConfirmation(e.target.value)} value={ password_confirmation } type="password" name="password_confirmation" id="password_confirmation" className="form-control" />
                                </div>
                                <button type="submit" className="btn btn-primary w-100 my-4">REGISTER</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;