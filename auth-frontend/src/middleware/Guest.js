import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import { useRecoilState } from 'recoil';
import { authenticated } from '.';

function Guest({children}) {

    const [auth, setAuth] = useRecoilState(authenticated);
    const redirect = useHistory();

    useEffect(() => {
        if (auth.check) {
            redirect.push('/')
        }
    })

    return children;
}

export default Guest;