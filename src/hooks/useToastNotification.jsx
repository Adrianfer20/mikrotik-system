import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

const useToast = () => {
  const dispatch = useDispatch();
  const status = useSelector(x => x.toast);

  const notify = (type, message) => {
    if (status.status != 'idle') {toast.dismiss(status.toastId)}

    const toastId = toast[type](message);
    dispatch({ type: `@toast/${type}`, payload: toastId })
    return toastId
  }
  return notify
}

export default useToast;
