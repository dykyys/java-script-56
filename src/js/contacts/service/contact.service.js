const BASE_URL = 'https://62d459315112e98e484e5213.mockapi.io';

// GET -> /contacts
export const getContacts = async () => {
  const response = await fetch(`${BASE_URL}/contacts`);

  if (!response.ok) {
    throw new Error(response.status);
  }
  return response.json();
};

// GET -> /contacts/:id
export const getContactById = async id => {
  const response = await fetch(`${BASE_URL}/contacts/${id}`);
  if (!response.ok) {
    throw new Error(response.status);
  }
  return response.json();
};

// POST -> /contacts
export const createContact = async contact => {
  const options = {
    method: 'POST',
    body: JSON.stringify(contact),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  };

  const response = await fetch(`${BASE_URL}/contacts`, options);
  if (!response.ok) {
    throw new Error(response.status);
  }
  return response.json();
};

// PUT -> /contacts/:id
export const updateContact = async newContact => {
  const options = {
    method: 'PUT',
    body: JSON.stringify(newContact),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  };
  const response = await fetch(
    `${BASE_URL}/contacts/${newContact.id}`,
    options
  );
  if (!response.ok) {
    throw new Error(response.status);
  }
  return response.json();
};

// PATCH -> /contacts/:id
// export const updateContactPATCH = newContact => {
// };

// DELETE -> /contacts/:id
export const deleteContact = async id => {
  const options = {
    method: 'DELETE',
  };

  const response = await fetch(`${BASE_URL}/contacts/${id}`, options);
  if (!response.ok) {
    throw new Error(response.status);
  }

  return response.json();
};
