import toast from "react-hot-toast";
import { loginFirebase } from "../../firebase/auth.firebase";
import showToast from "../../utils/showToast";

const thunkLogin = (form) => async dispatch => {
    const { email, password } = form;

    if (!email || !password) {
        showToast('error', 'Llenar los campos', dispatch)
        return
    }

    const response = await loginFirebase(email, password);

    //Si existe un Error;
    if (response.error) {

    }
    dispatch({ type: '@user/set', payload: response })
}

export default thunkLogin;