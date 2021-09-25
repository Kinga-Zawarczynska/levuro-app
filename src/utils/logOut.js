import { logout } from '../state-management/actions/userTokenActions'
import { clearErrors } from '../state-management/actions/errorActions'

export const logOut = (dispatch, setRememberedUserToken) => {
    localStorage.removeItem('userToken');
    dispatch(logout());
    setRememberedUserToken(false)
    dispatch(clearErrors())
};