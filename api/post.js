const apiUrl = 'https://localhost:7105/api/posts';

const getPosts = () => new Promise((resolve, reject) => {
  fetch(`${apiUrl}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  .then((response) => response.json())
  .then((data) => resolve(data))
  .catch(reject);
});

const getPostById = async (id) => {
  const r = await fetch(`${apiUrl}/${id}`);
  return await r.json();

}

export { getPostById, getPosts }
