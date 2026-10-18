import { test as base, expect } from "@playwright/test";

import { LoginPage } from "../Pages/LoginPage";
import { WelcomePage } from "../Pages/WelcomePage";
import { MyHomePage } from "../Pages/MyHomePage";
import { MyLeadsPage } from "../Pages/MyLeadsPage";

type MyFixtures = {
  myLeadsPage: MyLeadsPage;
};

export const test = base.extend<MyFixtures>({
  myLeadsPage: async ({ page }, use) => {
    const baseUrl = process.env.BASE_URL;
    const username = process.env.LEAFTAPS_USERNAME;
    const password = process.env.LEAFTAPS_PASSWORD;

    if (!baseUrl || !username || !password) {
      throw new Error(
        "Set BASE_URL, LEAFTAPS_USERNAME, and LEAFTAPS_PASSWORD before running this test."
      );
    }

    await page.goto(baseUrl);
    const loginPage = new LoginPage(page);
    await loginPage.login(username, password);

    const welcomePage = new WelcomePage(page);
    await welcomePage.clickCrmsfaLink();

    const myHomePage = new MyHomePage(page);
    await myHomePage.clickLeadsLink();

    await use(new MyLeadsPage(page));
  },
});

export { expect };