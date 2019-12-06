import { config } from ".";

const {
    ClassicRunner,
    Eyes,
    Target
} = require('@applitools/eyes-webdriverio');
const {Configuration} = require('@applitools/eyes-selenium');

class ApplitoolsService {
    eyes: any;

    async takeScreenshot(name: string){
        const applitoolsConfig = config.applitools;

        if (applitoolsConfig.enabled === true) {
            let eyes: any;
            try{
                const runner = new ClassicRunner();

                eyes = new Eyes(runner);

                const configuration = new Configuration();
                configuration.setAppName('Sample Project');
                configuration.setTestName(name);

                eyes.setConfiguration(configuration);
                eyes.setApiKey(applitoolsConfig.key);

                await eyes.open(browser);

                const viewportSize = browser.getWindowSize();
                await eyes.check(name, Target.window(), viewportSize);

            }finally{
                await eyes.closeAsync();
            }
        }else{
            console.log('Image comparison has been skipped, to activate it configure it in the index.ts file');
        }
    }
}
export default new ApplitoolsService();