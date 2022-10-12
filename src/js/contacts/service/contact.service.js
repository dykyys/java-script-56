const BASE_URL = 'https://62d459315112e98e484e5213.mockapi.io';

// GET -> /contacts
export const getContacts = () => {
  return fetch(`${BASE_URL}/contacts`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
};

// GET -> /contacts/:id
export const getContactById = id => {
  return fetch(`${BASE_URL}/contacts/${id}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
};

// POST -> /contacts
export const createContact = contact => {
  const options = {
    method: 'POST',
    body: JSON.stringify(contact),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  };
  return fetch(`${BASE_URL}/contacts`, options).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
};

// PUT -> /contacts/:id
export const updateContact = newContact => {
  const options = {
    method: 'PUT',
    body: JSON.stringify(newContact),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  };
  return fetch(`${BASE_URL}/contacts/${newContact.id}`, options).then(
    response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    }
  );
};

// PATCH -> /contacts/:id
// export const updateContactPATCH = newContact => {
// };

// DELETE -> /contacts/:id
export const deleteContact = id => {
  const options = {
    method: 'DELETE',
  };
  return fetch(`${BASE_URL}/contacts/${id}`, options).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
};
