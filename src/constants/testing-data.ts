const testingData = {
  skuLabel(productId: number): string {
    return 'demo_' + productId;
  },
  email: 'ecx@test.com',
  invalidPassword: 'test',
  invalidPasswordErrorMessage: 'Invalid password',
  loggedInUser: 'John Doe',
  navigationAuthentication: 'Authentication',
  pageTitles: {
    homePageTile: 'My Store',
    loginPageTitle: 'Login - My Store',
  },
  phoneNumber: '0123-456-789',
  validPassword: '12345',
  productDetailPageUrl(productId: string): string {
    return 'index.php?id_product=' + productId + '&controller=product';
  },
};

export { testingData };
