import {toast} from "react-toastify";

export const errorToast = (message) => {
  toast(message, {
    type: toast.TYPE.ERROR
  });
};
