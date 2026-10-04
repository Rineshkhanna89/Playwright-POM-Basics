import { test } from '@playwright/test';
import { LoginPage } from '../Pages/LoginPage';
import { MyHomePage } from '../Pages/MyHomePage';
import { MyLeadsPage } from '../Pages/MyLeadsPage';
import { WelcomePage } from '../Pages/WelcomePage';
import { CreateLeadPage } from '../Pages/CreateLeadPage';

test("Create Lead Test", async ({ page }) => {
    const loginPageObj = new LoginPage(page);
    const welcomePageObj = new WelcomePage(page);
    const myHomePageObj = new MyHomePage(page);
    const myLeadsPageObj = new MyLeadsPage(page);
    const createLeadPageObj = new CreateLeadPage(page);

    // when you set the base url directly in playwright config.json we can use this code
    // await page.goto("/");
    await page.goto(process.env.BASE_URL!);
    // await page.goto("http://leaftaps.com/opentaps/control/main");
    //login Page
    await loginPageObj.login(process.env.LEAFTAPS_USERNAME!, process.env.LEAFTAPS_PASSWORD!);
    //Welcome Page
    await welcomePageObj.clickCrmsfaLink();
    //My Home Page
    await myHomePageObj.clickLeadsLink();
    // My Leads Page
    await myLeadsPageObj.clickCreateLeadLink();
    //Create Lead Page 
    await createLeadPageObj.createLead("TestLeaf", "Rinesh", "Sulendran");

    await page.waitForTimeout(5000);
});