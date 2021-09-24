import { logout } from '../state-management/actions/userTokenActions'

export const logOut = (dispatch, setRememberedUserToken) => {
    localStorage.removeItem('userToken');
    dispatch(logout());
    setRememberedUserToken(false)
    console.log('haloooo')
};