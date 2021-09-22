export const fetchUsers = async () => {
    let users = [];
    let fetchedUsers = fetch('https://reqres.in/api/users')
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