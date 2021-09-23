export const fetchUsers = async (token) => {
    let users = [];
    let headers = {"Content-Type": "application/json"};
    if (token) {
      headers["Authorization"] = `Bearer: ${token}`;
    }
    let fetchedUsers = fetch('https://reqres.in/api/users', {
      headers
    })
        .then(successResponse => {
            if (successResponse.status !== 200) {
              return null;
            } else {
              return successResponse.json();
            }
          })
        .catch(err => {
            console.log('error: ' + err);
        });

    users.push(fetchedUsers)
    let results = await Promise.all(users);

return results;
}