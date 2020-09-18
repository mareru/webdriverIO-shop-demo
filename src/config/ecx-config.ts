import Config = WebdriverIO.Config;

export interface IEcxConfig extends Config {
  cucumberOpts: {
    requireModule: any[],
    // <boolean> show full backtrace for errors
    backtrace: boolean,
    // <boolean< Treat ambiguous definitions as errors
    failAmbiguousDefinitions: boolean,
    // <boolean> invoke formatters without executing steps
    // dryRun: false,
    // <boolean> abort the run on first failure
    failFast: boolean,
    // <boolean> Enable this config to treat undefined definitions as
    // warnings
    ignoreUndefinedDefinitions: boolean,
    // <string[]> ("extension:module") require files with the given
    // EXTENSION after requiring MODULE (repeatable)
    name: string[],
    // <boolean> hide step definition snippets for pending steps
    snippets: boolean,
    // <boolean> hide source uris
    source: boolean,
    // <string[]> (name) specify the profile to use
    profile: string[],
    // <string[]> (file/dir) require files before executing features
    require: string[],
    // <string> specify a custom snippet syntax
    snippetSyntax?: string,
    // <boolean> fail if there are any undefined or pending steps
    strict: boolean,
    // <string> (expression) only execute the features or scenarios with
    // tags matching the expression, see
    // https://docs.cucumber.io/tag-expressions/
    tagExpression: string,
    // <boolean> add cucumber tags to feature or scenario name
    tagsInTitle: boolean,
    // <number> timeout for step definitions
    timeout: number
  };
  afterStep(uri: any, feature: any, scenario: {error: boolean}): void;
}