import axios from 'axios';

axios.defaults.baseURL = 'https://62d459315112e98e484e5213.mockapi.io';

// GET -> /contacts
export const getContacts = async () => {
  const { data } = await axios.get(`/contacts`);
  return data;
};

// GET -> /contacts/:id
export const getContactById = async id => {
  const { data } = await axios.get(`/contacts/${id}`);
  return data;
};

// POST -> /contacts
export const createContact = async contact => {
  const { data } = await axios.post(`/contacts`, contact);
  return data;
};

// PUT -> /contacts/:id
export const updateContact = async newContact => {
  const { data } = await axios.put(`/contacts/${newContact.id}`, newContact);
  return data;
};

// PATCH -> /contacts/:id
// export const updateContactPATCH = newContact => {
// };

// DELETE -> /contacts/:id
export const deleteContact = async id => {
  const { data } = await axios.delete(`/contacts/${id}`);
  return data;
};
