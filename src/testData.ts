const testingData = {
  baseUrl: 'http://automationpractice.com',
  email: 'ecx@test.com',
  homePageTile: 'My Store',
  invalidPassword: 'test',
  invalidPasswordErrorMessage: 'Invalid password',
  loggedInUser: 'John Doe',
  navigationAuthentication: 'Authentication',
  phoneNumber: '0123-456-789',
  validPassword: '12345',
};

const errorMessages = {
  authenticationFailedErrorMessage: 'There is 1 error\n' + 'Authentication failed.',
  invalidEmailErrorMessage: 'There is 1 error\n' + 'Invalid email address.',
  passwordRequiredErrorMessage: 'There is 1 error\n' + 'Password is required.',
};

export {testingData, errorMessages};