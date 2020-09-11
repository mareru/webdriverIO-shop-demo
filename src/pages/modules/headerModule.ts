import {expect} from 'chai';
import {testingData} from 'src/constants/testingData';

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

  contactPhoneNumberIsDisplayed() {
    const phoneNumber = this.phoneNumber;
    phoneNumber.waitForDisplayed();
    expect(phoneNumber.isDisplayed(), 'Contact phone number is not displayed').to.be.true;
    expect(phoneNumber.getText(), 'Contact phone number is not correct').to.contain(testingData.phoneNumber);
  }

  isLoggedInWithUser(username: string) {
    this.loggedInUser.getText().includes(username).should.be.true;
  }
}

export const header = new HeaderModule();