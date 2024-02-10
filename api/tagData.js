const apiUrl = '/api/tags';
const endPoint = 'https://localhost:7105';

export const getAllTags = () => new Promise((resolve, reject) => {
  fetch(`${endPoint}${apiUrl}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

export const getSingleTag = (id) => new Promise((resolve, reject) => {
  fetch(`${endPoint}${apiUrl}/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});
export const deleteTag = (id) => new Promise((resolve, reject) => {
  fetch(`${endPoint}${apiUrl}/delete/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    // .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});
export const createTag = (payload) => new Promise((resolve, reject) => {
  fetch(`${endPoint}${apiUrl}/new`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});
