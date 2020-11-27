# WebdriverIO_v6_TypeScript

This is a project that uses WebdriverIO v6 and TypeScript v4.   
It is used for examples in tutorial on webdriverIO.   
It includes examples of the PageObject pattern, and some practical examples for using WebdriverIO to build an automated test suite with Cucumber & Chai.

## Getting Started
```
npm install
npm run test:chrome
npm run test:chrome:headless
npm run test:firefox
npm run test:firefox:headless
```

## Running test by annotation in the feature files

Runs all feature file which contain `@Test`
``npm run test:chrome -- --cucumberOpts.tagExpression='@Test'``  
If on Windows, then use double quotes in case of having compound expressions, e.g.  
``npm run test:chrome -- --cucumberOpts.tagExpression="@Test and not @Pending"``

## Visual Studio Code project setup
In your [Visual Studio Code](https://code.visualstudio.com/) download the extension *Cucumber (Gherkin) Full support* and restart your IDE. Aferwards, you should be able to navigate from your feature files to your steps by clicking on the Given/When/Then.

## Page Objects

[Page Objects](https://martinfowler.com/bliki/PageObject.html) are a really nifty abstraction for the UI elements that you interact with in your tests. You can create simple getter functions for each element that you need to access. And optionally you can create convenience methods like `loginWithCredentials()` that allow you to write more concise tests. 
 
## Reporters
This projects uses both the [spec-reporter](https://webdriver.io/docs/spec-reporter.html) and [allure-reporter](https://webdriver.io/docs/allure-reporter.html). The spec reporter offers great feedback when running from terminal and the allure reporter provides you with a nice report and screenshots that are automatically attached to failed tests. After running your the tests, run `npm run report` to generate the allure report. It's nifty. 

## Note
Demo project developed and tested on Windows 10. 
