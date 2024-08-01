
import { useDispatch, useSelector } from 'react-redux'
import { loginFirebase, logoutFirebase } from '../firebase/auth.firebase'

const useUser = () => {
    const dispatch = useDispatch()
    const user = useSelector(x => x.user)
    
    const login = async (email, password) => {
        const response = await loginFirebase(email, password)
        if(response.errorCode) return
        dispatch({type:'@user/set', payload:response})
    }

    const logout = async () => {
        const response = await logoutFirebase()
        if(response.error) return console.log('Error :', response.error);
        dispatch({type:'@user/set', payload: {
            email:null, displayName:null , photoURL:null
        }})
    }

    return {user, login, logout}
}

export default useUser;