const apiUrl = '/api/postTags';
const apiUrls = '/api/posts';
const endPoint = 'https://localhost:7105';

export const getAllPostTags = () => new Promise((resolve, reject) => {
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

export const getSinglePostTag = (id) => new Promise((resolve, reject) => {
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
export const deletePostTag = (id) => new Promise((resolve, reject) => {
  fetch(`${endPoint}${apiUrl}/postTags/delete/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    // .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});
export const createPostTag = (payload) => new Promise((resolve, reject) => {
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
export const getSinglePostTagDetails = (id) => new Promise((resolve, reject) => {
  fetch(`${endPoint}${apiUrls}/${id}/postTags`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});
export const getSinglePostTags = (id) => new Promise((resolve, reject) => {
  fetch(`${endPoint}${apiUrls}/${id}/tags`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});
