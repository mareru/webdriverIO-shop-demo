Cucumber Boilerplate
====================

***

Boilerplate project to run WebdriverIO tests with [Cucumber](https://cucumber.io/) which automates the [Heroku app](http://the-internet.herokuapp.com/)
## Requirements

- Node version 6 or higher

Although this project works fine with NPM we recommend to use Yarn (>= 1.0.0) instead,  due to its speed & solid dependency locking mechanism. To keep things simple we use yarn in this guide, but feel free to replace this with NPM if that is what you are using.

## Quick start

1. Install the dependencies (`yarn install`)

Now you are ready to write your own features.

# How to run the test

To run your tests just call on your local machine:

```sh
$ yarn run wdio
```

Start the tests with Zalenium (when Zalenium is already running):

```sh
$ yarn run wdio wdio.zalenium.conf.js
```

_please note_ The WDIO runner uses the configuration file `wdio.conf.js` by default.


## Features

- Simple setup
- Full integration with [WebdriverIO v4](http://v4.webdriver.io/)
- Easy integration with cloud services like [Sauce Labs](https://saucelabs.com/) or [Zalenium](https://opensource.zalando.com/zalenium/)

## Jenkins setup
* Sample Jenkins that runs the project can be found here: http://qalabs.ecx.local:8080/job/WebdriverIO/
* Zalenium reports of those tests: http://build-ecx-sitecore:4444/dashboard/

# How to write a test

Tests are written in [Gherkin syntax](https://cucumber.io/docs/reference)
that means that you write down what's supposed to happen in a real language. All test files are located in
`./src/features/*` and have the file ending `.feature`. You will already find some test files in that
directory. They should demonstrate, how tests could look like. Just create a new file and write your first
test.

__myFirstTest.feature__
```gherkin
Feature: Customer is able to login
Login
    Scenario: Customer is able to login with correct credentials
    Given I am on the login page
    When I login with username "tomsmith" and password "SuperSecretPassword!"
    Then I am located on the secure page
        And I see the a message with the text "You logged into a secure area!"

```

# Configurations

To configure your tests, checkout the [`wdio.conf.js`](https://github.com/webdriverio/cucumber-boilerplate/blob/master/wdio.conf.js) file in your test directory. It comes with a bunch of documented options you can choose from.

## Environment-specific configurations

You can setup multiple configs for specific environments. Let's say you want to have a different `baseUrl` for
your local and pre-deploy tests. Use the `wdio.conf.js` to set all general configs (like mochaOpts) that don't change.
They act as default values. For each different environment you can create a new config with the following name
scheme:

```txt
wdio.<ENVIRONMENT>.conf.js
```

Now you can create a specific config for your pre-deploy tests:

__wdio.STAGING.conf.js__
```js
var config = require('./wdio.conf.js').config;

config.baseUrl = 'http://staging.example.com'

exports.config = config;
``` 
Your environment-specific config file will get merged into the default config file and overwrites the values you set.
To run a test in a specific environment just add the desired configuration file as the first parameter:

```sh
$ yarn run wdio wdio.STAGING.conf.js
```

You can also run your tests on *Zalenium* (works like a Selenium Grid), just start the tests with:
```sh
$ yarn run wdio wdio.zalenium.conf.js
```
In case your Zalenium url is not _'localhost'_ change the value to the desired url:
__wdio.zalenium.conf.js__
```js
//will configure it to localhost:4444/wd/hub
wdioConfig.config.host= 'localhost';
```

# Running single feature
Sometimes it's useful to only execute a single feature file, to do so use the following command:

```sh
$ yarn run wdio -- --spec ./test/features/select.feature
```


# Using tags

If you want to run only specific tests you can mark your features with tags. These tags will be placed before each feature like so:

```gherkin
@Tag
Feature: ...
```

To run only the tests with specific tag(s) use the `--cucumberOpts.tagExpression=` parameter like so:

```sh
$ yarn run wdio -- --cucumberOpts.tagExpression='@Tag or @AnotherTag'
```

For more tag options please see the [Cucumber.js documentation](https://docs.cucumber.io/tag-expressions/)

# Pending test

If you have failing or unimplemented tests you can mark them as "Pending" so they will get skipped.

```gherkin
// skip whole feature file
@Pending
Feature: ...

// only skip a single scenario
@Pending
Scenario: ...
```
