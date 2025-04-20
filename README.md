# Phonebook Application

## Description

This is a Phonebook application built with React, Redux, and styled-components.
It allows users to register, log in, and manage their contacts (add, edit,
delete). The app features authentication with token persistence and uses Redux
for state management and async operations.

## Features

- **User Authentication:** Login and registration functionality.

- **CRUD Operations:** Add, edit, delete contacts.

- **Filter Contacts:** Ability to filter contacts based on input.

- **Responsive Design:** The app is fully responsive using styled-components for
  styling.

- **Persisted Authentication:** Token persistence using redux-persist.

## Technologies Used

- React

- Redux Toolkit

- styled-components

- Axios (for API requests)

- Redux Persist

- React Router

- Form Validation with Yup

## Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/phonebook.git
```

2. Navigate to the project directory:

```bash
cd phonebook
```

3. Install the dependencies:

```bash
npm install
```

4. Run the application:

```bash
npm start
```

## Folder Structure

```pgsql
 src/
├── assets/
├── axiosConfig/
├── components/
├── hooks/
├── iconsReact/
├── pages/
├── redux/
│   ├── auth/
│   ├── phonebook/
│   └── store.js
├── routes/
├── schemas/
├── index.css
├── index.js
```

## Usage

- **Login:** User must log in to access the phonebook features.

- **Register:** New users can register by providing an email, name, and
  password.

- **Phonebook:** Once logged in, users can view their contacts, add new ones,
  edit, or delete existing contacts.

- **PrivateRoute:** This component ensures that only authenticated users can
  access protected routes.

- **PublicRoute:** This component ensures that logged-in users cannot access the
  login or registration pages.

## Styling

The application uses styled-components for all styling. Here is an example of
how it's used in the components:

```js
import styled from 'styled-components';

const Button = styled.button`
  background-color: rgb(253, 135, 6);
  color: white;
  border: none;
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background-color: rgb(255, 165, 0);
  }
`;

export default Button;
```

## API

This app connects to a backend API to handle authentication and CRUD operations
on contacts. The following endpoints are used:

#### Authentication

- **POST /auth/login:** Logs the user in and returns a token.

- **POST /auth/register:** Registers a new user and returns a token.

#### Contacts

- **GET /contacts:** Fetches the list of contacts.

- **POST /contacts:** Adds a new contact.

- **PATCH /contacts/:id:** Edits an existing contact.

- **DELETE /contacts/:id:** Deletes a contact.

## Configuration

The app uses **redux-persist** to persist the authentication token in local
storage. The configuration can be found in the **store.js** file, where the
**authReducer** is wrapped with persistReducer.

## Validation

Yup is used for form validation. Here's an example of the login schema:

```js
import * as yup from 'yup';

export const loginSchema = yup.object({
  email: yup.string().required().email('Invalid email'),
  password: yup
    .string()
    .required('Password is required')
    .min(6, 'Password should be at least 6 characters')
    .max(15, 'Password cannot exceed 15 characters'),
});
```

## License

This project is open-source and available under the [MIT License](./LICENSE).
