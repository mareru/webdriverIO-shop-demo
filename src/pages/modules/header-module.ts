class HeaderModule {
  get signOutButton() {
    return $('a[title="Log me out"]');
  }

  get signInButton() {
    return $('a[title="Log in to your customer account"]');
  }

  get phoneNumber() {
    return $('.shop-phone');
  }

  get loggedInUser() {
    return $('.account > span');
  }

  clickOnSignOutButton() {
    const signOutButton = this.signOutButton;
    signOutButton.waitForDisplayed();
    signOutButton.click();
  }

  clickOnSignInButton() {
    const signInButton = this.signInButton;
    signInButton.waitForDisplayed();
    signInButton.isDisplayed().should.be.true;
    signInButton.waitForClickable();
    signInButton.click();
  }
}

export const header = new HeaderModule();
