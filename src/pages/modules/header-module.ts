class HeaderModule {
  get signOutButton(): WebdriverIO.Element {
    return $('a[title="Log me out"]');
  }

  get signInButton(): WebdriverIO.Element {
    return $('a[title="Log in to your customer account"]');
  }

  get phoneNumber(): WebdriverIO.Element {
    return $('.shop-phone');
  }

  get loggedInUser(): WebdriverIO.Element {
    return $('.account > span');
  }

  clickOnSignOutButton(): void {
    const signOutButton = this.signOutButton;
    signOutButton.waitForClickable();
    signOutButton.click();
  }

  clickOnSignInButton(): void {
    const signInButton = this.signInButton;
    signInButton.waitForDisplayed();
    signInButton.isDisplayed().should.be.true;
    signInButton.waitForClickable();
    signInButton.click();
  }
}

export const header = new HeaderModule();
