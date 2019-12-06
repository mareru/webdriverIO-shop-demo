const shared = {
  // Default user logged in for most tests
  password: 'SuperSecretPassword!',
  username: 'admin',

  applitools: {
    enabled: true,
    key: '81pA4oFuuv5V109YlSWwXRss104Y9s108109UXRuOGXwAzmqsm0110'
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
