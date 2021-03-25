import React, { useEffect, useState } from 'react';
import Router from './router';
import { authenticated } from './middleware';
import { useRecoilState, useRecoilValue } from 'recoil';
import axios from 'axios';
import Loading from './component/Loading';
import Credentials from'./middleware/Credentials';

function App() {

    // Global State
    const [auth, setAuth] = useRecoilState(authenticated);
    const [mounted, setMounted] = useState(false);

    const userLogin = async (e) => {
        try {
            let response = await axios.get('me', {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('userToken')}`
                }
            })
            setAuth({
                check: true,
                user: response.data.data
            })
        } catch (e) {
            // console.log(e);
        }
        setMounted(true);
    }

    // Mounted Component
    useEffect(() => { 
        userLogin();
    }, [auth.check, mounted]);

    // Loading Effect
    if (!mounted) {
        return (
            <div className="row justify-content-center align-items-center vh-100">
                <Loading />
            </div>
        )
    }

    return <Router />;
}

export default App;