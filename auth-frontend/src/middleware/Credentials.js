import axios from 'axios';
import { useRecoilState } from 'recoil';
import { authenticated } from '.';

function Credentials(props) {

    const [auth, setAuth] = useRecoilState(authenticated);

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
    }

    return userLogin();
}

export default Credentials;