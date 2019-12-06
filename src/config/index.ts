const shared = {
  // Default user logged in for most tests
  password: 'SuperSecretPassword!',
  username: 'admin',

  applitools: {
    enabled: false,
    key: 'your applitools key'
  }

};

const production = {
  password: 'SuperSecretPassword!',
  username: 'admin'
};

const staging = {
  password: 'SuperSecretPassword!',
  username: 'admin'
};

const generateConfig = () => {
  const environment = process.env.TEST_ENV === 'staging' ? staging : production;
  return {...shared, ...environment};
};

export const config = generateConfig();
