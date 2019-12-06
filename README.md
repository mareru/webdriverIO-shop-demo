# WebdriverIO_v5_TypeScript

This is a boilerplate project that uses WebdriverIO v5 and TypeScript v3. This project is useful not only as an example of WebdriverIO v5 and TypeScript playing nicely together, but it includes examples of the PageObject pattern and some practical examples for using WebdriverIO to build an automated test suite with Cucumber & Chai.

# Features
* Simple setup
* Full integration with WebdriverIO
* Easy integration with cloud services like Sauce Labs or Zalenium
* Parallelization

## Getting Started
```
npm install
npm test
```

## Running test by annotation in the feature files

Runs all feature file which contain `@Test`
``npm run test -- --cucumberOpts.tagExpression='@Test'``

## Visual Studio Code project setup
In your [Visual Studio Code](https://code.visualstudio.com/) download the extension *Cucumber (Gherkin) Full support* and restart your IDE. Aferwards, you should be able to navigate from your feature files to your steps by clicking on the Given/When/Then.

## Jenkins setup
* Sample Jenkins that runs the project can be found here: http://qalabs.ecx.local:8080/job/WebdriverIO/
* Also includes a sample Allure report for Jenkins: http://qalabs.ecx.local:8080/job/WebdriverIO/allure/#
* Zalenium reports of those tests: http://build-ecx-sitecore:4444/dashboard/


## Page Objects

[Page Objects](https://martinfowler.com/bliki/PageObject.html) are a really nifty abstraction for the UI elements that you interact with in your tests. You can create simple getter functions for each element that you need to access. And optionally you can create convenience methods like `loginWithCredentials()` that allow you to write more concise tests. 

##### `src/pages/LoginPage.ts`

```typescript
import Page from './page';

class LoginPage extends Page {
    /**
     * define elements
     */

    get usernameField() {
        return $('#username');
    }

    get passwordField() {
        return $('#password');
    }

    get loginButton() {
        return $('button[type="submit"]');
    }

    /**
     * define or overwrite page methods
     * Which browser manipulation commands - like for instance $("#someId).click() - are available see: http://webdriver.io/api.html
     */
    open() {
        super.open('/login');
    }

    getPageTitle() {
        return super.getPageTitle();
    }

    typeUsername(username: string) {
        this.usernameField.setValue(username);
    }

    typePassword(password: string) {
        this.passwordField.setValue(password);
    }

    clickOnLoginButton() {
        this.loginButton.click();
    }
}

export default new LoginPage();
```

##### `step_definitions/login_steps.ts` => pages are used in steps


```typescript
Given(/^I am on the login page$/, function () {
    loginPage.open();
    expect(loginPage.getPageTitle()).to.contain('Login Page');
});

When(/^I login with username "([^"]*)"$/, function (username) {
    loginPage.typeUsername(username);
    loginPage.typePassword(config.password);
    loginPage.clickOnLoginButton();
});

Then(/^I am located on the secure page$/, function () {
    expect(securePage.getPageTitle()).to.contain('Secure Area');
});

Then(/^I see the a message with the text "([^"]*)"$/, function (message) {
    expect(securePage.getSuccessMessage()).to.contain(message);
});
```

##### `features/login.feature` => features use the given/when/then from the steps


```typescript
@Smoke
Feature: Customer is able to login
Login
    Scenario: Customer is able to login with correct credentials
        Given I am on the login page
        When I login with username "tomsmith"
        Then I am located on the secure page
            And I see the a message with the text "You logged into a secure area!"
```

## Assertations
To verify if for instance an element has a given text or if an element is visible, etc. use: [chai](https://www.chaijs.com/guide/styles/#expect).
```typescript
//Example, but import expect before with import {expect} from 'chai';
expect("someText").to.contain(message);
```

## Zalenium 
Instead of running your UI tests in your native Browser you can also create a [Selenium Grid](https://www.seleniumhq.org/docs/07_selenium_grid.jsp) with Docker where the tests are run . In this chase each tests automatically will be recorded which makes it easier to track issues.

How to setup Zalenium see: https://opensource.zalando.com/zalenium/
 

## Reporters
This projects uses both the [spec-reporter](https://webdriver.io/docs/spec-reporter.html) and [allure-reporter](https://webdriver.io/docs/allure-reporter.html). The spec reporter offers great feedback when running from terminal and the allure reporter provides you with a nice report and screenshots that are automatically attached to failed tests. After running your the tests, run `npm run report` to generate the allure report. It's nifty. 

## Visual Page Comparison with Applitools 
You can send images of websites to Applitools where an image comparison is being executed with an AI.
Register at Applitools and you will get an API key which looks like: "nwy8wbybx8fuqNnE3L6WsHL0KLxw0T97r4Pg5103QCN283"

In case you want to run those tests firstly set the api key in the wdio config file: 
```typescript
applitoolsKey: 'your key',
```
If this key is not set the Image comparison tests will not trigger.
Once you have configured the Applitools key you can triggered those tests in the feature files by calling the step: Then I compare the image of site: "Some Page" as illustrated in the following code: 

```typescript
@Smoke
Feature: Customer is able to login
Login
    Scenario: Customer is able to login with correct credentials
        Given I am on the login page
        Then I compare the image of site: "Login Page"
        When I login with username "tomsmith"
        Then I am located on the secure page
            And I see the a message with the text "You logged into a secure area!"
            Then I compare the image of site: "Secure Page"
```

## Creating custom commands
You can create your custom commands. 
Firstly extend interface in wdio.d.ts

```typescript
declare module WebdriverIO {
    // adding command to `browser`
    interface Browser {
        browserCustomCommandExample: (arg) => void
    }
}
```
Afterwards, add in the wdio config the custom command in the before method 
```typescript
  before: function (capabilities, specs) {
       
        //Sample command
        function browserCustomCommandExample(text) {
            console.log(text);
        }

        browser.addCommand('browserCustomCommandExample', browserCustomCommandExample)
    },
```
Once this is done you are able to used this command directly in your browser object, for example: 
```typescript
   browser.browserCustomCommandExample('This is a sample custom webdriver.io command');
```
