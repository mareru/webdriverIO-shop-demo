import {expect} from 'chai';
import {header} from 'src/pages/modules/headerModule';
import {Page} from 'src/pages/page';
import {testingData} from 'src/testData';

class HomePage extends Page {
  open() {
    super.open('/');
  }

  verify() {
    expect(browser.getTitle()).to.contain(testingData.pageTitles.homePageTile);
    header.contactPhoneNumberIsDisplayed();
  }
}

export const homePage = new HomePage();