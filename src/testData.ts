const testingData = {
  email: 'ecx@test.com',
  invalidPassword: 'test',
  invalidPasswordErrorMessage: 'Invalid password',
  loggedInUser: 'John Doe',
  navigationAuthentication: 'Authentication',
  pageTitles: {
    homePageTile: 'My Store',
    loginPageTitle: 'Login - My Store'
  },
  phoneNumber: '0123-456-789',
  validPassword: '12345'
};

const errorMessages = {
  authenticationFailedErrorMessage: 'There is 1 error\n' + 'Authentication failed.',
  invalidEmailErrorMessage: 'There is 1 error\n' + 'Invalid email address.',
  passwordRequiredErrorMessage: 'There is 1 error\n' + 'Password is required.',
};

export {testingData, errorMessages};