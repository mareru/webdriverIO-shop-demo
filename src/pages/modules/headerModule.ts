import {expect} from 'chai';
import {testingData} from 'src/testData';

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
    this.signOutButton.waitForDisplayed();
    this.signOutButton.click();
  }

  clickOnSignInButton() {
    this.signInButton.waitForDisplayed();
    this.signInButton.isDisplayed().should.be.true;
    this.signInButton.waitForClickable();
    this.signInButton.click();
  }

  contactPhoneNumberIsDisplayed() {
    this.phoneNumber.waitForDisplayed();
    expect(this.phoneNumber.isDisplayed()).to.be.true;
    expect(this.phoneNumber.getText()).to.contain(testingData.phoneNumber);
  }

  isLoggedInWithUser(username: string) {
    this.loggedInUser.getText().includes(username).should.be.true;
  }
}

export const header = new HeaderModule();