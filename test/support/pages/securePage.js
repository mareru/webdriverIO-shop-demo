import Page from './page';

class SecurePage extends Page {

    /**
    * define elements
    */

    get successMessage()     { return $('#flash.success'); }

    /**
     * define or overwrite page methods
     */
    open() {
        super.open("/login");       //this will append `loginpage` to the baseUrl to form complete URL
    }

    getPageTitle(){
      return super.getPageTitle();
    }

    getSuccessMessage() {
      this.successMessage.waitForVisible(3000);
      return this.successMessage.getText();
    }
}

export default new SecurePage();
