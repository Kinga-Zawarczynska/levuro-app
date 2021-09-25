import { throwError, success } from '../state-management/actions/errorActions'
export async function updateUser(token, userData = {}, dispatch) {
    let headers = {"Content-Type": "application/json"};
    if (token) {
      headers["Authorization"] = `Bearer: ${token}`;
    }
    await fetch(`https://reqres.in/api/users/${userData.id}`, {
      method: 'PATCH',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers,
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify(userData)
    })
    .then(response => {
        if (!response.ok) {
            dispatch(throwError({error: 'user-failed', message: 'Something went wrong, try to update that user again.'}))
        } else {
            dispatch(success({success: 'updated-user', message: 'User updated succesfully'}))
            return response.json()
        }
    })
    .catch(err => console.log(err));
  }