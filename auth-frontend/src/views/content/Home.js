import React from 'react';
import { useRecoilValue } from 'recoil';
import { authenticated } from '../../middleware';


function Home() {

    const credentials = useRecoilValue(authenticated)

    return (
        <div className="container">
            Welcome,  { credentials.user.name }
        </div>
    );
}

export default Home;