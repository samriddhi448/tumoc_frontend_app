// actions.js

export const loginUser = (username, password) => {
  return (dispatch) => {
    // Simulating an API request
    setTimeout(() => {
      if (username === 'admin' && password === 'password') {
        const user = { username: 'admin' };
        dispatch({ type: 'LOGIN_SUCCESS', payload: user });
      } else {
        dispatch({ type: 'LOGIN_FAILURE', payload: 'Invalid credentials' });
      }
    }, 2000);
  };
};

export const logoutUser = () => {
  return {
    type: 'LOGOUT',
  };
};
