import React from 'react';
import { GoogleLogin } from 'react-google-login';

const GoogleLoginButton = () => {
  const responseGoogle = (response) => {
    // Handle the response from Google Sign-In
    // Send the obtained token to your backend for verification and session creation
    console.log(response);
  };

  return (
    <GoogleLogin
      clientId="YOUR_CLIENT_ID"
      buttonText="Sign in with Google"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={'single_host_origin'}
    />
  );
};

export default GoogleLoginButton;
