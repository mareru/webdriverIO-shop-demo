# WebdriverIO_v5_TypeScript

This is a project that uses WebdriverIO v5 and TypeScript v3.   
It is used for examples in tutorial on webdriverIO.   
It includes examples of the PageObject pattern and some practical examples for using WebdriverIO to build an automated test suite with Cucumber & Chai.

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
 
## Reporters
This projects uses both the [spec-reporter](https://webdriver.io/docs/spec-reporter.html) and [allure-reporter](https://webdriver.io/docs/allure-reporter.html). The spec reporter offers great feedback when running from terminal and the allure reporter provides you with a nice report and screenshots that are automatically attached to failed tests. After running your the tests, run `npm run report` to generate the allure report. It's nifty. 


## Visual Page Comparison with Applitools 
You can send images of websites to Applitools where an image comparison is being executed with an AI.
Register at Applitools and you will get an API key which looks like: "nwy8wbybx8fuqNnE3L6WsHL0KLxw0T97r4Pg5103QCN283"

In case you want to run those tests firstly set the api key and set the enabled to `true` in the index.ts file:
##### `src/config/applitools.ts` 
```typescript
  applitools: {
    enabled: true,
    key: 'add your key here'
  }
```
If this key is not set the Image comparison tests will not trigger.

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
Once this is done you are able to use this command directly in your browser object, for example: 
```typescript
   browser.browserCustomCommandExample('This is a sample custom webdriver.io command');
```
