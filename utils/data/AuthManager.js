const apiUrl = '/api/users';
const endPoint = 'https://localhost:7105';

export const loginUser = (user) => new Promise((resolve, reject) => {
  fetch(`${endPoint}${apiUrl}/new`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(user),
  }).then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

export const registerUser = (newUser) => new Promise((resolve, reject) => {
  fetch(`${endPoint}${apiUrl}/new`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(newUser),
  }).then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});
// export const registerUser = (payload) => new Promise((resolve, reject) => {
//   fetch(`${apiUrl}`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(payload),
//   })
//     .then((response) => response.json())
//     .then((data) => resolve(data))
//     .catch(reject);
// });
