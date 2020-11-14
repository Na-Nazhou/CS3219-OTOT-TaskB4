import axios from 'axios';

const client = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
});

export const fetchQuotes = () => {
  return client.get('/quotes').then((response) => {
    if (response.data && response.data.data) {
      return response.data.data;
    }
    return [];
  });
};

export const addQuote = (content) => {
  return client
    .post('/quotes', { content })
    .then((response) => response.data.data);
};

export const editQuote = (id, newContent) => {
  return client
    .put(`/quotes/${id}`, { content: newContent })
    .then((response) => response.data.data);
};

export const deleteQuote = (id) => {
  return client.delete(`/quotes/${id}`);
};
