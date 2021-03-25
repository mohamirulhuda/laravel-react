import axios from 'axios';
import React, { useEffect } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { authenticated } from '../middleware';

function Navbar(props) {

    // State Declaration 
    const [auth, setAuth] = useRecoilState(authenticated);

    const redirect = useHistory();

    const logout = async (e) => {
        try {
            let response = await axios.post('logout');
            localStorage.removeItem('userToken');
            redirect.push('/login');
        } catch (e) {
            
        };
    }

    return (
        <div className="mb-4">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <NavLink className="navbar-brand" to="/">LARAVEL</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navAuth" aria-controls="navAuth" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navAuth">
                        <ul className="nav navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item dropdown">
                                <NavLink className="nav-link dropdown-toggle" to="" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"> { auth.user.name } </NavLink>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><button onClick={logout} className="dropdown-item" to="/login">Logout</button></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;