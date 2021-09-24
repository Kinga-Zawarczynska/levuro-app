import { login } from '../state-management/actions/userTokenActions'
import { throwError, clearErrors } from '../state-management/actions/errorActions'
export async function logIn(data = {}, dispatch) {
    await fetch('https://reqres.in/api/login', {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify(data)
    })
    .then(response => {
        if (!response.ok) {
            dispatch(throwError({error: 'login-failed', message: 'Something went wrong, try to login again.'}))
        } else {
            dispatch(clearErrors())
            return response.json().then(data => {
                localStorage.setItem('userToken', data.token)
                data.token && dispatch(login(data.token))})
        }
    })
    .catch(err => console.log(err));
  }