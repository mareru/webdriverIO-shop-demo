import {expect} from 'chai';
import {Page} from 'src/pages/page';
import {testingData} from 'src/testData';

export class HomePage extends Page {
  get phoneNumber() {
    return $('.shop-phone');
  }

  get signInButton() {
    return $('a[title="Log in to your customer account"]');
  }

  get loggedInUser() {
    return $('.account > span');
  }

  open() {
    super.open('/');
  }

  verify() {
    expect(browser.getTitle()).to.contain(testingData.pageTitles.homePageTile);
    this.phoneNumber.waitForDisplayed();
    expect(this.phoneNumber.isDisplayed()).to.be.true;
    expect(this.phoneNumber.getText()).to.contain(testingData.phoneNumber);
  }

  clickOnSignInButton() {
    this.signInButton.waitForDisplayed();
    this.signInButton.isDisplayed().should.be.true;
    this.signInButton.waitForClickable();
    this.signInButton.click();
  }

  isLoggedInWithUser(username: string) {
    this.loggedInUser.getText().includes(username).should.be.true;
  }
}