import {expect} from 'chai';
import {expectMessages} from 'src/constants/expectMessages';
import {testingData} from 'src/constants/testingData';
import {header} from 'src/pages/modules/headerModule';
import {Page} from 'src/pages/page';

class HomePage extends Page {
  open() {
    super.open('/');
  }

  verify() {
    expect(browser.getTitle(), expectMessages.incorrectTitle).to.contain(testingData.pageTitles.homePageTile);
    header.contactPhoneNumberIsDisplayed();
  }
}

export const homePage = new HomePage();