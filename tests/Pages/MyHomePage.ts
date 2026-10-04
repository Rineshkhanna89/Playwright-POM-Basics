import {Page, Locator} from "@playwright/test";

export class MyHomePage {
    page: Page;
    leadsLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.leadsLink = this.page.getByRole("link", { name: "Leads" });
    }

    async clickLeadsLink() {
        await this.leadsLink.click();
    }
}
