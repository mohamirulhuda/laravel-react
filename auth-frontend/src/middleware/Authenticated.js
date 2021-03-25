import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import { useRecoilState } from 'recoil';
import { authenticated } from '.';

function Authenticated({ children }) {

    const [auth, setAuth] = useRecoilState(authenticated);
    const redirect = useHistory();

    useEffect(() => {
        if (!auth.check) {
            redirect.push('/login');
        }
    })

    return children;
}

export default Authenticated;