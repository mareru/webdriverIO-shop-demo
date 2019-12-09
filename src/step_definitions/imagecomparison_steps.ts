import {Given, Then, When} from 'cucumber';
import applitoosService from '../config/applitools';

Then(/^I compare the image of site: (.*)$/, async (name: string) => {
    await applitoosService.takeScreenshot(name);
});