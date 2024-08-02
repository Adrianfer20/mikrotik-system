import { useDispatch } from "react-redux"
import useToast from "./useToastNotification"

import {loginFirebase} from "../firebase/auth.firebase"
import toast from "react-hot-toast"

//Hooks 
const useLogin = () => {
    const dispatch = useDispatch()
    const notify = useToast()
  
    const handlerForm = async (e) => {
      e.preventDefault()
      // Crea una instancia de FormData con el formulario
      const formData = new FormData(e.target);
      // Convierte FormData a un objeto para un manejo más cómodo
      const { email, password } = Object.fromEntries(formData);
  
      if (!email || !password) 
        {return notify('error', 'Por favor; llenar los campos vacios.') }
  
      const id = notify('loading', 'Espere mientras verificamos sus datos.')
  
      const response = await loginFirebase(email, password);
  
      toast.dismiss(id)
      if(response.error) return notify('error', response.message);
       // Redirigir al dashboard después de un inicio de sesión exitoso
       dispatch({type:'@user/set', payload:response})
    }
  
    return { handlerForm }
  }

export default useLogin;

